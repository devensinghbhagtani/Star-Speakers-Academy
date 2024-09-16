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
import axios from "axios";

function ContactDetails() {
  const [showGallery, setShowGallery] = useState(false);
  const [imageNumber, setImageNumber] = useState(1);
  const [opacity, setOpacity] = useState(false);
  
  async function sendemail(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get("name"));
    console.log(data.get("email"));
    console.log(data.get("phone"));
    console.log(data.get("subject"));
    console.log(data.get("message"));


    const response = await axios.post(`http://localhost:8081/email/contactemail`, {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      subject: data.get("subject"),
      message: data.get("message"),
    });
    // alert(response.data.message);
    displayModal(response.data.message, "success");
  }

  function displayModal(message, status) {
		if (status === "success") {
			Swal.fire({
				title: "Success",
				text: message,
				icon: "success",
				confirmButtonText: "OK",
			});
		}
		else {
			Swal.fire({
				title: "Error",
				text: message,
				icon: "error",
				confirmButtonText: "OK",
			});
		}
	}

  
  return (
    <div>
      <div
        className={`${showGallery ? "lg:block hidden opacity-0" : "hidden "} ${
          opacity ? "opacity-100" : "opacity-0 "
        } w-[600px] opacity-0   bg-transparent h-[400px] fixed top-1/4 rounded-3xl overflow-hidden left-1/3  z-10 inset-0 transition-all duration-300 ease-in-out`}
      >
        <img
          className={`h-full w-full object-cover`}
          src={`../../../assets/Gallery/pfp${imageNumber}.png`}
          alt=""
        />
      </div>

      <div className="flex w-full p-10 lg:justify-center  lg:items-center overflow-hidden ">
        <div className="w-[1080px] lg:items-center h-full flex flex-col lg:flex-row gap-7   text-md md:text-lg leading-7 lg:justify-between text-zinc-600 ">
          <div className="h-full w-full ">
            <h1 className="text-3xl tracking-tight font-medium">
              Send us an Email
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
            <form
              className="w-full text-sm flex flex-col gap-2 items-start"
              onSubmit={sendemail}
            >
              <div className="w-full flex mt-5 gap-3 text-md">
                <div className="w-full gap-3 flex  flex-col lg:flex-row">
                  <div className="md:flex md:gap-3 w-full">
                    <div className=" flex flex-col w-full ">
                      <label htmlFor="">Name</label>
                      <input
                        className="p-2 border-2 w-full  rounded-lg"
                        type="name"
                        required
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="flex w-full  flex-col">
                      <label htmlFor="email">Email</label>
                      <input
                        className="w-full p-2 border-2  rounded-lg"
                        type="email"
                        name="email"
                        required
                        id="email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Phone</label>
                    <input
                      className="max-w-[500px] lg:w-auto p-2 border-2  rounded-lg"
                      type="phone"
                      name="phone"
                      required
                      id="phone"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex max-w-[500px] flex-col">
                  <label htmlFor="">Subject</label>
                  <input
                    className="p-2 border-2  rounded-lg"
                    type="subject"
                    required
                    name="subject"
                    id="subject"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="">Message</label>
                <textarea
                  rows="4"
                  className="p-2 w-full border-2  rounded-lg"
                  type="subject"
                  name="message"
                  required
                  id="subject"
                />
              </div>
              <button
                type="submit"
                className="mt-2 px-20 py-2 rounded-lg text-white bg-[#20B486] hover:bg-[#1e9771] active:bg-[#1e9771]"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex flex-col md:flex-row  items-center md:items-start justify-between ">
            <div
              onMouseOver={() => {
                setShowGallery(true);
              }}
              onMouseLeave={() => {
                setShowGallery(false);
              }}
              className="gap-4 md:w-32 lg:w-40  h-full md:gap-2 flex flex-row md:flex-col  lg:justify-center items-center md:items-start lg:items-end lg:pr-7  border-b-[1px] md:border-b-0 border-zinc-300 pb-5 md:pb-0 md:border-r-[1px] lg:border-none"
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
            <div
              className={`lg:hidden w-full mt-10 md:mt-0 md:w-[70%] bg-transparent h-[320px]  top-1/4 rounded-2xl overflow-hidden left-1/3  z-10 inset-0 transition-all  duration-300 ease-in-out`}
            >
              <img
                className={`h-full w-full object-cover`}
                src={`../../../assets/Gallery/pfp${imageNumber}.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
