import { lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES_LIST } from './routesList';

const HomeLayout = lazy(() => import('../layouts/Home/Home.layout'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPageView'));
const BooksCataloguePage = lazy(() => import('../pages/BooksCataloguePage/BooksCataloguePage'));
const BooksDetailsPage = lazy(() => import('../pages/BooksDetailsPage/BooksDetailsPage'));

export const router = createBrowserRouter([
  {
    element: (
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES_LIST.BOOKSCATALOGUEPAGE.INDEX,
        element: <BooksCataloguePage />,
      },
      {
        path: ROUTES_LIST.BOOKDETAILSPAGE.INDEX,
        element: <BooksDetailsPage />,
      },
    ],
  },
]);
