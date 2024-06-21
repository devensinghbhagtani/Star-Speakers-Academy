import React from "react";
import { Quote } from "lucide-react";

function FeedbackCard(props) {
  console.log(props.name);
  return (
    <div className="bg-white w-full h-auto  rounded-2xl p-6 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 lg:w-16 lg:h-16 flex rounded-full overflow-hidden mr-3">
            { 
              <img
              className="object-cover"
              src={props.image ? props.image : "https://www.w3schools.com/howto/img_avatar.png"}
              alt=""
            />
            }
          
          </div>
          <div>
            <h2 className="text-sm lg:text-lg font-medium">{props.name}</h2>
            <h3 className="text-xs leading-4">{props.designation}</h3>
          </div>
        </div>
        <div>
          <Quote color="#20B486" size={30} lg:size={40} strokeWidth={2} />
        </div>
      </div>
      <div className="h-auto  ">
        <p className="ml-10 text-xs lg:text-sm max-w-[80%] mt-5">
        {props.feedback}
        </p>
      </div>
      <hr className="h-px border-0 bg-gray-300 mt-4" />
      <h3 className="flex justify-end mt-2 italic text-xs">{props.date}</h3>
    </div>
  );
}

export default FeedbackCard;
