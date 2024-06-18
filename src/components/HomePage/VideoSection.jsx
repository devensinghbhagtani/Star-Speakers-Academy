import React from "react";
import styled from "styled-components";

function VideoPart() {
  return (
    <div className="p-10 flex w-full h-auto lg:min-h-[450px] relative justify-center items-center overflow-hidden    ">
      <div className="w-full max-w-[1080px]  h-full flex flex-col lg:flex-row lg:justify-center lg:items-center items-center lg:gap-10 ">
        <div className=" min-w-[360px] w-[360px] h-[215px] md:min-w-full lg:min-w-[565px] md:h-[400px] lg:p-0 md:px-10 lg:h-[320px] md:mb-3 lg:m-0">
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

        <div className="w-[350px] mt-5 md:w-[500px] flex flex-col gap-2 items-center lg:items-start lg:w-[40%] text-center lg:text-left">
          <h1 className="text-4xl  font-[500] tracking-tight ">
            Expand Your Horizons with{" "}
            <mark className="bg-transparent text-[#20b486]">
              Expert Trainers
            </mark>
          </h1>
          <h2 className="leading-5 md:w-[400px] lg:w-full mb-1 ">
            Join our platform and connect with thousands of professional
            trainers and coaches today.
          </h2>
          <Button className="lg:mt-3">
            <a href="">Get a Free Trial</a>
            <div className="hoverdiv"></div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VideoPart;
const Button = styled.button`
  border: 2px solid #212832;
  padding: 5px 15px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  a {
    position: relative;
    color: #212832;
    z-index: 1;
  }
  .hoverdiv {
    background-color: #212832;
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
      color: white;
      font-weight: 500;
    }
    .hoverdiv {
      bottom: 0;
      border-radius: 0;
    }
  }
`;
