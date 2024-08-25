import React from 'react';

export default function LectureAdd({ lecture, moduleIndex,lectureIndex, handleLectureChange, lectureCount , handleAddLecture}) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Lecture {lectureIndex + 1}</h5>
                <div className="form-group">
                    <div className="row my-3">
                        <div className="col-md-6">
                            <label htmlFor={`lecture-title-${moduleIndex}-${lectureIndex}`}>Lecture Title</label>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                id={`lecture-title-${moduleIndex}-${lectureIndex}`}
                                name={`lectitle${moduleIndex}${lectureIndex}`}
                                
                                onChange={(event) => handleLectureChange(moduleIndex, lectureIndex, event)}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row my-3">
                        <div className="col-md-6">
                            <label htmlFor={`lecture-video-${moduleIndex}-${lectureIndex}`}>Lecture Video</label>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="file"
                                className="form-control"
                                id={`lecture-video-${moduleIndex}-${lectureIndex}`}
                                name={`lecvideoUrl${moduleIndex}${lectureIndex}`}
                                onChange={(event) => handleLectureChange(moduleIndex, lectureIndex, event)}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row my-3">
                        <div className="col-md-6">
                            <label htmlFor={`lecture-description-${moduleIndex}-${lectureIndex}`}>Lecture Description</label>
                        </div>
                        <div className="col-md-4">
                            <textarea
                                className="form-control"
                                id={`lecture-description-${moduleIndex}-${lectureIndex}`}
                                name={`lecdescription${moduleIndex}${lectureIndex}`}
                                rows="3"
                                placeholder="Enter Lecture Description"
                               
                                onChange={(event) => handleLectureChange(moduleIndex, lectureIndex, event)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
//     return (
//         <div key={lectureIndex} className="card mb-3">
//             <div className="card-body">
//                 <h5 className="card-title">Lecture {lectureIndex + 1}</h5>
//                 <div className="form-group">
//                     <div className="row my-3">
//                         <div className="col-md-6">
//                             <label htmlFor={`lecture-title-${lectureIndex}`}>Lecture Title</label>
//                         </div>
//                         <div className="col-md-4">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id={`lecture-title-${lectureIndex}`}
//                                 name={"lectitle"+lectureCount}
//                                 placeholder="Enter Lecture Title"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <div className="row my-3">
//                         <div className="col-md-6">
//                             <label htmlFor={`lecture-video-${lectureIndex}`}>Lecture Video</label>
//                         </div>
//                         <div className="col-md-4">
//                             <input
//                                 type="file"
//                                 className="form-control"
//                                 id={`lecture-video-${lectureIndex}`}
//                                 name={"lecvideoUrl"+lectureCount}
//                                 placeholder="Enter Lecture Video URL"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <div className="row my-3">
//                         <div className="col-md-6">
//                             <label htmlFor={`lecture-description-${lectureIndex}`}>Lecture Description</label>
//                         </div>
//                         <div className="col-md-4">
//                             <textarea
//                                 className="form-control"
//                                 id={`lecture-description-${lectureIndex}`}
//                                 name={"lecdescription"+lectureCount}
//                                 rows="3"
//                                 placeholder="Enter Lecture Description"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
