import React from "react";

function AboutCard({ n, text, b = true }) {
  return (
    <div className={`flex gap-3 ${b ? " border-b-2" : ""} pb-5 items-center `}>
      <div className="w-[80px] md:min-w-[80px] md:h-[80px] bg-emerald-100 rounded-full">
        <img
          className="w-full h-full"
          src={`/assets/Illustrations/${n}.png`}
          alt=""
        />
      </div>
      <h1 className="text-md md:text-lg w-[90%]">{text}</h1>
    </div>
  );
}

export default AboutCard;
