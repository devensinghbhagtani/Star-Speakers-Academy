import React, { useState } from "react";
import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import SocialMediaCoach from "./SocialMediaCoach";

function MeetCoach() {
  const [readHeight, setReadHeight] = useState(false);
  return (
    <>
      <div className="flex p-10 md:p-10 w-full h-auto relative bg-[#white] justify-center items-center overflow-hidden">
        <div className="bg-[#20b486] bottom-0 w-full min-h-16 absolute "></div>
        <div className="w-[350px] md:w-[1080px] h-[500px] md:h-[400px] items-center flex flex-col md:flex-row justify-start">
          <div className="order-2 md:order-1 w-[400px] lg:w-[40%] h-full">
            <img
              className="relative scale-[1.2]   md:bottom-0"
              src="./assets/Images/shinde.png"
              alt=""
            />
          </div>
          <div className="order:1 md:order-2 text-center md:text-left md:w-[60%]">
            <h1 className="text-sm md:text-xl">Meet Your</h1>
            <h1 className="text-2xl mt-0 md:mt-0 md:text-5xl font-[600]">
              Coach, Guide & Mentor
            </h1>
            <h1 className="text-[#20b486] text-4xl md:text-5xl font-[600] mt-1 md:mt-2">
              Atul Shinde
            </h1>
            <div className="flex gap-3 mt-4">
              <SocialMediaCoach
                icon={<Instagram size={35} color="#20b486 " />}
                followers={"120k"}
              />
              <SocialMediaCoach
                icon={<Youtube size={35} color="#20b486 " />}
                followers={"100k"}
              />
              <SocialMediaCoach
                icon={<Twitter size={35} color="#20b486 " />}
                followers={"120k"}
              />
              <SocialMediaCoach
                icon={<Linkedin size={35} color="#20b486 " />}
                followers={"20k"}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex  w-full   justify-center  items-center overflow-hidden ">
          <div className="w-[1080px]  flex flex-col  gap-7 p-10 md:p-14 md:px-24 text-md md:text-lg leading-7  text-zinc-600 ">
            <p className="text-">
              Atul Shinde is an esteemed educator, mentor, and entrepreneur,
              specializing in teaching speaking skills and other soft skills.
              Based in India, Atul is the proud owner of Star Speakers Academy,
              a premier institution dedicated to transforming individuals into
              masterful communicators. With a substantial following across
              various social media platforms, Atul attributes much of his
              success to his exceptional communication abilities.
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
            {readHeight && (
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
            )}
            <button
              onClick={() => {
                setReadHeight((prev) => !prev);
              }}
              className=" text-lg font-[500] text-left underline text-[#20b486] w-[150px]"
            >
              {readHeight ? "Read Less." : "Read More."}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetCoach;
