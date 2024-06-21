import { Notebook, NotepadText, Play } from "lucide-react";
import axios from "axios";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import ModuleContentTab from "./ModuleContentTab";

function CourseCurriculum(props) {
//  console.log(props.courseData);
  return (
    <div className="w-full p-10 justify-center items-center flex bg-zinc-100">
      <div className="flex flex-col w-[1024px] justify-center items-center">
        <h1 className="text-4xl  font-[500]  mb-5 text-zinc-700">
          Course{" "}
          <mark className="bg-transparent text-[#20b486]">Curriculum</mark>
        </h1>

        <div className="w-full justify-center items-center flex flex-col gap-4">
          <div className=" w-full md:w-[80%] rounded-md overflow-hidden text-zinc-700">
            <div className="w-full bg-[#20b486] px-5 py-3 font-medium text-lg text-white">
              <h1>Lessons</h1>
            </div>
            <div className="flex flex-col ">
              {props.data?.folder?.videos.map((video,key) => (
                
                <ModuleContentTab
                  key={key}
                  title={video.split("/")[1]}
                />
              ))
              }
            </div>
          </div>
          <div className="w-full md:w-[80%] rounded-md overflow-hidden text-zinc-700">
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCurriculum;
