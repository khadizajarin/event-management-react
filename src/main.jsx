import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './Home/Home';
import Services from './Services/Services';
import About from './About/About';
import ErrorRoute from './ErrorRoute/ErrorRoute';
import ServiceDetails from './Services/ServiceDetails';
import Register from './Forms/Register';
import Login from './Forms/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorRoute></ErrorRoute>,
    children: [
      {
        path: '/',
        element : <Home></Home>
      },
      {
        path:'/services',
        element:<Services></Services>,
        loader: () => fetch('/event.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/events/:id',
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () => fetch('/event.json')
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path:'/login',
        element:<Login></Login>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
