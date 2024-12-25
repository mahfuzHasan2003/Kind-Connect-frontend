import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className='h-dvh grid place-items-center bg-warning-content'>
         <div className='text-center space-y-1 md:space-y-3 animate__animated animate__zoomIn'>
            <h1 className='text-5xl md:text-7xl flex items-center gap-1 justify-center '>
               4 <MdError className='text-orange-500' />
               <span className='scale-x-[-1]'>4</span>
            </h1>
            <h3 className='text-xl font-semibold'>Oops! You're lost.</h3>
            <p>The page you're looking for was not found.</p>
            <br />
            <hr className='border-t' />
            <br />
            <div className='inline-flex gap-2'>
               <button>
                  <Link
                     to={-1}
                     className='px-5 py-3 border font-semibold inline-block rounded-full'>
                     Go Back
                  </Link>
               </button>
               <button>
                  <Link
                     to='/'
                     className='px-5 py-3 border font-semibold inline-block rounded-full'>
                     Back to Home
                  </Link>
               </button>
            </div>
         </div>
      </div>
   );
};

export default ErrorPage;
