import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main.jsx';
import Home from './Component/Home/Home.jsx';
import LogIn from './Component/LogIn/LogIn.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProviders from './Component/providers/AuthProviders.jsx';
import PrivateRouter from './Component/PrivateRouter/PrivateRouter.jsx';
import Order from './Component/PrivateRouter/Order.jsx';
import Profile from './Component/PrivateRouter/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: ([
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/order',
        element:<PrivateRouter><Order></Order></PrivateRouter>
      },
      {
        path:'/profile',
        element:<PrivateRouter><Profile></Profile></PrivateRouter>
      }
      ,
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ])
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
      <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>,
)
