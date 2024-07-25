import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
  const [toggler,setToggler] = useState(false)
  return (
    <header className="sm:relative h-20 flex justify-center font-serif mt-5 shadow-md w-full">
      <Link to="/">
        <div>
          <h3 className="text-xl w-full ml-10  font-semibold">Crypto <br/> Hunter</h3>
        </div>
      </Link>
      <div onClick={()=>setToggler(!toggler)} className="lg:hidden md:block sm:block sm:ml-5 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
    <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
    </svg>
      </div>
      <nav className={`mt-1.5 ml-16 ${toggler? "sm:flex lg:flex":"sm:hidden lg:flex"} lg:static md:absolute sm:absolute sm:text-center sm:top-12 sm:z-50 flex sm:flex-col md:flex-col lg:flex-row justify-center sm:bg-gray-900 md:bg-gray-900 lg:bg-white sm:text-white md:text-white lg:text-black sm:w-full sm:h-[300px] md:h-[350px] lg:h-auto sm:ml-0`}>
        <NavLink
             className={({ isActive}) =>
              `ml-5 sm:mt-5 ${isActive ? "underline" : "" }  `
             }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive}) =>
           `ml-5 sm:mt-5 ${isActive ? "underline" : "" }  `
          }
          to="/coins"
        >
          Coins
        </NavLink>
        <NavLink
          className={({ isActive}) =>
            `ml-5 sm:mt-5 ${isActive ? "underline" : "" }  `
           }
          to="/account"
        >
          Account
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
