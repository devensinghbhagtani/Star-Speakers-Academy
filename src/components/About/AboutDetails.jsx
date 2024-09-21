import React, { useState } from "react";

function AboutDetails() {
  return (
    <div>
      <div className="flex  w-full  justify-center  items-center overflow-hidden ">
        <div className="w-[1080px]  flex flex-col  gap-7  p-10 text-md md:text-lg leading-7  text-zinc-600 ">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className=" w-[310px] md:w-[60%] flex flex-col md:gap-5 items-end">
              <h1 className="text-3xl font-semibold italic tracking-tighter pl-0">
                “Make sure all the choices you make in life come{" "}
                <mark className="text-zinc-600 bg-[#FFC27A]">
                  from a point of awareness
                </mark>{" "}
                and not ignorance.”
              </h1>
              <h1 className="italic">-Atul Shinde</h1>
            </div>
            <div className="w-[310px] md:w-[40%]">
              <img className="" src="/assets/Images/pfpatul.png" alt="" />
            </div>
          </div>
          <div>
            <div className="border-b-2 pb-2 mb-2">
              <h1 className="text-2xl font-semibold pl-0">
                My entrepreneurial journey
              </h1>
              <h2 className="text-md italic">2020-2024</h2>
            </div>
            <div className="flex flex-col gap-10">
              <p className="">
                Atul Shinde is an esteemed educator, mentor, and entrepreneur,
                specializing in teaching speaking skills and other soft skills.
                Based in India, Atul is the proud owner of Star Speakers
                Academy, a premier institution dedicated to transforming
                individuals into masterful communicators. With a substantial
                following across various social media platforms, Atul attributes
                much of his success to his exceptional communication abilities.
              </p>

              <p>
                Today, Atul Shinde is invited to speak at top colleges and
                companies worldwide, addressing audiences in the hundreds and
                thousands. From being a fearful speaker, Atul now thrives on
                stage, captivating his audience with confidence and charisma. He
                is a bestselling author and has been writing a daily blog since
                2005, sharing insights and experiences that inspire many. Atul
                considers listening as his superpower, making everyone he
                interacts with feel like the center of his universe.
              </p>
              <p>
                Atul Shinde brings to you, for the first time ever, the
                techniques and exercises that worked for him, through his
                programs at Star Speakers Academy. These simple yet effective
                concepts, coupled with rigorous exercises, are designed to help
                you become a masterful communicator. Whether you're looking to
                enhance your public speaking skills or develop other essential
                soft skills, Atul Shinde's expertise and personalized approach
                will guide you towards achieving your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
