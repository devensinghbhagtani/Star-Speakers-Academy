import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProfCard from "./ProfCard";
import styled from "styled-components";

function Trainers() {
  return (
    <div className="px-8 py-10 flex w-full min-h-[550px] items-center overflow-hidden justify-center bg-[#EAEAEA]">
      <div className="w-[1080px] ">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-[#212832] text-lg  text-center uppercase ">
            Join a Community of
          </h1>
          <div className="justify-center  flex flex-col lg:flex-row lg:gap-2 mb-5 text-3xl md:text-4xl  w-[400px] md:w-full font-[500] text-center  text-[#20B486]">
            <h1 className=" text-4xl font-[500] text-center  text-[#20B486]">
              3000+ Professional Trainers{" "}
            </h1>
            <h1 className=" text-[#212832] bg-transparent">& Coaches</h1>
          </div>
        </div>
        <SwiperContainer className="relative ">
          <Swiper
            slidesPerView={4}
            spaceBetween={100}
            centeredSlides={true}
            initialSlide={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="swiper-container h-[330px]"
          >
            <SwiperSlide>
              <ProfCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProfCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProfCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProfCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProfCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProfCard />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-overlay swiper-overlay-left"></div>
          <div className="swiper-overlay swiper-overlay-right"></div>
        </SwiperContainer>
      </div>
    </div>
  );
}

export default Trainers;

const SwiperContainer = styled.div`
  .swiper-container {
    .swiper-pagination-bullet-active {
      background-color: #20b486;
    }

    .swiper-pagination {
      bottom: 0; /* Adjust this value to move the pagination up or down */
    }
  }
  .swiper-overlay {
    top: 0;
    position: absolute;
    width: 300px;
    height: 300px;
    z-index: 1;
    pointer-events: none; /* Allow interactions with the Swiper */
  }

  .swiper-overlay-left {
    left: -1%;
    background: linear-gradient(
      to right,
      rgba(234, 234, 234, 0.8),
      rgba(234, 234, 234, 0)
    );
  }

  .swiper-overlay-right {
    right: -1%;
    background: linear-gradient(
      to left,
      rgba(234, 234, 234, 0.8),
      rgba(234, 234, 234, 0)
    );
  }
`;
