import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProgramCard from "./ProgramCard";
import { ArrowRight, Key } from "lucide-react";

function PopularCourses() {

  const [popularCourses, setPopularCourses] = useState(null);

  async function fetchPopularCourses() {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/videos/getpopularcourse`);
      const data = await response.json();
      //  //console.log(data.response);
      setPopularCourses(data.response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPopularCourses();
  }, []);



  return (
    <div className="w-full flex justify-center py-10 ">
      <div className=" flex flex-col lg:flex-row items-center  w-[1080px] min-h-[300px] justify-center lg:justify-between">
        <div className="title flex flex-col items-center lg:items-start text-center lg:text-left ">
          <h1 className="text-lg font-[300]">EXPLORE PROGRAMS:</h1>
          <h1 className="text-4xl leading-9 font-[500] w-[250px] md:w-full lg:max-w-[200px] ">
            <mark className="bg-transparent text-[rgb(32,180,134)]">
              Most Popular{" "}
            </mark>
            Courses
          </h1>
          <h2 className="flex items-center gap-1 w-fit border-b-2 text-sm tracking-tight mt-2 lg:mt-10 hover:text-[#8C8C8C] transition-all ease-in">
            <a href="/courses">show all courses</a>
            <ArrowRight size={15} />
          </h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 justify-center">
          {popularCourses && popularCourses.map((course,index) => (
            <ProgramCard 
            key={index}
            coursename={course?.coursename} 
            price={course?.price}
            courseimage={course?.course_image_url}
             />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
