import React from "react";

import CourseTab from "./CourseTab";
import axios from 'axios';
import Feedback from "../Feedback";
import { useEffect } from "react";
import { useState } from "react";

function DisplayCourses() {

  const [info, setInfo] = useState(null);

  async function fetchVideos() {
    try {
        const response = await axios.get('http://localhost:8081/videos/videodetails')
        console.log(response.data);
        setInfo(response.data.response);
        console.log(info)
    
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
}
useEffect(() => {
  fetchVideos();
}, []);

  return (
    <div className="px-10  w-full h-full flex justify-center">
      <div className=" w-[1080px] min-h-[500px]">
        <div className="flex mb-20 gap-x-7 gap-y-4 flex-wrap min-h-[350px] items-center justify-center">
          {
            info && info.map((item,key) => (
              <CourseTab 
              key={key}
              coursename={item.coursename}
              price={item.price}
              course_image={item.course_image_url} 
              />
            ))
          }
  
        </div>
      </div>
    </div>
  );
}

export default DisplayCourses;
