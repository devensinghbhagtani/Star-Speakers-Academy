import { useState, useEffect } from "react";
import axios from 'axios';


export default function EditHome() {

    const [info, setInfo] = useState(null);

    async function fetchVideos() {
        try {
            const response = await axios.get('http://localhost:8081/videos/getcoursenames')
            console.log(response.data.response);
            setInfo(response.data.response);

        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    }
    useEffect(() => {
        fetchVideos();
    }, []);

    async function sendpopularcourse(data) {
        try {
            const response = await axios.post('http://localhost:8081/videos/addpopularcourse', data)
            console.log(response.data);
            alert(response.data.message);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    }


    const SubmitCourses = (event) => {
        event.preventDefault();
        // alert("Courses Submitted");
        if (document.getElementById("course1").value === document.getElementById("course2").value || document.getElementById("course1").value === document.getElementById("course3").value || document.getElementById("course2").value === document.getElementById("course3").value) {
            alert("Courses must be unique");
            return;
        }
        else {
            sendpopularcourse([
                { S: document.getElementById("course1").value },
                { S: document.getElementById("course2").value },
                { S: document.getElementById("course3").value }
            ]);
            console.log(document.getElementById("course1").value);
            console.log(document.getElementById("course2").value);
            console.log(document.getElementById("course3").value);
        }
    };

    const achievements = {
        students: 0,
        videos: 0,
        hours: 0,
        instructors: 0
    }

    async function sendachievements(data) {
        try {
            const response = await axios.post('http://localhost:8081/masterclass/addachievements', data)
            console.log(response.data);
            alert(response.data.message);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    }




    const SubmitAchievements = () => {
        achievements.students = document.getElementById("noofStudents").value;
        achievements.videos = document.getElementById("noofVideos").value;
        achievements.hours = document.getElementById("noofHours").value;
        achievements.instructors = document.getElementById("noofInstructors").value;

        sendachievements({
            students: { N: achievements.students },
            videos: { N: achievements.videos },
            hours: { N: achievements.hours },
            instructors: { N: achievements.instructors }
        });
        console.log(achievements);
    }

    const [newFeedBackFile, setNewFeedBackFile] = useState(0);

    const AddNewFeedBack = () => {
        setNewFeedBackFile(newFeedBackFile + 1);
        console.log(newFeedBackFile);
        
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
                    <label for="email${newFeedBackFile}" class="block text-gray-700 font-medium mb-1">Email</label>
                    <input type="email" name="email${newFeedBackFile}" id="email${newFeedBackFile}" placeholder="email" class="form-input w-full border border-gray-300 rounded p-2">
            </div>
            <div class="my-3">
                <label for="date${newFeedBackFile}" class="block text-gray-700 font-medium mb-1">Date</label>
                <input type="date" name="date${newFeedBackFile}" id="date${newFeedBackFile}" class="form-input w-full border border-gray-300 rounded p-2">
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
        feedbacks: [],
        emails: []
    }

    const SubmitFeedback = () => {
        const names = [];
        const roles = [];
        const dates = [];
        const feedbacks = [];
        const emails = [];
        console.log(document.getElementById(`feedback0`).value);
        for (let i = 0; i < newFeedBackFile; i++) {
            names.push(document.getElementById(`name${i}`).value);
            roles.push(document.getElementById(`role${i}`).value);
            dates.push(document.getElementById(`date${i}`).value);
            emails.push(document.getElementById(`email${i}`).value);
            feedbacks.push(document.getElementById(`feedback${i}`).value);
        }
        // print(newFeedBackFile)

        FeedbackData.names = names;
        FeedbackData.roles = roles;
        FeedbackData.dates = dates;
        FeedbackData.emails = emails;
        FeedbackData.feedbacks = feedbacks;
        console.log(FeedbackData);

        FeedbackData.names.map((name, index) => {
            sendfeedbackdata(name, FeedbackData.emails[index], FeedbackData.roles[index], FeedbackData.dates[index], FeedbackData.feedbacks[index]);
        });

    }


    async function sendfeedbackdata(name, email, role, date, feedback) {
        console.log(name, email, role, date, feedback);
        const response = await axios.post("http://localhost:8081/feedback/postfeedback",
            {
                name: name,
                email: email,
                designation: role,
                date: date,
                feedback: feedback

            });
        console.log(response.data);

    }

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={SubmitCourses}>
                <div className="my-6 p-4 border border-gray-300 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">Edit 3 Courses for Home</h3>
                    <div className="form-control">
                        <div className="flex flex-col sm:flex-row my-3">
                            <div className="sm:w-1/3">
                                <label htmlFor="course1" className="block text-gray-700 font-medium mb-1">Course 1</label>
                            </div>
                            <div className="sm:w-2/3">
                                <select name="course1" id="course1" className="form-control w-full p-2 border rounded">
                                    {info && info.map(course => <option key={course.coursename.S} value={course.coursename.S}>{course.coursename.S}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="flex flex-col sm:flex-row my-3">
                            <div className="sm:w-1/3">
                                <label htmlFor="course2" className="block text-gray-700 font-medium mb-1">Course 2</label>
                            </div>
                            <div className="sm:w-2/3">
                                <select name="course2" id="course2" className="form-control w-full p-2 border rounded">
                                    {info && info.map(course => <option key={course.coursename.S} value={course.coursename.S}>{course.coursename.S}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="flex flex-col sm:flex-row my-3">
                            <div className="sm:w-1/3">
                                <label htmlFor="course3" className="block text-gray-700 font-medium mb-1">Course 3</label>
                            </div>
                            <div className="sm:w-2/3">
                                <select name="course3" id="course3" className="form-control w-full p-2 border rounded">
                                    {info && info.map(course => <option key={course.coursename.S} value={course.coursename.S}>{course.coursename.S}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 my-2">Submit</button>
                </div>
            </form>
            <br />
            <hr />
            <br />

            <div className="form-control">
                <h3>Change achievements</h3>
                <div className="row my-3">
                    <div className="col-md-4">
                        <label htmlFor="students">Students</label>
                    </div>
                    <div className="col-md-8">
                        <input type="number" name="students" id="noofStudents" placeholder="No of Students" className="form-control" required />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-4">
                        <label htmlFor="videos">Videos</label>
                    </div>
                    <div className="col-md-8">
                        <input type="number" name="videos" id="noofVideos" placeholder="No of Videos" className="form-control" required />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-4">
                        <label htmlFor="hours">Hours</label>
                    </div>
                    <div className="col-md-8">
                        <input type="number" name="hours" id="noofHours" placeholder="No of Hours" className="form-control" required />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-4">
                        <label htmlFor="instructors">Instructors</label>
                    </div>
                    <div className="col-md-8">
                        <input type="number" name="instructors" id="noofInstructors" placeholder="No of Instructors" className="form-control" required />
                    </div>
                </div>
                <button className="btn btn-primary my-2" onClick={SubmitAchievements}>Submit</button>
            </div> { /* achievements ends here */}

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
