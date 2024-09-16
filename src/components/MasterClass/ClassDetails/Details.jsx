import React from "react";

function Details({ title, details, icon, more, b = true }) {
  return (
    <div>
      <div className="flex items-center w-[170px]  md:w-[230px] gap-1">
        <div className=" p-2  ">{icon}</div>
        <div className="w-full h-full text-wrap">
          <h1 className="text-md  md:text-xl leading-6 pb-0 font-medium">
            {details}
          </h1>
          <h1 className="text-xs md:text-sm  leading-3 md:leading-none">
            {more}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Details;
