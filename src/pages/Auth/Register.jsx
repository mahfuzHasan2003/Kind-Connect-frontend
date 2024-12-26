import { Link, useNavigate } from "react-router-dom";
import authSideImage from "../../assets/auth-side-image.svg";
import googleLogo from "../../assets/google-logo.svg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
   const [showPass, setShowPass] = useState(false);
   const navigate = useNavigate();
   const {
      logInWithGoogle,
      error,
      setError,
      registerWithEmail,
      updateUserProfile,
      isValidEmail,
      isValidPassword,
      isValidPhotoURL,
   } = useAuth();

   const handleRegister = (e) => {
      e.preventDefault();
      setError("");
      const displayName = e.target.name.value;
      const email = e.target.email.value;
      const photoURL = e.target.photoURL.value;
      const password = e.target.password.value;
      if (!displayName) {
         setError("Please enter your full name");
         return;
      }
      if (!isValidPhotoURL(photoURL)) {
         setError("Please enter your photo url correctly");
         return;
      }
      if (!isValidEmail(email)) {
         setError("Please enter your valid email");
         return;
      }
      if (!isValidPassword(password)) {
         setError(
            "Password must be have at least one upercase character, one lowercase character and length 6"
         );
         return;
      }

      registerWithEmail(email, password)
         .then(() => {
            updateUserProfile({ displayName, photoURL });
            toast.success("Registration Success");
            navigate("/");
         })
         .catch((err) => setError(err.code));
   };
   return (
      <div className='hero bg-base-200 my-20 rounded-md py-20'>
         <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className='hidden lg:block'>
               <img src={authSideImage} alt='Auth Image' />
            </div>
            <div className='card bg-base-100 w-full max-w-md shrink-0 shadow-2xl'>
               <form className='card-body' onSubmit={handleRegister}>
                  <h2 className='text-3xl font-bold text-center'>Register..</h2>
                  {error && (
                     <p className='text-sm text-red-500 text-center'>{error}</p>
                  )}
                  <div className='form-control'>
                     <label className='label'>
                        <span className='label-text'>Name</span>
                     </label>
                     <input
                        type='text'
                        placeholder='full name'
                        name='name'
                        className='input input-bordered'
                     />
                  </div>
                  <div className='form-control'>
                     <label className='label'>
                        <span className='label-text'>Photo URL</span>
                     </label>
                     <input
                        type='text'
                        placeholder='photo url'
                        name='photoURL'
                        className='input input-bordered'
                     />
                  </div>
                  <div className='form-control'>
                     <label className='label'>
                        <span className='label-text'>Email</span>
                     </label>
                     <input
                        type='email'
                        placeholder='email'
                        name='email'
                        className='input input-bordered'
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
                  </div>
                  <div className='form-control mt-6'>
                     <button className='btn btn-primary'>Register</button>
                  </div>
                  <div className='divider'>OR</div>
                  <button
                     className='btn'
                     onClick={() => {
                        logInWithGoogle()
                           .then(() => {
                              navigate("/");
                              toast.success("Registration Success");
                           })
                           .catch((err) => toast.error(err.code));
                     }}>
                     <img src={googleLogo} alt='Google Logo' />
                     <span>Continue with Google</span>
                  </button>
                  <p className='text-sm text-right mt-3'>
                     Already have an account? {"\u00A0"}
                     <Link
                        to='/auth/login'
                        className='font-bold hover:underline'>
                        Login
                     </Link>
                  </p>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;
