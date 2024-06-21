import React from 'react';

export default function LectureAdd({ lecture, lectureIndex, handleLectureChange }) {
    return (
        <div key={lectureIndex} className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Lecture {lectureIndex + 1}</h5>
                <div className="form-group">
                    <div className="row my-3">
                        <div className="col-md-6">
                            <label htmlFor={`lecture-title-${lectureIndex}`}>Lecture Title</label>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                id={`lecture-title-${lectureIndex}`}
                                name="lectitle"
                                placeholder="Enter Lecture Title"
                                value={lecture.lectitle}
                                onChange={handleLectureChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row my-3">
                        <div className="col-md-6">
                            <label htmlFor={`lecture-video-${lectureIndex}`}>Lecture Video</label>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="file"
                                className="form-control"
                                id={`lecture-video-${lectureIndex}`}
                                name="lecvideoUrl"
                                placeholder="Enter Lecture Video URL"
                                onChange={handleLectureChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row my-3">
                        <div className="col-md-6">
                            <label htmlFor={`lecture-description-${lectureIndex}`}>Lecture Description</label>
                        </div>
                        <div className="col-md-4">
                            <textarea
                                className="form-control"
                                id={`lecture-description-${lectureIndex}`}
                                name="lecdescription"
                                rows="3"
                                placeholder="Enter Lecture Description"
                                value={lecture.lecdescription}
                                onChange={handleLectureChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
