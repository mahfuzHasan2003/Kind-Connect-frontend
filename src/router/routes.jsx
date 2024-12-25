import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LogIn from "../pages/Auth/LogIn";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";
import AllVolNeedPosts from "../pages/AllVolNeedPosts/AllVolNeedPosts";
import PrivateRoute from "../private/PrivateRoute";
import VolNeedPostDetails from "../pages/VolNeedPostDetails/VolNeedPostDetails";
import AddVolNeedPost from "../pages/AddVolNeedPost/AddVolNeedPost";
import MyVolNeedPost from "../pages/MyVolNeedPost/MyVolNeedPost";
import MyVolReqPost from "../pages/MyVolReqPost/MyVolReqPost";
import ErrorPage from "../pages/Error/ErrorPage";

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
         {
            path: "/all-volunteer-need-posts",
            element: <AllVolNeedPosts />,
         },
         {
            path: "/volunteer-need-post-details/:id",
            element: (
               <PrivateRoute>
                  <VolNeedPostDetails />
               </PrivateRoute>
            ),
         },
         {
            path: "/add-volunteer-need-post",
            element: (
               <PrivateRoute>
                  <AddVolNeedPost />
               </PrivateRoute>
            ),
         },
         {
            path: "/my-volunteer-need-posts",
            element: (
               <PrivateRoute>
                  <MyVolNeedPost />
               </PrivateRoute>
            ),
         },
         {
            path: "/my-volunteer-request-posts",
            element: (
               <PrivateRoute>
                  <MyVolReqPost />
               </PrivateRoute>
            ),
         },
      ],
   },
   {
      path: "*",
      element: <ErrorPage />,
   },
]);

export default routes;
