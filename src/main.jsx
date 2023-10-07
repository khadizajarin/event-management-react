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

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
