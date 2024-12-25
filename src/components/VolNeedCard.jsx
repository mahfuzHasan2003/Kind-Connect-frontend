import { format } from "date-fns";
import { BiSolidCategory } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { Link } from "react-router-dom";

const VolNeedCard = ({ post, showExtra, gridLayout }) => {
   const { _id, thumbnail_url, post_title, category, location, deadline } =
      post;
   return (
      <div
         className={`${
            !gridLayout ? null : "flex md:gap-5 lg:gap-20 items-center"
         } bg-base-200 rounded-md border`}>
         <img
            src={thumbnail_url}
            alt={post_title}
            className={` ${
               !gridLayout
                  ? "rounded-t-md aspect-video"
                  : "rounded-l-md aspect-square h-full max-h-60 max-w-[40%]"
            } object-cover`}
         />
         <div
            className={`p-3 ${
               !gridLayout ? null : "md:flex justify-around items-center w-full"
            }`}>
            <div>
               <h6 className='text-lg font-semibold mb-2'>{post_title}</h6>
               <div className=' flex items-center gap-2'>
                  <BiSolidCategory />
                  <p>{category}</p>
               </div>
               <div className=' flex items-center gap-2'>
                  <IoCalendarNumber />
                  {deadline ? <p>{format(deadline, "dd MMM yyyy")}</p> : null}
               </div>
               {showExtra && (
                  <div className=' flex items-center gap-2'>
                     <FaLocationDot />
                     <p>{location}</p>
                  </div>
               )}
            </div>
            <div>
               <Link to={`/volunteer-need-post-details/${_id}`}>
                  <button className='btn btn-outline mt-3'>View Details</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default VolNeedCard;
