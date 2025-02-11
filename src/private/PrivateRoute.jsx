import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { state } = useLocation();
  if (loading)
    return (
      <div className="mt-20 text-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  return user ? (
    children
  ) : (
    <Navigate to="/auth/login" state={{ redirectTo: state?.redirectTo }} />
  );
};

export default PrivateRoute;
