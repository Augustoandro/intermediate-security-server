import React from "react";
import DashBoard from "./AppBody/DashBoard/DashBoard";
import {
  LoginPage,
  ProfilePage,
  SignupPage,
} from "./Authentication/containers";

export default function routeConfiguration() {
  return [
    {
      name: "SignupPage",
      path: "/signup",
      component: (props) => <SignupPage {...props} />,
    },
    {
      name: "LoginPage",
      path: "/login",
      component: (props) => <LoginPage {...props} />,
    },
    {
      name: "ProfilePage",
      path: "/profile",
      component: (props) => <ProfilePage {...props} />,
      auth: true,
    },
    {
      name: "DashBoard",
      path: "/dashboard",
      component: (props) => <DashBoard {...props} />,
      auth: true,
    },
  ];
}
