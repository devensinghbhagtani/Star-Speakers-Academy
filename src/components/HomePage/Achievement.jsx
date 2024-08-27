import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Users, TvMinimalPlay, GraduationCap } from "lucide-react";
import AchievementTabs from "./AchievementTabs";

function Achievement() {

  const [achievements, setAchievements] = useState(null);

  async function getaachievements() {
    const response=await axios.get("http://localhost:8081/masterclass/getachievements");
    console.log(response.data.response);
    setAchievements(response.data.response.M);
    console.log(achievements.hours);
  }
  
  useEffect(() => {
    getaachievements();
  }, []);

  
  return (
    <div className=" p-10 flex  w-full min-h-[550px]  justify-center overflow-hidden">
      <div className="w-[1080px] items-center flex flex-col md:flex-row ">
        <div className="md:w-[60%] flex flex-col md:items-start items-center">
          <h1 className="text-4xl font-[500] text-center md:text-left">
            Our{" "}
            <mark className="bg-transparent text-[#20B486]">Achievement</mark>{" "}
          </h1>
          <h2 className=" mt-2 text-center md:text-left max-w-[500px] md:max-w-full md:w-full">
            At Star Speakers Academy, we pride ourselves on our outstanding
            track record of excellence and growth. Over the years,{" "}
            <strong className="font-[500]">
              <em>
                we have empowered thousands of students, collaborated with
                numerous industry leaders, and achieved significant milestones{" "}
              </em>{" "}
            </strong>
            that reflect our commitment to quality education and professional
            development.
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
            src="./assets/Images/pfpatul.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Achievement;
