import React from "react";
import { Outlet } from "react-router-dom";
import Openpage from "./Openpage";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};
const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Openpage />;
};

export default ProtectedRoutes;
