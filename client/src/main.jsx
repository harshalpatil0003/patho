import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './views/App.jsx'
import UserLogin  from './views/login.jsx'
import UserRegister from './views/register.jsx'
import UserPanel from './views/User_Panel.jsx'
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
    element: <h1>Page Not Found</h1>
  }
])

root.render(
  <RouterProvider router={router} />
)