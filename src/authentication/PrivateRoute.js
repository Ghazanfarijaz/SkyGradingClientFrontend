import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or placeholder
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;