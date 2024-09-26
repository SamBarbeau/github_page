import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-secondary text-white">
      <Link to="/" className="">
        <img src="./page_logo.png" alt="Logo" className="h-16 px-4" />
      </Link>
      <nav className="flex-1 flex justify-center space-x-4">
        <NavLink
          to="/projects"
          className="px-3 py-2 my-2 rounded hover:outline hover:outline-tertiary"
        >
          <u><b>Projects</b></u>
        </NavLink>
        <NavLink
          to="/food"
          className="px-3 py-2 my-2 rounded hover:outline hover:outline-tertiary"
        >
          <u><b>Food</b></u>
        </NavLink>
        <NavLink
          to="/other"
          className="px-3 py-2 my-2 rounded hover:outline hover:outline-tertiary"
        >
          <u><b>Other</b></u>
        </NavLink>
      </nav>
      <div className="w-24"></div> {/* Placeholder to balance the flex container */}
    </div>
  );
};

export default NavBar;
