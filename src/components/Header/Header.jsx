import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] px-3 py-1"
              : "text-black px-3 py-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedbooks"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] px-3 py-1"
              : "text-black px-3 py-1"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pagetoread"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] px-3 py-1"
              : "text-black px-3 py-1"
          }
        >
          Page to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] px-3 py-1"
              : "text-black px-3 py-1"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] px-3 py-1"
              : "text-black px-3 py-1"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm w-[1171px] h-[57px] mx-auto">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-[#131313] bg-white">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn px-6 py-2 bg-[#23BE0A] text-white text-center">
          Sign in
        </a>
        <a className="btn px-6 py-2 bg-[#59C6D2] text-white text-center">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Header;
