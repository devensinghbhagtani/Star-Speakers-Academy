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

    async function sendpopularcourse(data){
        try {
            const response = await axios.post('http://localhost:8081/videos/addpopularcourse',data)
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
                {S: document.getElementById("course1").value},
                {S: document.getElementById("course2").value},
                {S: document.getElementById("course3").value}
            ]);
            console.log(document.getElementById("course1").value);
            console.log(document.getElementById("course2").value);
            console.log(document.getElementById("course3").value);
        }
    }
    const achievements = {
        students: 0,
        videos: 0,
        hours: 0,
        instructors: 0
    }

    async function sendachievements(data){
        try {
            const response = await axios.post('http://localhost:8081/masterclass/addachievements',data)
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
            students: {N: achievements.students},
            videos: {N: achievements.videos},
            hours: {N: achievements.hours},
            instructors: {N: achievements.instructors}
        });
        console.log(achievements);
    }

    const [newFeedBackFile, setNewFeedBackFile] = useState(0);

    const AddNewFeedBack = () => {
        setNewFeedBackFile(newFeedBackFile + 1);
        if (newFeedBackFile < 10) {
            // i want a label for each name, role, date and a text area for feedback
            const newFileDiv = document.createElement("div");
            newFileDiv.className = "text-center";
            newFileDiv.innerHTML = `
            <hr/>
            <div class="row my-3">
                <div class="col-md-4">
                    <label for="name${newFeedBackFile}">Name</label>
                </div>
                <div class="col-md-7">
                    <input type="text" name="name${newFeedBackFile}" id="name${newFeedBackFile}" placeholder="Name" class="form-control">
                </div>
            </div>
            <div class="row my-3">
                <div class="col-md-4">
                    <label for="email${newFeedBackFile}">Email</label>
                </div>
                <div class="col-md-7">
                    <input type="email" name="email${newFeedBackFile}" id="email${newFeedBackFile}" placeholder="email" class="form-control">
                </div>
            </div>
            <div class="row my-3">
                <div class="col-md-4">
                    <label for="role${newFeedBackFile}">Role</label>
                </div>
                <div class="col-md-7">

                    <input type="text" name="role${newFeedBackFile}" id="role${newFeedBackFile}" placeholder="Role" class="form-control">
                </div>
            </div>
            <div class="row my-3">
                <div class="col-md-4">
                    <label for="date${newFeedBackFile}">Date</label>
                </div>
                <div class="col-md-7">
                    <input type="date" name="date${newFeedBackFile}" id="date${newFeedBackFile}" class="form-control">
                </div>
            </div>
            <div class="row my-3">
                <div class="col-md-4">
                    <label for="feedback${newFeedBackFile}">Feedback</label>
                </div>  
                <div class="col-md-7">  
                    <textarea name="feedback${newFeedBackFile}" id="feedback${newFeedBackFile}" class="form-control" rows="3"></textarea>
                </div>
            </div>
            
            `;

            document.querySelector(".feedback-form").appendChild(newFileDiv);
        }
        else {
            alert("You can add only 10 new inputs");
        }
    }

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

        for (let i = 0; i < newFeedBackFile; i++) {
            names.push(document.getElementById(`name${i}`).value);
            roles.push(document.getElementById(`role${i}`).value);
            dates.push(document.getElementById(`date${i}`).value);
            emails.push(document.getElementById(`email${i}`).value);
            feedbacks.push(document.getElementById(`feedback${i}`).value);
        }

        FeedbackData.names = names;
        FeedbackData.roles = roles;
        FeedbackData.dates = dates;
        FeedbackData.emails = emails;
        FeedbackData.feedbacks = feedbacks;
        console.log(FeedbackData);
        FeedbackData.names.map((name, index) => {
            sendfeedbackdata(name,FeedbackData.emails[index],FeedbackData.roles[index],FeedbackData.dates[index],FeedbackData.feedbacks[index]);
        });

    }


    async function sendfeedbackdata(name,email,role,date,feedback){
        console.log(name,email,role,date,feedback);
        const response=await axios.post("http://localhost:8081/feedback/postfeedback",
        {
            name:name,
            email:email,
            designation:role,
            date:date,
            feedback:feedback

        });
        console.log(response.data);
    }

    return (
        <div>
            <div className="container text-center">
                <form onSubmit={SubmitCourses}>
                <div className="form-control">
                    <h3>Edit 3 Courses for Home</h3>
                    <div className="form-control">
                        <div className="row my-3">
                            <div className="col-md-4">
                                <label htmlFor="course1">Course 1</label>
                            </div>
                            <div className="col-md-8">
                                <select name="course1" id="course1" className="form-control">
                                    { info && info.map(course => <option key={course.coursename.S} value={course.coursename.S}>{course.coursename.S}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="row my-3">
                            <div className="col-md-4">
                                <label htmlFor="course2">Course 2</label>
                            </div>
                            <div className="col-md-8">
                                <select name="course2" id="course2" className="form-control">
                                { info && info.map(course => <option key={course.coursename.S} value={course.coursename.S}>{course.coursename.S}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="row my-3">
                            <div className="col-md-4">
                                <label htmlFor="course3">Course 3</label>
                            </div>
                            <div className="col-md-8">
                                <select name="course3" id="course3" className="form-control">
                                { info && info.map(course => <option key={course.coursename.S} value={course.coursename.S}>{course.coursename.S}</option>)}
                                </select>
                            </div>
                        </div>

                    </div>
                    <button className="btn btn-primary my-2">Submit</button>
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
                            <input type="number" name="students" id="noofStudents" placeholder="No of Students" className="form-control" required/>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-4">
                            <label htmlFor="videos">Videos</label>
                        </div>
                        <div className="col-md-8">
                            <input type="number" name="videos" id="noofVideos" placeholder="No of Videos" className="form-control" required/>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-4">
                            <label htmlFor="hours">Hours</label>
                        </div>
                        <div className="col-md-8">
                            <input type="number" name="hours" id="noofHours" placeholder="No of Hours" className="form-control" required/>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-4">
                            <label htmlFor="instructors">Instructors</label>
                        </div>
                        <div className="col-md-8">
                            <input type="number" name="instructors" id="noofInstructors" placeholder="No of Instructors" className="form-control" required/>
                        </div>
                    </div>
                    <button className="btn btn-primary my-2" onClick={SubmitAchievements}>Submit</button>
                </div> { /* achievements ends here */}

                <br />
                <hr />
                <br />

                <div className="form-control">
                    <h3>Change Testimonials</h3>
                    <hr />
                    <button className="btn btn-primary m-2" onClick={AddNewFeedBack}>Add New</button>
                    <button className="btn btn-primary m-2" onClick={SubmitFeedback}>Submit</button>
                    <br />
                    <p>Click on Add New to add a new feedback form</p>
                    <div className="feedback-form">

                    </div>
                </div> { /* testimonials ends here */}
            </div> {/* container */}
        </div>
    )
}
