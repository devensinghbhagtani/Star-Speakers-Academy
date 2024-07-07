import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Quote } from "lucide-react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import ProfCard from "./HomePage/ProfCard";
import styled from "styled-components";

function Trainers() {
  return (
    <div className="px-8 py-10 flex w-full min-h-[550px] items-center overflow-hidden justify-center bg-[#EAEAEA]">
      <div className="w-[1080px] flex flex-col items-center ">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-[#212832] text-lg  text-center uppercase ">
            Join a Community of
          </h1>
          <div className="justify-center  flex flex-col lg:flex-row lg:gap-2 mb-5 text-3xl md:text-4xl    font-[500] text-center  text-[#20B486]">
            <h1 className=" text-4xl font-[500] text-center  text-[#20B486]">
              300 Professional Trainers
            </h1>
            <h1 className=" text-[#212832] bg-transparent">& Coaches</h1>
          </div>
        </div>
        <SwiperContainer className="max-w-[320px] md:max-w-full relative">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper-container mt-5 pb-10 [&>SwiperSlide]:flex  [&>SwiperSlide]:justify-center"
          >
            <SwiperSlide className="flex md:block items-center justify-center">
              <ProfCard />
            </SwiperSlide>
            <SwiperSlide className="flex md:block items-center justify-center">
              <ProfCard />
            </SwiperSlide>
            <SwiperSlide className="flex md:block items-center justify-center">
              <ProfCard />
            </SwiperSlide>
            <SwiperSlide className="flex md:block items-center justify-center">
              <ProfCard />
            </SwiperSlide>
            <SwiperSlide className="flex md:block items-center justify-center">
              <ProfCard />
            </SwiperSlide>
            <SwiperSlide className="flex md:block items-center justify-center">
              <ProfCard />
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>
      </div>
    </div>
  );
}

export default Trainers;

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
