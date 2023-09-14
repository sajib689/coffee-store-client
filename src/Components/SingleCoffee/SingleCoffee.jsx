import { useState } from "react";
import "./SingleCoffee.css";
import Swal from "sweetalert2";
import icon1 from "../../assets/images/special_icons/Frame.svg";
import icon2 from "../../assets/images/special_icons/Frame (1).svg";
import icon3 from "../../assets/images/special_icons/delete 1.svg";
import { Link } from "react-router-dom";
const SingleCoffee = ({ coffee }) => {
  const [coffees, setCoffees] = useState(coffee);

  const { _id, coffeeName, coffeePhoto, coffeeDetails, coffeeChef } = coffees;
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`https://coffe-store-server-kappa.vercel.app/coffees/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
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
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
          });
          setCoffees(data);
        }
      });
  };
  return (
    <div className="p-5 mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="rounded" src={coffeePhoto} alt="Album" />
        </figure>
        <div className="card-body">
          <p style={{ color: "#5C5B5B" }}>
            <span style={{ color: "#1B1A1A" }} className="font-bold">
              Name:
            </span>{" "}
            {coffeeName}
          </p>
          <p style={{ color: "#5C5B5B" }}>
            <span style={{ color: "#1B1A1A" }} className="font-bold">
              Chef:
            </span>{" "}
            {coffeeChef}
          </p>
          <p style={{ color: "#5C5B5B" }}>
            <span style={{ color: "#1B1A1A" }} className="font-bold">
              Price:
            </span>{" "}
            890Tk
          </p>

          <div className="card-actions">
            <Link to={`/coffeeDetails/${_id}`}>
              <img className="icon" src={icon1} alt="" />
            </Link>
            <Link to={`/updateCoffe/${_id}`}>
              <img className="icon2" src={icon2} alt="" />
            </Link>
            <Link onClick={() => handleDelete(`${_id}`)}>
              {" "}
              <img className="icon3" src={icon3} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
