import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthDataProvider";
import TableRowToShowData from "../../components/TableRowToShowData";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyVolReqPost = () => {
   const { pathname } = useLocation();
   const { user } = useContext(AuthContext);
   const [userVolReqPosts, setUserVolReqPosts] = useState([]);
   const fetchData = async () => {
      const { data } = await axios.get(
         `${import.meta.env.VITE_server_root}/to-be-vol-req?email=${user.email}`
      );
      setUserVolReqPosts(data);
   };
   useEffect(() => {
      fetchData();
   }, [user.email]);
   return (
      <div className='my-14'>
         <Helmet>
            <title> KindConnect | My volunteer request posts</title>
         </Helmet>
         <h2 className='font-semibold text-xl md:text-2xl lg:text-4xl mb-5'>
            All volunteer request applied by me
         </h2>
         <div className='overflow-x-auto'>
            <table className='table table-xs md:table-md lg:table-lg'>
               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th className='hidden md:block'>
                        {pathname === "/my-volunteer-request-posts"
                           ? "Status"
                           : "Vol.. Needed"}
                     </th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {userVolReqPosts.length > 0 ? (
                     userVolReqPosts.map((appliedPost, idx) => (
                        <TableRowToShowData
                           key={appliedPost._id}
                           post={appliedPost}
                           index={idx}
                           fetchData={fetchData}
                        />
                     ))
                  ) : (
                     <tr>
                        <td></td>
                        <td colSpan='100%' className='text-center'>
                           No Data Here..
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyVolReqPost;
