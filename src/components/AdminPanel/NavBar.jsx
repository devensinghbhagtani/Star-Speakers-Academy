import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function NavBar() {

    const handleAdminLogout = () => {
        localStorage.clear(); 
        
        //  console.log("Logged out successfully");
        
        Swal.fire({
            icon: 'success',
            title: 'Logged out successfully',
            showConfirmButton: true,
            confirmButtonText: 'Okay',
            timer: 2500, 
        }).then(() => {
            window.location.href = '/login';
        });
    }
    return (
        <nav className="bg-zinc-800 shadow-md border-b border-gray-200 py-3">
            <div className="container mx-auto flex items-center justify-between px-4 h-16">
                <a href="#" className="text-xl font-semibold">
                    <img src="..//assets/Icons/logo.svg" alt="Star Speakers Academy" className="h-10" />
                </a>
                <button 
                    className="lg:hidden px-3 py-2 border border-gray-300 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={() => document.getElementById('navbarNavAltMarkup').classList.toggle('hidden')}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div id="navbarNavAltMarkup" className="hidden lg:flex lg:space-x-4">
                    <NavLink 
                        to="/admin/Display" 
                        className={({ isActive }) =>
                            `text-white ${
                              isActive ? "text-[#ffffff8f]" : "text-white"
                            } hover:text-[#ffffff8f]`
                          }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/admin/MasterClassEdit" 
                        className={({ isActive }) =>
                            `text-white ${
                              isActive ? "text-[#ffffff8f]" : "text-white"
                            } hover:text-[#ffffff8f]`
                          }
                    >
                        Master Class
                    </NavLink>
                    <NavLink 
                        to="/admin/addCourse" 
                        className={({ isActive }) =>
                            `text-white ${
                              isActive ? "text-[#ffffff8f]" : "text-white"
                            } hover:text-[#ffffff8f]`
                          }
                    >
                        Add
                    </NavLink>
                    <NavLink 
                        to="/admin/viewCourses" 
                        className={({ isActive }) =>
                            `text-white ${
                              isActive ? "text-[#ffffff8f]" : "text-white"
                            } hover:text-[#ffffff8f]`
                          }
                    >
                        View Courses
                    </NavLink>
                    {/* <NavLink 
                        to="/admin/editCourse" 
                        className={({ isActive }) =>
                            `text-white ${
                              isActive ? "text-[#ffffff8f]" : "text-white"
                            } hover:text-[#ffffff8f]`
                          }
                    >
                        Edit Course
                    </NavLink> */}
                    <NavLink 
                        to="/admin/EditHome" 
                        className={({ isActive }) =>
                            `text-white ${
                              isActive ? "text-[#ffffff8f]" : "text-white"
                            } hover:text-[#ffffff8f]`
                          }
                    >
                        Edit Home
                    </NavLink>

                    <NavLink
                        
                        onClick={() => { handleAdminLogout() }}
                        className={({ isActive }) =>
                            `text-white ${
                              isActive ? "text-[#ffffff8f]" : "text-white"
                            } hover:text-[#ffffff8f]`
                          }
                    >
                        Logout
                    </NavLink>

                </div>
            </div>
        </nav>
    );
}
