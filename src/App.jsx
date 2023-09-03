import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import SingleCoffee from './Components/SingleCoffee/SingleCoffee'
import vector from '../src/assets/images/special_icons/Vector.png'
import Footer from './Components/Footer/Footer'
import Review from './Components/Review/Review'
function App() {
  const coffees = useLoaderData()
  const {_id} = coffees
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Review></Review>
     <div>
      <div className='description'>
      <p>--- Sip & Savor ---</p>
      <h1>Our Popular Products</h1>
      <Link to='/addCoffe' className='btn1'>Add Coffee</Link>
      </div>
     <div className='grid md:grid-cols-2 gap-4 mt-2'>
      {
        coffees.map(coffee => <SingleCoffee key={coffee._id} coffee={coffee}></SingleCoffee>)
      }
      </div>
      <Footer></Footer>
     </div>
    </>
  )
}

export default App
