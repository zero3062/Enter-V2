import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import pages from './pages';

const Loading = <div>Loading...</div>;

const App = () => {
  return (
    <Suspense fallback={Loading}>
      <RouterProvider router={pages} />
    </Suspense>
  );
};

export default App;
