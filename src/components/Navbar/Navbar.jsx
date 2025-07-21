import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-lg font-medium text-green-400 border-2 border-green-400 rounded-md px-3 py-1 "
            : "text-lg font-medium px-3 py-1 border-2 border-gray-100 rounded-md"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/listedBooks"
        className={({ isActive }) =>
          isActive
            ? "text-lg font-medium text-green-400 border-2 border-green-400 rounded-md px-3 py-1"
            : "text-lg font-medium px-3 py-1 border-2 border-gray-100 rounded-md"
        }
      >
        Listed Books
      </NavLink>
      <NavLink
        to="/pagesToRead"
        className={({ isActive }) =>
          isActive
            ? "text-lg font-medium text-green-400 border-2 border-green-400 rounded-md px-3 py-1"
            : "text-lg font-medium px-3 py-1 border-2 border-gray-100 rounded-md"
        }
      >
        Pages to Read
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 mt-6 ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="btn">Sign In</a>
        <a className="btn">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
