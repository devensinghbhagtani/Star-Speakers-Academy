import React from "react";
import styled from "styled-components";

function Colleges() {
  return (
    <div className="bg-[#EAEAEA] flex flex-col justify-center items-center overflow-hidden h-[180px] md:h-[200px] py-5">
      <h1 className=" md:text-lg tracking-wider font-[500] text-[#8C8C8C] mb-3">
        COLLEGES WORKED WITH:
      </h1>
      <Marquee>
        <div className="[&>img]:w-[50%] [&>img]:h-[80px] md:[&>img]:w-[50%] md:[&>img]:h-[100px] lg:[&>img]:w-[50%] lg:[&>img]:h-[100px]">
          <img src="/assets/Logos/Artboard 1.png" alt="" />
          <img src="/assets/Logos/Artboard 2.png" alt="" />
          <img src="/assets/Logos/Artboard 3.png" alt="" />
          <img src="/assets/Logos/Artboard 4.png" alt="" />
          <img src="/assets/Logos/Artboard 5.png" alt="" />
          <img src="/assets/Logos/Artboard 6.png" alt="" />
          <img src="/assets/Logos/Artboard 7.png" alt="" />
          <img src="/assets/Logos/Artboard 8.png" alt="" />
          <img src="/assets/Logos/Artboard 9.png" alt="" />
          <img src="/assets/Logos/Artboard 10.png" alt="" />
          <img src="/assets/Logos/Artboard 11.png" alt="" />
          <img src="/assets/Logos/Artboard 12.png" alt="" />
          <img src="/assets/Logos/Artboard 13.png" alt="" />
          <img src="/assets/Logos/Artboard 14.png" alt="" />
          <img src="/assets/Logos/Artboard 15.png" alt="" />
          <img src="/assets/Logos/Artboard 1.png" alt="" />
          <img src="/assets/Logos/Artboard 2.png" alt="" />
          <img src="/assets/Logos/Artboard 3.png" alt="" />
          <img src="/assets/Logos/Artboard 4.png" alt="" />
          <img src="/assets/Logos/Artboard 5.png" alt="" />
          <img src="/assets/Logos/Artboard 6.png" alt="" />
          <img src="/assets/Logos/Artboard 7.png" alt="" />
        </div>
      </Marquee>
    </div>
  );
}

export default Colleges;

const Marquee = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  div {
    display: flex;
    gap: 20px;
    animation: marquee 20s linear infinite;
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
