import { IndianRupee, ShoppingCart } from "lucide-react";
import React from "react";
import styled from "styled-components";

function AboutCourse() {
  return (
    <div className="p-10 md:p-10 text-zinc-800 w-full  flex justify-center">
      
      <div className=" flex flex-col items-center h-full w-[1080px] mt-4 ">
        <br />
        <h1 className="text-4xl text-center font-[500]  mb-5 text-zinc-700">
          About the{" "}
          <mark className="bg-transparent text-[#20b486]">Course</mark>
        </h1>
        <div className="flex flex-col gap-7  md:text-lg">
          <p>
            Building something you love. <br />
            Working on your own terms. <br /> Your dream startup idea shouldn’t
            be limited to your dreams.
          </p>
          <p className="font-semibold">It’s time you make it a reality.</p>
          <p>
            From idea to marketing, this course will guide you through all the
            nuances of idea selection, finding your founding team, raising the
            funds, building your first product, pricing it, and finding your
            first 1000 customers.
          </p>
          <p>
            That’s not all — through approaches, frameworks, and practical
            assignments, you’ll also have an actionable plan to handle complex
            decisions in your startup journey.
          </p>
          <p>
            Through expert insights and proven strategies, you’ll be equipped
            with the knowledge and mindset to navigate the startup ecosystem
            confidently.
          </p>
          <h1 className="w-full bg-[#FFC27A] rounded-md text-zinc-700 font-[500]  text-center text-lg md:text-xl px-10 py-3  tracking-tighter">
            Through expert insights and proven strategies, you’ll be equipped
            with the knowledge and mindset to navigate the startup ecosystem
            confidently.
          </h1>
        </div>
        <Button className="mt-5  text-white  bg-[#20b486] ">
          <a
            className="flex gap-2  justify-center items-center text-xl "
            href=""
          >
            Enroll Now for
            <div className="flex items-center">
              <IndianRupee size={20} strokeWidth={3} />
              600/-
            </div>
          </a>
          <div className="hoverdiv"></div>
        </Button>
      </div>
    </div>
  );
}

export default AboutCourse;

const Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background-color: #20b486;
  border: 2px solid transparent;

  a {
    position: relative;
    font-weight: 500;
    color: white;
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
    border: 2px rgb(39 39 42) solid;
    a {
      color: rgb(39 39 42);
    }
    .hoverdiv {
      bottom: 0;
      border-radius: 0;
    }
  }
`;
