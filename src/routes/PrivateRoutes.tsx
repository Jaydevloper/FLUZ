import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("modules/home/info"));
const ProfileInfo = lazy(() => import("modules/profile/pages/info"));
const ProfileSettings = lazy(() => import("modules/profile/pages/settings"));
const ViewList = lazy(() => import("modules/home/view"));
const TalentList = lazy(() => import("modules/talent/pages/talent-list"));
const TalentDetail = lazy(() => import("modules/talent/pages/view"));
const PaymentHistory = lazy(() => import("modules/payment/pages/history"));
const SavedJobs = lazy(() => import("modules/jobs/pages/saved"));
const CreateJobs = lazy(() => import("modules/jobs/pages/create"));
const Chat = lazy(() => import("modules/chat/pages/list"));
export const PrivateRoutes = () => {
  const persistRoot = JSON.parse(localStorage.getItem("persist") as string);

  if (persistRoot?.token && persistRoot?.role && persistRoot?.isLogin)
    return data;
  else {
    return [
      {
        index: true,
        element: <Navigate to={"/sign-in"} />,
      },
    ];
  }
};

const data = [
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
        access: ["talent"],
      },

      {
        path: "create/",
        element: <CreateJobs />,
        access: ["customer"],
      },
    ],
  },
  {
    path: "/profile/",
    children: [
      {
        index: true,
        element: <ProfileInfo />,
        access: ["customer", "talent"],
      },
      {
        path: "settings",
        element: <ProfileSettings />,
        access: ["customer", "talent"],
      },
    ],
  },
  {
    path: "/payment/",
    children: [
      {
        path: "history/",
        element: <PaymentHistory />,
        access: ["customer", "talent"],
      },
    ],
  },
  {
    path: "/talents",
    children: [
      {
        index: true,
        element: <TalentList />,
        access: ["customer", "talent"],
      },
      {
        path: "view/:id",
        element: <TalentDetail />,
        access: ["customer", "talent"],
      },
    ],
  },
  {
    path: "/message",
    children: [
      {
        index: true,
        element: <Chat />,
      },
    ],
  },
];
