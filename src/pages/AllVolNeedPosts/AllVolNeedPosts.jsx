import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import VolNeedCard from "../../components/VolNeedCard";
import { useEffect, useState } from "react";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { MdViewList } from "react-icons/md";
import { Helmet } from "react-helmet";

const AllVolNeedPosts = () => {
   const [searchValue, setSearchValue] = useState("");
   const [allPosts, setAllPosts] = useState([]);
   const [gridLayout, setGridLayout] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const { data } = await axios.get(
               `${
                  import.meta.env.VITE_server_root
               }/all-vol-need-posts?search=${searchValue}`
            );
            setAllPosts(data);
         } catch (error) {
            console.error(error);
         }
      };
      fetchData();
   }, [searchValue]);

   // const {
   //    data: allPosts,
   //    isLoading,
   //    refetch,
   // } = useQuery({
   //    queryKey: ["AllVolNeedPosts", searchValue],
   //    queryFn: async () => {
   //       const { data } = await axios.get(
   //          `http://localhost:3000/all-vol-need-posts?search=${searchValue}`
   //       );
   //       return data;
   //    },
   // });

   // const handleSearch = (e) => {
   //    const value = e.target.value;
   //    setSearchValue(value);
   //    console.log(e.target.value);

   //    refetch();
   // };

   // if (isLoading)
   //    return (
   //       <div className='text-center mt-20'>
   //          <span className='loading loading-ring loading-lg'></span>
   //       </div>
   //    );
   return (
      <div className='my-14'>
         <Helmet>
            <title> KindConnect | All volunteer request posts</title>
         </Helmet>
         <div className='md:flex justify-between items-center'>
            <h2 className='font-semibold text-xl md:text-2xl lg:text-4xl'>
               Explore Volunteer Opportunities
            </h2>
            <div className='mt-5 md:mt-0 flex items-center gap-2 md:gap-3 lg:gap-5'>
               <button
                  className='btn btn-secondary h-auto min-h-max p-1.5'
                  onClick={() => setGridLayout((prev) => !prev)}>
                  {gridLayout ? (
                     <RiLayoutGrid2Fill className='text-lg md:text-xl lg:text-2xl' />
                  ) : (
                     <MdViewList className='text-lg md:text-xl lg:text-2xl' />
                  )}
               </button>
               <label className='input input-sm md:input-md input-bordered flex items-center gap-2 pr-0 w-full'>
                  <input
                     type='text'
                     onChange={(e) => setSearchValue(e.target.value)}
                     className='grow w-full'
                     placeholder='search by title..'
                  />
               </label>
            </div>
         </div>
         <div
            className={`grid grid-cols-1 ${
               !gridLayout && "md:grid-cols-2 lg:grid-cols-3"
            } gap-2 md:gap-3 lg:gap-5 mt-10`}>
            {allPosts.map((post) => (
               <VolNeedCard
                  key={post._id}
                  post={post}
                  showExtra={true}
                  gridLayout={gridLayout}
               />
            ))}
         </div>
      </div>
   );
};

export default AllVolNeedPosts;
