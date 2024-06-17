import React from "react";
import { Quote } from "lucide-react";

function FeedbackCard() {
  return (
    <div className="bg-white w-full h-auto  rounded-2xl p-6 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 lg:w-16 lg:h-16 flex rounded-full overflow-hidden mr-3">
            <img
              className="object-cover"
              src="./assets/Images/pfp3.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-sm lg:text-lg font-medium">Jenny Wilson</h2>
            <h3 className="text-xs leading-4">UI-UX Designer</h3>
          </div>
        </div>
        <div>
          <Quote color="#20B486" size={30} lg:size={40} strokeWidth={2} />
        </div>
      </div>
      <div className="h-auto  ">
        <p className="ml-10 text-xs lg:text-sm max-w-[80%] mt-5">
          "The courses at Star Speakers Academy have been a game changer for my
          career. The instructors are top-notch, and I've gained invaluable
          communication skills."
        </p>
      </div>
      <hr className="h-px border-0 bg-gray-300 mt-4" />
      <h3 className="flex justify-end mt-2 italic text-xs">20-10-2004</h3>
    </div>
  );
}

export default FeedbackCard;
