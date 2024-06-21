import { useState } from "react";

export default function EditHome() {
    const courses = ["course1", "course2", "course3", "course4", "course5", "course6", "course7", "course8", "course9", "course10"];
    const SubmitCourses = () => {
        // alert("Courses Submitted");
        if (document.getElementById("course1").value === document.getElementById("course2").value || document.getElementById("course1").value === document.getElementById("course3").value || document.getElementById("course2").value === document.getElementById("course3").value) {
            alert("Courses must be unique");
            return;
        }
        else {
            alert("Courses Submitted");
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
    const SubmitAchievements = () => {
        achievements.students = document.getElementById("noofStudents").value;
        achievements.videos = document.getElementById("noofVideos").value;
        achievements.hours = document.getElementById("noofHours").value;
        achievements.instructors = document.getElementById("noofInstructors").value;

        console.log(achievements);
        alert("Achievements Submitted");
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
        feedbacks: []
    }

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
    }


    return (
        <div>
            <div className="container text-center">
                <div className="form-control">
                    <h3>Edit 3 Courses for Home</h3>
                    <div className="form-control">
                        <div className="row my-3">
                            <div className="col-md-4">
                                <label htmlFor="course1">Course 1</label>
                            </div>
                            <div className="col-md-8">
                                <select name="course1" id="course1" className="form-control">
                                    {courses.map(course => <option key={course} value={course}>{course}</option>)}
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
                                    {courses.map(course => <option key={course} value={course}>{course}</option>)}
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
                                    {courses.map(course => <option key={course} value={course}>{course}</option>)}
                                </select>
                            </div>
                        </div>

                    </div>
                    <button className="btn btn-primary my-2" onClick={SubmitCourses}>Submit</button>
                </div> {/* 3courses ends here */}
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
                            <input type="number" name="students" id="noofStudents" placeholder="No of Students" className="form-control" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-4">
                            <label htmlFor="videos">Videos</label>
                        </div>
                        <div className="col-md-8">
                            <input type="number" name="videos" id="noofVideos" placeholder="No of Videos" className="form-control" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-4">
                            <label htmlFor="hours">Hours</label>
                        </div>
                        <div className="col-md-8">
                            <input type="number" name="hours" id="noofHours" placeholder="No of Hours" className="form-control" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-4">
                            <label htmlFor="instructors">Instructors</label>
                        </div>
                        <div className="col-md-8">
                            <input type="number" name="instructors" id="noofInstructors" placeholder="No of Instructors" className="form-control" />
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
