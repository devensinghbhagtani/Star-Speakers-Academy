import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="bg-gray-100 shadow-md border-b border-gray-200 py-3">
            <div className="container mx-auto flex items-center justify-between px-4">
                <a href="#" className="text-xl font-semibold text-gray-900">
                    Star Speakers Logo
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
                        className="text-gray-900 hover:text-blue-500 font-medium"
                        activeClassName="text-blue-600"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/admin/MasterClassEdit" 
                        className="text-gray-900 hover:text-blue-500 font-medium"
                        activeClassName="text-blue-600"
                    >
                        Master Class
                    </NavLink>
                    <NavLink 
                        to="/admin/addCourse" 
                        className="text-gray-900 hover:text-blue-500 font-medium"
                        activeClassName="text-blue-600"
                    >
                        Add
                    </NavLink>
                    <NavLink 
                        to="/admin/viewCourses" 
                        className="text-gray-900 hover:text-blue-500 font-medium"
                        activeClassName="text-blue-600"
                    >
                        View
                    </NavLink>
                    <NavLink 
                        to="/admin/editCourse" 
                        className="text-gray-900 hover:text-blue-500 font-medium"
                        activeClassName="text-blue-600"
                    >
                        Edit Course
                    </NavLink>
                    <NavLink 
                        to="/admin/EditHome" 
                        className="text-gray-900 hover:text-blue-500 font-medium"
                        activeClassName="text-blue-600"
                    >
                        Edit Home
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
