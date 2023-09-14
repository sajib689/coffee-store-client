import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSign } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleSign()
    .then(result => {
      const user = result.user
      const loggedUser = {
        email: user.email,
      }
      fetch('http://localhost:3000/jwt',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(loggedUser)
      })
      .then( res => res.json())
      .then( data => {
        localStorage.setItem('access_token', data.token);
        navigate(from, { replace: true });
      })
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
  };
  return (
    <div className="mb-2">
      <div className="divider">OR</div>
      <div className="flex items-center justify-center">
        <button onClick={handleGoogle} className=" btn-circle text-white text-center">
          <img
            src="https://colors.dopely.top/inside-colors/wp-content/uploads/2021/06/dopely_google-symbol.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
