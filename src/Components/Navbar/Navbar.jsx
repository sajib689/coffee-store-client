import "./Navbar.css";
import logo1 from "../../assets/images/more/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
    .then(() => {
      localStorage.removeItem('access_token')
      navigate('/')
    })
  }
  return (
    <div className="">
      <div className="container mx-auto navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Item 1</Link>
              </li>
              <li>
                <Link>Parent</Link>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
            <div className="flex">
            <img className="w-7" src={logo1} alt="" />
            <Link to='/' className=" normal-case text-xl">Coffe World</Link>

            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Details</summary>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              {
                user ? 
                <Link to='/orders'>My Orders</Link>
                :
                <Link className="hidden" to='/orders'>My Orders</Link>
              }
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? 
            <Link onClick={handleLogOut} className="">LogOut</Link>
            :
            <Link to='/login' className="">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
