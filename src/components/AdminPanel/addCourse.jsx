import React, { useState } from 'react';
import ModuleAdd from './ModuleAdd';
import CourseDetails from './CourseDetails';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function AddCourse() {
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        videoUrl: '',
        price: '',
        timing: '',
        duration: '',
        language: '',
        line: '',
        speaker: '',
        discount: '',
        modules: [],
    });
    const [moduleCount, setModuleCount] = useState(0);
    const [files,handlefiles]=useState([])

    const handleAddModule = () => {
        setModuleCount(moduleCount + 1);
        setCourseData((prevData) => ({
            ...prevData,
            modules: [...prevData.modules, { modname: '', moddescription: '', modvideoUrl: '', lectures: [{ lectitle: '', lecdescription: '', lecvideoUrl: ''}] }],
        }));
    };

    const handleDeleteLecture = (moduleIndex, lectureIndex) => {
        setCourseData((prevData) => {
            const modules = [...prevData.modules];
            modules[moduleIndex].lectures = modules[moduleIndex].lectures.filter((_, index) => index !== lectureIndex);
            return { ...prevData, modules };
        });
    };
    

    const handleAddLecture = (moduleIndex) => {
        setCourseData((prevData) => {
            const updatedModules = [...prevData.modules];
            const newLecture = { lectitle: '', lecdescription: '', lecvideoUrl: '' };
            updatedModules[moduleIndex] = {
                ...updatedModules[moduleIndex],
                lectures: [...updatedModules[moduleIndex].lectures, newLecture]
            };
            return { ...prevData, modules: updatedModules };
        });
    };
    
    const handleLectureChange = (moduleIndex, lectureIndex, event) => {
        const { name, value } = event.target;
        setCourseData((prevData) => {
            const modules = [...prevData.modules];
            modules[moduleIndex].lectures[lectureIndex] = {
                ...modules[moduleIndex].lectures[lectureIndex],
                [name]: value,
            };
            return { ...prevData, modules };
        });
    };
    

    const handleModuleChange = (moduleIndex, event) => {
        const { name, value } = event.target;
        setCourseData((prevData) => {
            const modules = [...prevData.modules];
            modules[moduleIndex] = { ...modules[moduleIndex], [name]: value };
            return { ...prevData, modules };
        });
    };
    function displayModal(message, status) {
		if (status === "success") {
			Swal.fire({
				title: "Success",
				text: message,
				icon: "success",
				confirmButtonText: "OK",
			});
		}
		else {
			Swal.fire({
				title: "Error",
				text: message,
				icon: "error",
				confirmButtonText: "OK",
			});
		}
	}

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
        const modules = courseData.modules.map((module, i) => ({
            modname: data.get(`modname${i}`),
            moddescription: data.get(`moddescription${i}`),
            modvideoUrl: data.get(`modvideoUrl${i}`),
            lectures: module.lectures.map((lecture, j) => ({
                lectitle: data.get(`lectitle${i}${j}`),
                lecdescription: data.get(`lecdescription${i}${j}`),
                lecvideoUrl: data.get(`lecvideoUrl${i}${j}`),
            })),
        }));
    
        const courseDataToSend = {
            ...courseData,
            modules,
        };
    
        sendCourse(courseDataToSend);
    
        const formData = new FormData();
        formData.append('coursevideo', data.get('coursevideo'));
        formData.append('courseimage', data.get('courseimage'));
        formData.append('courseData', JSON.stringify(courseDataToSend));
    
        courseDataToSend.modules.forEach((module, i) => {    
            module.lectures.forEach((lecture, j) => {
                const lectureVideo = data.get(`lecvideoUrl${i}${j}`);
                if (lectureVideo) {
                    formData.append(`module${i} lecture${j}`, lectureVideo);
                }
            });
        });
    
        handlefilesupload(formData);
    };
    
    async function handlefilesupload(formData,) {
        console.log(formData);
    
        const url = `http://localhost:8081/masterclass/addcoursevideos`;
        try {
            const response = await axios.post(url,formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // console.log(response);
            displayModal("Files uploaded successfully", "success");
        } catch (error) {
            // console.error('Error uploading files:', error);
            displayModal("Error uploading files", "error");
        }
    }
    
    const handleDeleteModule = (moduleIndex) => {
        setCourseData((prevData) => {
            const modules = prevData.modules.filter((_, index) => index !== moduleIndex);
            return { ...prevData, modules };
        });
    };

    
    const sendCourse = async (data) => {
        const url = `http://localhost:8081/masterclass/addcourse`;
        try {
            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
        } catch (error) {
            // console.error('Error sending course data:', error);
            // displayModal("Error adding course", "error");
        }
        displayModal("Course added successfully", "success");
    };    

    return (
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-6">Add Course</h1>
            <form onSubmit={handleSubmit}>
                <CourseDetails courseData={courseData} setCourseData={setCourseData} />
                {courseData.modules.map((module, moduleIndex) => (
                    <ModuleAdd
                        key={moduleIndex}
                        module={module}
                        moduleIndex={moduleIndex}
                        handleLectureChange={handleLectureChange}
                        handleModuleChange={handleModuleChange}
                        handleAddLecture={handleAddLecture}
                        moduleCount={moduleCount}
                        handlefilesupload={handlefilesupload}
                        handleDeleteLecture={handleDeleteLecture}
                        handleDeleteModule={handleDeleteModule}  
                    />
                ))}
                <hr className="my-6 border-gray-300" />
                <button 
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors mb-4"
                    type="button" 
                    onClick={handleAddModule}
                >
                    + Add Module
                </button>
                <hr className="my-6 border-gray-300" />
                <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                    Submit
                </button>
            </form>
            <hr className="my-6 border-gray-300" />
        </div>
    );}