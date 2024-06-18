import React, { useEffect, useState } from "react";
import styled from "styled-components";

function AboutHero({ heading }) {
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
      className={`px-6 w-full h-[600px] md:h-[500px] lg:h-[600px] flex justify-center relative`}
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
      <div className="pt-20  px-5 md:px-10 w-full lg:w-[1080px] z-[1] flex  justify-center md:items-center md:justify-end  ">
        <div className="text-center pt-20 md:pt-0 items-center md:items-start leading-tight flex flex-col   ]  relative">
          <h1 className="mt-[-7px] text-white text-5xl lg:text-6xl font-[500] md:leading-tight lg:leading-none tracking-tighter">
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;

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
