/* eslint-disable react-refresh/only-export-components */
import Layout from "components/layout";
import Spinner from "components/loader";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

const SignUp = lazy(() => import("pages/SignUp"));
const SignIn = lazy(() => import("pages/SignIn"));

const NotFound = lazy(() => import("pages/notfound"));
const router = () => {
  return createBrowserRouter([
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Layout />,
      loader: Spinner,
      children: PrivateRoutes(),
    },
  ]);
};

export default router;
