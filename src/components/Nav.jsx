import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full max-w-7xl border rounded-lg py-4 shadow-lg flex flex-wrap justify-between items-center border-neutral-300 mt-5 px-6 bg-white">
  <h1 className="text-2xl font-semibold">To Do List</h1>
  <ul className="flex flex-row gap-x-6">
    <li>
      <Link to={"/"} className="text-lg font-medium hover:text-pink-500 transition-colors duration-300">
        Home
      </Link>
    </li>
    <li>
      <Link to={"/add-todo"} className="text-lg font-medium hover:text-pink-500 transition-colors duration-300">
        Add
      </Link>
    </li>
  </ul>
</nav>

  );
};

export default Nav;