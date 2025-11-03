import { Outlet, Navigate } from "react-router-dom";
import { Home } from "../content/home/home";
import { Tours } from "../content/tours/Tours";
import { TourDetail } from "../content/tourDetail/TourDetail";
import { NotFound } from "../content/notFound/NotFound";
import { Layout } from "../components/layout/layout";
import { AboutYacht } from "../content/about/about";
import { Blog } from "../content/blog/blog";
import { BigFish } from "../content/bigFish/bigFish";
import { FAQ } from "../content/faq/faq";

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
        element: <AboutYacht />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/bigfish",
        element: <BigFish />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
];
