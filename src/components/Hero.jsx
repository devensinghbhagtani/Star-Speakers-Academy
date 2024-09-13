import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Hero() {
  const [bgImage, setBgImage] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust as needed

    const handleMediaChange = (e) => {
      setBgImage(!e.matches);
    };

    // Initial check
    handleMediaChange(mediaQuery);

    // Listener for changes
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div
      className={`px-6 w-full h-[700px] md:h-[620px] lg:h-[720px] flex justify-center relative`}
    >
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover lg:object-center"
          src={
            bgImage
              ? "./assets/Images/Hero2.jpg"
              : "./assets/Images/heromobile.jpg"
          }
          alt="Hero"
        />
      </div>
      <div className="px-5 md:px-10 w-full lg:w-[1080px] z-[1] flex  justify-center md:justify-end md:w-[700px] lg:justify-end">
        <div className="items-center md:items-start leading-tight flex flex-col top-[20%] md:top-[40%] md:max-w-[50%]  relative">
          <h2 className="text-white text-2xl lg:text-3xl lg:font-[500] tracking-tight">
            master the art of
          </h2>
          <h1 className="mt-[-7px] text-white text-[2.6em] lg:text-[4em] font-[500] md:leading-tight lg:leading-none tracking-tighter">
          communication
          </h1>
          <p className="max-w-[350px] lg:w-full text-white lg:mt-2 font-[200] md:text-sm md:text-left text-center text-sm lg:text-base">
            Explore Our Courses to Hone Your Verbal and Interpersonal Skills.
            Empower Yourself to Lead, Influence, and Succeed.
          </p>
          <div className="mt-5 flex  md:flex-row gap-1 md:gap-3">
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
  border: 0.5px solid white;
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
