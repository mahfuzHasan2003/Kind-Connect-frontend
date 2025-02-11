import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import authAnimation from "../../assets/Auth-Animation.json";
import googleLogo from "../../assets/google-logo.svg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import Lottie from "lottie-react";
const LogIn = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showPass, setShowPass] = useState(false);
  const redirectTo = state?.redirectTo || "/";

  const { logInWithGoogle, logInWithEmail, user } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInWithEmail(email, password)
      .then(() => {
        toast.success("login success");
        navigate(redirectTo);
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  if (user && user?.email) {
    return <Navigate to={redirectTo} />;
  } else {
    return (
      <div className="hero md:my-20 rounded-md py-20">
        <div className="hero-content flex-col lg:flex-row-reverse px-0 justify-between w-11/12 max-w-8xl mx-auto">
          <div className="hidden lg:block max-w-2xl">
            <Lottie animationData={authAnimation} loop={true} />
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl border-2 border-base-200">
            <form className="card-body px-2 md:px-5" onSubmit={handleLogin}>
              <h2 className="text-3xl font-bold text-center">Login..</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />

                  {showPass ? (
                    <IoMdEye
                      className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPass((prev) => !prev)}
                    />
                  ) : (
                    <IoMdEyeOff
                      className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPass((prev) => !prev)}
                    />
                  )}
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="divider">OR</div>
              <button
                className="btn"
                onClick={() => {
                  logInWithGoogle()
                    .then(() => {
                      navigate(redirectTo);
                      toast.success("Login success");
                    })
                    .catch((err) => toast.error(err.code));
                }}
              >
                <img src={googleLogo} alt="Google Logo" />
                <span>Continue with Google</span>
              </button>
              <p className="text-sm text-right mt-3">
                Don&apos;t have an account? {"\u00A0"}
                <Link
                  to="/auth/register"
                  className="font-bold hover:underline"
                  state={{ redirectTo: redirectTo }}
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default LogIn;
