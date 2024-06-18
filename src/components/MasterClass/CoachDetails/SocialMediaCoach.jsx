import React from "react";

function SocialMediaCoach({ icon, followers }) {
  return (
    <div className="hidden h-[70px] w-[150px] rounded-xl bg-[#20b4851a] lg:flex justify-center items-center">
      <div className="flex gap-2 justify-center items-center">
        <div>{icon}</div>
        <div>
          <h1 className="text-xl font-medium">{followers}</h1>
          <h2 className="text-sm mt-[-2px]">followers</h2>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaCoach;
