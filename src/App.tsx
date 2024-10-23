import React, { Suspense } from 'react';
import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// Carica dinamicamente il componente Home usando React.lazy
const Home = React.lazy(() => import('./pages/Home'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          // Usa Suspense per il caricamento asyncrono del componente
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
