import React from "react";
import { Search } from "lucide-react";
import styled from "styled-components";

function SearchSection() {
  return (
    <div className="pt-24 pb-10 px-10 flex w-full justify-center ">
      <div className=" h-full w-[1080px] ">
        <div className="relative">
          <div className="w-full h-12  mt-4 flex items-center  ">
            <input
              placeholder="Search"
              className="h-full w-full p-4 text-md md:text-md rounded-xl text-[#212832] border-2 border-zinc-300 "
              type="text"
            />
            <button className="absolute right-0 flex items-center justify-center h-12 w-16  md:w-20 rounded-r-xl bg-[#20B486] hover:bg-[#0d865f]">
              <Search color="white" />
            </button>
          </div>
          <div className="mt-4 flex gap-2">
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
