import React from 'react';
import { useState } from 'react';
import LectureAdd from './LectureAdd';

export default function ModuleAdd({ module, moduleIndex, handleLectureChange, handleModuleChange , modulecount}) {

    const [lectureCount, setlectureCount] = useState(0);

    // function work(){
    //     handleLectureChange(moduleIndex)
    //     setlectureCount(lectureCount+1)
    // }

    return (
        <div>
            <hr />
            <div key={moduleIndex} className="card mb-3">
                <div className="card-header d-flex justify-content-between">
                    <h5 className="card-title">Course Module {moduleIndex + 1}</h5>
                    <button className="btn btn-sm btn-primary" onClick={()=>handleLectureChange(moduleIndex)}>
                        + Add Lecture
                    </button>
                </div>
                <div className="card-body">
                    <div className="form-group m-auto">
                        <div className="row my-4">
                            <div className="col-md-6">
                                <label htmlFor={`module-name-${moduleIndex}`}>Module Name: </label>
                            </div>
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`module-name-${moduleIndex}`}
                                    name={`modname`+moduleIndex}
                                    placeholder="Enter Module Name"
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row my-4">
                            <div className="col-md-6">
                                <label htmlFor={`module-description-${moduleIndex}`}>Module Description: </label>
                            </div>
                            <div className="col-md-4">
                                <textarea
                                    className="form-control"
                                    id={`module-description-${moduleIndex}`}
                                    name={"moddescription"+moduleIndex}
                                    rows="3"
                                    placeholder="Enter Module Description"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row my-4">
                            <div className="col-md-6">
                                <label htmlFor={`module-video-${moduleIndex}`}>Module Video: </label>
                            </div>
                            <div className="col-md-4">
                                <input
                                    type="file"
                                    className="form-control"
                                    id={`module-video-${moduleIndex}`}
                                    name={"modvideoUrl"+moduleIndex}
                                    placeholder="Enter Module Video URL (Optional)"
                                    onChange={(event) => handleModuleChange(moduleIndex, event)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    {module.lectures.map((lecture, lectureIndex) => (
                        <LectureAdd
                            key={lectureIndex}
                            lecture={lecture}
                            lectureCount={lectureCount}
                            lectureIndex={lectureIndex}
                            handleLectureChange={(event) => handleLectureChange(moduleIndex, lectureIndex, event)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
