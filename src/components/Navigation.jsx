import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CircleUser } from "lucide-react";
import { ChevronDown } from "lucide-react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`px-6 md:px-10 z-10 bg-zinc-800 flex flex-col fixed w-full lg:h-[75px]  ${
        isOpen ? "h-[240px] rounded-b-2xl lg:rounded-none" : "h-[75px] "
      } transition-all ease-in-out duration-500  `}
    >
      <div className="py-1 flex w-full min-h-[75px] items-center justify-center">
        <div className="w-[1080px] relative flex justify-between">
          <NavLink to="/">
            <img className="h-12" src="./assets/Icons/logo.svg" alt="" />
          </NavLink>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <div className=" hidden lg:flex items-center float-right">
            <ul className="flex items-center text-white gap-10 ">
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `text-white ${
                      isActive ? "text-[#ffffff8f]" : "text-white"
                    } hover:text-[#ffffff8f]`
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-white ${
                      isActive ? "text-[#ffffff8f]" : "text-white"
                    } hover:text-[#ffffff8f]`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-white ${
                      isActive ? "text-[#ffffff8f]" : "text-white"
                    } hover:text-[#ffffff8f]`
                  }
                >
                  About
                </NavLink>
              </li>
              <NavLink
                onClick={() => {
                  setProfileOpen(!isProfileOpen);
                }}
                to="#"
              >
                <div className="flex items-center gap-1 ">
                  <CircleUser size={30} />
                  <ChevronDown
                    className={`${
                      isProfileOpen ? "rotate-180" : "rotate-0"
                    } transition-all ease-in-out duration-200 `}
                    size={15}
                  />
                </div>
              </NavLink>
            </ul>
          </div>
          {isProfileOpen && (
            <div className="hidden min-w-36 px-5 py-3 gap-2 rounded-md   lg:flex lg:flex-col overflow-hidden bg-zinc-100 top-[120%] absolute right-0 [&>*]:w-full ">
              {isLoggedIn ? (
                <>
                  <div className="bg-[#20B486] absolute w-full h-1 inset-0 "></div>
                  <Link to="#">Edit Profile</Link>
                  <Link to="#">Membership & Purchase History</Link>
                  <Link to="#">Purchase History</Link>
                  <Link to="#">Add / Change Credit Card </Link>
                  <Link to="#">Address </Link>
                  <Link to="#">Contact </Link>
                  <Link to="#">Log Out </Link>
                </>
              ) : (
                <>
                  <div className="bg-[#20B486] absolute w-full h-1 inset-0 "></div>
                  <Link to="#">Login</Link>
                  <Link to="#">Signup</Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className=" border-t-[1px] border-zinc-600 pt-2 lg:hidden w-full">
          <ul className="flex text-xl flex-col text-white gap-1 w-full ">
            <div className="flex text-xl flex-col text-white gap-1 items-end">
              <li className="">
                <NavLink to="#">
                  <div className="flex items-center gap-1 ">
                    <CircleUser size={30} />
                  </div>
                </NavLink>
              </li>

              <li className="border-b-[1px]">
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `text-white ${
                      isActive ? "text-[#ffffff8f]" : "text-white"
                    } hover:text-[#ffffff8f]`
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li className="border-b-[1px]">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-white ${
                      isActive ? "text-[#ffffff8f]" : "text-white"
                    } hover:text-[#ffffff8f]`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="border-b-[1px]">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-white ${
                      isActive ? "text-[#ffffff8f]" : "text-white"
                    } hover:text-[#ffffff8f]`
                  }
                >
                  About
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
