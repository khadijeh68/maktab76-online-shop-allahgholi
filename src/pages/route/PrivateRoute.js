import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isLoggedIn = JSON.parse(localStorage.getItem("IS_LOGGGED_IN"));
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
