import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Quote } from "lucide-react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useState, useEffect,useCallback } from "react";

import FeedbackCard from "./FeedbackCard";
import styled from "styled-components";

function Feedback() {
  const [feedback, setFeedback] = useState([]);

  async function fetchfeedback() {
    try {
      const response = await axios.get(
        "http://localhost:8081/masterclass/getmasterclassfeedbackss"
      );
      console.log("Response:", response);
      console.log("Response:", response.data.masterclassfeedback);
      setFeedback(response.data.masterclassfeedback);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }



  useEffect(() => {
    fetchfeedback();
  }, []);

  return (
    <div className="flex w-full py-10 h-auto  relative bg-[#EAEAEA] justify-center items-center overflow-hidden px-12 lg:px-6">
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
              {
                feedback.map((info,key) => {
                  return (
                    <img src={info} key={key} alt="" />
                  );
                })
              }
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
