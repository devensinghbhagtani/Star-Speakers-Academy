import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CircleUser, ChevronDown } from "lucide-react";
import { useUser } from "./UserContext";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const { user } = useUser();
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  // Close the profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  // Function to reload page after navigation
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100); // Delay added to allow navigation to complete
  };

  return (
    <nav
      className={`px-6 md:px-10 z-30 bg-zinc-800 flex flex-col fixed w-full lg:h-[75px]  ${
        isOpen ? "h-[260px] rounded-b-2xl lg:rounded-none" : "h-[75px] "
      } transition-all ease-in-out duration-300  `}
    >
      <div className="py-1 flex w-full min-h-[75px] items-center justify-center">
        <div className="w-[1080px] relative flex justify-between">
          <NavLink
            onClick={() => {
              setIsOpen(false);
            }}
            to="/"
          >
            <img className="h-12" src="../..//assets/Icons/logo.svg" alt="" />
          </NavLink>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <div className="hidden lg:flex items-center float-right">
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
              <div ref={dropdownRef}>
                <NavLink onClick={toggleProfile} to="#">
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
                {isProfileOpen && (
                  <div className="hidden min-w-36 px-5 py-3 gap-2 rounded-md text-zinc-800 lg:flex lg:flex-col overflow-hidden bg-zinc-100 top-[120%] absolute right-0 [&>*]:w-full">
                    {user && user.email.S ? (
                      <>
                        <div className="bg-[#20B486] absolute w-full h-1 inset-0 "></div>
                        <Link to="/profile" onClick={reloadPage}>
                          Edit Profile
                        </Link>
                        <Link to="/purchase-history" onClick={reloadPage}>
                          Purchase History
                        </Link>
                        <Link to="/logout" onClick={reloadPage}>
                          Log out
                        </Link>
                      </>
                    ) : (
                      <>
                        <div className="bg-[#20B486] absolute w-full h-1 inset-0 "></div>
                        <Link to="/login" onClick={reloadPage}>
                          Login
                        </Link>
                        <Link to="/signup" onClick={reloadPage}>
                          Signup
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t-[1px] border-zinc-600 pt-2 lg:hidden w-full">
          <ul className="flex text-xl flex-col text-white gap-1 w-full">
            <div className="flex text-xl flex-col text-white gap-1 items-end">
              <li onClick={() => setIsOpen(false)} className="">
                <NavLink to="/profile">
                  <div className="flex items-center gap-1 ">
                    <CircleUser size={30} />
                  </div>
                </NavLink>
              </li>
              <li onClick={() => setIsOpen(false)} className="border-b-[1px]">
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
              <li onClick={() => setIsOpen(false)} className="border-b-[1px]">
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
              <li onClick={() => setIsOpen(false)} className="border-b-[1px]">
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

              {/* Conditionally render Login or Logout based on user state */}
              {user && user.email.S ? (
                <li onClick={() => setIsOpen(false)} className="border-b-[1px]">
                  <NavLink to="/logout" onClick={reloadPage}>
                    Logout
                  </NavLink>
                </li>
              ) : (
                <li onClick={() => setIsOpen(false)} className="border-b-[1px]">
                  <NavLink to="/login" onClick={reloadPage}>
                    Login
                  </NavLink>
                </li>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
