import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="z-10 bg-zinc-800 flex fixed w-full items-center justify-center h-[72px] ">
      <div className="w-[1080px]  flex justify-between">
        <NavLink to="/">
          <img className="h-12" src="./assets/Icons/logo.svg" alt="" />
        </NavLink>
        <div className="text-sm flex items-center float-right">
          <ul className="flex text-white gap-10 mr-10 ">
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
                to="/support"
                className={({ isActive }) =>
                  `text-white ${
                    isActive ? "text-[#ffffff8f]" : "text-white"
                  } hover:text-[#ffffff8f]`
                }
              >
                Support
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
          </ul>
          <ul className="flex gap-5">
            <Button>
              <a>Login</a>
              <div className="hoverdiv"></div>
            </Button>
            <Button>
              <a>Signup</a>
              <div className="hoverdiv"></div>
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

const Navbutton = styled.li`
  /* a {
    display: block;
    position: relative;
    padding: 0.2em 0;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: white;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  a {
    overflow: hidden;
  }

  a::after {
    opacity: 1;
    transform: translate3d(-110%, 0, 0);
  }

  a:hover::after,
  a:focus::after {
    transform: translate3d(0, 0, 0);
  } */
`;
const Button = styled.button`
  border: 2px solid white;
  padding: 5px 15px;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  a {
    position: relative;
    color: white;
    z-index: 1;
  }
  .hoverdiv {
    background-color: white;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -100%;
    transition: all ease 0.3s;
    border-radius: 100%;
  }

  &:hover {
    a {
      color: rgb(39 39 42);
      font-weight: 500;
    }
    .hoverdiv {
      bottom: 0;
      border-radius: 0;
    }
  }
`;
