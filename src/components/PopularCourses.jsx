import React from "react";
import styled from "styled-components";
import ProgramCard from "./ProgramCard";
import { ArrowRight } from "lucide-react";

function PopularCourses() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center  w-[1080px] h-[500px] justify-between">
        <div className="title">
          <h1 className="text-lg font-[300]">EXPLORE PROGRAMS:</h1>
          <h1 className="text-4xl leading-9 font-[500]">
            <h1 className="text-[rgb(32,180,134)]">
              Most <br />
              Popular
            </h1>
            Courses
          </h1>
          <h2 className="flex items-center gap-1 w-fit border-b-2 text-sm tracking-tight mt-10 hover:text-[#8C8C8C] transition-all ease-in">
            <a href="">show all courses</a>
            <ArrowRight size={15} />
          </h2>
        </div>
        <div className="flex gap-4">
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
