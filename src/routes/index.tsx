import Layout from "components/layout";
import Spinner from "components/loader";
import MyJobs from "modules/jobs/pages/my-jobs";
import SavedJobs from "modules/jobs/pages/saved";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("modules/home"));
const ProfileInfo = lazy(() => import("modules/profile/pages/info"));
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
      errorElement: <div>Error</div>,
      element: <Layout />,
      loader: Spinner,
      children: [
        {
          index: true,
          element: <Home />,
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
          path: "/profile",
          children: [
            {
              index: true,
              element: <ProfileInfo />,
            },
          ],
        },
      ],
    },
  ]);
};

export default router;
