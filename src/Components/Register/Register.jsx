import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import cup from '../../assets/images/cups/c.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import Swal from "sweetalert2";
const Register = () => {
  const {signWithForm} = useContext(AuthContext)
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target 
    // const name = form.name.value 
    const email = form.email.value 
    const password = form.password.value
    signWithForm(email, password)
    .then(result => {
      const user = result.user 
      if(user?.email) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Registration Success',
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
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200 container mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-2/3">
            <img className="rounded-lg" src={cup} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                name='name'
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name='email'
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name='password'
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
