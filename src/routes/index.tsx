import { createBrowserRouter } from "react-router-dom";

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
      element: <div>Header</div>,
      loader: () => <div>Loading....</div>,
      children: [
        {
          index: true,
          element: <div>Home</div>,
        },
      ],
    },
  ]);
};

export default router;
