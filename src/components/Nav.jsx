import React from "react";
import { Link,useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation(); // Get the current route

  // Define a mapping for the navbar title based on the route
  const titles = {
    "/": "Home",
    "/add-todo": "Add",
    "/todo": "To Do",
  };

  const title = titles[location.pathname] || "To Do List"; // Default title

  return (
    <nav className="w-screen border rounded-lg py-4 shadow-lg flex flex-wrap justify-between items-center border-neutral-300 px-6 bg-white">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <ul className="flex flex-row gap-x-6">
        <li>
          <Link
            to="/"
            className="text-lg font-medium hover:text-pink-500 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/add-todo"
            className="text-lg font-medium hover:text-pink-500 transition-colors duration-300"
          >
            Add
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
