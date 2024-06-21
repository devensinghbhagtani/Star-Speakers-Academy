import React, { useState } from 'react';
import ModuleAdd from './ModuleAdd';
import CourseDetails from './CourseDetails';

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

    const handleAddModule = () => {
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

    const handleSubmit = () => {
        // Send courseData to backend or log it
        console.log(courseData);
    };

    return (
        <div className="container text-center">
            <h1>Add Course</h1>
            <CourseDetails courseData={courseData} setCourseData={setCourseData} />
            {courseData.modules.map((module, moduleIndex) => (
                <ModuleAdd
                    key={moduleIndex}
                    module={module}
                    moduleIndex={moduleIndex}
                    handleLectureChange={handleLectureChange}
                    handleModuleChange={handleModuleChange}
                />
            ))}
            <hr className="m-4" />
            <button className="btn btn-secondary m-auto col-auto" onClick={handleAddModule}>
                + Add Module
            </button>
            <hr />
            <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
            </button>
            <hr />
        </div>
    );
}
