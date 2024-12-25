import { meta } from "@eslint/js";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import VolNeedCard from "./VolNeedCard";
import { Link } from "react-router-dom";

const MakeAnImpactToday = () => {
   const [allVolNeedPosts, setAllVolNeedPosts] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const { data } = await axios.get(
               `${
                  import.meta.env.VITE_server_root
               }/all-vol-need-posts?sortby=dateAscending&limit=6`
            );
            setAllVolNeedPosts(data);
         } catch (error) {
            console.error(error);
         }
      };
      fetchData();
   }, []);
   return (
      <div className='my-10'>
         <h2 className='text-3xl font-bold'>Make an Impact Today</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-5'>
            {allVolNeedPosts.map((post) => (
               <VolNeedCard key={post._id} post={post} />
            ))}
         </div>
         <div className='text-center'>
            <Link to='/all-volunteer-need-posts'>
               <button className='btn btn-primary mt-5'>See All Posts </button>
            </Link>
         </div>
      </div>
   );
};

export default MakeAnImpactToday;
