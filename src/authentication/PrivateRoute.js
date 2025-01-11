import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider"; // Assuming you have an auth context

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Replace with your authentication logic

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
