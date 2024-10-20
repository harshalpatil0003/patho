import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './views/App.jsx'
import { Login } from './views/login.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  // {
  //   path:'/register',
  //   element:<Register/>
  // },
  {
    path: '*',
    element: <h1>Page Not Found</h1>
  }])

root.render(
  <RouterProvider router={router} />
)