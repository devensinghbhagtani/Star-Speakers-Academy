import React, { useState, useEffect } from "react";
import CourseTab from "./CourseTab";
import axios from 'axios';
import Feedback from "../Feedback";
import SearchSection from "./SearchSection";

function DisplayCourses({ searchTerm, user }) {
  const [info, setInfo] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [boughtcourses, setBoughtCourses] = useState([]);

  async function fetchVideos() {
    try {
      const response = await axios.get(`http://localhost:8081/videos/videodetails`);
      setInfo(response.data.response);
      setFilteredCourses(response.data.response); 
      if (user)
      setBoughtCourses(user?.coursesinfo?.M);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }
  // console.log(user?.coursesinfo?.M);
  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCourses(info);
    } else {
      setFilteredCourses(
        info.filter(course => 
          course.coursename.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, info]);

  return (
    <div className="px-10 w-full h-full flex justify-center">
      <div className="">
        <div className="flex mb-20 gap-x-7 gap-y-4 flex-wrap min-h-[350px] items-center justify-center">
          {
            filteredCourses.map((item, key) => (
              <CourseTab 
                key={key}
                coursename={item.coursename}
                price={item.price}
                course_image={item.course_image_url} 

                boughtcourses = {item.coursename in boughtcourses}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default DisplayCourses;
