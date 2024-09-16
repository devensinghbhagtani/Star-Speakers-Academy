import React from 'react';

export default function CourseDetails({ courseData, setCourseData }) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourseData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-name" className="block font-semibold mb-2">Course Name:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <input
                        type="text"
                        id="course-name"
                        name="title"
                        placeholder="Enter Course Name"
                        value={courseData.title}
                        required
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-description" className="block font-semibold mb-2">Course Description:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <textarea
                        id="course-description"
                        name="description"
                        rows="3"
                        required
                        placeholder="Enter Course Description"
                        value={courseData.description}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-image" className="block font-semibold mb-2">Course Image:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <input
                        type="file"
                        id="course-image"
                        required
                        name="courseimage"
                        onChange={handleInputChange}
                        className="w-full text-gray-600"
                    />
                </div>
            </div>

            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-video" className="block font-semibold mb-2">Course Video:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <input
                        type="file"
                        id="course-video"
                        required
                        name="coursevideo"
                        onChange={handleInputChange}
                        className="w-full text-gray-600"
                    />
                </div>
            </div>

            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-price" className="block font-semibold mb-2">Price:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <input
                        type="number"
                        id="course-price"
                        required
                        name="price"
                        placeholder="Enter Course Price"
                        value={courseData.price}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-timing" className="block font-semibold mb-2">Course Timing:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <input
                        type="time"
                        id="course-timing"
                        required
                        name="timing"
                        placeholder="Enter Course Timing"
                        value={courseData.timing}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-duration" className="block font-semibold mb-2">Course Duration:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <input
                        type="number"
                        id="course-duration"
                        name="duration"
                        required
                        placeholder="Enter Course Duration (in minutes)"
                        value={courseData.duration}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-language" className="block font-semibold mb-2">Course Language:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <input
                        type="text"
                        id="course-language"
                        name="language"
                        required
                        placeholder="Enter Course Language"
                        value={courseData.language}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-line" className="block font-semibold mb-2">Course Line:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <input
                        type="text"
                        id="course-line"
                        name="line"
                        required
                        placeholder="Enter Course Line"
                        value={courseData.line}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-speaker" className="block font-semibold mb-2">Course Speaker:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <input
                        type="text"
                        id="course-speaker"
                        required
                        name="speaker"
                        placeholder="Enter Course Speaker"
                        value={courseData.speaker}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex flex-wrap my-4">
                <div className="w-full md:w-1/2">
                    <label htmlFor="course-discount" className="block font-semibold mb-2">Discount:</label>
                </div>
                <div className="w-full md:w-1/2">
                    <input
                        type="number"
                        id="course-discount"
                        name="discount"
                        required
                        placeholder="Enter Course Discount (in percent)"
                        value={courseData.discount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );
}
