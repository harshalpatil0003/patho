import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './views/App.jsx'
import UserLogin  from './views/login.jsx'
import UserRegister from './views/register.jsx'
import UserPanel from './views/User_Panel.jsx'
import Not_Found from './views/404.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Userlogin',
    element: <UserLogin />
  },
  {
    path:'/UserRegister',
    element:<UserRegister/>
  },
  {
    path: '/UserPanel',
    element: <UserPanel/>
  },
  {
    path: '*',
    element: <Not_Found/>
  }
])

root.render(
  <RouterProvider router={router} />
)