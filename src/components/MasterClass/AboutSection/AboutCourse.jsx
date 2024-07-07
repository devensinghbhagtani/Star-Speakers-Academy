import React from "react";
import styled from "styled-components";
import AboutCard from "./AboutCard";
function AboutCourse(props) {
  return (
    <div className=" flex w-full min-h-[700px] relative justify-center md:px-24 lg:p-0">
      <div className="py-7 w-full max-w-[1080px] h-full flex flex-col justify-center items-center">
        <h1 className="flex-col text-2xl md:text-3xl lg:text-4xl text-zinc-700 font-medium mb-5 text-center">
          With this{" "}
          <mark className="text-[#20b486] bg-transparent">Master Class</mark>
        </h1>

        <div className="w-[300px] flex flex-col gap-7 md:w-full lg:w-[80%] mt-3 h-full justify-center">
          {Object.keys(props.skill).map((key, index) => (
            <AboutCard
              key={index}
              n={index + 1}
              text={props.skill[key].S}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutCourse;

const Button1 = styled.button`
  border: 2px solid #20b486;
  background-color: #20b486;
  padding: 8px 80px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  animation: forwards;
  a {
    font-size: large;
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
