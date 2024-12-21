import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
   return (
      <div className='w-11/12 max-w-8xl mx-auto'>
         <Toaster />
         <Navbar />
         <Outlet />
      </div>
   );
};

export default MainLayout;
