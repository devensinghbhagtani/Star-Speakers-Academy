import { Calendar, Clock, Globe, UserRound } from "lucide-react";
import React from "react";
import Details from "./Details";

function ClassDetails(props) {

  const dateString = props.details.date.S;
  const date = new Date(dateString);
  const monthName = date.toLocaleString('default', { month: 'long' });

  return (
    <div>
      <div className="flex w-full justify-center">
        <div className="max-h-[200px] w-[500px] md:w-[600px] lg:w-full max-w-[1080px] flex  flex-wrap  md:gap-y-3 justify-center mt-2 mb-10 gap-y-2 px-4 lg:px-0">
          <Details
            title="Date:"
            details={props.details.date.S}
            icon={<Calendar color="#20B486" />}
            more={monthName}
          />
          <Details
            title="Host:"
            details={props.details.speaker.S}
            more="Professional Trainer"
            icon={<UserRound color="#20B486" />}
          />
          <Details
            title="Duration"
            details={props.details.time.S}
            icon={<Clock color="#20B486" />}
            // more="(2 Hours)"
            more={"IST"}
          />
          <Details
            title="Language"
            details={props.details.language.S}
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
