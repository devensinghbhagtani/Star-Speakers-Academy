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
        <div className="form-control">
            <div className="row my-4">
                <div className="col-md-6">
                    <label htmlFor="course-name" className="courseDetail">Course Name: </label>
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        id="course-name"
                        name="title"
                        placeholder="Enter Course Name"
                        value={courseData.title}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <label htmlFor="course-description" className="courseDetail">Course Description: </label>
                </div>
                <div className="col-md-4">
                    <textarea
                        className="form-control"
                        id="course-description"
                        name="description"
                        rows="3"
                        placeholder="Enter Course Description"
                        value={courseData.description}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <label htmlFor="course-video" className="courseDetail">Course Video: </label>
                </div>
                <div className="col-md-4">
                    <input
                        type="file"
                        className="form-control"
                        id="course-video"
                        name="coursevideo"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <label htmlFor="course-price" className="courseDetail">Price: </label>
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        id="course-price"
                        name="price"
                        placeholder="Enter Course Price"
                        value={courseData.price}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <label htmlFor="course-timing" className="courseDetail">Course Timing: </label>
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        id="course-timing"
                        name="timing"
                        placeholder="Enter Course Timing"
                        value={courseData.timing}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <label htmlFor="course-duration" className="courseDetail">Course Duration: </label>
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        id="course-duration"
                        name="duration"
                        placeholder="Enter Course Duration"
                        value={courseData.duration}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <label htmlFor="course-language" className="courseDetail">Course Language: </label>
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        id="course-language"
                        name="language"
                        placeholder="Enter Course Language"
                        value={courseData.language}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <label htmlFor="course-line" className="courseDetail">Course Line: </label>
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        id="course-line"
                        name="line"
                        placeholder="Enter Course Line"
                        value={courseData.line}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <label htmlFor="course-speaker" className="courseDetail">Course Speaker: </label>
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        id="course-speaker"
                        name="speaker"
                        placeholder="Enter Course Speaker"
                        value={courseData.speaker}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-6">
                    <label htmlFor="course-discount" className="courseDetail">Discount: </label>
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        id="course-discount"
                        name="discount"
                        placeholder="Enter Course Discount"
                        value={courseData.discount}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    );
}
