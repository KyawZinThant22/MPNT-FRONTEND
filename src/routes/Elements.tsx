import { Suspense, Component, ElementType, lazy } from "react";

import Loading from "../pages/guest/Loading";

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

//auth
export const Login = Loadable(lazy(() => import("../pages/guest/Login")));

//home

export const Home = Loadable(lazy(() => import("../pages/admin/Home")));
