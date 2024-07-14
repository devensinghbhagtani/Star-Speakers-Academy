import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
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
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Main /> },
//       { path: "about", element: <About /> },
//       { path: "master-class", element: <MasterClass /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="courses/" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="/course/:folder" element={<CourseDetails />} /> */}
        <Route path="/course/:folder" element={<DisplayCourses />} />
        <Route path="/course" element={<CourseHome />}/> 
        <Route path="1" element={<CourseDetails />} />
      </Route>
      <Route path="/master-class" element={<MasterClass />} />
      <Route path="/admin" element={<AdminHome />}>
    
        <Route path="/admin/addCourse" element={<AddCourse />} />
        <Route path="/admin/viewCourses" element={<ViewCourses />} />
        <Route path="/admin/MasterClassEdit" element={<MasterClassEdit />} />
        <Route path="/admin/EditHome" element={<EditHome />} />
       
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
