import React from "react";
import styled from "styled-components";

function Colleges() {
  return (
    <div className="bg-[#EAEAEA] flex flex-col justify-center items-center overflow-hidden h-[120px] md:h-[150px]">
      <h1 className=" md:text-lg tracking-wider font-[500] text-[#8C8C8C] mb-5">
        COLLEGES WORKED WITH:
      </h1>
      <Marquee>
        <div className="[&>img]:w-[20%] lg:[&>img]:w-[14%] md:[&>img]:w-[20%]">
          <img src="./assets/Logos/Logo1.svg" alt="" />
          <img src="./assets/Logos/Logo2.svg" alt="" />
          <img src="./assets/Logos/Logo3.svg" alt="" />
          <img src="./assets/Logos/Logo4.svg" alt="" />
          <img src="./assets/Logos/Logo1.svg" alt="" />
          <img src="./assets/Logos/Logo2.svg" alt="" />
          <img src="./assets/Logos/Logo3.svg" alt="" />
          <img src="./assets/Logos/Logo4.svg" alt="" />
          <img src="./assets/Logos/Logo1.svg" alt="" />
          <img src="./assets/Logos/Logo2.svg" alt="" />
          <img src="./assets/Logos/Logo3.svg" alt="" />
          <img src="./assets/Logos/Logo4.svg" alt="" />
          <img src="./assets/Logos/Logo1.svg" alt="" />
          <img src="./assets/Logos/Logo2.svg" alt="" />
          <img src="./assets/Logos/Logo3.svg" alt="" />
          <img src="./assets/Logos/Logo4.svg" alt="" />
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
    gap: 50px;
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
