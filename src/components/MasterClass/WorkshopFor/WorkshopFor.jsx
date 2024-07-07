import React, { useState } from "react";
import WorkshopCard from "./WorkshopCard";
import styled from "styled-components";

function WorkshopFor(props) {
  const [image, setImage] = useState(1);

  return (
    <div className="w-full p-10 md:px-15 min-h-[700px] flex items-center justify-center">
      <div className="flex flex-col w-full md:w-[1080px] h-full items-center">
        <h1 className="w-[280px] md:w-full  text-3xl md:text-3xl text-zinc-700 font-medium mb-5 text-center">
          This{" "}
          <mark className=" bg-transparent text-[#20b486]">Master Class</mark>{" "}
          Is For You
        </h1>
        <div className="w-full h-full flex flex-col md:flex-row relative items-center">
          <div className="h-full gap-5 md:h-[400px] w-full md:w-[50%] flex flex-col justify-between z-20">
            <div className="flex justify-center md:justify-end w-full">
              <div onMouseEnter={() => setImage(1)}>
                <WorkshopCard 
                text={props.foryou.ip1.S}
                />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div onMouseEnter={() => setImage(2)}>
                <WorkshopCard  
                 text={props.foryou.ip2.S}
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-end w-full">
              <div onMouseEnter={() => setImage(3)}>
                <WorkshopCard 
                 text={props.foryou.ip3.S}
                />
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full md:w-[20%] flex items-center justify-center">
            <img
              className="absolute object-cover z-10 h-[300px] transition-all ease-in duration-1000"
              src={`./assets/Illustrations/${image}.png`}
              alt=""
            />
          </div>
          <div className="h-full gap-5 md:h-[400px] w-full md:w-[50%] flex flex-col justify-between z-20">
            <div className="flex justify-center w-full">
              <div onMouseEnter={() => setImage(4)}>
                <WorkshopCard
                 text={props.foryou.ip4.S}
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-end w-full">
              <div onMouseEnter={() => setImage(5)}>
                <WorkshopCard
                 text={props.foryou.ip5.S}
                />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div onMouseEnter={() => setImage(6)}>
                <WorkshopCard 
                 text={props.foryou.ip6.S}
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="w-[280px] md:w-full mt-10 text-2xl md:text-2xl text-zinc-700 font-medium mb-1 text-center">
          Then This Workshop Is{" "}
          <mark className="text-[#20b486] bg-transparent">
            The Perfect Place
          </mark>
        </h1>
        <h1 className="w-[340px] text-md md:text-md md:w-[730px] text-zinc-700 font-medium text-center mb-4">
          "Because In The Next 3 Days, <u>I Am Going To Guide You</u> Through{" "}
          <b>
            <i>The Transformative Power Of NLP,</i>
          </b>{" "}
          Unlocking Your Full Potential And Helping You Achieve Profound
          Personal Growth"
        </h1>
        <Button1 className=" px-20 py-2 md:px-52 md:py-4 lg:px-24 lg:py-2 md:text-xl">
          <a href="">ENROLL NOW</a>
          <div className="hoverdiv"></div>
        </Button1>
      </div>
    </div>
  );
}

export default WorkshopFor;

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
