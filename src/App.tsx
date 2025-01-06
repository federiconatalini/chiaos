import { ReactElement } from 'react';
import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import { AuthProvider } from './utils/context/AuthContext';
import Topbar from './components/Topbar';

// Layout principale con la Topbar
function Layout(): ReactElement {
  return (
    <div className="w-full h-full flex flex-col">
      <Topbar />
      <main className="pt-16 flex-1">
        <Outlet /> {/* Qui verranno renderizzate le pagine */}
      </main>
    </div>
  );
}

// Router con il Layout
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </>
  )
);

export default function App(): ReactElement {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
