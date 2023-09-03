import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffe from './Components/AddCoffe/AddCoffe';
import UpdateCoffe from './Components/UpdateCoffe/UpdateCoffe';
import CoffeeDetails from './Components/CoffeDetails/CoffeeDetails.jsx'
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
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
