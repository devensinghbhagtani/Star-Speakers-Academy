import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./CoursePlayer.module.css";
import { useCallback } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import Helper from "../Play Course/main";
function CoursePlayer() {

    const [courseData, setCourseData] = useState(null);
    const { folder } = useParams();
  const [selectedTab, setSelectedTab] = useState("Description");
  const [checkedLectures, setCheckedLectures] = useState([]);
  const [obfuscatedURL, setObfuscatedURL] = useState(null);



 



  const getCourseInfo = useCallback(async () => {
    console.log("Folder:", folder);
    try {
      const cacheddata = sessionStorage.getItem(`courseData-${folder}`);
      console.log("Cached Data:", cacheddata);

      const response = await axios.get(
        `http://localhost:8081/videos/getvideodetails?folder=${folder}`
      );
      console.log("Response:", response.data);

      sessionStorage.setItem(
        `courseData-${folder}`,
        JSON.stringify(response.data)
      )
      setCourseData(response.data);
      fetchObfuscatedURL(response.data.tableout.course_video.S);
      
    } catch (error) {
      console.error("Error fetching course information:", error);
    }

  }, [folder]);

  useEffect(() => {
    getCourseInfo();
  }, [getCourseInfo]);



    const fetchObfuscatedURL = async (video_name) => {
      try {
        const response = await axios.get(
           `http://localhost:8081/videos/api/obfuscate-url?video_name=${video_name}`
        );
        setObfuscatedURL(response.data.obfuscatedURL);
        console.log("Obfuscated URL:", response.data.obfuscatedURL);
      } catch (error) {
        console.error("Error fetching obfuscated URL:", error);
      }
    };






  const modules = [
    {
      title: "Module 1: Introduction",
      description: "...",
      lectures: [
        { id: "1.1", title: "Lecture 1.1: Introduction to the Course" },
        {
          id: "1.2",
          title: "Lecture 1.2: Course Objectives and Learning Outcomes",
        },
        {
          id: "1.3",
          title: "Lecture 1.3: Setting Up Your Development Environment",
        },
      ],
    },
    {
      title: "Module 2: Core Concepts",
      description: "...",
      lectures: [
        { id: "2.1", title: "Lecture 2.1: Understanding React Fundamentals" },
        { id: "2.2", title: "Lecture 2.2: Components and Props in React" },
        { id: "2.3", title: "Lecture 2.3: State Management in React" },
      ],
    },
    {
      title: "Module 3: Advanced Concepts",
      description: "...",
      lectures: [
        { id: "3.1", title: "Lecture 3.1: Advanced State Management" },
        { id: "3.2", title: "Lecture 3.2: Context API" },
      ],
    },
    {
      title: "Module 4: Performance Optimization",
      description: "...",
      lectures: [
        { id: "4.1", title: "Lecture 4.1: Optimizing Performance in React" },
        { id: "4.2", title: "Lecture 4.2: Code Splitting" },
      ],
    },
    {
      title: "Module 5: Routing",
      description: "...",
      lectures: [
        { id: "5.1", title: "Lecture 5.1: React Router Basics" },
        { id: "5.2", title: "Lecture 5.2: Nested Routes" },
      ],
    },
    {
      title: "Module 6: State Management Libraries",
      description: "...",
      lectures: [
        { id: "6.1", title: "Lecture 6.1: Redux Introduction" },
        { id: "6.2", title: "Lecture 6.2: Redux Thunk" },
      ],
    },
    {
      title: "Module 7: Testing",
      description: "...",
      lectures: [
        { id: "7.1", title: "Lecture 7.1: Unit Testing with Jest" },
        { id: "7.2", title: "Lecture 7.2: Integration Testing" },
      ],
    },
    {
      title: "Module 8: Forms and Validations",
      description: "...",
      lectures: [
        { id: "8.1", title: "Lecture 8.1: Managing Forms in React" },
        { id: "8.2", title: "Lecture 8.2: Validation with Formik" },
      ],
    },
    {
      title: "Module 9: Server-Side Rendering",
      description: "...",
      lectures: [
        {
          id: "9.1",
          title: "Lecture 9.1: Introduction to Server-Side Rendering",
        },
        { id: "9.2", title: "Lecture 9.2: Next.js Basics" },
      ],
    },
    {
      title: "Module 10: Deployment",
      description: "...",
      lectures: [
        { id: "10.1", title: "Lecture 10.1: Deploying to Vercel" },
        {
          id: "10.2",
          title: "Lecture 10.2: Continuous Integration/Continuous Deployment",
        },
      ],
    },
  ];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleCheckboxChange = (lectureId) => {
    setCheckedLectures((prevCheckedLectures) =>
      prevCheckedLectures.includes(lectureId)
        ? prevCheckedLectures.filter((id) => id !== lectureId)
        : [...prevCheckedLectures, lectureId]
    );
  };

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
            <h3>Course Description</h3>
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
            <h3>Course Objectives</h3>
            <ul style={justifyText}>
              <li>Understand the core concepts of React</li>
              <li>Learn how to build React applications</li>
              <li>...</li>
            </ul>
            <hr />
            <div className="row my-2">
              <div className="col-md-3">
                <h4>Course Duration:</h4>
                <p>
                    {courseData && courseData.tableout.course_duration.N}
                </p>
              </div>
              <div className="col-md-3">
                <h4>Course Level:</h4>
                <p>Beginner</p>
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
            </div>
            <hr />
          </div>
        );

      case "Comments":
        return (
          <div className="m-3">
            <h3>Comments</h3>
            {/* in this form i need name, email, textarea, submit */}
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" />
                <br />
                <label htmlFor="comment">Comment:</label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="3"
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

//   const renderLectures = (lectures) => (
//     <ol className="list-unstyled">
//       {lectures.map((lecture) => (
//         <li key={lecture.id} className="lecture-item">
//           <div className="col-md-12 d-flex align-items-start flex-column">
//             <div className="d-flex align-items-center">
//               <input
//                 type="checkbox"
//                 checked={checkedLectures.includes(lecture.id)}
//                 onChange={() => handleCheckboxChange(lecture.id)}
//                 style={{
//                   width: "20px",
//                   height: "20px",
//                   marginLeft: "10px",
//                   cursor: "pointer",
//                 }}
//               />
//               <a href="#" className="" style={{ marginLeft: "20px" }}>
//                 {lecture.title}
//               </a>
//             </div>
//           </div>
//           <hr />
//         </li>
//       ))}
//     </ol>
//   );

// function how(){

// }

const renderLectures = (moduleName, lectures) => {
    return lectures.map((lecture, index) => (
      <div key={index} onClick={() => fetchObfuscatedURL(lecture.S)}>
        <input
          type="checkbox"
          id={`${moduleName}-lecture${index}`}
          value={lecture.S.split("/")[1]}
          // Add any necessary event handlers or props here
        />
        <label htmlFor={`${moduleName}-lecture${index}`}>{lecture.S.split("/")[2]}</label>
      </div>
    ));
  };
  


  const totalLectures = modules.reduce(
    (sum, module) => sum + module.lectures.length,
    0
  );
  const checkedCount = checkedLectures.length;

//   const renderModuleProgress = () =>
//     {
//         for( let modules in (courseData &&  courseData.tableout.Modules.M)){
//             (
//                 <li className={`list-group-item module-item ${styles.moduleItem}`}>
//                   <details>
//                     <summary className="m-2">{modules}</summary>
//                     <hr />
//                     {renderLectures(courseData.tableout.Modules.M[modules].L)}
//                   </details>
//                 </li>
//               );
//         }
//     }
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
    

    // modules.map((module, index) => {
    //   const moduleCheckedCount = module.lectures.filter((lecture) =>
    //     checkedLectures.includes(lecture.id)
    //   ).length;
    //   return (
    //     <li
    //       key={index}
    //       className={`list-group-item module-item ${styles.moduleItem}`}
    //     >
    //       <details>
    //         <summary className="m-2">{module.title}</summary>
    //         <hr />
    //         {renderLectures(module.lectures)}
    //       </details>
    //     </li>
    //   );
    // });

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

  return (
    <div className="container-fluid course-player">
      <div className={`row `}>
        <div className="col-md-8 col-lg-9 video-player">
            {/* <Helper
            url={obfuscatedURL}
            /> */}
            <ReactPlayer
            url={`http://localhost:8081/videos/sendvideo/${obfuscatedURL}`}
            controls
            ontrols width={'100%'} height={'600px'} 
            />
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
                <li className={`nav-item ${styles.mobileContent}`}>
                  <button
                    className={`nav-link ${
                      selectedTab === "Course Content" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Course Content")}
                  >
                    Progress
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      selectedTab === "Bookmarks" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Bookmarks")}
                  >
                    Bookmarks
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      selectedTab === "Comments" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Comments")}
                  >
                    Comments
                  </button>
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
            <div
              class="trigger"
              className={`{styles.displayProgress} flex-item`}
            >
              <button className="btn btn-outline-dark" onClick={handleTrigger}>
                Progress
              </button>
            </div>
            <div
              id="content"
              style={FloatingDiv}
              className={`{styles.FloatingDiv} flex-item`}
            >
              <h4>Your Progress:</h4>
              <p>
                {Math.round((checkedCount / totalLectures) * 100)}% completed
              </p>
            </div>
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
