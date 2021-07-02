import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { authInfoSuccess } from "./Authentication/ducks/auth.duck";
import firebase from "./firebase-config";
import "./index.css";
import routeConfiguration from "./routeConfiguration";
import Routes from "./Routes";

const store = configureStore({}, firebase);

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch(authInfoSuccess(user));
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes routes={routeConfiguration()} />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
