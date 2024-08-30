import { ArrowRightCircle, NotepadText, Play } from "lucide-react";
import React from "react";

function ModuleContentTab(props) {
  console.log(props.title);
  return (
    <div className="cursor-pointer flex flex-col gap-1">
      <div className=" active:bg-zinc-50 active:text-[rgb(32,180,134)] hover:bg-zinc-50  px-5 py-3 w-full bg-white flex justify-between">
        <div className="flex items-center gap-2">
          <NotepadText size={20} />
          <h1>{props.title}</h1>
        </div>
        {/* <ArrowRightCircle size={20} /> */}
      </div>
    </div>
  );
}

export default ModuleContentTab;
