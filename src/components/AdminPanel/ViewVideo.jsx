import React, { useState, useEffect } from 'react';
import "./viewCourses.css"

export default function ViewVideo({ courseTitle, courseDesc, onCourseClick }) {
    const videoId = 'ck9W2A77taU'; // Specific video ID
    const [videoTitle, setVideoTitle] = useState('');

    const handleClick = () => {
        onCourseClick(courseTitle); // Pass the course title to the parent component
    };

    const cardStyle = {
        margin: 'auto',
        width: '20rem',
        height: 'auto',
    }

    return (
        <div className="col-md-4 mb-4 course-card card" style={cardStyle}>
            <div className="video-container my-3">
                <iframe
                    width="100%"
                    height="315" // Adjust height as needed
                    // src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="card-body">
                <h3 className="card-title">{courseTitle}</h3>
                <p className="card-text">{courseDesc}</p>
                <div className="">
                    <button className="btn btn-primary" onClick={handleClick}>
                        View Course Details
                    </button>
                </div>
            </div>
        </div>
    );
}