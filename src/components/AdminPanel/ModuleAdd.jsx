import React from 'react';
import { useState } from 'react';
import LectureAdd from './LectureAdd';

export default function ModuleAdd({ module, moduleIndex, handleLectureChange, handleModuleChange ,handleAddLecture, modulecount, handleDeleteLecture, handleDeleteModule }) {

    const [lectureCount, setlectureCount] = useState(0);

  
    return (
        <div className="space-y-4">
            <div key={moduleIndex} className="bg-white shadow-md rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between border-b pb-2 mb-4">
                    <h5 className="text-xl font-semibold">Course Module {moduleIndex + 1}</h5>
                    
                    <button 
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    onClick={() => handleDeleteModule(moduleIndex)}  // Use delete function here
                >
                    Delete Module
                </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full md:w-1/3">
                                <label htmlFor={`module-name-${moduleIndex}`} className="block font-semibold mb-2">Module Name:</label>
                            </div>
                            <div className="w-full md:w-2/3">
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                    id={`module-name-${moduleIndex}`}
                                    name={`modname${moduleIndex}`}
                                    placeholder="Enter Module Name"
                                    onChange={(event) => handleModuleChange(moduleIndex, event)}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full md:w-1/3">
                                <label htmlFor={`module-description-${moduleIndex}`} className="block font-semibold mb-2">Module Description:</label>
                            </div>
                            <div className="w-full md:w-2/3">
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                    id={`module-description-${moduleIndex}`}
                                    name={`moddescription${moduleIndex}`}
                                    rows="3"
                                    placeholder="Enter Module Description"
                                    onChange={(event) => handleModuleChange(moduleIndex, event)}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full md:w-1/3">
                                <label htmlFor={`module-video-${moduleIndex}`} className="block font-semibold mb-2">Module Video:</label>
                            </div>
                            <div className="w-full md:w-2/3">
                                <input
                                    type="file"
                                    required
                                    className="w-full text-gray-600"
                                    id={`module-video-${moduleIndex}`}
                                    name={`modvideoUrl${moduleIndex}`}
                                    onChange={(event) => handleModuleChange(moduleIndex, event)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-4">
                    {module.lectures.map((lecture, lectureIndex) => (
                        <LectureAdd
                            key={lectureIndex}
                            lecture={lecture}
                            moduleIndex={moduleIndex}
                            lectureIndex={lectureIndex}
                            handleLectureChange={handleLectureChange}
                            handleAddLecture={handleAddLecture}
                            handleDeleteLecture={handleDeleteLecture}
                        />
                    ))}
                </div>
                <button
                        className="bg-blue-500 text-white text-md p-2 rounded hover:bg-blue-600"
                        onClick={() => handleAddLecture(moduleIndex)}
                    >
                        + Add Lecture
                    </button>
            </div>
            
        </div>
    );
    
}

//     return (
//         <div>
//             <hr />
//             <div key={moduleIndex} className="card mb-3">
//                 <div className="card-header d-flex justify-content-between">
//                     <h5 className="card-title">Course Module {moduleIndex + 1}</h5>
//                     <button className="btn btn-sm btn-primary" onClick={()=>handleLectureChange(moduleIndex)}>
//                         + Add Lecture
//                     </button>
//                 </div>
//                 <div className="card-body">
//                     <div className="form-group m-auto">
//                         <div className="row my-4">
//                             <div className="col-md-6">
//                                 <label htmlFor={`module-name-${moduleIndex}`}>Module Name: </label>
//                             </div>
//                             <div className="col-md-4">
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id={`module-name-${moduleIndex}`}
//                                     name={`modname`+moduleIndex}
//                                     placeholder="Enter Module Name"
                                    
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="row my-4">
//                             <div className="col-md-6">
//                                 <label htmlFor={`module-description-${moduleIndex}`}>Module Description: </label>
//                             </div>
//                             <div className="col-md-4">
//                                 <textarea
//                                     className="form-control"
//                                     id={`module-description-${moduleIndex}`}
//                                     name={"moddescription"+moduleIndex}
//                                     rows="3"
//                                     placeholder="Enter Module Description"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="form-group">
//                         <div className="row my-4">
//                             <div className="col-md-6">
//                                 <label htmlFor={`module-video-${moduleIndex}`}>Module Video: </label>
//                             </div>
//                             <div className="col-md-4">
//                                 <input
//                                     type="file"
//                                     className="form-control"
//                                     id={`module-video-${moduleIndex}`}
//                                     name={"modvideoUrl"+moduleIndex}
//                                     placeholder="Enter Module Video URL (Optional)"
//                                     onChange={(event) => handleModuleChange(moduleIndex, event)}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card-footer">
//                     {module.lectures.map((lecture, lectureIndex) => (
//                         <LectureAdd
//                             key={lectureIndex}
//                             lecture={lecture}
//                             lectureCount={lectureCount}
//                             lectureIndex={lectureIndex}
//                             handleLectureChange={(event) => handleLectureChange(moduleIndex, lectureIndex, event)}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
