import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Context/UserContex";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(authContext);
  if (loading) {
    console.log("Loading");
    return <div>LOADING...........</div>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
