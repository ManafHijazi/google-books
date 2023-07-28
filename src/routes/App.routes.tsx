import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomeLayout = lazy(() => import('../layouts/Home/Home.layout'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPageView'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
  },
]);
