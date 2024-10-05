import { IndianRupee, ShoppingCart } from "lucide-react";
import React from "react";
import styled from "styled-components";
import { displayRazorpay } from "../../payment";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AboutCourse(props) {
  const navigate = useNavigate();
  const { folder } = useParams();

  function handleNavigation(url) {
    const userEmail = props.user?.email?.S;
    const courseName = props.data?.coursename?.S;
    const price = parseFloat(props.data?.price?.N ?? 0);
    const discount = parseFloat(props.data?.discount?.N ?? 0);
    const finalAmount = Math.ceil(
      (props.data?.price?.N ?? 0) * (1 - (props.data?.discount?.N ?? 0) / 100)
    );

    if (props.user?.coursesinfo?.M && props.user.coursesinfo.M[courseName]) {
      //  console.log("Already enrolled");
      navigate(url);
    } else {
      //  console.log("Not enrolled");

      //  console.log("Email:", userEmail);
      //  console.log("Course Name:", courseName);
      //  console.log("Final Amount:", finalAmount);

      if (userEmail && courseName && finalAmount > 0) {
        displayRazorpay(userEmail, courseName, finalAmount);
      } else {
        console.error("Missing required information for payment.");
        // alert("Unable to proceed with payment due to missing information.");
        displayModal(
          "Unable to proceed with payment due to missing information.",
          "error"
        );
      }
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
    } else {
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <div className="pb-10 px-5 text-zinc-800 w-full  flex justify-center">
      <div className=" flex flex-col items-center h-full w-[1080px] mt-4 ">
        <br />
        <h1 className="text-4xl text-center font-[500]  mb-5 text-zinc-700">
          About the{" "}
          <mark className="bg-transparent text-[#20b486]">Course</mark>
        </h1>
        <div
          className="flex flex-col gap-7  md:text-lg"
          style={{ textAlign: "justify" }}
        >
          {props.data?.course_description?.S}
          {/* <p>
            Building something you love. <br />
            Working on your own terms. <br /> Your dream startup idea shouldn’t
            be limited to your dreams.
          </p>
          <p className="font-semibold">It’s time you make it a reality.</p>
          <p>
            From idea to marketing, this course will guide you through all the
            nuances of idea selection, finding your founding team, raising the
            funds, building your first product, pricing it, and finding your
            first 1000 customers.
          </p>
          <p>
            That’s not all — through approaches, frameworks, and practical
            assignments, you’ll also have an actionable plan to handle complex
            decisions in your startup journey.
          </p>
          <p>
            Through expert insights and proven strategies, you’ll be equipped
            with the knowledge and mindset to navigate the startup ecosystem
            confidently.
          </p> */}
          <h1 className="w-full bg-[#FFC27A] rounded-md text-zinc-700 font-[500]  text-center text-lg md:text-xl px-10 py-3  tracking-tighter">
            "Unlock your true potential by mastering communication skills that
            will empower you to succeed in interviews, presentations, and all
            aspects of personal and professional life."
          </h1>
        </div>
        <Button
          className="mt-5  text-white  bg-[#20b486]"
          onClick={() =>
            handleNavigation(
              `/course/videos/${props.data?.coursename?.S ?? "default"}`
            )
          }
        >
          <a className="flex gap-2  justify-center items-center text-xl ">
            {props.user?.coursesinfo?.M &&
            props.user.coursesinfo.M[props.data?.coursename?.S] ? (
              "Go to Course"
            ) : (
              <div className="flex items-center">
                Enroll Now for
                <IndianRupee size={20} strokeWidth={3} />
                {finalAmount}
              </div>
            )}
          </a>
          <div className="hoverdiv"></div>
        </Button>
      </div>
    </div>
  );
}

export default AboutCourse;

const Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background-color: #20b486;
  border: 2px solid transparent;

  a {
    position: relative;
    font-weight: 500;
    color: white;
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
    border: 2px rgb(39 39 42) solid;
    a {
      color: rgb(39 39 42);
    }
    .hoverdiv {
      bottom: 0;
      border-radius: 0;
    }
  }
`;
