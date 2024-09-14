import React from "react";
import styled from "styled-components";
import { displayRazorpay, takeemail } from "../../payment";

function StaticNav(props) {
  console.log(props.masterclassinfo)
  console.log(props.discount)
  const amount = props.masterclassinfo.priceat.N * (1 - (props.discount.N / 100)).toFixed(2);


  function handlepay(){
    const email = takeemail();
    displayRazorpay(email, "masterclass", amount);
  }
  return (
    <div className="bg-[#20B486] flex w-full justify-center px-5 md:px-10 fixed z-40">
      <div className="w-full max-w-[1080px] flex nav min-h-16 py-2 justify-between items-center relative lg:px-0">
        <h1 className="text-white font-normal text-sm  md:text-xl w-48 md:w-auto text-center">
          {/* Starting At INR {props.masterclassinfo.priceat.N}/- */}
          {props.masterclassinfo?.accessat?.S} {amount}
        </h1>
        <Button className="text-sm w-36 h-10 md:w-48 md:h-12 md:text-lg" onClick={handlepay}>
          <a>ENROLL NOW</a>
          <div className="hoverdiv"></div>
        </Button>
      </div>
    </div>
  );
}

export default StaticNav;

const Button = styled.button`
  border: 2px solid white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: all ease 0.3s;

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
  &:active {
    scale: 1.1;
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
