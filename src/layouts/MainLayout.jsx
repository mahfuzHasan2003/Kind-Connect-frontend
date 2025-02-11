import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 z-50 inset-x-0">
        <Navbar />
      </div>
      <div className="mt-10 md:mt-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
