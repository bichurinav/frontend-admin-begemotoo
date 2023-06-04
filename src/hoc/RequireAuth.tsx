import { Navigate } from "react-router-dom";

type Child = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: Child) => {
  const auth = false;

  console.log(children);

  if (!auth) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default RequireAuth;
