import React from 'react';
import { useState } from 'react';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, BrowserRouter, Outlet } from 'react-router-dom';
import Footer from './footer';

export default function CourseHome() {

    return (
        <>
        
        <NavBar />
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