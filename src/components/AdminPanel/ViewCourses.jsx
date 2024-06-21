import React, { useState, useEffect } from 'react';
import ViewVideo from './ViewVideo';


export default function ViewCourses() {
    const [courses, setCourses] = useState([]);
    
    const [selectedCourseTitle, setSelectedCourseTitle] = useState(''); // State to store the clicked course title

    const handleCourseClick = (title) => {
        setSelectedCourseTitle(title); // Update state with the clicked course title
        console.log(`Selected Course: ${title}`); // Log the clicked course title
        // yaha se we can add the function that will show the course details
    };


    const CourseDetails = [
        { title: 'Course 1', description: 'Description 1' },
        { title: 'Course 2', description: 'Description 2' },
        { title: 'Course 3', description: 'Description 3' },
    ];

    useEffect(() => {
        setCourses(CourseDetails);
    }, []);

    return (
        <div className="container courses-container">
            <h1>Courses</h1>
            <div className="row course-grid">
                {courses.map((course) => (
                    <ViewVideo key={course.title} courseTitle = {course.title} courseDesc = {course.description} onCourseClick={handleCourseClick} />
                ))}
            </div>
            <hr />
        </div>
    );

}

