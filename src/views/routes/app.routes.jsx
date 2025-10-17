import { Outlet, Navigate } from "react-router-dom";
import { Home } from "../content/home/home";
import { Tours } from "../content/tours/Tours";
import { TourDetail } from "../content/tourDetail/TourDetail";
import { NotFound } from "../content/notFound/NotFound";
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
        element: <NotFound />,
      },
      {
        path: "/",
        element: <Navigate to="/main" replace={true} />,
      },
      {
        path: "/main",
        element: <Home />,
      },
      {
        path: "/tours",
        element: <Tours />,
      },
      {
        path: "/tours/:id",
        element: <TourDetail />,
      },
      {
        path: "/yacht",
        element: <div>Страница яхты</div>,
      },
      {
        path: "/services",
        element: <div>Услуги</div>,
      },
      {
        path: "/blog",
        element: <div>Блог</div>,
      },
      {
        path: "/faq",
        element: <div>Вопросы</div>,
      },
      {
        path: "/contact",
        element: <div>Контакты</div>,
      },
    ],
  },
];
