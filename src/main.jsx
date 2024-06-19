import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Root from "./Components/Root/Root.jsx"
import ErrorPage from './Components/Error-Page/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/DashBoard/Dashboard.jsx';
import Trailers from './Components/SingleMovie/Trailers.jsx'
import Login from './Components/SingleMovie/Login.jsx'
import Signup from './Components/SingleMovie/Signup.jsx'
import Watchguide from './Components/Movies/Watchguide.jsx';
import FanFavorites from './Components/Movies/FanFavorites.jsx';
import MostPopular from './Components/Movies/MostPopular.jsx';
import MovieRelease from './Components/Movies/MovieRelease.jsx';
import Review from './Components/SingleMovie/Review.jsx';
import Contact from './Components/SingleMovie/Contact.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/reviews',
        element:<Review/>
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/trailers',
        element: <Trailers />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element:<Signup/>
      },
      {
        path:'/menu/watchguide',
        element:<Watchguide/>
      },
      {
        path:'/menu/fanfavorites',
        element:<FanFavorites/>
      },
      {
        path:'/menu/mostpopular',
        element:<MostPopular/>
      },
      {
        path:'/menu/movierelease',
        element:<MovieRelease/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
      

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
