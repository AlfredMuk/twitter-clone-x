import React from 'react'
import ReactDOM from 'react-dom/client'
import Twitter from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Timeline from './components/timeline.jsx'
import Profile from './components/profile.jsx'
//import './index.css'


const router = createBrowserRouter([{
  "path": "/",
  element: <Twitter />,
  children:[
    {
      path: "/",
      element: <Timeline />
    },{
      path: "/:profile",
      element: <Profile />
    }] }])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
