import React from "react";
import Hero from "./Hero";
import Colleges from "./Colleges";
import PopularCourses from "./PopularCourses";
import Trainers from "./Trainers";
import Achievement from "./Achievement";
import Feedback from "./Feedback";
import VideoSection from "./VideoSection";
import Footer from "./Footer";

function Main() {
  return (
    <main>
      <Hero />
      <Colleges />
      <PopularCourses />
      <Trainers />
      <Achievement />
      <Feedback />
      <VideoSection />
    </main>
  );
}

export default Main;
