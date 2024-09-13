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
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4">Courses</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <ViewVideo
                        key={course.title}
                        courseTitle={course.title}
                        courseDesc={course.description}
                        onCourseClick={handleCourseClick}
                    />
                ))}
            </div>
            <hr className="my-6 border-gray-300" />
        </div>
    );
}

