import React from "react";

function Footer() {
  return (
    <div>
      <div className="px-6 py-6 md:py-0 flex text-sm w-full min-h-[300px] bg-zinc-800 justify-center items-center overflow-hidden">
        <div className=" text-white w-[1080px] min-h-[200px]  items-center flex md:flex-row gap-10 flex-col justify-between">
          <div className="h-full contact flex flex-col  justify-between">
            <img width={200} src="../.././assets/Icons/logo.svg" alt="" />
            {/* <div>
              <h1 className="text-lg">Contact Us:</h1>
              <h1 className="text-sm font-[300] leading-4">Call: 7218572159</h1>
              <h3 className="text-sm font-[300] ">bhagtanideven@gmail.com</h3>
              <div></div>
            </div> */}
          </div>
          <div className="explore h-full flex flex-col items-center md:items-start gap-4">
            <h1 className="underline text-xl ">Explore</h1>
            <ul className="items-center md:items-start flex flex-col gap-2  font-[200]">
              <li className="hover:text-[#ffffff8f] ease-in transition-all">
                <a href="">Home</a>
              </li>
              <li className="hover:text-[#ffffff8f] ease-in transition-all">
                <a href="/about">About</a>
              </li>
              <li className="hover:text-[#ffffff8f] ease-in transition-all">
                <a href="/courses">Courses</a>
              </li>
              <li className="hover:text-[#ffffff8f] ease-in transition-all">
                <a href="/master-class">Master Class</a>
              </li>
            </ul>
          </div>
          {/* <div className="policies h-full flex flex-col  gap-4">
            <h1 className="text-xl ">Policies</h1>
            <ul className="flex flex-col gap-2  font-[200]  ">
              <li className="hover:text-[#ffffff8f] ease-in transition-all">
                <a href="">Privacy Policy</a>
              </li>
              <li className="hover:text-[#ffffff8f] ease-in transition-all">
                <a href="">Return Policy</a>
              </li>
              <li className="hover:text-[#ffffff8f] ease-in transition-all">
                <a href="">Terms & Conditions</a>
              </li>
            </ul>
          </div> */}
          <div className="items-center md:items-start h-full flex flex-col  gap-2">
            <h1 className="underline text-xl ">Subscribe</h1>
            <h2 className="text-center md:text-start text-sm font-[200] w-[250px]">
              Stay updated with the latest courses and exclusive
              offers—subscribe to our newsletter today!
            </h2>
            <form
              className="flex flex-col items-center md:items-start w-64"
              action=""
            >
              <input
                className="bg-zinc-700  w-full p-2 rounded-md text-white text-sm"
                type="text"
              />
              <button className="bg-[#20B486] mt-3 px-2 py-1 rounded-lg text-sm text-white font-[500] hover:bg-[#0D865F]">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full h-12 bg-zinc-900 text-sm font-[400] text-zinc-600 flex justify-center items-center">
        All Rights Reserved || Designed by Deven.
      </div>
    </div>
  );
}

export default Footer;
