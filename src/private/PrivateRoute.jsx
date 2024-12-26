import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth();
   if (loading)
      return (
         <div className='mt-20 text-center'>
            <span className='loading loading-ring loading-lg'></span>
         </div>
      );
   return user ? children : <Navigate to='/auth/login' />;
};

export default PrivateRoute;
