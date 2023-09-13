import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const coffee = useLoaderData();
  const { _id, coffeeName, coffeeTaste } = coffee;

  const handleOrder = e => {
    e.preventDefault();
    const form = e.target 
    const name = form.name.value 
    const coffeeName = form.coffeeName.value 
    const number = form.number.value
    const email = form.email.value
    const address = form.address.value
    const taste = form.taste.value
    const quantity = form.quantity.value
    const order = {name, coffeeName, number,email, address, taste, quantity}
    fetch(`http://localhost:3000/orders`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order),
    })
    .then( res => res.json())
    .then( data => {
        console.log(data)
        if(data.acknowledged === true) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Order Success',
              showConfirmButton: false,
              timer: 1500
            })
          }
    })
    .catch(error => {
        if (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`
          })
        }
      })
    form.reset()
  }
  return (
    <div className="bg-base-200">
      <Navbar></Navbar>
      <div className="mb-10">
        <div>
          <h1 className="text-5xl text-center mt-20">Order Now</h1>
        </div>
        <form onSubmit={handleOrder} className="w-[700px] mx-auto">
          <div className=" mt-20 grid grid-cols-2 gap-3">
            <input
              name="name"
              type="text"
              required
              placeholder="Type your name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="coffeeName"
              type="text"
              readOnly
              defaultValue={coffeeName}
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="number"
              type="number"
              required
              placeholder="Type your number"
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              readOnly
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="address"
              type="text"
              required
              placeholder="Type your address"
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="taste"
              type="text"
              defaultValue={coffeeTaste}
              className=" input input-bordered w-full max-w-xs"
            />
            <input
              name="quantity"
              type="number"
              placeholder="Quantity"
              className=" input input-bordered w-full max-w-xs"
            />
          </div>
          <input
            type="submit"
            value="Buy Now"
            className="btn btn-primary mt-4"
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CheckOut;
