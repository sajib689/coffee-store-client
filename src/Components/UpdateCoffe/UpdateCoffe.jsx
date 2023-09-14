import "../AddCoffe/AddCoffe.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLoaderData } from "react-router-dom";
const UpdateCoffe = () => {
  const coffee = useLoaderData();
  const {
    _id,
    coffeeName,
    coffeeSupplier,
    coffeeCategory,
    coffeeChef,
    coffeeTaste,
    coffeeDetails,
    coffeePhoto,
  } = coffee;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const coffeeSupplier = form.coffeeSupplier.value;
    const coffeeCategory = form.coffeeCategory.value;
    const coffeeChef = form.coffeeChef.value;
    const coffeeTaste = form.coffeeTaste.value;
    const coffeeDetails = form.coffeeDetails.value;
    const coffeePhoto = form.coffeePhoto.value;
    const coffee = {
      coffeeName,
      coffeeSupplier,
      coffeeCategory,
      coffeeChef,
      coffeeTaste,
      coffeeDetails,
      coffeePhoto,
    };
    fetch(`https://coffe-store-server-kappa.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="container mx-auto p-10 h-screen">
      <Link to="/" className="backToHome flex">
        <FaArrowAltCircleLeft className="cursor-pointer"></FaArrowAltCircleLeft>
        <p className="ps-2">Back To Home</p>
      </Link>
      <div className="main-container container mx-auto p-10">
        <div className="description">
          <h1>Update Existing Coffee Details</h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="flex">
            <div className="w-1/2 flex flex-col p-5">
              <label className="input-title">Name</label>
              <input
                defaultValue={coffeeName}
                name="coffeeName"
                type="text"
                className="input input-bordered w-full mt-2"
              />
              <label className="input-title">Supplier</label>
              <input
                name="coffeeSupplier"
                type="text"
                defaultValue={coffeeSupplier}
                className="input input-bordered w-full mt-2"
              />
              <label className="input-title">Category</label>
              <input
                name="coffeeCategory"
                type="text"
                defaultValue={coffeeCategory}
                className="input input-bordered w-full mt-2"
              />
            </div>
            <div className="w-1/2 flex flex-col p-5">
              <label className="input-title">Chef</label>
              <input
                name="coffeeChef"
                type="text"
                defaultValue={coffeeChef}
                className="input input-bordered w-full mt-2"
              />
              <label className="input-title">Taste</label>
              <input
                name="coffeeTaste"
                type="text"
                defaultValue={coffeeTaste}
                className="input input-bordered w-full mt-2"
              />
              <label className="input-title">Details</label>
              <input
                name="coffeeDetails"
                type="text"
                defaultValue={coffeeDetails}
                className="input input-bordered w-full mt-2"
              />
            </div>
          </div>
          <div className="p-5">
            <label className="input-title">Photo URL</label>
            <input
              name="coffeePhoto"
              type="text"
              defaultValue={coffeePhoto}
              className="input input-bordered w-full  mt-2"
            />
          </div>
          <div className="p-5">
            <input
              type="submit"
              className="btn input input-bordered w-full  mt-2"
              value="Update Coffee Details"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffe;
