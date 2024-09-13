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
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4" style={cardStyle}>
            <div className="relative pb-3/2">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    // https://www.youtube.com/watch?v=0K4nIY0jAd8
                    src={`https://www.youtube.com/embed/0K4nIY0jAd8?si=gJ6ukDW0TtVZl4CY`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{courseTitle}</h3>
                <p className="text-gray-700 mb-4">{courseDesc}</p>
                <button
                    className="bg-custom-green text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={handleClick}
                >
                    View Course Details
                </button>
            </div>
        </div>
    );
}