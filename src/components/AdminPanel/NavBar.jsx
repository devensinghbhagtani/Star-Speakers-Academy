import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const navBarStyle = {
        backgroundColor: "#f8f9fa",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #e9ecef",
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg py-3" style={navBarStyle}>
                <div className="container">
                    <a className="navbar-brand" href="#">Star Speakers Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="" id="navbarNavAltMarkup" >
                        <div className="navbar-nav">
                            <NavLink to="/admin" className="nav-link">Home</NavLink>
                            <NavLink to="/admin/MasterClassEdit" className="nav-link">Master Class</NavLink>
                            <NavLink to="/admin/addCourse" className="nav-link">Add</NavLink>
                            <NavLink to="/admin/viewCourses" className="nav-link">View</NavLink>
                            <NavLink to="/admin/editCourse" className="nav-link">Edit Course</NavLink>
                            <NavLink to="/admin/EditHome" className="nav-link">Edit Home</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}