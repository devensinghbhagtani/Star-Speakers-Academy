import { useState } from "react";

export default function EditHome() {
    const courses = ["course1", "course2", "course3", "course4", "course5", "course6", "course7", "course8", "course9", "course10"];

    const SubmitCourses = () => {
        const course1 = document.getElementById("course1").value;
        const course2 = document.getElementById("course2").value;
        const course3 = document.getElementById("course3").value;

        if (course1 === course2 || course1 === course3 || course2 === course3) {
            alert("Courses must be unique");
            return;
        } else {
            alert("Courses Submitted");
            console.log(course1, course2, course3);
        }
    };

    const achievements = {
        students: 0,
        videos: 0,
        hours: 0,
        instructors: 0
    };

    const SubmitAchievements = () => {
        achievements.students = document.getElementById("noofStudents").value;
        achievements.videos = document.getElementById("noofVideos").value;
        achievements.hours = document.getElementById("noofHours").value;
        achievements.instructors = document.getElementById("noofInstructors").value;

        console.log(achievements);
        alert("Achievements Submitted");
    };

    const [newFeedBackFile, setNewFeedBackFile] = useState(0);

    const AddNewFeedBack = () => {
        setNewFeedBackFile(newFeedBackFile + 1);
        if (newFeedBackFile < 10) {
            const newFileDiv = document.createElement("div");
            newFileDiv.className = "my-4 p-4 border border-gray-300 rounded";
            newFileDiv.innerHTML = `
                <hr class="my-4" />
                <div class="my-3">
                    <label for="name${newFeedBackFile}" class="block text-gray-700 font-medium mb-1">Name</label>
                    <input type="text" name="name${newFeedBackFile}" id="name${newFeedBackFile}" placeholder="Name" class="form-input w-full border border-gray-300 rounded p-2" />
                </div>
                <div class="my-3">
                    <label for="role${newFeedBackFile}" class="block text-gray-700 font-medium mb-1">Role</label>
                    <input type="text" name="role${newFeedBackFile}" id="role${newFeedBackFile}" placeholder="Role" class="form-input w-full border border-gray-300 rounded p-2" />
                </div>
                <div class="my-3">
                    <label for="date${newFeedBackFile}" class="block text-gray-700 font-medium mb-1">Date</label>
                    <input type="date" name="date${newFeedBackFile}" id="date${newFeedBackFile}" class="form-input w-full border border-gray-300 rounded p-2" />
                </div>
                <div class="my-3">
                    <label for="feedback${newFeedBackFile}" class="block text-gray-700 font-medium mb-1">Feedback</label>
                    <textarea name="feedback${newFeedBackFile}" id="feedback${newFeedBackFile}" class="form-input w-full border border-gray-300 rounded p-2" rows="3"></textarea>
                </div>
            `;
            document.querySelector(".feedback-form").appendChild(newFileDiv);
        } else {
            alert("You can add only 10 new inputs");
        }
    };

    const FeedbackData = {
        names: [],
        roles: [],
        dates: [],
        feedbacks: []
    };

    const SubmitFeedback = () => {
        const names = [];
        const roles = [];
        const dates = [];
        const feedbacks = [];

        for (let i = 0; i < newFeedBackFile; i++) {
            names.push(document.getElementById(`name${i}`).value);
            roles.push(document.getElementById(`role${i}`).value);
            dates.push(document.getElementById(`date${i}`).value);
            feedbacks.push(document.getElementById(`feedback${i}`).value);
        }

        FeedbackData.names = names;
        FeedbackData.roles = roles;
        FeedbackData.dates = dates;
        FeedbackData.feedbacks = feedbacks;
        console.log(FeedbackData);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="my-6 p-4 border border-gray-300 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Edit 3 Courses for Home</h3>
                {["course1", "course2", "course3"].map((course, index) => (
                    <div className="mb-4" key={index}>
                        <label htmlFor={course} className="block text-gray-700 font-medium mb-1">Course {index + 1}</label>
                        <select name={course} id={course} className="form-select w-full border border-gray-300 rounded p-2">
                            {courses.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                ))}
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={SubmitCourses}>
                    Submit
                </button>
            </div>

            <hr className="my-6" />

            <div className="my-6 p-4 border border-gray-300 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Change Achievements</h3>
                {["students", "videos", "hours", "instructors"].map((item) => (
                    <div className="mb-4" key={item}>
                        <label htmlFor={`noof${item.charAt(0).toUpperCase() + item.slice(1)}`} className="block text-gray-700 font-medium mb-1">
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </label>
                        <input
                            type="number"
                            name={item}
                            id={`noof${item.charAt(0).toUpperCase() + item.slice(1)}`}
                            placeholder={`No of ${item.charAt(0).toUpperCase() + item.slice(1)}`}
                            className="form-input w-full border border-gray-300 rounded p-2"
                        />
                    </div>
                ))}
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={SubmitAchievements}>
                    Submit
                </button>
            </div>

            <hr className="my-6" />

            <div className="my-6 p-4 border border-gray-300 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Change Testimonials</h3>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2" onClick={AddNewFeedBack}>
                    Add New
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={SubmitFeedback}>
                    Submit
                </button>
                <p className="mt-4 text-gray-600">Click on Add New to add a new feedback form</p>
                <div className="feedback-form mt-4"></div>
            </div>
        </div>
    );
}
