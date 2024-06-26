import React from "react";
import Details from "../MasterClass/ClassDetails/Details";
import { Calendar, Clock, Globe, UserRound } from "lucide-react";
import TrainerLanguageCard from "./TrainerLanguageCard";

function TrainerLanguage() {
  return (
    <div className="w-full py-5   bg-[#EAEAEA]">
      <div>
        <div className="flex w-full justify-center">
          <div className="max-h-[200px] w-[500px] md:w-[600px] lg:w-full max-w-[1080px] flex  flex-wrap  md:gap-y-3 justify-center gap-y-2 px-4 lg:px-0">
            <TrainerLanguageCard
              title="Host:"
              details="Atul Shinde"
              more="Professional Trainer"
              icon={<UserRound color="#20B486" />}
            />
            <TrainerLanguageCard
              title="Duration"
              details="8 PM to 10 PM "
              icon={<Clock color="#20B486" />}
              more="(2 Hours)"
            />
            <TrainerLanguageCard
              title="Language"
              details="Hindi/English"
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
