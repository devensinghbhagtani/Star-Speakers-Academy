import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <div className="w-full h-[730px] flex justify-center relative">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="./assets/Images/Hero2.jpg"
          alt="Hero"
        />
      </div>
      <div className="px-10 w-[1080px]  absolute top-1/2 ">
        <div className="w-[52%] float-right relative">
          <h2 className="text-white text-4xl font-[500] tracking-tight">
            master the art of
          </h2>
          <h1 className="mt-[-7px] text-white text-7xl font-[500] tracking-tighter">
            communication
          </h1>
          <p className="text-white mt-2 font-[200]">
            Explore Our Courses to Hone Your Verbal and Interpersonal Skills.
            Empower Yourself to Lead, Influence, and Succeed.
          </p>
          <div className="mt-5 flex gap-3">
            <Button>
              <a href="">Get Started</a>
              <div className="hoverdiv"></div>
            </Button>
            <Button>
              <a href="">Get Free Trial</a>
              <div className="hoverdiv"></div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

const Button = styled.button`
  border: 1px solid white;
  padding: 5px 15px;
  border-radius: 10px;
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
