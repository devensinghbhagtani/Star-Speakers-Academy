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
  
  const getCourseInfo = useCallback(async () => {
    alert("Folder:" + folder)
    console.log("Folder:", folder); 
    try {
      const cacheddata = sessionStorage.getItem(`courseData-${folder}`);
      if (cacheddata) {
        setCourseData(JSON.parse(cacheddata));
      } 
  
        const response = await axios.get(
          `http://localhost:8081/videos/getvideos?folder=${folder}`
        );
        console.log("Response:", response.data.folder);
        setCourseData(response.data);
        sessionStorage.setItem(
          `courseData-${folder}`,
          JSON.stringify(response.data)
        );
     // }
    } catch (error) {
      console.error("Error fetching course information:", error);
    }
  }, [folder]);


  useEffect(() => {
    getCourseInfo();
  }, [getCourseInfo]);

  return (
    <>
      <CourseHero name={courseData}/>
      <TrainerLanguage />
      <AboutCourse />
      <DiscountLine />
      <CourseCurriculum data={courseData}/>
      <Feedback />
    </>
  );
}

export default CourseDetails;
