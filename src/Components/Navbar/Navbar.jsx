import React from 'react';
import './Navbar.css'
import logo1 from '../../assets/images/more/logo1.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <Link to='/' className='flex justify-center items-center bg'>
            <img className='logo1' src={logo1} alt="logo1" />
            <p className='logo1-title'>Espresso Emporium</p>
        </Link>
    );
};

export default Navbar;