import { useRoutes, Navigate } from "react-router-dom";
import { Login } from "./Elements";

const Guest = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
};

export default Guest;
