import React from "react";

function AchievementTabs({ total, subject, icon }) {
  return (
    <div>
      <div className=" min-w-[9rem]  md:w-60 py-3 flex items-center md:bg-transparent rounded-2xl">
        <div className="bg-[#20B486] mr-3 p-2 lg:p-4 rounded-full ">{icon}</div>
        <div>
          <h1 className="text-2xl pl-0 lg:text-4xl text-zinc-800 font-[500]">
            {total}
          </h1>
          <h2 className=" text-xs lg:text-base mt-[-5px]">{subject}</h2>
        </div>
      </div>
    </div>
  );
}

export default AchievementTabs;
