/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CourseTab(props) {
  const navigate=useNavigate();
  return (
    <div>
      <Card onClick={()=>{navigate(`${import.meta.env.VITE_SERVER_URL}/course/details/${props.coursename}`)}}>
        <div className="pfp">
          <img src={props.course_image} alt=""/>
        </div>
        <h2 className="mt-3 mb-3 text-xl leading-5 font-[500]">
          {props.coursename}
        </h2>
        <div className="mt-3 star flex gap-2 items-center ">
          {/* <div className="total-stars w-[120px] flex justify-center ">
            <img src="/assets/stars.svg" alt="Stars" />
          </div> */}
          {/* <h4 className="text-sm">(15)</h4> */}
        </div>
        <hr className="h-px mt-2 border-0 bg-gray-300" />
        <div className="price flex items-center justify-between content-center p-2">
          <h2 className="mt-3 text-2xl font-[500]">{props.price} Rs</h2>
          {/* <button className="mt-2 text-white flex gap-2 px-3  py-1 bg-[#20B486] rounded-md shadow-md shadow-gray-00 hover:bg-[#0d865f] transition-all duration-300" onClick={()=>{navigate(`/course/${props.coursename}`)}}> */}
          
          <button className="mt-2 text-white flex px-3  py-1 bg-[#20B486] rounded-md shadow-md shadow-gray-00 hover:bg-[#0d865f] transition-all duration-300" onClick={()=>{navigate(`/course/details/${props.coursename}`)}}>
            {props.boughtcourses ? "Continue" : "Enroll"}
            <ArrowUpRight color="white" />
            </button>
          
        </div>
      </Card>
    </div>
  );
}

export default CourseTab;

const Card = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 300px;
  height: 380px;
  border-radius: 15px;
  transition: all ease-in 0.1s;
  cursor: pointer;

  .pfp {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 60%;
    overflow: hidden;
  }
  .pfp img {
    object-fit: cover;
    width: 100%;
  }
  &:hover {
    transform: scale(105%);
  }
`;
