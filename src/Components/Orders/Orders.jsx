import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import OrderCard from "../OrderCard/OrderCard";
import { useNavigate } from "react-router-dom";
const backgroundStyle = {
    backgroundImage:
      'url("https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    /* Additional styles if needed */
  };
const Orders = () => {
    const { user,logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
      fetch(`http://localhost:3000/orders?email=${user?.email}`,{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('access_token')} `
        }
      })
        .then((res) => res.json())
        .then((data) => {
            if(!data.error) {
                setOrders(data)
            }
            else{
                // navigate('/')
                logOut()
            }
        });
    }, [user?.email,navigate,logOut]);
    const handleDelete = (_id) => {
      fetch(`http://localhost:3000/orders/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
            const remaining = orders.filter(order => order._id !== _id)
            setOrders(remaining)
          }
        });
    };
    const handleConfirm = _id => {
      fetch(`http://localhost:3000/orders/${_id}`,{
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
          const remaining = orders.filter(order => order._id !== _id)
          const updated = orders.find(order => order._id === _id)
          updated.status= 'confirm'
          const newOrders = [updated, ...remaining]
          setOrders(newOrders)
        }
      })
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto container">
      <div className="hero h-[300px] " style={backgroundStyle}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Cart Details</h1>
            <p className="text-red-400 font-[400]">Home - Product Details</p>
          </div>
        </div>
      </div>
      {/* Table */}

      <div className="overflow-x-auto mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Delete</label>
              </th>
              <th>Name</th>
              <th>Coffee Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Taste</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((order) => (
              <OrderCard key={order._id} 
              order={order}
              handleDelete={handleDelete}
              handleConfirm={handleConfirm}></OrderCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            <Footer></Footer>
        </div>
    );
};

export default Orders;