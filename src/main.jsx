import React from 'react'
import ReactDOM from 'react-dom/client'
import Twitter from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Timeline from './components/timeline.jsx'
import Profile from './components/profile.jsx'
//import './index.css'


const router = createBrowserRouter([{
  path: "/",
  element: <Twitter />,
  children:[
    {
      path: "/",
      element: <Timeline />
    },
    {
      path: "/home",
      element: <div>home</div>
    }	,
    {
      path: "/explore",
      element: <div>Explore</div>
    }	,
    {
      path: "/notifications",
      element: <div>Notifications</div>
    }	,
    {
      path: "/messages",
      element: <div>Messages</div>
    }	,
    {
      path: "/bookmarks",
      element: <div>Bookmarks</div>
    },
    {
      path: "/lists",
      element: <div>Lists</div>
    }	,
    {
      path: "/profile",
      element: <Profile />
    }
    	,
    {
      path: "/More",
      element: <div>More</div>
    }] }])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
