import React from "react";

import CourseTab from "./CourseTab";
import Feedback from "../Feedback";

function DisplayCourses() {
  return (
    <div className="px-10  w-full h-full flex justify-center">
      <div className=" w-[1080px] min-h-[500px]">
        <div className="flex mb-20 gap-x-7 gap-y-4 flex-wrap min-h-[350px] items-center justify-center">
          <CourseTab />
          <CourseTab />
          <CourseTab />
          <CourseTab />
          <CourseTab />
          <CourseTab />
          <CourseTab />
          <CourseTab />
        </div>
      </div>
    </div>
  );
}

export default DisplayCourses;
