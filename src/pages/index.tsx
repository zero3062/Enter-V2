import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Main = lazy(() => import('./main'));

const pages = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [],
    errorElement: <div>Not Found 404</div>,
  },
]);

export default pages;
