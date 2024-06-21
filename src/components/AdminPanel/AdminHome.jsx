import React from 'react';
import { useState } from 'react';
import AddCourse from './addCourse';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './NavBar';
import ViewCourses from './ViewCourses';
import { BrowserRouter as Router, Route, BrowserRouter, Outlet } from 'react-router-dom';
import MasterClassEdit from './MasterClassEdit';
import Footer from './footer';

export default function AdminHome() {

    return (
        <>
        
        <NavBar />
        <br />
        <br />
        <br /><hr />
        <br />
        <Outlet />
        <br />
        <hr />
        <Footer />
        </>

    )
}