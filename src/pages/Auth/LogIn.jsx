import { Link, useNavigate } from "react-router-dom";
import authSideImage from "../../assets/auth-side-image.svg";
import googleLogo from "../../assets/google-logo.svg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthDataProvider";
import toast from "react-hot-toast";
const LogIn = () => {
   const [showPass, setShowPass] = useState(false);
   const navigate = useNavigate();

   const { logInWithGoogle, logInWithEmail } = useContext(AuthContext);

   const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      logInWithEmail(email, password)
         .then(() => {
            toast.success("login success");
            navigate("/");
         })
         .catch((err) => {
            toast.error(err.code);
         });
   };

   return (
      <div className='hero bg-base-200 my-20 rounded-md py-20'>
         <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className='hidden lg:block'>
               <img src={authSideImage} alt='Auth Image' />
            </div>
            <div className='card bg-base-100 w-full max-w-md shrink-0 shadow-2xl'>
               <form className='card-body' onSubmit={handleLogin}>
                  <h2 className='text-3xl font-bold text-center'>Login..</h2>
                  <div className='form-control'>
                     <label className='label'>
                        <span className='label-text'>Email</span>
                     </label>
                     <input
                        type='email'
                        placeholder='email'
                        name='email'
                        className='input input-bordered'
                        required
                     />
                  </div>
                  <div className='form-control'>
                     <label className='label'>
                        <span className='label-text'>Password</span>
                     </label>
                     <div className='relative'>
                        <input
                           type={showPass ? "text" : "password"}
                           placeholder='password'
                           name='password'
                           className='input input-bordered w-full'
                           required
                        />

                        {showPass ? (
                           <IoMdEye
                              className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
                              onClick={() => setShowPass((prev) => !prev)}
                           />
                        ) : (
                           <IoMdEyeOff
                              className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
                              onClick={() => setShowPass((prev) => !prev)}
                           />
                        )}
                     </div>
                     <label className='label'>
                        <a href='#' className='label-text-alt link link-hover'>
                           Forgot password?
                        </a>
                     </label>
                  </div>
                  <div className='form-control mt-6'>
                     <button className='btn btn-primary'>Login</button>
                  </div>
                  <div className='divider'>OR</div>
                  <button
                     className='btn'
                     onClick={() => {
                        logInWithGoogle()
                           .then(() => {
                              toast.success("Login success");
                              navigate("/");
                           })
                           .catch((err) => toast.error(err.code));
                     }}>
                     <img src={googleLogo} alt='Google Logo' />
                     <span>Continue with Google</span>
                  </button>
                  <p className='text-sm text-right mt-3'>
                     Don't have an account? {"\u00A0"}
                     <Link
                        to='/auth/register'
                        className='font-bold hover:underline'>
                        Register
                     </Link>
                  </p>
               </form>
            </div>
         </div>
      </div>
   );
};

export default LogIn;
