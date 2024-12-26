import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
   baseURL: import.meta.env.VITE_server_root,
   withCredentials: true,
});

const useAxiosSecure = () => {
   const { logOut } = useAuth();
   const navigate = useNavigate();
   useEffect(() => {
      axiosSecure.interceptors.response.use(
         (res) => {
            return res;
         },
         async (error) => {
            console.error(
               `Error: ${error.response.status} - ${error.response.statusText}`
            );
            if (
               error.response.status === 401 ||
               error.response.status === 403
            ) {
               await logOut().then(() => navigate("/auth/login"));
            }
         }
      );
   }, [logOut, navigate]);
   // cleanup return outside the useEffect function
   return axiosSecure;
};

export default useAxiosSecure;
