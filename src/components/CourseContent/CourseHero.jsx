import {
  CarTaxiFront,
  IndianRupee,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function CourseHero(props) {
  console.log(props.name);
  return (
    <div
      className={`px-6 py-6 w-full min-h-[600px] md:min-h-[500px] lg:h-[500px] flex items-center justify-center relative`}
    >
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover lg:object-center"
          src=".././assets/Images/coursebanner.jpg"
          alt="Hero"
        />
      </div>
      <div className="pt-20 h-full px-5 md:px-10 w-full lg:w-[1080px]  z-[1] flex  justify-center md:items-center ">
        <div className="w-full max-w-[1080px]  h-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 ">
          <div className=" min-w-[360px] w-[360px] h-[215px] md:min-w-full lg:min-w-[565px] md:h-[400px] lg:p-0 md:px-10  lg:h-[320px] md:mb-3 lg:m-0">
            <iframe
              className=" rounded-[20px] w-full h-full"
              src="https://www.youtube.com/embed/pi1xphhntF0?si=79Djoc9kVcSaokHS"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" w-[350px]  md:w-[80%] text-center lg:text-left lg:w-full flex flex-col items-center justify-center lg:items-start gap-4">
            <h1 className="  mt-[-7px] text-white text-4xl  md:text-5xl font-[500]  md:leading-tight lg:leading-none tracking-tighter">
              {props.name?.folder?.course_name}
            </h1>
            <div>
              <Button className="lg:bg-white text-white lg:text-zinc-800  bg-[#20b486] ">
                <a
                  className="flex gap-2  justify-center items-center text-xl "
                  href=""
                >
                  Enroll Now for
                  <div className="flex items-center">
                    <IndianRupee size={20} strokeWidth={3} />
                    600/-
                  </div>
                </a>
                <div className="hoverdiv"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHero;

const Button = styled.button`
  width: 270px;
  height: 50px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  a {
    position: relative;
    font-weight: 500;
    z-index: 1;
  }
  .hoverdiv {
    background-color: #20b486;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -100%;
    transition: all ease 0.1s;
    border-radius: 100%;
  }

  &:hover {
    a {
      color: white;
    }
    .hoverdiv {
      bottom: 0;
      border-radius: 0;
    }
  }
`;
