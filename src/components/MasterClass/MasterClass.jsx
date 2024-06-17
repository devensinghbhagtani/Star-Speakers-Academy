import React from "react";
import Colleges from "../Colleges";
import StaticNav from "./StaticNav";
import VideoPart from "./VideoPart";
import ClassDetails from "./ClassDetails";
import AboutCourse from "./AboutCourse";
import Feedback from "../Feedback";
import MeetCoach from "./MeetCoach";
import DiscountLine from "./DiscountLine";
import WorkshopFor from "./WorkshopFor/WorkshopFor";
import FrequentlyAsked from "./FrequentlyAsked";

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
