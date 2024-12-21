import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.jsx";
import AuthDataProvider from "./provider/AuthDataProvider.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <AuthDataProvider>
         <RouterProvider router={routes}></RouterProvider>
      </AuthDataProvider>
   </StrictMode>
);
