import React, { useState } from 'react';
import ModuleAdd from './ModuleAdd';
import CourseDetails from './CourseDetails';
import axios from 'axios';

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

    const handleAddModule = () => {
        setModuleCount(moduleCount + 1);
        setCourseData((prevData) => ({
            ...prevData,
            modules: [...prevData.modules, { modname: '', moddescription: '', modvideoUrl: '', lectures: [{ lectitle: '', lecdescription: '', lecvideoUrl: ''}] }],
        }));
    };

    const handleLectureChange = (moduleIndex, lectureIndex, event) => {
        
        const { name, value } = event.target;
        setCourseData((prevData) => {
            const modules = [...prevData.modules];
            const lectures = [...modules[moduleIndex].lectures];
            lectures[lectureIndex] = { ...lectures[lectureIndex], [name]: value };
            modules[moduleIndex].lectures = lectures;
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
        console.log(courseDataToSend);
    };

    const sendCourse = async (data) => {
        const url = 'http://localhost:8081/masterclass/addcourse';
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
    };

    return (
        <div className="container text-center">
            <h1>Add Course</h1>
            <form onSubmit={handleSubmit}>
                <CourseDetails courseData={courseData} setCourseData={setCourseData} />
                {courseData.modules.map((module, moduleIndex) => (
                    <ModuleAdd
                        key={moduleIndex}
                        module={module}
                        moduleIndex={moduleIndex}
                        handleLectureChange={handleLectureChange}
                        handleModuleChange={handleModuleChange}
                        moduleCount={moduleCount}
                    />
                ))}
                <hr className="m-4" />
                <button className="btn btn-secondary m-auto col-auto" type="button" onClick={handleAddModule}>
                    + Add Module
                </button>
                <hr />
                <button className="btn btn-primary">
                    Submit
                </button>
            </form>
            <hr />
        </div>
    );
}
