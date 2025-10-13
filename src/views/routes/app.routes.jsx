import { Outlet, Navigate } from "react-router-dom";
import { Home } from "../content/home/home";
import { Layout } from "../components/layout/layout";

export const appRoutesDefinition = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "*",
        element: <div>404 — Not Found</div>,
      },
      {
        path: "/",
        element: <Navigate to="/main" replace={true} />,
      },
      {
        path: "/main",
        element: <Home />,
      },
    ],
  },
];
