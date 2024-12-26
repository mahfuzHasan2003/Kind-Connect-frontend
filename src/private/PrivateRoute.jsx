import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();
   if (loading)
      return <span className='loading loading-ring loading-lg'></span>;
   return user ? children : <Navigate to='/auth/login' />;
};

export default PrivateRoute;
