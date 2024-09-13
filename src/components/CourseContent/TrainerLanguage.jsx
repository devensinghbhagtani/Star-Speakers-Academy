import React from "react";
import Details from "../MasterClass/ClassDetails/Details";
import { Calendar, Clock, Globe, UserRound } from "lucide-react";
import TrainerLanguageCard from "./TrainerLanguageCard";

function TrainerLanguage(props) {
  return (
    <div className="w-full py-5   bg-[#EAEAEA]">
      <div>
        <div className="flex w-full justify-center">
          <div className="flex  flex-wrap  md:gap-y-3 justify-center gap-y-2 px-4 lg:px-0">
            <TrainerLanguageCard
              title="Host:"
              details={props.data?.course_speaker?.S}
              more="Professional Trainer"
              icon={<UserRound color="#20B486" />}
            />
            <TrainerLanguageCard
              title="Duration"
              details={props.data?.course_duration?.S}
              icon={<Clock color="#20B486" />}
              more="(2 Hours)"
            />
            <TrainerLanguageCard
              title="Language"
              details={props.data?.course_language?.S}
              icon={<Globe color="#20B486" />}
              more="Flexible"
              b={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerLanguage;
