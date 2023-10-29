import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element, isLoggedIn }) => {
  const location = useLocation().pathname
  console.log(location);
  if (isLoggedIn && (location === '/signin' || location === '/signup')) {
    return <Navigate to="/" replace />
  } else if (!isLoggedIn && (location === '/signin' || location === '/signup')) {
    return element;
  } else if (isLoggedIn) {
    return element;
  } else {
    return <Navigate to="/" replace />
  }



};
export default ProtectedRoute;
