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
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
      </Route>
      <Route path="/master-class" element={<MasterClass />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
