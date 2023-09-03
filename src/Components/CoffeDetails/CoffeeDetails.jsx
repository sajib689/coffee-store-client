import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, coffeeName, coffeePhoto, coffeeDetails, coffeeChef,coffeeSupplier,coffeeTaste,coffeeCategory } = coffee;

  return (
    <div>

      <Navbar></Navbar>
    <div className="m-3">
    <Link to='/' className='backToHome flex'>
           <FaArrowAltCircleLeft className='cursor-pointer'></FaArrowAltCircleLeft><p className='ps-2'>Back To Home</p>
           </Link>
    </div>
      <div>
        <div className=" mx-auto w-2/3">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="w-1/2">
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
                  Supplier:
                </span>{" "}
                {coffeeSupplier}
              </p>
              <p style={{ color: "#5C5B5B" }}>
                <span style={{ color: "#1B1A1A" }} className="font-bold">
                Taste:
                </span>{" "}
                {coffeeTaste}
              </p>
              <p style={{ color: "#5C5B5B" }}>
                <span style={{ color: "#1B1A1A" }} className="font-bold">
                Category:
                </span>{" "}
                {coffeeCategory}
              </p>
              <p style={{ color: "#5C5B5B" }}>
                <span style={{ color: "#1B1A1A" }} className="font-bold">
                  Details:
                </span>{" "}
                {coffeeDetails}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CoffeeDetails;
