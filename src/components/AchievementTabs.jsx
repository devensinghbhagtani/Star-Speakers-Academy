import React from "react";

function AchievementTabs({ total, subject, icon }) {
  return (
    <div>
      <div className="w-60 py-3 flex items-center">
        <div className="bg-[#20B486] mr-3 p-4 rounded-full shadow-2xl shadow-[#20B486]">
          {icon}
        </div>
        <div>
          <h1 className="text-4xl text-zinc-800 font-[500]">{total}</h1>
          <h2 className="mt-[-5px]">{subject}</h2>
        </div>
      </div>
    </div>
  );
}

export default AchievementTabs;
