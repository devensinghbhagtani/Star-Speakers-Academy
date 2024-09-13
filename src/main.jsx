import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Main from "./components/Main.jsx";
import About from "./components/About/About.jsx";
import MasterClass from "./components/MasterClass/MasterClass.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Contact from "./components/ContactPage/Contact.jsx";
import CourseDetails from "./components/CourseContent/CourseDetails.jsx";
import AdminHome from "./components/AdminPanel/AdminHome.jsx";
import AddCourse from "./components/AdminPanel/addCourse.jsx";
import ViewCourses from "./components/AdminPanel/ViewCourses.jsx";
import MasterClassEdit from "./components/AdminPanel/MasterClassEdit.jsx";
import EditHome from "./components/AdminPanel/EditHome.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Login from "./components/LoginSignup/Login.jsx";
import Signup from "./components/LoginSignup/Signup.jsx";
import CourseHome from "./components/Course/CourseHome.jsx";
import DisplayCourses from "./components/Course/displayCourse.jsx";
import DisplayProfile from "./components/UserProfile/DisplayProfile.jsx";
import axios from "axios";
import Logout from "./components/LoginSignup/Logout.jsx";
import Forgotpassword from "./components/LoginSignup/Forgotpassword.jsx";
import Changepassword from "./components/LoginSignup/Changepassword.jsx";

import { UserProvider, useUser } from "./components/UserContext.jsx";
import "./index.css";
import AboutCourse from "./components/CourseContent/AboutCourse.jsx";
import { AdminDisplay } from "./components/AdminPanel/AdminDisplay.jsx";

const MainApp = () => {
  const [user, setUser] = useState(null);
  const [info, handleInfo] = useState(null);


  const ProfileWithUser = () => {
    const { user } = useUser();
    console.log(user);
    return <DisplayProfile user={user} />;
  };

  const CoursesWithUser = () => {
    const { user } = useUser();
    return <DisplayCourses user={user} />;
  };

  const CourseHomePage = () => {
    const { user } = useUser();
    return <CourseDetails user={user} />;
  };


  // Create routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<ProfileWithUser />} />
          <Route path="course/videos/:folder" element={<CoursesWithUser />} />
          <Route path="course" element={<CourseHome />} />
          <Route path="course/details/:folder" element={<CourseHomePage/>} />
          {/* <Route path="course1" element={<CourseDetails />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/resetpassword" element={<Forgotpassword />} />
          <Route path="changepassword" element={<Changepassword />} />
        </Route>
        <Route path="master-class" element={<MasterClass />} />
        <Route path="admin" element={<AdminHome />}>
          <Route index element={<AdminDisplay />} />
          <Route path="addCourse" element={<AddCourse />} />
          <Route path="Display" element={<AdminDisplay />} />
          <Route path="viewCourses" element={<ViewCourses />} />
          <Route path="MasterClassEdit" element={<MasterClassEdit />} />
          <Route path="EditHome" element={<EditHome />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

// Render the main app wrapped in UserProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <MainApp />
    </UserProvider>
  </React.StrictMode>
);
