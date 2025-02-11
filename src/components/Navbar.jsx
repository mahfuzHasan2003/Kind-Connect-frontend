import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const handleChangeTheme = (e) => {
    const selectedTheme = e.target.checked ? "dark" : "light";
    setTheme(selectedTheme);
  };

  const { user, logOut } = useAuth();

  const activeStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    color: "white",
  };

  return (
    <div className="sticky top-0 z-50 bg-primary text-primary-content">
      <div className="navbar w-11/12 max-w-8xl mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary/50 backdrop-blur-md z-50 mt-2 p-2 shadow w-max rounded-b-md"
            >
              <li>
                <Link to="/" onClick={() => document.activeElement.blur()}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-volunteer-need-posts"
                  onClick={() => document.activeElement.blur()}
                >
                  All volunteer Need posts
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  onClick={() => document.activeElement.blur()}
                >
                  About Us
                </Link>
              </li>
              {user ? (
                <li>
                  <a>My Profile</a>
                  <ul className="p-2 flex flex-col gap-1 border-l-[1px]">
                    <li>
                      <Link
                        to="/add-volunteer-need-post"
                        onClick={() => document.activeElement.blur()}
                      >
                        Add Volunteer Need Post
                      </Link>
                    </li>
                    <li>
                      <details>
                        <summary>Manage My Posts</summary>
                        <ul className="p-2 space-y-1 border-l-[1px]">
                          <li>
                            <Link
                              to="/my-volunteer-need-posts"
                              onClick={() => document.activeElement.blur()}
                            >
                              My Volunteer Need Posts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/my-volunteer-request-posts"
                              onClick={() => document.activeElement.blur()}
                            >
                              My Volunteer Request Posts
                            </Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li className="bg-red-500 rounded-md mt-2 py-2 font-semibold">
                      <Link
                        to="/"
                        onClick={() => {
                          document.activeElement.blur();
                          logOut()
                            .then(() => toast.success("Logout Success"))
                            .catch((err) => toast.error(err.code));
                        }}
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : null}
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold">
            KindConnect
          </Link>
        </div>
        {/* Nav Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-volunteer-need-posts"
                className={({ isActive }) => (isActive ? "active" : "")}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                All volunteer Need posts
              </NavLink>
            </li>
            {user ? (
              <li>
                <details>
                  <summary>My Profile</summary>
                  <ul className="p-2 w-max z-50 bg-primary/50 backdrop-blur-sm shadow-md rounded-none rounded-b-md">
                    <li>
                      <NavLink
                        to="/add-volunteer-need-post"
                        className={({ isActive }) => (isActive ? "active" : "")}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Add Volunteer Need Post
                      </NavLink>
                    </li>
                    <li>
                      <details>
                        <summary>Manage My Posts</summary>
                        <ul className="p-2 pl-4 w-max z-50 border-l-[1px] mt-2">
                          <li>
                            <NavLink
                              to="/my-volunteer-need-posts"
                              className={({ isActive }) =>
                                isActive ? "active" : ""
                              }
                              style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                              }
                            >
                              My Volunteer Need Posts
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/my-volunteer-request-posts"
                              className={({ isActive }) =>
                                isActive ? "active" : ""
                              }
                              style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                              }
                            >
                              My Volunteer Request Posts
                            </NavLink>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li
                      className="bg-red-500 rounded-md mt-2 font-semibold"
                      onClick={() => {
                        logOut()
                          .then(() => toast.success("Logout Success"))
                          .catch((err) => toast.error(err.code));
                      }}
                    >
                      <Link to="/">Log Out</Link>
                    </li>
                  </ul>
                </details>
              </li>
            ) : null}
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? "active" : "")}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {/* Theme Controler */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleChangeTheme}
              checked={theme === "dark"}
              className="theme-controller"
              value="synthwave"
            />
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Conditionaly Show Profile or Auth btn */}

          {user ? (
            <img
              alt="User Profile Image"
              title={user?.displayName}
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              className="rounded-full w-10 h-10 object-cover"
            />
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-primary border-base-100/50 hover:border-base-100/50 px-5 rounded-md"
            >
              LogIn
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
