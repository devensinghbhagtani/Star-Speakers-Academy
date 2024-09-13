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

    return (
        <div className="col-md-4 mb-4 course-card card" style={cardStyle}>
            <div className="video-container my-3">
                <img 
                src={course_image_url} 
                alt="course_image" 
                width="100%"
                height="315"
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
            <div className="card-body">
                <h3 className="card-title">{courseTitle}</h3>
                <p className="card-text">{courseDesc}</p>
                <div className="">
                    <button className="btn btn-primary" onClick={handleClick}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}