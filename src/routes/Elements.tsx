import { Suspense, Component, ElementType, lazy } from "react";

import Loading from "../pages/guest/Loading";

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

export const Login = Loadable(lazy(() => import("../pages/guest/Login")));
