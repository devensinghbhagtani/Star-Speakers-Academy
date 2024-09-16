import { Notebook, NotepadText, Play } from "lucide-react";
import axios from "axios";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import ModuleContentTab from "./ModuleContentTab";

function CourseCurriculum(props) {
  return (
    <div className="w-full p-10 justify-center items-center flex bg-zinc-100">
      <div className="flex flex-col w-[1024px] justify-center items-center">
        <h1 className="text-4xl text-center font-[500]  mb-5 text-zinc-700">
          Course{" "}
          <mark className="bg-transparent text-[#20b486]">Curriculum</mark>
        </h1>

        <div className="w-full justify-center items-center flex flex-col gap-4">

          {props.data?.Modules?.M && Object.keys(props.data?.Modules?.M).map((module,key) => {
            return (
              <div className="w-full md:w-[80%] rounded-md overflow-hidden text-zinc-700" key={key}>
                <div className="w-full bg-[#20b486] px-5 py-3 font-medium text-lg text-white">
                  <h1>{module}</h1>
                </div>
                <div className="flex flex-col ">
                  {props.data?.Modules?.M[module].M?.lectures?.L?.map((moduleContent,key) => {
                    return (
                      <ModuleContentTab title={moduleContent.S.split("/")[2]} key={key}/>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseCurriculum;
