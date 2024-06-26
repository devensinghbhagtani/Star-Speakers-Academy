import React from "react";
import styled from "styled-components";
import { ArrowUpRight } from "lucide-react";

function ProgramCard() {
  return (
    <div>
      <Card>
        <div className="pfp">
          <img src="./assets/Images/pfp1.png" alt="" />
        </div>
        <h3 className="mt-3 mb-3 text-md leading-5 font-[500]">
          The Complete guide to Starting up
        </h3>
        <div className="mt-3 star flex gap-2 items-center ">
          <div className="total-stars w-[120px] flex justify-center ">
            <img src="./assets/stars.svg" alt="Stars" />
          </div>
          <h4 className="text-sm">(15)</h4>
        </div>
        <hr className="h-px mt-2 border-0 bg-gray-300" />
        <div className="price flex items-center justify-between content-center">
          <h2 className="mt-3 text-2xl font-[500]">$500</h2>
          <button className="mt-2 text-white flex gap-2 px-3  py-1 bg-[#20B486] rounded-md shadow-md shadow-gray-00 hover:bg-[#0d865f] transition-all duration-300">
            Enroll
            <ArrowUpRight color="white" />
          </button>
        </div>
      </Card>
    </div>
  );
}

export default ProgramCard;

const Card = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  max-width: 270px;
  height: 300px;
  border-radius: 15px;
  transition: all ease-in 0.1s;

  .pfp {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 50%;
    overflow: hidden;
  }
  .pfp img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(105%);
  }
`;
