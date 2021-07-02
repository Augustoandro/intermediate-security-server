import { combineReducers } from "redux";
import * as globalReducers from "./Authentication/ducks";

const appReducer = combineReducers({ ...globalReducers });

export default appReducer;
