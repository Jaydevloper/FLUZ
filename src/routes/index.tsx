/* eslint-disable react-refresh/only-export-components */
import Layout from "components/layout";
import Spinner from "components/loader";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("modules/home/info"));
const ProfileInfo = lazy(() => import("modules/profile/pages/info"));
const ProfileSettings = lazy(() => import("modules/profile/pages/settings"));
const ViewList = lazy(() => import("modules/home/view"));
const TalentList = lazy(() => import("modules/talent/pages/talent-list"));
const TalentDetail = lazy(() => import("modules/talent/pages/view"));
const PaymentHistory = lazy(() => import("modules/payment/pages/history"));
const SavedJobs = lazy(() => import("modules/jobs/pages/saved"));
const MyJobs = lazy(() => import("modules/jobs/pages/my-jobs"));
const NotFound = lazy(() => import("pages/notfound"));
const router = () => {
  return createBrowserRouter([
    {
      path: "/sign-up",
      element: <div>SignUp</div>,
    },
    {
      path: "/sign-in",
      element: <div>SignUp</div>,
    },
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Layout />,
      loader: Spinner,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "detail/:id",
          element: <ViewList />,
        },
        {
          path: "/jobs/",
          children: [
            {
              path: "saved/:id",
              element: <SavedJobs />,
            },
            {
              path: "my-jobs/:id",
              element: <MyJobs />,
            },
          ],
        },
        {
          path: "/profile/",
          children: [
            {
              index: true,
              element: <ProfileInfo />,
            },
            {
              path: "settings",
              element: <ProfileSettings />,
            },
          ],
        },
        {
          path: "/payment/",
          children: [
            {
              path: "history/",
              element: <PaymentHistory />,
            },
          ],
        },
        {
          path: "/talents",
          children: [
            {
              index: true,
              element: <TalentList />,
            },
            {
              path: "view/:id",
              element: <TalentDetail />,
            },
          ],
        },
      ],
    },
  ]);
};

export default router;
