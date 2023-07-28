import './index.scss';

import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import MiddlewareHelper from './helpers/Middleware.helper';
import { router } from './routes';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
      <MiddlewareHelper />
    </Suspense>
  </StrictMode>,
);
