import React from "react";
import { Search } from "lucide-react";
import styled from "styled-components";

function SearchSection() {
  return (
    <div className="flex w-full min-h-[320px]  justify-center ">
      <div className="  selection h-full w-[1080px] ">
        <div className="top-28 relative">
          <h1 className="text-3xl text-[#212832] font-medium">
            Let‘s start learning,{" "}
            <mark className="bg-transparent text-[#20B486]">Atul Shinde!</mark>
          </h1>
          <h1 className="mt-2">
            Browse through our extensive range of courses to enhance your skills
            and knowledge.
          </h1>
          <div className="w-full h-14  mt-4 flex items-center ">
            <input
              placeholder="Search"
              className="h-full w-full p-4 text-lg rounded-xl text-[#212832] border-2 border-zinc-300 "
              type="text"
            />
            <button className="absolute right-0 flex items-center justify-center h-14  w-20 rounded-r-xl bg-[#20B486] hover:bg-[#0d865f]">
              <Search color="white" />
            </button>
          </div>
          <div className="mt-3 flex gap-2">
            <Tab className="bg-[#20B486] text-white">All</Tab>
            <Tab className="bg-[#f3f3f3]">In Progress</Tab>
            <Tab className="bg-[#f3f3f3]">Completed</Tab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;

const Tab = styled.button`
  font-size: small;
  font-weight: 500;
  padding: 5px 15px;
  min-width: 40px;
  border-radius: 50px;
`;
