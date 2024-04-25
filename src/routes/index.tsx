import Layout from "components/layout";
import Spinner from "components/loader";
import MyJobs from "modules/jobs/pages/my-jobs";
import SavedJobs from "modules/jobs/pages/saved";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("modules/home"));
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
              loader: Spinner,
            },
            {
              path: "my-jobs/:id",
              element: <MyJobs />,
              loader: Spinner,
            },
          ],
        },
      ],
    },
  ]);
};

export default router;
