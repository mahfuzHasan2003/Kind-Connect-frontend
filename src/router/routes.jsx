import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LogIn from "../pages/Auth/LogIn";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/auth/login",
            element: <LogIn />,
         },
         {
            path: "/auth/register",
            element: <Register />,
         },
      ],
   },
]);

export default routes;
