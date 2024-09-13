import AboutCourse from "./AboutCourse";
import axios from "axios";
import { useEffect, useState,useCallback } from "react";
import { useParams } from "react-router-dom";

import CourseCurriculum from "./CourseCurriculum";
import CourseHero from "./CourseHero";
import TrainerLanguage from "./TrainerLanguage";
import DiscountLine from "../MasterClass/DiscountLine";
import Feedback from "../Feedback";

function CourseDetails(props) {

  const [courseData, setCourseData] = useState(null);
  const [obfuscatedURL, setObfuscatedURL] = useState(null);

  const { folder } = useParams();
<<<<<<< HEAD

  const [obfuscatedURL, setObfuscatedURL] = useState(null);
  
=======
  console.log(props.user);
>>>>>>> origin/main
  
  const getCourseInfo = useCallback(async () => {
    console.log("Folder:", folder);
    try {
<<<<<<< HEAD
      const cacheddata = sessionStorage.getItem(`courseData-${folder}`);
      //console.log("Cached Data:", cacheddata);

      if (cacheddata) {
        setCourseData(JSON.parse(cacheddata));
        return;
      }

      const url = `http://localhost:8081/courses/getcourse/${folder}`;
      const response = await axios.get(url);
      console.log(response.data);
      setCourseData(response.data);
      console.log("Course Data:", courseData);
      
      sessionStorage.setItem(`courseData-${folder}`, JSON.stringify(response.data));
=======
      const response = await axios.get(
        `http://localhost:8081/videos/getvideodetails?folder=${folder}`
      );
      console.log("Response:", response.data.tableout);
      sessionStorage.setItem(
        `courseData-${folder}`,
        JSON.stringify(response.data)
      )
      setCourseData(response.data.tableout);
      console.log(courseData);
      console.log(response.data.tableout.course_video.S);
      fetchObfuscatedURL(response.data.tableout.course_video.S);
>>>>>>> origin/main
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
<<<<<<< HEAD
  }
  , [folder]);

  
=======

  }, [folder]);
>>>>>>> origin/main

  const fetchObfuscatedURL = async (video_name) => {
    try {
      const response = await axios.get(
         `http://localhost:8081/videos/api/obfuscate-url?video_name=${video_name}`
      );
      setObfuscatedURL(response.data.obfuscatedURL);
      console.log("Obfuscated URL:", response.data.obfuscatedURL);
      
    } catch (error) {
      console.error("Error fetching obfuscated URL:", error);
    }

};


  useEffect(() => {
    getCourseInfo();
  }, [getCourseInfo]);


  return (
    <>
<<<<<<< HEAD
      <CourseHero name={courseData}/>
      <TrainerLanguage />
      <AboutCourse />
      <DiscountLine/>
=======
      <CourseHero 
      data={courseData} 
      obfuscatedURL={obfuscatedURL}
      user={props.user}
      />
      <TrainerLanguage data={courseData} />
      <AboutCourse 
      data={courseData}
      user={props.user}
      />
      <DiscountLine discount={courseData?.discount}/>
>>>>>>> origin/main
      <CourseCurriculum data={courseData}/>
      <Feedback />
    </>
  );
}

export default CourseDetails;
