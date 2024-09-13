import React from 'react';
import styles from "./CourseNavbar.module.css"; // Updated import path
import { NavLink } from 'react-router-dom';

export default function NavBar ({checkedCount, totalCount}) {
    const NavbarBtn = {
        color: 'white',
        cursor: 'pointer',
    }
    

    return (
        <div>
            <nav className={`${styles.navbarChange} navbar navbar-expand-lg py-3 `}>
                <div className="container-fluid">
                    <a className={`navbar-brand`} href="#">Star Speakers</a>
                    <div className={styles.verticleLine}></div> {/* This will now work correctly */}
                    <button className={`${styles.navbarChange} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`${styles.navbarChange} navbar-toggler-icon`} ></span>
                    </button>
                    <div className={`${styles.navbarChange} collapse navbar-collapse`} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            
                            <NavLink to="/course/displayCourse" className={`${styles.courseName} ${styles.navbarChange} nav-link`}>Course ka NAAM</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}