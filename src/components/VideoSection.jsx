import React from "react";
import styled from "styled-components";

function VideoSection() {
  return (
    <div className="flex  w-full h-[500px] relative justify-center  overflow-hidden">
      <div className="w-[1080px]  flex ">
        <div className="w-[60%] rounded-xl mt-2 relative">
          <img src="./assets/Images/video-backg.png" alt="" />
          <iframe
            className="absolute top-[80px] left-[15px] rounded-[20px]"
            width="572"
            height="345"
            src="https://www.youtube.com/embed/pi1xphhntF0?si=79Djoc9kVcSaokHS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-[40%] mt-[170px]">
          <h1 className="text-4xl font-[500] tracking-tight">
            Expand Your Horizons with{" "}
            <mark className="bg-transparent text-[#20b486]">
              Expert Trainers
            </mark>
          </h1>
          <h2 className="leading-5 mt-1">
            Join our platform and connect with thousands of professional
            trainers and coaches today.
          </h2>
          <Button className="mt-5">
            <a href="">Get a Free Trial</a>
            <div className="hoverdiv"></div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
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
