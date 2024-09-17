import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AboutCourse from "./AboutCourse";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import FeedbackCard from "../FeedbackCard";
import styled from "styled-components";
import CourseCurriculum from "./CourseCurriculum";
import CourseHero from "./CourseHero";
import TrainerLanguage from "./TrainerLanguage";
import DiscountLine from "../MasterClass/DiscountLine";

function CourseDetails(props) {
  const [courseData, setCourseData] = useState(null);
  const [obfuscatedURL, setObfuscatedURL] = useState(null);

  const { folder } = useParams();
  console.log(props.user);
  
  const getCourseInfo = useCallback(async () => {
    console.log("Folder:", folder);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/videos/getvideodetails?folder=${folder}`
      );
      console.log("Response:", response.data.tableout);
      sessionStorage.setItem(
        courseData-`${folder}`,
        JSON.stringify(response.data)
      );
      setCourseData(response.data.tableout);
      console.log(response.data.tableout.course_video.S);
      fetchObfuscatedURL(response.data.tableout.course_video.S);
    } catch (error) {
      console.error("Error fetching course information:", error);
    }
  }, [folder]);

  const fetchObfuscatedURL = async (video_name) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/videos/api/obfuscate-url?video_name=${video_name}`
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

  const displayFeedback = () => {
    return (      <div className="flex w-full py-10 h-auto  relative bg-[#EAEAEA] justify-center items-center overflow-hidden px-12 lg:px-6">
      <div className="w-full max-w-[1080px] flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-4xl font-[500] text-center lg:text-left">
          Student{" "}
          <mark className="bg-transparent text-[#20B486]">Feedback</mark>
        </h1>
        <h2 className="mt-1 w-[320px] text-sm md:text-[medium]  md:leading-6 md:w-[600px]  text-center">
          Hear from our students about their experiences and how our courses
          have transformed their lives.
        </h2>
        <SwiperContainer className="max-w-[340px] md:max-w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper-container mt-5 pb-10"
          >
            {console.log(courseData?.feedback?.L[0].M)}
            {courseData?.feedback?.L?.map((info, key) => 
            (
              <SwiperSlide key={key}>
                {typeof info === "string" ? (
                  <img src={info} alt="Feedback Image" />
                ) : (
                  <FeedbackCard
                    name={ info.M?.name?.S || ""}
                    designation={info.M?.designation?.S || ""}
                    date={info.M?.date?.S || ""}
                    feedback={info.M?.feedback?.S || ""}
                    photo={info.image?.S || ""}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </div>
    </div>

    );  
  }

  return (
    <>
      <CourseHero
        data={courseData}
        obfuscatedURL={obfuscatedURL}
        user={props.user}
      />
      <TrainerLanguage data={courseData} />
      <AboutCourse data={courseData} user={props.user} />
      <DiscountLine discount={courseData?.discount} />
      <CourseCurriculum data={courseData} />
      {/* if no feedback then null */}
      {courseData?.feedback ? displayFeedback() : null}
    </>
  );
}
const SwiperContainer = styled.div`
  align-items: center;

  .swiper-container {
    .swiper-pagination-bullet-active {
      background-color: #20b486;
    }

    .swiper-button-next {
      color: #20b486;
      scale: 0.5;
    }
    .swiper-button-prev {
      color: #20b486;
      scale: 0.5;
    }
  }
`;

export default CourseDetails;