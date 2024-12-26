import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import VolNeedCard from "../../components/VolNeedCard";
import { useState } from "react";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { MdViewList } from "react-icons/md";
import { Helmet } from "react-helmet";

const AllVolNeedPosts = () => {
   const [searchValue, setSearchValue] = useState("");
   const [gridLayout, setGridLayout] = useState(false);

   const { data: allPosts, isLoading } = useQuery({
      queryKey: ["AllVolNeedPosts", searchValue],
      queryFn: async () => {
         const { data } = await axios.get(
            `${
               import.meta.env.VITE_server_root
            }/all-vol-need-posts?search=${searchValue}`
         );
         return data;
      },
   });

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
                     value={searchValue}
                     className='grow w-full'
                     placeholder='search by title..'
                  />
               </label>
            </div>
         </div>

         {isLoading ? (
            <div className='text-center mt-20'>
               <span className='loading loading-ring loading-lg'></span>
            </div>
         ) : allPosts.length > 0 ? (
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
         ) : (
            <p className='mt-10'> No data found..</p>
         )}
      </div>
   );
};

export default AllVolNeedPosts;
