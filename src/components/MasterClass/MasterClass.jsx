import React from "react";
import Colleges from "../Colleges";
import StaticNav from "./StaticNav";
import VideoPart from "./VideoPart";
import ClassDetails from "./ClassDetails/ClassDetails";
import Feedback from "../Feedback";
import MeetCoach from "./CoachDetails/MeetCoach";
import DiscountLine from "./DiscountLine";
import WorkshopFor from "./WorkshopFor/WorkshopFor";
import FrequentlyAsked from "./FrequentlyAsked/FrequentlyAsked";
import AboutCourse from "./AboutSection/AboutCourse";

function MasterClass() {
  return (
    <>
      <StaticNav />
      <div className="w-full min-h-[100vh] ">
        <VideoPart />
        <ClassDetails />
        <Colleges />
        <AboutCourse />
        <DiscountLine />
        <Feedback />
        <MeetCoach />
        <DiscountLine />
        <WorkshopFor />
        <DiscountLine />
        <FrequentlyAsked />
      </div>
    </>
  );
}

export default MasterClass;
