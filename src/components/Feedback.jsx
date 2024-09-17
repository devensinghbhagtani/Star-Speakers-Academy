import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import FeedbackCard from "./FeedbackCard";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const [isMasterclass, setIsMasterclass] = useState(false);
  const location = useLocation();

  
  async function fetchfeedbackss() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/masterclass/getmasterclassfeedbackss`
      );
      console.log("Response:", response);
      console.log("Response:", response.data.masterclassfeedback);
      setFeedback(response.data.masterclassfeedback);
      setIsMasterclass(true);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  }

  async function fetchfeedback() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/feedback/getfeedback`
      );
      if (response.data.feedback) {
        setFeedback(response.data.feedback);
      }
      console.log("Response:", response.data.feedback);
      setIsMasterclass(false);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  }

  useEffect(() => {
    if (location.pathname === "/master-class") {
      fetchfeedbackss();
    } else {
      fetchfeedback();
    }
  }, [location.pathname]);

  return (
    <div className="flex w-full py-10 h-auto relative bg-[#EAEAEA] justify-center items-center overflow-hidden px-12 lg:px-6">
      <div className="w-full max-w-[1080px] flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-4xl font-[500] text-center lg:text-left">
          Student{" "}
          <mark className="bg-transparent text-[#20B486]">Feedback</mark>
        </h1>
        <h2 className="mt-1 w-[320px] text-sm md:text-[medium] md:leading-6 md:w-[600px] text-center">
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
            {isMasterclass
              ? feedback.map((info, key) => (
                  <SwiperSlide key={key}>
                    <img
                      src={info}
                      alt={"Feedback Image"}
                    />
                  </SwiperSlide>
                ))
              : feedback.map((info, key) => (
                  <SwiperSlide key={key}>
                    <FeedbackCard
                      name={info.name?.S || ""}
                      date={info.date?.S || ""}
                      feedback={info.feedback?.S || ""}
                      designation={info.designation?.S || ""}
                      photo={info.image?.S || ""}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        </SwiperContainer>
      </div>
    </div>
  );
}

export default Feedback;

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
