import React from "react";
import FrequentyAskedCard from "./FrequentyAskedCard";
import styled from "styled-components";

function FrequentlyAsked() {
  return (
    <div className="p-8 w-full min-h-[500px] flex justify-center  md:p-10">
      <div className="flex flex-col items-center w-full md:w-[1080px] h-full">
        <h1 className="text-3xl md:text-3xl text-zinc-700 font-medium text-center">
          Frequently{" "}
          <mark className="bg-transparent text-[#20b486]">Asked Questions</mark>{" "}
        </h1>
        <div className="mt-5 w-full flex flex-col gap-3 mb-5">
          <FrequentyAskedCard />
          <FrequentyAskedCard />
          <FrequentyAskedCard />
          <FrequentyAskedCard />
          <FrequentyAskedCard />
        </div>
        <Button1 className=" px-20 py-2 md:px-52 md:py-4 lg:px-24 lg:py-2 md:text-xl">
          <a href="">ENROLL NOW</a>
          <div className="hoverdiv"></div>
        </Button1>
      </div>
    </div>
  );
}

export default FrequentlyAsked;

const Button1 = styled.button`
  border: 2px solid #20b486;
  background-color: #20b486;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  animation: forwards;
  a {
    position: relative;
    color: white;
    font-weight: 500;
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
      color: #20b486;
      font-weight: 500;
    }
    .hoverdiv {
      bottom: 0;
      border-radius: 0;
    }
  }
`;
