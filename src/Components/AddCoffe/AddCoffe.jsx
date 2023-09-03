import React from 'react';
import './AddCoffe.css'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const AddCoffe = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target 
        const coffeeName = form.coffeeName.value 
        const coffeeSupplier = form.coffeeSupplier.value 
        const coffeeCategory = form.coffeeCategory.value
        const coffeeChef = form.coffeeChef.value
        const coffeeTaste = form.coffeeTaste.value 
        const coffeeDetails = form.coffeeDetails.value
        const coffeePhoto = form.coffeePhoto.value
        const coffee = {coffeeName,coffeeSupplier,coffeeCategory,coffeeChef,coffeeTaste,coffeeDetails,coffeePhoto}
        fetch('http://localhost:3000/coffees',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(coffee)
        })
        .then( res => res.json())
        .then( data => {
            
            if(data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
            form.reset()
        })
    }
    return (
        <div className='container mx-auto p-10 h-screen'>
            <ToastContainer/>
           <Link to='/' className='backToHome flex'>
           <FaArrowAltCircleLeft className='cursor-pointer'></FaArrowAltCircleLeft><p className='ps-2'>Back To Home</p>
           </Link>
           <div className="main-container container mx-auto p-10">
            <div className="description">
                <h1>Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
           <form onSubmit={handleSubmit}>
           <div className='flex'>
           <div className="w-1/2 flex flex-col p-5">
                <label className='input-title'>Name</label>
            <input name='coffeeName' type="text" placeholder="Enter coffee name" className="input input-bordered w-full mt-2" />
                <label className='input-title'>Supplier</label>
            <input name='coffeeSupplier' type="text" placeholder="Enter coffee Supplier" className="input input-bordered w-full mt-2" />
                <label className='input-title'>Category</label>
            <input name='coffeeCategory' type="text" placeholder="Enter coffee category" className="input input-bordered w-full mt-2" />
            </div>
           <div className="w-1/2 flex flex-col p-5">
                <label className='input-title'>Chef</label>
            <input name='coffeeChef' type="text" placeholder="Enter coffee chef" className="input input-bordered w-full mt-2" />
                <label className='input-title'>Taste</label>
            <input name='coffeeTaste' type="text" placeholder="Enter coffee taste" className="input input-bordered w-full mt-2" />
                <label className='input-title'>Details</label>
            <input name='coffeeDetails' type="text" placeholder="Enter coffee details" className="input input-bordered w-full mt-2" />
            </div>
           </div>
           <div className='p-5'>
           <label className='input-title'>Photo URL</label>
           <input name='coffeePhoto' type="text" placeholder="Enter coffee photo URL" className="input input-bordered w-full  mt-2" />
           </div>
           <div className='p-5'>
           <input type="submit"  className="btn input input-bordered w-full  mt-2" value='Add Coffee'/>
           </div>
           </form>
           </div>
        </div>
    );
};

export default AddCoffe;