import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import WorksPage from './pages/WorksPage';
import LoginPage from './pages/Authorization/LoginPage';
import AdminPanel from './pages/AdminPanel';

// Роутинг сайта
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/products",
    element: <ProductsPage/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/services",
    element: <ServicesPage/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/works",
    element: <WorksPage/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/admin",
    element: <LoginPage/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/admin_panel",
    element: <AdminPanel/>,
    errorElement:<ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);

