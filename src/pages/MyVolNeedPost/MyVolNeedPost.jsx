import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthDataProvider";
import TableRowToShowData from "../../components/TableRowToShowData";
import { Helmet } from "react-helmet";

const MyVolNeedPost = () => {
   const { user } = useContext(AuthContext);
   const [userVolNeedPosts, setUserVolNeedPosts] = useState([]);
   const fetchData = async () => {
      const { data } = await axios.get(
         `${import.meta.env.VITE_server_root}/all-vol-need-posts?email=${
            user.email
         }`
      );
      setUserVolNeedPosts(data);
   };
   useEffect(() => {
      fetchData();
   }, [user.email]);
   return (
      <div className='my-14'>
         <Helmet>
            <title> KindConnect | My volunteer need posts</title>
         </Helmet>
         <h2 className='font-semibold text-xl md:text-2xl lg:text-4xl mb-5'>
            All volunteer need post that I have added
         </h2>
         <div className='overflow-x-auto'>
            <table className='table table-xs md:table-md lg:table-lg'>
               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th className='hidden md:block'>Vol.. Needed</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {userVolNeedPosts.length > 0 ? (
                     userVolNeedPosts.map((needPost, idx) => (
                        <TableRowToShowData
                           key={needPost._id}
                           post={needPost}
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

export default MyVolNeedPost;
