import React from "react";
import styled from "styled-components";
import { displayRazorpay, takeemail } from "../../payment";

function VideoPart(props) {
  console.log(props.masterclasstitle.videolink.S);
  const amount = props.masterclasstitle.priceat.N * (1 - (props.discount.N / 100)).toFixed(2);
  function handlepay(){
    const email = takeemail();
    if(email != null){
    displayRazorpay(email, "masterclass", amount);
    }
  }

  
  return (
    <div className="lg:pt-24 pt-24 md:pt-24 p-5 flex w-full h-auto lg:min-h-[450px] relative justify-center overflow-hidden    ">
      <div className="w-full max-w-[1080px]  h-full flex flex-col lg:flex-row lg:justify-center lg:items-center items-center lg:gap-10 ">
        <div className=" min-w-[340px] w-[30px] h-[215px] md:min-w-full lg:min-w-[565px] md:h-[400px] lg:p-0 md:px-10 lg:h-[320px] md:mb-3 lg:m-0">
          <iframe
            className=" rounded-[20px] w-full h-full border-none"
            src={props.masterclasstitle.videolink.S}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-3 lg:mt-0 w-full lg:w-[40%] text-center flex flex-col items-center lg:items-start lg:text-left">
          {/* <h1 className="text-2xl md:w-full md:text-3xl  font-[500] tracking-tight">
           {props.masterclasstitle.title.S}
          </h1> */}
          <h1 className="font-[500] w-72  md:w-full tracking-tight bg-transparent md:text-5xl text-4xl pl-0 text-[#20b486]">
            {props.masterclasstitle.title.S}
          </h1>
          <hr className="w-[200px] my-2 border-zinc-400 mx-auto lg:mx-0" />
          <h2 className=" leading-5 mt-1 max-w-[320px]  md:max-w-[340px] lg:-w-full">
            Speak with confidence, in any setting, with no nervousness. Learn in
            just 4 hours.
          </h2>
          <Button1 className=" mt-4 px-20 py-2 md:px-52 md:py-4 lg:px-14 lg:py-2 md:text-xl" onClick={handlepay}>
          <a>ENROLL NOW</a>
            <div className="hoverdiv"></div>
          </Button1>
        </div>
      </div>
    </div>
  );
}

export default VideoPart;

const Button1 = styled.button`
  border: 2px solid #20b486;
  background-color: #20b486;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  animation: forwards;
  a {
    position: relative;
    color: white;
    font-weight: 500;
    z-index: 1;
  }
  .hoverdiv {
    background-color: white;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -100%;
    transition: all ease 0.3s;
    border-radius: 100%;
  }

  &:hover {
    a {
      color: #20b486;
      font-weight: 500;
    }
    .hoverdiv {
      bottom: 0;
      border-radius: 0;
    }
  }
`;
