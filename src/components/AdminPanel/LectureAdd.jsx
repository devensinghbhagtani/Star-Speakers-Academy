import React from 'react';

export default function LectureAdd({ lecture, moduleIndex, lectureIndex, handleLectureChange, lectureCount, handleAddLecture , handleDeleteLecture}) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="space-y-4">
                <h5 className="text-xl font-semibold">Lecture {lectureIndex + 1}</h5>

                <div>
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full md:w-1/2">
                            <label htmlFor={`lecture-title-${moduleIndex}-${lectureIndex}`} className="block font-semibold mb-2">Lecture Title</label>
                        </div>
                        <div className="w-full md:w-1/2">
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id={`lecture-title-${moduleIndex}-${lectureIndex}`}
                                name={`lectitle${moduleIndex}${lectureIndex}`}
                                required
                                onChange={(event) => handleLectureChange(moduleIndex, lectureIndex, event)}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full md:w-1/2">
                            <label htmlFor={`lecture-video-${moduleIndex}-${lectureIndex}`} className="block font-semibold mb-2">Lecture Video</label>
                        </div>
                        <div className="w-full md:w-1/2">
                            <input
                                type="file"
                                className="w-full text-gray-600"
                                id={`lecture-video-${moduleIndex}-${lectureIndex}`}
                                name={`lecvideoUrl${moduleIndex}${lectureIndex}`}
                                required
                                onChange={(event) => handleLectureChange(moduleIndex, lectureIndex, event)}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full md:w-1/2">
                            <label htmlFor={`lecture-description-${moduleIndex}-${lectureIndex}`} className="block font-semibold mb-2">Lecture Description</label>
                        </div>
                        <div className="w-full md:w-1/2">
                            <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id={`lecture-description-${moduleIndex}-${lectureIndex}`}
                                name={`lecdescription${moduleIndex}${lectureIndex}`}
                                rows="3"
                                placeholder="Enter Lecture Description"
                                required
                                onChange={(event) => handleLectureChange(moduleIndex, lectureIndex, event)}
                            />
                        </div>
                    </div>
                </div>
                <button
                type="button"
                onClick={() => handleDeleteLecture(moduleIndex, lectureIndex)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors"
            >
                Delete Lecture
            </button>
            
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
