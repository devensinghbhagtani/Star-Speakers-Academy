import React from "react";
import styled from "styled-components";
import ProgramCard from "./ProgramCard";
import { ArrowRight } from "lucide-react";

function PopularCourses() {
  return (
    <div className="w-full flex px-10   justify-center py-10 ">
      <div className=" flex flex-col lg:flex-row items-center  w-[1080px] min-h-[400px] justify-center lg:justify-between gap-4">
        <div className="title flex flex-col items-center lg:items-start text-center lg:text-left ">
          <h1 className="text-lg font-[300]">EXPLORE PROGRAMS:</h1>
          <h1 className="text-4xl leading-9 font-[500] w-[250px] md:w-full lg:max-w-[200px] ">
            <mark className="bg-transparent text-[rgb(32,180,134)]">
              Most Popular{" "}
            </mark>
            Courses
          </h1>
          <h2 className="flex items-center gap-1 w-fit border-b-2 text-sm tracking-tight mt-2 lg:mt-10 hover:text-[#8C8C8C] transition-all ease-in">
            <a href="">show all courses</a>
            <ArrowRight size={15} />
          </h2>
        </div>
        <div className="justify-center flex flex-wrap lg:flex-nowrap gap-4">
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
