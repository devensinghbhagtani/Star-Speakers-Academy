import { Calendar, Clock, Globe, UserRound } from "lucide-react";
import React from "react";
import Details from "./Details";

function ClassDetails() {
  return (
    <div>
      <div className="flex w-full justify-center">
        <div className="max-h-[200px] w-[500px] md:w-[600px] lg:w-full max-w-[1080px] flex  flex-wrap  md:gap-y-3 justify-center mt-2 mb-10 gap-y-2 px-4 lg:px-0">
          <Details
            title="Date:"
            details="12-6-2024 "
            icon={<Calendar color="#20B486" />}
            more="June"
          />
          <Details
            title="Host:"
            details="Atul Shinde"
            more="Professional Trainer"
            icon={<UserRound color="#20B486" />}
          />
          <Details
            title="Duration"
            details="8 PM to 10 PM "
            icon={<Clock color="#20B486" />}
            more="(2 Hours)"
          />
          <Details
            title="Language"
            details="Hindi/English"
            icon={<Globe color="#20B486" />}
            more="Flexible"
            b={false}
          />
        </div>
      </div>
    </div>
  );
}

export default ClassDetails;
