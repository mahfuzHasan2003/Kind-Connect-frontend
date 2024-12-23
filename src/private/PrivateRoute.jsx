import { useContext } from "react";
import { AuthContext } from "../provider/AuthDataProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   if (loading)
      return <span className='loading loading-ring loading-lg'></span>;
   return user ? children : <Navigate to='/auth/login' />;
};

export default PrivateRoute;
