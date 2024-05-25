import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";

const Navigation = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    logoutUser();
  };
  return (
    <div>
      <div className="navbar bg-base-100 px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/" className="text-lg">
                  Home
                </Link>
              </li>
              <li>
                <details>
                  <summary className="text-lg">Toy Category</summary>
                  <ul className="p-0">
                    <li>
                      <a>Marvel</a>
                    </li>
                    <li>
                      <a>DC Universe</a>
                    </li>
                    <li>
                      <a>Anime Charactes</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/blogs" className="text-lg">
                  Blogs 
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-5xl font-bold">
            Toy <span className="text-yellow-500">Joy</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <li>
              <Link to="/" className="text-xl font-bold">
                Home
              </Link>
            </li>
            <li>
              <details>
                <summary className="text-xl font-bold">Toy Category</summary>
                <ul className="p-2">
                  <li>
                    <Link>Marvel</Link>
                  </li>
                  <li>
                    <Link>DC Universe</Link>
                  </li>
                  <li>
                    <Link>Anime Charactes</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/blogs" className="text-xl font-bold">
                Blogs
              </Link>
            </li>
            {
              user && <div className="flex"><li>
              <Link to="/" className="text-xl font-bold">
                Add a Toy
              </Link>
            </li><li>
              <Link to="/" className="text-xl font-bold">
                My Toy
              </Link>
            </li></div>
            
            }
          </ul>
        </div>
        <div className="navbar-end space-x-6">
          {user ? (
            <button onClick={handleSignOut} className="btn btn-outline btn-accent">Logout</button>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-accent">Login</button>
            </Link>
          )}
          <Link to="/register">
            <button className="btn btn-outline btn-error">Register</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
