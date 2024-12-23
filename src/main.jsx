import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.jsx";
import AuthDataProvider from "./provider/AuthDataProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <AuthDataProvider>
            <RouterProvider router={routes}></RouterProvider>
         </AuthDataProvider>
      </QueryClientProvider>
   </StrictMode>
);
