import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LogIn from "../pages/Auth/LogIn";
import Register from "../pages/Auth/Register";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
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
