import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)
   if(user) {
    return children
   }
   return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;