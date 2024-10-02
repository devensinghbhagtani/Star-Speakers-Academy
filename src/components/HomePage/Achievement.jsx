import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Users, TvMinimalPlay, GraduationCap } from "lucide-react";
import AchievementTabs from "./AchievementTabs";

function Achievement() {
  const [achievements, setAchievements] = useState(null);

  async function getaachievements() {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/masterclass/getachievements`
    );
    // console.log(response.data.response);
    setAchievements(response.data.response.M);
    //console.log(achievements.hours);
  }

  useEffect(() => {
    getaachievements();
  }, []);

  return (
    <div className=" bg-[#EAEAEA] p-10 flex  w-full min-h-[550px]  justify-center overflow-hidden">
      <div className="w-[1080px] items-center flex flex-col md:flex-row ">
        <div className="md:w-[60%] flex flex-col md:items-start items-center">
          <h1 className="text-4xl font-[500] text-center md:text-left pl-0">
            Our{" "}
            <mark className="bg-transparent text-[#20B486]">Achievement</mark>{" "}
          </h1>
          <h2 className=" mt-2 text-center md:text-left max-w-[500px] md:max-w-full md:w-full">
            At Star Speakers Academy, we transform students and empower
            companies through our communication training programs. We have{" "}
            <strong className="font-[500]">
              <em>trained over 10,000 students,</em>
            </strong>{" "}
            helping them improve their academic performance, boost confidence,
            and win prestigious public speaking competitions. Our programs also
            develop leadership skills, with many students taking on leadership
            roles and experiencing personal growth.
            <br />
            For companies, we have conducted over{" "}
            <strong className="font-[500]">
              <em>500 corporate training sessions,</em>
            </strong>{" "}
            improving workplace communication by 30% and enhancing leadership
            capabilities for over 2,000 leaders. With a 95% client satisfaction
            rate, we take pride in helping individuals and organizations
            communicate with confidence and impact.
          </h2>
          <div className="flex flex-col lg:gap-4 mt-5">
            <div className="flex gap-2 lg:gap-4">
              <AchievementTabs
                total={`${achievements && achievements.students.N}+`}
                subject="Students"
                icon={<GraduationCap color="white" />}
              />
              <AchievementTabs
                total={`${achievements && achievements.videos.N}+`}
                subject="Videos"
                icon={<TvMinimalPlay color="white" />}
              />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <AchievementTabs
                total={`${achievements && achievements.instructors.N}+`}
                subject="Instructors"
                icon={<Users color="white" />}
              />
              <AchievementTabs
                total={`${achievements && achievements.hours.N}+`}
                subject="Hours"
                icon={<TvMinimalPlay color="white" />}
              />
            </div>
          </div>
        </div>
        <div className="w-[290px] md:w-[40%]">
          <img
            className=" lg:scale-[80%]"
            src="/assets/Images/pfpatul.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Achievement;
