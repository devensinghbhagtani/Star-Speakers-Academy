import styled from "styled-components";
import { CircleArrowUp } from "lucide-react";
import React, { useState } from "react";

function FrequentyAskedCard() {
  const [display, setDisplay] = useState(false);
  return (
    <Card
      className={`w-full relative  ${
        display ? "h-auto lg:h-40" : "  h-24 lg:h-16"
      } align-  rounded-lg flex flex-col overflow-hidden   transition-all ease-in-out duration-300 bg-white`}
    >
      <div className=" w-2 h-full bg-[#20b486] absolute "></div>
      <div
        onClick={() => {
          setDisplay((prev) => !prev);
        }}
        className="min-h-24 h-24 lg:min-h-16 pl-6 w-full p-5 cursor-pointer flex justify-center items-center"
      >
        <h1 className="w-full text">
          When and where is the 3-day NLP Bootcamp, and how long would it be?
        </h1>
        <div
          className={`${
            display ? " rotate-180" : "rotate-0"
          }  ml-3  transition-all ease-in-out duration-300`}
        >
          <CircleArrowUp
            fill="#20b486"
            size={28}
            strokeWidth={1.5}
            stroke="white"
          />
        </div>
      </div>
      <h2
        className={`h-full py-5 flex items-center px-5 bg-zinc-100 pr-14 overflow-hidden pl-6`}
      >
        This NLP Bootcamp is for anyone looking to make a positive change in
        their life. Whether you’re struggling with anxiety, seeking personal
        growth, or simply curious about NLP, this workshop will empower you with
        the knowledge and tools to transform your life for the better.
      </h2>
    </Card>
  );
}

export default FrequentyAskedCard;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px,
    rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px,
    rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px;
`;
