import { useEffect, useState } from "react";
import TableRowToShowData from "../../components/TableRowToShowData";
import { Helmet } from "react-helmet";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyVolNeedPost = () => {
   const { user } = useAuth();
   const [userVolNeedPosts, setUserVolNeedPosts] = useState([]);
   const axiosSecure = useAxiosSecure();

   const fetchData = async () => {
      const { data } = await axiosSecure.get(
         `/user-vol-need-posts?email=${user.email}`
      );
      setUserVolNeedPosts(data);
   };
   useEffect(() => {
      fetchData();
   }, [user]);
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
