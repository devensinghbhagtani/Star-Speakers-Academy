import React, { useState, useEffect } from 'react';
import "./viewCourses.css"
import axios from 'axios';
import Swal from 'sweetalert2';
import { render } from 'react-dom';

export default function ViewVideo({ courseTitle, courseDesc, onCourseClick, course_image_url }) {
    const videoId = 'ck9W2A77taU'; // Specific video ID
    const [course, setcourse] = useState('');
    const [coursemodules, setcoursemodules] = useState({});
    const [videoTitle, setVideoTitle] = useState('');

    const handleClick = () => {

        // const confirtmation = window.confirm(`Are you sure you want to delete ${courseTitle} there might me high chance many users must have bought this course already or still might 
        //     be in the process of buying it?`);

        Swal.fire({
            title: 'Are you sure?',
            text: `Are you sure you want to delete ${courseTitle} there might me high chance many users must have bought this course already or still might
            be in the process of buying it?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(`Deleting ${courseTitle}`);
                deleteCourse(courseTitle);
            }
        });

    };

    async function deleteCourse(courseName) {
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/videos/deletevideo`,
                { courseName },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response.data);
            // alert(response.data.message);
            Swal.fire({
                title: 'Success',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'OK',
                timer: 1500,
            }).then(() => {
                window.location.reload();
            });
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    }

    const editCourse = () => {
        // onCourseClick(courseTitle);
        getCourseInfo(courseTitle);
        openModal();
    };

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    }


    function handleCourseEdt(event) {
        event.preventDefault();
        const edit = document.getElementById('edit').value;
        const newvalue = document.getElementById('newvalue').value;
        console.log(courseTitle, edit, newvalue);
       updatecourseinfo(courseTitle,edit, newvalue);
    }

    const getCourseInfo = async (courseTitle) => {
		try {
			const response = await axios.get(
				`${import.meta.env.VITE_SERVER_URL}/videos/getvideodetails?folder=${courseTitle}`
			);
			// console.log("Response:", response.data.tableout.Modules.M);
            setcoursemodules(Object.keys(response.data?.tableout?.Modules?.M));
            

		} catch (error) {
			console.error("Error fetching course information:", error);
		}
	}
    useEffect(() => {
        getCourseInfo(courseTitle);
    }, []);

    async function updatecourseinfo(courseTitle, param, value){
        const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/masterclass/editcourse`, {
            course: courseTitle,
            param: param,
            value: value
        });
        console.log(res.data);
        if(res.status === 200){
            Swal.fire({
                title: "Success",
                text: res.data.message,
                icon: "success",
                timer: 1500
            });
        }
        else{
            Swal.fire({
                title: "Error",
                text: res.data.message,
                icon: "error",
                timer: 1500
            });
        }
    }

    async function editmodule(courseTitle, module, moduleName){
        const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/masterclass/editmodulename`, {
            course: courseTitle,
            moduleold: module,
            modulenew: moduleName
        });
        if(res.status === 200){
            Swal.fire({
                title: "Success",
                text: res.data.message,
                icon: "success",
                timer: 1500
            });
        }
        else{
            Swal.fire({
                title: "Error",
                text: res.data.message,
                icon: "error",
                timer: 1500
            });
        }
    }

    async function deletemodule(courseTitle, module){
        const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/masterclass/deletemodule`, {
            course: courseTitle,
            module: module
        });
        if(res.status === 200){
            Swal.fire({
                title: "Success",
                text: res.data.message,
                icon: "success",
                timer: 1500
            });
        }
        else{
            Swal.fire({
                title: "Error",
                text: res.data.message,
                icon: "error",
                timer: 1500
            });
        }
    }



    const handleModuleEdit = (e) => {
        e.preventDefault();
    
        const buttonName = e.nativeEvent.submitter.name;
   
        const module = document.getElementById('module').value;
        const moduleName = document.getElementById('module-name').value;

        console.log(courseTitle, module, moduleName, buttonName);
    
        if (buttonName === 'update') {
            editmodule(courseTitle, module, moduleName);
        } else if (buttonName === 'delete') {
            console.log(courseTitle, module);
            deletemodule(courseTitle, module);
        }
    }    

 

 

 


    const handleAddModuleEdit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data.get('module-name'));
        addModule(courseTitle, data.get('module-name'));
    }

    async function addModule(courseTitle, moduleName){
        const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/masterclass/addnewmodule`, {
            course: courseTitle,
            module: moduleName
        });
        console.log(res);
        if(res.status === 200){
            Swal.fire({
                title: "Success",
                text: res.data.message,
                icon: "success",
                timer: 1500
            });
        }
        else{
            Swal.fire({
                title: "Error",
                text: res.data.message,
                icon: "error",
                timer: 1500
            });
        }
    }


    const handleAddLectureEdit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
   
        const send = new FormData();
        send.append('course', courseTitle);
        send.append('folder', data.get('modulename'));
        send.append('lec_name', data.get('lecture-name'));
        send.append('coursevideo', data.get('lecture-video'));
        addlec(send);
    }

    async function addlec(data){
        const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/masterclass/editaddlec`, 
        data,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
            
        console.log(res);
        if(res.status === 200){
            Swal.fire({
                title: "Success",
                text: res.data.message,
                icon: "success",
                timer: 1500
            });
        }
        else{
            Swal.fire({
                title: "Error",
                text: res.data.message,
                icon: "error",
                timer: 1500
            });
        }
    }

    const EditModal = () => {
        return (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h2
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Edit Course
                      </h2>
                      <hr className="my-3" />
                      <form onSubmit={handleCourseEdt}>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Select what do you want to edit from the course?
                          </p>
                          <div className="mt-2">
                            <select
                              id="edit"
                              name="edit"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="" disabled selected>
                                Select Option
                              </option>

                              <option value="course_description">
                                Description
                              </option>
                              <option value="price">Price</option>
                              <option value="course_duration">Duration</option>
                              <option value="course_timing">Timing</option>
                              <option value="course_language">Language</option>
                              <option value="course_line">Course Line</option>
                              <option value="course_speaker">Speaker</option>
                              <option value="discount">Discount</option>
                            </select>
                          </div>
                          <div className="mt-2">
                            <input
                              type="text"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id="newvalue"
                              name="newvalue"
                              placeholder="Enter new value"
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <button className="bg-custom-green text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Update changes
                          </button>
                        </div>
                      </form>
                      <hr className="my-6" />
                      <form onSubmit={handleModuleEdit}>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Change Module details? Select existing module
                          </p>
                          <div className="mt-2">
                            <select
                              id="module"
                              name="module"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              {coursemodules.length > 0 ? (
                                coursemodules.map((module, index) => (
                                  <option key={index} value={module}>
                                    {module}
                                  </option>
                                ))
                              ) : (
                                <option value="" disabled>
                                  No modules available
                                </option>
                              )}
                            </select>
                          </div>
                          <div className="mt-2">
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id="module-name"
                              name="module-name"
                              placeholder="Enter Module Name"
                            />
                            <button
                              type="submit"
                              name="update" // Add a name attribute to identify this button
                              className="bg-custom-green text-white py-2 my-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2"
                            >
                              Update Name
                            </button>
                            <button
                              type="submit"
                              name="delete" // Add a name attribute to identify this button
                              className="bg-red-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                              Delete Module
                            </button>
                          </div>
                        </div>
                      </form>

                      <hr className="my-4" />
                      {/* add module feature where input is name, module video, module description  */}
                      <form onSubmit={handleAddModuleEdit}>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Add new module?
                          </p>
                          <div className="mt-2">
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id="module-name"
                              name="module-name"
                              placeholder="Enter Module Name"
                            />
                            {/* <input
                                                    type="file"
                                                    className="w-full text-gray-600 p-2"
                                                    id="module-video"
                                                    name="module-video"
                                                />
                                                <textarea
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    id="module-description"
                                                    name="module-description"
                                                    rows="2"
                                                    placeholder="Enter Module Description"
                                                />   */}
                            <button className="bg-custom-green text-white py-2 my-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2">
                              Add Module
                            </button>
                          </div>
                        </div>
                      </form>
                      <hr className="my-4" />
                      {/* add lecture feature where input is name, lecture video, lecture description */}
                      <form onSubmit={handleAddLectureEdit}>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Add new lecture?
                          </p>
                          <div className="mt-2">
                            {/* select for modules */}
                            <select
                              id="module"
                              name="modulename"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              {coursemodules.length > 0 ? (
                                coursemodules.map((module, index) => (
                                  <option key={index} value={module} name={module}>
                                    {module}
                                  </option>
                                ))
                              ) : (
                                <option value="" disabled>
                                  No modules available
                                </option>
                              )}
                            </select>

                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              id="lecture-name"
                              name="lecture-name"
                              placeholder="Enter Lecture Name"
                            />
                            <input
                              type="file"
                              className="w-full text-gray-600 p-2"
                              id="lecture-video"
                              name="lecture-video"
                            />

                            <button className="bg-custom-green text-white py-2 my-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2">
                              Add Lecture
                            </button>
                          </div>
                        </div>
                      </form>
                      <hr className="my-4" />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  {/* <button onClick={closeModal} type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-custom-green text-base font-medium text-white hover:bg-custom-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Edit
                            </button> */}
                  <button
                    onClick={closeModal}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    };





    const handleCourseClick = () => {
        onCourseClick(courseTitle);
    };


    const cardStyle = {
        margin: 'auto',
        width: '20rem',
        height: 'auto',
    }
    // bg-white shadow-md rounded-lg overflow-hidden mb-4 relative pb-3/2 className="absolute top-0 left-0 w-full h-full"
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 relative" style={cardStyle}>
            <div className="video-container relative pb-3/2">
                <img
                    className="top-0 left-0 w-full h-full object-cover "
                    src={course_image_url}
                    alt="course_image"
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
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{courseTitle}</h3>
                <p className="text-gray-700 mb-4">{courseDesc}</p>
                <button
                    className="bg-custom-green text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2"
                    onClick={handleClick}
                >
                    Delete
                </button>
                {/* Edit course button */}
                <button
                    className="bg-custom-green text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mr-2"
                    onClick={editCourse}
                >
                    Edit
                </button>
                {showModal ? 
                <EditModal  
                /> : null}
                <button
                    className="bg-custom-green text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={handleCourseClick}
                >
                    View
                </button>

            </div>
        </div>
    );
}