import React from "react";
import Hero from "./Hero";
import Colleges from "./Colleges";
import PopularCourses from "./HomePage/PopularCourses";
import Achievement from "./HomePage/Achievement";
import Feedback from "./Feedback";
import VideoSection from "./HomePage/VideoSection";
import Footer from "./Footer";
import Trainers from "./Trainers";

function Main() {
  return (
    <main>
      <Hero />
      <Colleges />
      <PopularCourses />
      {/* <Trainers /> */}
      <Achievement />
      <VideoSection />
      <Feedback />
    </main>
  );
}

export default Main;
