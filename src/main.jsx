import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffe from './Components/AddCoffe/AddCoffe';
import UpdateCoffe from './Components/UpdateCoffe/UpdateCoffe';
import CoffeeDetails from './Components/CoffeDetails/CoffeeDetails.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import AuthProviders from './Providers/AuthProviders/AuthProviders.jsx'
import CheckOut from './Components/CheckOut/CheckOut';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import Orders from './Components/Orders/Orders';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('http://localhost:3000/coffees')
  },
  {
    path: '/addCoffe',
    element: <AddCoffe></AddCoffe>
  },
  {
    path: '/updateCoffe/:id',
    element: <UpdateCoffe></UpdateCoffe>,
    loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
  },
  {
    path: '/coffeeDetails/:id',
    element: <PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>,
    loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/checkout/:id',
    element: <CheckOut></CheckOut>,
    loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
  },
  {
    path: '/orders',
    element: <Orders></Orders>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router}></RouterProvider>
   </AuthProviders>
  </React.StrictMode>,
)
