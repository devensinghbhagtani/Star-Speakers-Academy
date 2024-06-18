import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import React, { useState } from "react";
import GalleryCard from "./GalleryCard";

function ContactDetails() {
  const [showGallery, setShowGallery] = useState(false);
  const [imageNumber, setImageNumber] = useState();
  const [opacity, setOpacity] = useState(false);
  return (
    <div>
      <div
        className={`${showGallery ? "block opacity-0" : "hidden "} ${
          opacity ? "opacity-100" : "opacity-0 "
        } w-[600px] opacity-0   bg-transparent h-[400px] fixed top-1/4 rounded-3xl overflow-hidden left-1/3  z-20 inset-0 transition-all duration-300 ease-in-out`}
      >
        <img
          className={`h-full w-full object-cover`}
          src={`../../../assets/Gallery/pfp${imageNumber}.png`}
          alt=""
        />
      </div>

      <div className="flex  w-full   justify-center  items-center overflow-hidden ">
        <div className="w-[1080px] items-center h-full flex  gap-7  p-10 text-md md:text-lg leading-7 justify-between text-zinc-600 ">
          <div className="h-full  ">
            <h1 className="text-4xl tracking-tight font-semibold">
              Send us and Email
            </h1>
            {/* <div className="flex gap-2 mt-2">
              <div className="bg-zinc-700 p-2 rounded-full text-white">
                <Instagram width={20} />
              </div>
              <div className="bg-zinc-700 p-2 rounded-full text-white">
                <Facebook width={20} fill="white" strokeWidth="0" />
              </div>
              <div className="bg-zinc-700 p-2 rounded-full text-white">
                <Twitter width={20} fill="white" strokeWidth="0" />
              </div>
              <div className="bg-zinc-700 p-2 rounded-full text-white">
                <Linkedin width={20} fill="white" strokeWidth="0" />
              </div>
              <div className="bg-zinc-700 p-2 rounded-full text-white">
                <Youtube />
              </div>
            </div> */}
            <form className="w-full flex flex-col gap-2 items-start" action="">
              <div className="flex mt-5 gap-3 text-md">
                <div className="flex  flex-col w-full ">
                  <label htmlFor="">Name</label>
                  <input
                    className="p-2 border-2 border-zinc-400 rounded-md"
                    type="name"
                    id="name"
                  />
                </div>
                <div className="flex  w-full flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    className="p-2 border-2 border-zinc-400 rounded-md"
                    type="email"
                    id="email"
                  />
                </div>
                <div className="flex  w-full flex-col">
                  <label htmlFor="">Phone</label>
                  <input
                    className="p-2 border-2 border-zinc-400 rounded-md"
                    type="phone"
                    id="phone"
                  />
                </div>
              </div>
              <div className="flex w-[500px] flex-col">
                <label htmlFor="">Subject</label>
                <input
                  className="p-2 border-2 border-zinc-400 rounded-md"
                  type="subject"
                  id="subject"
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="">Message</label>
                <textarea
                  rows="4"
                  className="p-2 w-full border-2 border-zinc-400 rounded-md"
                  type="subject"
                  id="subject"
                />
              </div>
              <button
                type="submit"
                className="mt-2 px-20 py-2 rounded-md text-white bg-[#20B486]"
              >
                Submit
              </button>
            </form>
          </div>
          <div
            onMouseOver={() => {
              setShowGallery(true);
            }}
            onMouseLeave={() => {
              setShowGallery(false);
            }}
            className="w-40 h-full gap-2 flex flex-col justify-center items-end  pr-10"
          >
            <GalleryCard
              setImageNumber={setImageNumber}
              setOpacity={setOpacity}
              card={1}
            />
            <GalleryCard
              setImageNumber={setImageNumber}
              setOpacity={setOpacity}
              card={2}
            />
            <GalleryCard
              setImageNumber={setImageNumber}
              setOpacity={setOpacity}
              card={3}
            />
            <GalleryCard
              setImageNumber={setImageNumber}
              setOpacity={setOpacity}
              card={4}
            />
            <GalleryCard
              setImageNumber={setImageNumber}
              setOpacity={setOpacity}
              card={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
