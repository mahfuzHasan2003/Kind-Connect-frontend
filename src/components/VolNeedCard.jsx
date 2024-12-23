import { BiSolidCategory } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { Link } from "react-router-dom";

const VolNeedCard = ({ post, showExtra }) => {
   const {
      _id,
      thumbnail_url,
      post_title,
      description,
      category,
      location,
      volunteers_needed,
      deadline,
      organizer_name,
      organizer_email,
   } = post;
   return (
      <div className='bg-base-200 rounded-md border'>
         <img
            src={thumbnail_url}
            alt={post_title}
            className='rounded-t-md aspect-video object-cover'
         />
         <div className='p-3'>
            <h6 className='text-lg font-semibold mb-2'>{post_title}</h6>
            <div className=' flex items-center gap-2'>
               <BiSolidCategory />
               <p>
                  <span className='font-semibold'>Category:</span> {category}
               </p>
            </div>
            <div className=' flex items-center gap-2'>
               <IoCalendarNumber />
               <p>
                  <span className='font-semibold'>Deadline:</span> {deadline}
               </p>
            </div>
            {showExtra && (
               <div className=' flex items-center gap-2'>
                  <FaLocationDot />
                  <p>
                     <span className='font-semibold'>Location:</span> {location}
                  </p>
               </div>
            )}

            <Link to={`/volunteer-need-post-details/${_id}`}>
               <button className='btn btn-outline mt-3'>View Details</button>
            </Link>
         </div>
      </div>
   );
};

export default VolNeedCard;
