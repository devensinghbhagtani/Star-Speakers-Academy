import React, { useState, useEffect } from 'react';
import "./viewCourses.css"
import axios from 'axios';

export default function ViewVideo({ courseTitle, courseDesc, onCourseClick, course_image_url }) {
    const videoId = 'ck9W2A77taU'; // Specific video ID
    const [videoTitle, setVideoTitle] = useState('');

    const handleClick = () => {
        
        const confirtmation = window.confirm(`Are you sure you want to delete ${courseTitle} there might me high chance many users must have bought this course already or still might 
            be in the process of buying it?`);
        if(confirtmation){
            console.log(`Deleting ${courseTitle}`);
            deleteCourse(courseTitle)
        }
        else{
            onCourseClick(courseTitle);
        }
    };

    async function deleteCourse(courseName) {
        try {
            const response = await axios.post(`http://localhost:8081/videos/deletevideo`, 
                { courseName }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response.data);
            alert(response.data.message);
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    }
    


    const cardStyle = {
        margin: 'auto',
        width: '20rem',
        height: 'auto',
    }
    // bg-white shadow-md rounded-lg overflow-hidden mb-4 relative pb-3/2 className="absolute top-0 left-0 w-full h-full"
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 relative" style={cardStyle}>
            <div className="video-container relative pb-3/2">
                <img 
                className="top-0 left-0 w-full h-full object-cover "
                src={course_image_url} 
                alt="course_image" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                {/* <iframe
                    width="100%"
                    height="315" // Adjust height as needed
                    src={course_image_url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe> */}
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{courseTitle}</h3>
                <p className="text-gray-700 mb-4">{courseDesc}</p>
                <button
                    className="bg-custom-green text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={handleClick}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}