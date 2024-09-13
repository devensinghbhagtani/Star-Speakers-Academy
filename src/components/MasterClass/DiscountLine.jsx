import React from "react";
import { BadgePercent } from "lucide-react";

function DiscountLine() {
  return (
    <div className="bg-[#20b486] w-full h-[25px] md:h-[32px] items-center flex justify-center gap-2">
      <img
        className="w-10 md:w-12 z-[9]"
        src="./assets/Icons/percent.svg"
        alt=""
      />
      <h1 className="text-white text-sm md:text-lg">
        1,100% Money-Back Guarantee
      </h1>
    </div>
  );
}

export default DiscountLine;
