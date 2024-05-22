import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
              <Link to='/' className="text-xl">Home</Link>
            </li>
            <li>
              <details>
                <summary className="text-xl">Toy Category</summary>
                <ul className="p-2">
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
            <Link to='/' className="text-xl">About Us</Link>
            </li>
          </ul>
          </div>
          <Link to='/' className="text-5xl font-bold">Toy <span className="text-yellow-500">Joy</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='/' className="text-xl">Home</Link>
            </li>
            <li>
              <details>
                <summary className="text-xl">Toy Category</summary>
                <ul className="p-2">
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
            <Link to='/' className="text-xl">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-accent">Login</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
