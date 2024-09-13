import AboutCourse from "./AboutCourse";
import axios from "axios";
import { useEffect, useState,useCallback } from "react";
import { useParams } from "react-router-dom";

import CourseCurriculum from "./CourseCurriculum";
import CourseHero from "./CourseHero";
import TrainerLanguage from "./TrainerLanguage";
import DiscountLine from "../MasterClass/DiscountLine";
import Feedback from "../Feedback";

function CourseDetails() {

  const [courseData, setCourseData] = useState(null);
  const { folder } = useParams();

  const [obfuscatedURL, setObfuscatedURL] = useState(null);
  
  
  const getCourseInfo = useCallback(async () => {
    console.log("Folder:", folder);
    try {
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
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  }
  , [folder]);

  


  useEffect(() => {
    getCourseInfo();
  }, [getCourseInfo]);

  return (
    <>
      <CourseHero name={courseData}/>
      <TrainerLanguage />
      <AboutCourse />
      <DiscountLine/>
      <CourseCurriculum data={courseData}/>
      <Feedback />
    </>
  );
}

export default CourseDetails;
