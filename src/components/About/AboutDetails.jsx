import React, { useState } from "react";

function AboutDetails() {
  return (
    <div>
      <div className="flex  w-full  justify-center  items-center overflow-hidden ">
        <div className="w-[1080px]  flex flex-col  gap-7  p-10 text-md md:text-lg leading-7  text-zinc-600 ">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className=" w-[310px] md:w-[60%] flex flex-col md:gap-5 items-end">
              <h1 className="text-2xl font-semibold italic tracking-tighter pl-0">
                “Effective communication is not just about speaking; it's about
                listening, understanding, and connecting.{" "}
                <mark className="text-zinc-700 bg-[#FFC27A]">
                  Master the art of communication,
                </mark>{" "}
                and you'll master the art of influence.”
              </h1>
              <h1 className="italic">-Atul Shinde</h1>
            </div>
            <div className="w-[310px] md:w-[40%]">
              <img className="" src="/assets/Images/pfpatul.png" alt="" />
            </div>
          </div>
          <div>
            <div className="border-b-2 pb-2 mb-2">
              <h1 className="text-2xl font-semibold pl-0">Our Mission</h1>
              {/* <h2 className="text-md italic">2020-2024</h2> */}
            </div>
            <div className="flex flex-col gap-10">
              <p className="">
                At the Communication Success Coaching System, our mission is to
                empower individuals by transforming their communication skills,
                enabling them to excel in both their personal and professional
                lives. We aim to eradicate the barriers caused by poor
                communication, ensuring that no one is discriminated against or
                held back due to their ability to express themselves. Our
                community is dedicated to helping individuals build confidence,
                improve their public speaking, and enhance their overall
                presentation skills.
              </p>
              <div>
                <div className="border-b-2 pb-2 mb-2">
                  <h1 className="text-2xl font-semibold pl-0">
                    My entrepreneurial journey
                  </h1>
                  {/* <h2 className="text-md italic">2020-2024</h2> */}
                </div>
                <p>
                  My journey to this niche is deeply personal. In college, my
                  inability to communicate effectively left me feeling isolated
                  and excluded from presentation groups. This painful experience
                  ignited a passion in me to ensure that others wouldn't face
                  the same challenges. From a young age, I observed that good
                  communication skills attracted smart people and had a
                  significant impact on influencing others. Feedback from
                  friends, mentors, and leaders throughout my life confirmed
                  that this passion was inherent in me, driving me to start
                  training others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
