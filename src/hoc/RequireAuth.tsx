import * as React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = true;

  if (!auth) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default RequireAuth;
