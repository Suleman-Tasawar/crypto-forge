import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar() {
  const [toggler, setToggler] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sm:relative h-20 flex text-clight-grey justify-between items-center bg-csolid-blue font-serif shadow-md w-full px-[2.5rem] py-[1rem]">
      <Link to="/">
        <div>
          <h3 className="text-xl w-full font-semibold font-[Verdana]">
            Crypto Forge
          </h3>
        </div>
      </Link>

      <div
        onClick={() => setToggler(!toggler)}
        className="lg:hidden md:block sm:block sm:ml-5 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
        </svg>
      </div>

      <div
        className={`lg:flex ${
          toggler ? "block" : "hidden"
        } flex-col justify-between gap-10 items-center lg:flex-row`}
      >
        <nav
          className={`mt-2${
            toggler ? "sm:flex md:flex lg:flex" : "sm:hidden md:hidden lg:flex"
          } lg:static md:absolute sm:absolute sm:text-center  sm:top-14 md:top-14 sm:left-0 md:left-0  sm:z-50 flex sm:flex-col md:flex-col lg:flex-row justify-evenly items-center bg-csolid-blue text-white sm:w-full sm:h-[300px] md:h-[350px] lg:h-auto sm:ml-0`}
        >

          <NavLink
            className={({ isActive }) => ` ${isActive ? "underline" : ""} ml-5`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => ` ${isActive ? "underline" : ""} ml-5`}
            to="/coins"
          >
            Coins
          </NavLink>
          <NavLink
            className={({ isActive }) => ` ${isActive ? "underline" : ""} mx-5`}
            to="/account"
          >
            Account
          </NavLink>
          <div className="flex gap-[1rem] h-[3rem] mt-5 lg:mt-0">
            <Button
              color="inherit"
              onClick={() => navigate("/LoginMenu/Register")}
              variant="outlined"
            >
              Register
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate("/LoginMenu/Login")}
              variant="outlined"
            >
              Login
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
