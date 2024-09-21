import {
  CarTaxiFront,
  Import,
  IndianRupee,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Helper from "../VideoPlayer/detailVideo";
import ReactPlayer from "react-player";
import { displayRazorpay } from "../../payment";
import Swal from "sweetalert2";

function CourseHero(props) {
  //  console.log(props.data);
  //  console.log(props.user);
  const navigate = useNavigate();
  const { folder } = useParams();

  async function handleNavigation(url) {
    const userEmail = props.user?.email?.S;
    const courseName = props.data?.coursename?.S;
    const price = parseFloat(props.data?.price?.N ?? 0);
    const discount = parseFloat(props.data?.discount?.N ?? 0);
    const finalAmount = price * (1 - discount / 100);

    if(props.user){

    if (props.user?.coursesinfo?.M && props.user.coursesinfo.M[courseName]) {
      //  console.log("Already enrolled");
      navigate(url);
    } else {
      //  console.log("Not enrolled");

      //  console.log("Email:", userEmail);
      //  console.log("Course Name:", courseName);
      //  console.log("Final Amount:", finalAmount);

      if (userEmail && courseName && finalAmount > 0) {
      const res =  await displayRazorpay(userEmail, courseName, finalAmount);
      if(res == 200){
        navigate(url);
      }
      } else {
        console.error("Missing required information for payment.");
        // alert("Unable to proceed with payment due to missing information.");
        displayModal("Unable to proceed with payment due to missing information.", "error");
      }
    }
  }else{
  // alert("Please Login to Enroll")
  displayModal("Please Login to Enroll", "error");
  }
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
  // function loadScript(src) {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // }

  // async function displayRazorpay() {
  //   const res = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );

  //   if (!res) {
  //     alert("Razorpay SDK failed to load. Are you online?");
  //     return;
  //   }

  //   const result = await axios.post(`${import.meta.env.VITE_SERVER_URL}/payment/orders`, {
  //     folder: folder,
  //     email: props.user?.email,
  //     amount:((props.data?.price?.N ?? 0) *(1 - (props.data?.discount?.N ?? 0) / 100)).toString(),
  //   });

  //   if (!result) {
  //     alert("Server error. Are you online?");
  //     return;
  //   }

  //   const { amount, id: order_id, currency } = result.data;

  //   const options = {
  //     key: "rzp_live_d5ZVQOUIw3XRX6",
  //     amount: amount.toString(),
  //     currency: currency,

  //     description: "Test Transaction",

  //     order_id: order_id,
  //     handler: async function (response) {
  //       const data = {
  //         orderCreationId: order_id,
  //         razorpayPaymentId: response.razorpay_payment_id,
  //         razorpayOrderId: response.razorpay_order_id,
  //         razorpaySignature: response.razorpay_signature,
  //       };

  //       const result = await axios.post(
  //         `${import.meta.env.VITE_SERVER_URL}/payment/success`,
  //         data
  //       );

  //       alert(result.data.msg);
  //     },

  //     notes: {
  //       address: "chembur, Mumbai",
  //     },
  //     theme: {
  //       color: "#61dafb",
  //     },
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  // }

  const fixedDiv = {
    position: "relative",
    zIndex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
  };

  return (
    <div
      className={`px-6 w-full min-h-[500px] md:min-h-[500px] lg:h-[500px] flex items-center justify-center relative`}
    >
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover lg:object-center"
          src="../..//assets/Images/coursebanner.jpg"
          alt="Hero"
        />
      </div>
      <div className="w-full lg:w-[1080px]  z-[1] justify-center md:items-center" style={{marginTop: "100px"}}>
        <div className="w-full max-w-[1080px] flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 ">
          <div className=" min-w-[340px] w-[360px] h-[215px] md:min-w-full lg:min-w-[565px] md:h-[400px] lg:p-0 md:px-10  lg:h-[320px] md:mb-3 lg:m-0"  style={fixedDiv}>
            {/* <iframe
              className=" rounded-[20px] w-full h-full border-none"
              src={`${import.meta.env.VITE_SERVER_URL}/videos/sendvideo/${props.obfuscatedURL}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> */}
            <Helper 
            obfuscatedURL={props.obfuscatedURL} 
            />
          </div>
          <div className=" w-[350px]  md:w-[80%] text-center lg:text-left lg:w-full flex flex-col items-center justify-center lg:items-start gap-4">
            <h1 className="  mt-[-7px] text-black text-4xl  md:text-5xl font-[500] pl-0 md:leading-tight lg:leading-none tracking-tighter text-white">
              {props.data ? props.data.coursename.S : "Course Name"}
            </h1>
            <div>
              <Button
                className="lg:bg-white text-white lg:text-zinc-800 bg-[#20b486] mb-10"
                onClick={() =>
                  handleNavigation(
                    `/course/videos/${props.data?.coursename?.S ?? "default"}`
                  )
                }
              >
                <a className="flex gap-2 justify-center items-center text-xl">
                  
                  {props.user?.coursesinfo?.M &&
                  props.user.coursesinfo.M[props.data?.coursename?.S] ? (
                    "Go to Course"
                  ) : (
                    <div className="flex items-center">
                      Enroll now for
                      <IndianRupee size={20} strokeWidth={3} />
                      {(props.data?.price?.N ?? 0) *
                        (1 - (props.data?.discount?.N ?? 0) / 100)}
                    </div>
                  )}
                
                </a>
                <div className="hoverdiv"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHero;

const Button = styled.button`
  width: 270px;
  height: 50px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  a {
    position: relative;
    font-weight: 500;
    z-index: 1;
  }
  .hoverdiv {
    background-color: #20b486;
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
      color: white;
    }
    .hoverdiv {
      bottom: 0;
      border-radius: 0;
    }
  }
`;
