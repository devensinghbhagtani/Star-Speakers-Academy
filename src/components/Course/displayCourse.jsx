import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./CoursePlayer.module.css";
import { useCallback } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Helper from "../VideoPlayer/main";
// import Helper from "../Play Course/main";
function CoursePlayer(props) {

    const [courseData, setCourseData] = useState(null);
    const { folder } = useParams();
  const [selectedTab, setSelectedTab] = useState("Description");
  const [checkedLectures, setCheckedLectures] = useState([]);
  const [obfuscatedURL, setObfuscatedURL] = useState(null);
  const [videoname,setvideoname]=useState(null);

  console.log(folder)
  // console.log(props.user);

  function logincheck(){
    if(props.user==null){
      alert("Please login to view the course");
      return false;
    }
    else{
      return true
  }
}

  const fetchObfuscatedURL = async (video_name) => {

    console.log("Video Name:", video_name);
  //  if(checkvideo(video_name)){
      console.log("Fetching obfuscated URL for video:", video_name);

      //console.log(checkvideo(video_name));
    try {
     
      const response = await axios.get(
         `http://localhost:8081/videos/api/obfuscate-url?video_name=${video_name}`
      );
      setObfuscatedURL(response.data.obfuscatedURL);
      console.log("Obfuscated URL:", response.data.obfuscatedURL);
    } catch (error) {
      console.error("Error fetching obfuscated URL:", error);
    }
 // }
};


  const getCourseInfo = useCallback(async () => {
    console.log("Folder:", folder);
    try {
      const cacheddata = sessionStorage.getItem(`courseData-${folder}`);
      //console.log("Cached Data:", cacheddata);

      const response = await axios.get(
        `http://localhost:8081/videos/getvideodetails?folder=${folder}`
      );
      console.log("Response:", response.data);
      setvideoname(response.data.tableout.course_video.S);
      sessionStorage.setItem(
        `courseData-${folder}`,
        JSON.stringify(response.data)
      )
      setCourseData(response.data);
      console.log(response.data.tableout.course_video.S);
      fetchObfuscatedURL(response.data.tableout.course_video.S);
      
    } catch (error) {
      console.error("Error fetching course information:", error);
    }

  }, [folder]);

  useEffect(() => {
    getCourseInfo();
  }, [getCourseInfo]);



 

    function handlecomments(event){
      event.preventDefault();
      const data= new FormData(event.target);
      console.log(data);
      submitcomment(data.get('name'),data.get('email'),data.get('comment'),folder);
    }

    async function submitcomment(name, email, comment,folder){
      try{
        const url='http://localhost:8081/videos/addcomment';
        const {data} = await axios.post(url, {
          name: name,
          email: email,
          comment: comment,
          folder: folder,
        });
        alert(data.message)
      }
      catch(error){
        console.error("Error in submitting comment:", error);
    }
  }

  const modules = [];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // const handleCheckboxChange = (lectureId) => {
  //   setCheckedLectures((prevCheckedLectures) =>
  //     prevCheckedLectures.includes(lectureId)
  //       ? prevCheckedLectures.filter((id) => id !== lectureId)
  //       : [...prevCheckedLectures, lectureId]
  //   );
  // };

  const justifyText = {
    textAlign: "justify",
  };

  const renderContent = () => {
    
    
    console.log(folder);




    // eslint-disable-next-line react-hooks/rules-of-hooks


    switch (selectedTab) {
      case "Description":
        return (
          <div className="m-3 ">
            <h3>Course Description: </h3>
            <p style={justifyText}>
                {courseData && courseData.tableout.course_description.S}
            </p>
            <hr />
            <div className="d-flex">
              <h3>Course Instructor: </h3> &nbsp;
              <h3>
                <a href="https://starspeakers">
                {courseData && courseData.tableout.course_speaker.S}
                </a>
              </h3>
            </div>
            <hr />
            <h3>Course Objectives: </h3>
            <ul style={justifyText}>
              <li>{courseData && courseData.tableout.course_line.S}</li>
            </ul>
            <hr />
            <div className="row my-2">
              <div className="col-md-3">
                <h4>Course Duration:</h4>
                <p>
                    {courseData && courseData.tableout.course_duration.S}
                </p>
              </div>
              <div className="col-md-3">
                <h4>Course Language:</h4>
                <p>
                    {courseData && courseData.tableout.course_language.S}
                </p>
              </div>
              <div className="col-md-3">
                <h4>Total Lectures:</h4>
                <p>
                    {courseData && Object.values(
                        courseData.tableout.Modules.M
                    ).reduce((sum, module) => sum + module.L.length, 0
                    )}
                </p>
              </div>
              <div className="col-md-3">
                <h4>Course Price: </h4>
                <p>{courseData && courseData.tableout.price.N}</p>
                <button className="btn btn-primary" onClick={displayRazorpay}>Buy Now</button>
              </div>
            </div>
            <hr />
          </div>
        );

      case "Comments":
        return (
          <div className="m-3">
            <h3>Comments</h3>
            {/* in this form i need name, email, textarea, submit */}
            <form onSubmit={handlecomments}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" name="name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" />
                <br />
                <label htmlFor="comment">Comment:</label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="3"
                  name="comment"
                ></textarea>
                <br />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        );

      case "Bookmarks":
        return (
          <div className="m-3">
            <h3>Bookmarks</h3>
            <p>Bookmark your favourite lectures to watch later:</p>
          </div>
        );

      case "Course Content":
        return (
          <div className={`m-3 ${styles.mobileContent}`}>
            <div className="d-flex justify-content-between">
              <div className="row">
                <div className="col-md-3">
                  <h4>Course Progress:</h4>
                </div>
                <div className="col-md-3">
                  <p>
                    {Math.round((checkedCount / totalLectures) * 100)}%
                    completed
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <ul className="list-group">{renderModuleProgress()}</ul>
          </div>
        );

      case "Resources":
        return (
          <div className="m-3">
            <h3>Resources</h3>
            <p>Download the course resources from the links below:</p>
            <ul>
              <li>
                <a href="#">Resource 1</a>
              </li>
              <li>
                <a href="#">Resource 2</a>
              </li>
              <li>
                <a href="#">Resource 3</a>
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

const handleClick = (video_name) => {
    if (logincheck()) {
      fetchObfuscatedURL(video_name);
    }
  };

const renderLectures = (moduleName, lectures) => {
    return lectures.map((lecture, index) => (
      <div key={index} onClick={() => handleClick(lecture.S)}>
        {/* <input
          type="checkbox"
          id={`${moduleName}-lecture${index}`}
          value={lecture.S.split("/")[1]}
        /> */}
        <label htmlFor={`${moduleName}-lecture${index}`}>{lecture.S.split("/")[2]}</label>
      </div>
    ));
  };
  


  const totalLectures = modules.reduce(
    (sum, module) => sum + module.lectures.length,
    0
  );
  const checkedCount = checkedLectures.length;

const renderModuleProgress = () => {
    const modulesArray = [];
  
    if (courseData && courseData.tableout && courseData.tableout.Modules && courseData.tableout.Modules.M) {
      const modules = courseData.tableout.Modules.M;
      
      for (let moduleName in modules) {
        console.log("Module Name:", moduleName);
        if (modules.hasOwnProperty(moduleName)) {
          modulesArray.push(
            <li key={moduleName} className={`list-group-item module-item ${styles.moduleItem}`}>
              <details>
                <summary className="m-2">{moduleName}</summary>
                <hr />
                {renderLectures(moduleName, modules[moduleName].L)}
              </details>
            </li>
          );
        }
      }
    }
    return modulesArray;
}
    

  const handleTrigger = () => {
    var x = document.getElementById("content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  const FloatingDiv = {
    display: "none",
    position: "absolute",
    backgroundColor: "white",
    color: "black",
    width: "200px",
    height: "100px",
    zIndex: "1",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    right: "0",
    top: "40",
    marginTop: "55px",
  };

  const progressBtn = {
    color: "white",
    cursor: "pointer",
  };


  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    const result = await axios.post("http://localhost:8081/payment/orders" ,
    {folder:folder, 
      email:props.user.email,
    amount:courseData.tableout.price.N}
    );

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_live_d5ZVQOUIw3XRX6",
        amount: amount.toString(),
        currency: currency,
        name: "StarSpeakers.",
        description: "Test Transaction",
        
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("http://localhost:8081/payment/success", data);

            alert(result.data.msg);
        },
        prefill: {
            name: "Star Speakers",
            email: "starspeaker@gmail.com",
            contact: "9999999999",
        },
        notes: {
            address: "chembur, Mumbai",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}



  return (
    <div className="container-fluid course-player">
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={`row `}>
        <div className="col-md-8 col-lg-9 video-player">
            {/* <Helper
            url={obfuscatedURL}
            /> */}
            <Helper
            obfuscatedURL={obfuscatedURL}
            />
            {/* <ReactPlayer
            url={`http://localhost:8081/videos/sendvideo/${obfuscatedURL}`}
            controls
            ontrols width={'100%'} height={'600px'} 
            /> */}
          <hr />
          <div className="">
            <div className="tabs mt-3">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      selectedTab === "Description" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Description")}
                  >
                    Description
                  </button>
                </li>
                {/* for mobile view course */}
                {/* <li className={`nav-item ${styles.mobileContent}`}>
                  <button
                    className={`nav-link ${
                      selectedTab === "Course Content" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Course Content")}
                  >
                    Progress
                  </button>
                </li> */}
                <li className="nav-item">
                  {/* <button
                    className={`nav-link ${
                      selectedTab === "Bookmarks" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Bookmarks")}
                  >
                    Bookmarks
                  </button> */}
                </li>
                <li className="nav-item">
                  {/* <button
                    className={`nav-link ${
                      selectedTab === "Comments" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Comments")}
                  >
                    Comments
                  </button> */}
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      selectedTab === "Resources" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Resources")}
                  >
                    Resources
                  </button>
                </li>
              </ul>
            </div>
            <div className="content mt-3">{renderContent()}</div>
          </div>
        </div>
        <div className={`col-md-4 col-lg-3 fixed-right ${styles.verticleLine}`}>
          <div className="d-flex justify-content-between">
            <h2>Course Contents</h2>
            {/* <div
              class="trigger"
              className={`{styles.displayProgress} flex-item`}
            >
              <button className="btn btn-outline-dark" onClick={handleTrigger}>
                Progress
              </button>
            </div> */}
            {/* <div
              id="content"
              style={FloatingDiv}
              className={`{styles.FloatingDiv} flex-item`}
            >
              <h4>Your Progress:</h4>
              <p>
                {Math.round((checkedCount / totalLectures) * 100)}% completed
              </p>
            </div> */}
          </div>
          <hr />
          {/* how to get this div afixed height for a dynamic website */}
          {/* I have to scroll the div with the content */}

          <div
            className="course-content"
            style={{ height: "1100px", overflowY: "scroll" }}
          >
            <ul className="list-group">{renderModuleProgress()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePlayer;
