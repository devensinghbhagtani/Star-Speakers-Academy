import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MasterClassEdit() {

    const EventDetails = {
        title: "",
        date: "",
        speaker: "",
        time: "",
        venue: "",
        language: "",
        price: "",
        link: "",
        btnText: "",
        accessText: "",
        eventType: "",
    }

    const [aboutMasterClass, setAboutMasterClass] = React.useState<string[]>([]);

    const SubmitAboutMasterClass = (e: any) => {
        e.preventDefault();
        console.log("About Master Class Submitted");
        let skills: string[] = [];
        let textAreas = document.querySelectorAll('textarea');
        textAreas.forEach((textArea) => {
            skills.push(textArea.value);
        });
        setAboutMasterClass(skills);
        // alert(aboutMasterClass);
        console.log(aboutMasterClass);
    }

    const [event, setEvent] = React.useState(EventDetails);

    const SubmitUpperDetails = (e: any) => {
        e.preventDefault();
        console.log("Event Submitted");
        setEvent({
            title: (document.getElementById('eventTitle') as HTMLInputElement).value,
            date: (document.getElementById('eventDate') as HTMLInputElement).value,
            speaker: (document.getElementById('eventSpeaker') as HTMLInputElement).value,
            time: (document.getElementById('eventTime') as HTMLInputElement).value,
            venue: (document.getElementById('eventVenue') as HTMLInputElement).value,
            language: (document.getElementById('language') as HTMLInputElement).value,
            price: (document.getElementById('Price') as HTMLInputElement).value,
            link: (document.getElementById('Link') as HTMLInputElement).value,
            btnText: (document.getElementById('Btn-text') as HTMLInputElement).value,
            accessText: (document.getElementById('access-text') as HTMLInputElement).value,
            eventType: (document.getElementById('inlineRadio1') as HTMLInputElement).value,
        });
        // alert(event)
        if (event.title === "" || event.date === "" || event.speaker === "" || event.time === "" || event.venue === "" || event.language === "" || event.price === "" || event.link === "" || event.btnText === "" || event.accessText === "" || event.eventType === "") {
            alert("Please enter all the fields");
        }
        console.log(event);
    }


    const [newSkillArea, setNewSkillArea] = React.useState(0);

    // const AddNewSkillArea = () => {
    //     // add new text area for skills after clicking the button
    //     setNewSkillArea(newSkillArea + 1);
    //     if (newSkillArea < 2) {
    //         // add a text area after the 5th skill area in the form-control div
    //         let textArea = document.createElement('textarea');
    //         textArea.className = 'form-control my-3';
    //         textArea.placeholder = 'Skills Learning in this class';
    //         textArea.id = 'skills';

    //         let formControl = document.querySelector('.about-master-class');
    //         formControl?.appendChild(textArea);
    //     }
    //     else {
    //         alert("You can add only 5 new text areas");
    //     }
    // }

    const [newFeedBackFile, setNewFeedBackFile] = React.useState(0);

    const AddNewFeedBackFile = () => {
        setNewFeedBackFile(newFeedBackFile + 1);
        if (newFeedBackFile < 5) {
            let fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.className = 'form-control my-3';
            let formControl = document.querySelector('.feedback-details');
            formControl?.appendChild(fileInput);
        }
        else {
            alert("You can add only 5 new file inputs");
        }
    }

    const SubmitFeedback = (e: any) => {
        e.preventDefault();
        console.log("Feedback Submitted");
        let files: string[] = [];
        let fileInputs = document.querySelectorAll('input[type=file]');
        
        fileInputs.forEach((fileInput) => {
            files.push((fileInput as HTMLInputElement).value);
        });
        // check if the files are uploaded
        for(let i=0; i<files.length; i++){
            if(files[i] === ""){
                alert("Please upload all the files");
                files = [];
            }
        }
        console.log(files);

    }

    const [newFeedBackLink, setNewFeedBackLink] = React.useState(0);

    const AddNewFeedBackLink = () => {
        setNewFeedBackLink(newFeedBackLink + 1);
        if (newFeedBackLink < 5) {
            let fileInput = document.createElement('input');
            fileInput.type = 'text';
            fileInput.placeholder = 'Link';
            fileInput.className = 'form-control my-3';
            let formControl = document.querySelector('.feedback-link-details');
            formControl?.appendChild(fileInput);
        }
        else {
            alert("You can add only 5 new file inputs");
        }
    }

    const SubmitFeedbackLink = (e: any) => {
        e.preventDefault();
        console.log("Feedback Submitted");
        let files: string[] = [];
        let fileInputs = document.querySelectorAll('input[type=text]');
        fileInputs.forEach((fileInput) => {
            files.push((fileInput as HTMLInputElement).value);
        });
        // check if the files are uploaded
        for(let i=0; i<files.length; i++){
            if(files[i] === ""){
                alert("Please upload all the files");
                files = [];
            }
        }
        console.log(files);

    }

    const SubmitDiscount = (e: any) => {
        e.preventDefault();
        console.log("Discount Submitted");
        let discount = document.getElementById('discount') as HTMLInputElement;
        if(discount.value === ""){
            alert("Please enter the discount value");
        }
        console.log(discount.value);

    }

    const SubmitFollowers = (e: any) => {
        e.preventDefault();
        console.log("Followers Submitted");
        let instagram = (document.getElementById('InstaFollowers') as HTMLInputElement).value;
        let twitter = (document.getElementById('TwitterFollowers') as HTMLInputElement).value;
        let linkedIn = (document.getElementById('LinkedInFollowers') as HTMLInputElement).value;
        let youtube = (document.getElementById('YoutubeFollowers') as HTMLInputElement).value;
        if(instagram === "" || twitter === "" || linkedIn === "" || youtube === ""){
            alert("Please enter all the followers count");
        }

        console.log(instagram, twitter, linkedIn, youtube);
    }

    const SubmitForYou = (e: any) => {
        e.preventDefault();
        console.log("For You Submitted");
        let fy1 = (document.getElementById('fy1') as HTMLInputElement).value;
        let fy2 = (document.getElementById('fy2') as HTMLInputElement).value;
        let fy3 = (document.getElementById('fy3') as HTMLInputElement).value;
        let fy4 = (document.getElementById('fy4') as HTMLInputElement).value;
        let fy5 = (document.getElementById('fy5') as HTMLInputElement).value;
        let fy6 = (document.getElementById('fy6') as HTMLInputElement).value;


        let fy1img = (document.getElementById('fy1img') as HTMLInputElement).value;
        let fy2img = (document.getElementById('fy2img') as HTMLInputElement).value;
        let fy3img = (document.getElementById('fy3img') as HTMLInputElement).value;
        let fy4img = (document.getElementById('fy4img') as HTMLInputElement).value;
        let fy5img = (document.getElementById('fy5img') as HTMLInputElement).value;
        let fy6img = (document.getElementById('fy6img') as HTMLInputElement).value;

        if(fy1 === "" || fy2 === "" || fy3 === "" || fy4 === "" || fy5 === "" || fy6 === "" || fy1img === "" || fy2img === "" || fy3img === "" || fy4img === "" || fy5img === "" || fy6img === ""){
            alert("Please enter all the fields");
        }

        console.log(fy1, fy2, fy3, fy4, fy5, fy6);
        console.log(fy1img, fy2img, fy3img, fy4img, fy5img, fy6img);
    }

    const [newQuestion, setNewQuestion] = React.useState(0);

    const AddNewQuestion = () => {
        setNewQuestion(newQuestion + 1);
        if (newQuestion < 10) {
            let question = document.createElement('input');
            question.type = 'text';
            question.className = 'form-control my-3';
            question.placeholder = 'Question';
            question.id = 'Question';

            let answer = document.createElement('textarea');
            answer.className = 'form-control';
            answer.placeholder = 'Answer';
            answer.id = 'Answer';

            let formControl = document.querySelector('.faq-details');
            formControl?.appendChild(question);
            formControl?.appendChild(answer);
            formControl?.appendChild(document.createElement('hr'));
        }
        else {
            alert("You can add only 5 new question inputs");
        }
    }

    const SubmitQNA = (e: any) => {
        e.preventDefault();
        console.log("QNA Submitted");
        let questions: string[] = [];
        let answers: string[] = [];
        let questionInputs =  document.querySelectorAll<HTMLInputElement>('#Question');
        let answerInputs = document.querySelectorAll<HTMLTextAreaElement>('#Answer');
        questionInputs.forEach((questionInput) => {
            questions.push((questionInput as HTMLInputElement).value);
        });
        answerInputs.forEach((answerInput) => {
            answers.push((answerInput as HTMLTextAreaElement).value);
        });
        
        for(let i = 0; i<questions.length; i++){
            if(questions[i] === "" || answers[i] === ""){
                alert("Please enter all the fields");
                questions = []
                answers = []
            }
        }
        for(let i=0; i<questions.length; i++){
            if(questions[i].split(' ').length > 25){
                alert("Question "+(i+1)+" is more than 25 words");
                questions = []
                answers = []
            }
            // check if the answer is in 50 words
            if(answers[i].split(' ').length > 50){
                alert("Answer "+(i+1)+" is more than 50 words");
                questions = []
                answers = []
            }
        }

        console.log(questions, answers);
    }

    return (
        <div>
            <div className='container text-center'>
                <h1>Master Class Edit</h1>
                <hr />
                <div className='UpperSection'>
                    <form onSubmit={SubmitUpperDetails}>
                        <div className="form-control">
                            <h3>Upper Section Details</h3>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Title:</label>
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" id='eventTitle' type="text" placeholder='Event Title' />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Date:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="date" id='eventDate' className="form-control" />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Speaker:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" id='eventSpeaker' className="form-control" placeholder='Name of the speaker' />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Time:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="time" id='eventTime' className="form-control" />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Venue:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" id='eventVenue' className="form-control" placeholder='Venue' />
                                </div>
                            </div>


                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Language:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" id='language' placeholder='Language' />
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Price At:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="number" className="form-control" id='Price' placeholder='Rs.' />
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Enroll Link:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" id='Link' placeholder='Link' />
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Enroll Text:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" className="form-control" id='Btn-text' placeholder='Text for the Button' />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Access at:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" id='access-text' className="form-control" placeholder='Access Text' />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Video Link:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" id='video-link' className="form-control" placeholder='VideoLink ' />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label>Event Type:</label>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Free</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Paid</label>
                                    </div>
                                </div>
                            </div>
                            <input className="btn btn-primary my-3" type='submit' value='Submit' />
                        </div>
                    </form>

                </div> {/* Upper Section Ends here */}
                <br />
                <hr />
                <br />

                <div className='About-MasterClass'>
                    {/* <form> */}
                    <div className="form-control about-master-class">

                        <h3>About Master Class</h3>
                        <hr />

                        {/* <button className="btn btn-primary m-2" onClick={AddNewSkillArea}>Add New Skill</button> */}
                        <hr />
                        <div>
                            <textarea className="form-control my-3" placeholder='Skills Learning in this class' id='skills'></textarea>
                        </div>
                        <div>
                            <textarea className="form-control my-3" placeholder='Skills Learning in this class' id='skills'></textarea>
                        </div>
                        <div>
                            <textarea className="form-control my-3" placeholder='Skills Learning in this class' id='skills'></textarea>
                        </div>
                        <div>
                            <textarea className="form-control my-3" placeholder='Skills Learning in this class' id='skills'></textarea>
                        </div>
                        <div>
                            <textarea className="form-control my-3" placeholder='Skills Learning in this class' id='skills'></textarea>
                        </div>
                        <hr />
                        <button className="btn btn-primary m-2" onClick={SubmitAboutMasterClass}>Submit</button>

                    </div>
                    {/* </form> */}
                </div>

                <br />
                <hr />
                <br />
                <div>
                    <div className='form-control '>
                        <h3>User Feedback ScreenShots</h3>
                        <hr />
                        <button className="btn btn-primary m-2" onClick={AddNewFeedBackFile}>Add New File</button>
                        <button className="btn btn-primary m-2" onClick={SubmitFeedback}>Submit</button>
                        <hr />
                        <div className="form-control feedback-details">
                            <div>
                                <input type="file" className="form-control my-3" />
                            </div>
                            <div>
                                <input type="file" className="form-control my-3" />
                            </div>
                            <div>
                                <input type="file" className="form-control my-3" />
                            </div>
                        </div>


                    </div>
                </div> {/* User Feedback Ends here */}

                <div>
                    <div className='form-control '>
                        <h3>User Feedback Videos</h3>
                        <hr />
                        <button className="btn btn-primary m-2" onClick={AddNewFeedBackLink}>Add New File</button>
                        <button className="btn btn-primary m-2" onClick={SubmitFeedbackLink}>Submit</button>
                        <hr />
                        <div className="form-control feedback-link-details">
                            <div>
                                <input type="text" className="form-control my-3" id='yt-link1' placeholder='Link'/>
                            </div>
                            <div>
                                <input type="text" className="form-control my-3" id='yt-link2' placeholder='Link'/>
                            </div>
                            <div>
                                <input type="text" className="form-control my-3" id='yt-link3' placeholder='Link' />
                            </div>
                        </div>


                    </div>
                </div> {/* User Feedback Ends here */}

                <br />
                <hr />
                <br />

                <div>
                    <div className='form-control'>
                        <h3>Edit Discount</h3>
                        <hr />
                        <input type="text" className="form-control my-3" id='discount' placeholder='Discount Percent' />
                        <button className="btn btn-primary m-2" onClick={SubmitDiscount}>Submit</button>

                    </div>


                </div> {/* Edit Discount Ends here */}

                <br />
                <hr />
                <br />

                <div>
                    <div className="form-control">
                        <h3>Social Media Followers</h3>
                        <hr />
                        <div className="row my-3">
                            <div className="col-md-6">
                                <label>Instagram:</label>
                            </div>
                            <div className="col-md-4">
                                <input type="number" className="form-control" id='InstaFollowers' placeholder='Followers' />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <label>Twitter:</label>
                            </div>
                            <div className="col-md-4">
                                <input type="number" className="form-control" id='TwitterFollowers' placeholder='Followers' />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <label>LinkedIn:</label>
                            </div>
                            <div className="col-md-4">
                                <input type="number" className="form-control" id='LinkedInFollowers' placeholder='Followers' />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <label>Youtube:</label>
                            </div>
                            <div className="col-md-4">
                                <input type="number" className="form-control" id='YoutubeFollowers' placeholder='Followers' />
                            </div>
                        </div>

                        <button className="btn btn-primary m-2" onClick={SubmitFollowers}>Submit</button>

                    </div>
                </div>{/* Followers Ends here */}

                <br />
                <hr />
                <br />

                {/* <div>
                    <div className="form-control">
                        <h3>Speaker Details</h3>
                        <hr />
                        <div className="row my-3">
                            <div className="col-md-6">
                                <label>Speaker Name:</label>
                            </div>
                            <div className="col-md-4">
                                <input type="text" id='AboutSpeaker' className="form-control" />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <label>Speaker Image:</label>
                            </div>
                            <div className="col-md-4">
                                <input type="file" className="form-control" id='SpeakerImage' />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <label>Speaker Bio:</label>
                            </div>
                            <div className="col-md-4">
                                <textarea className="form-control" id='SpeakerBio'></textarea>
                            </div>
                        </div>
                    </div>
                </div> Speaker Details Ends here */}

                <br />
                <hr />
                <br />
                <div>
                    <div className="form-control">
                        <h3>For You Section</h3>
                        <hr />
                        <div className="row my-3 py-3">
                            <div className="col-md-2">
                                <label>Input 1</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" id='fy1' className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label>Image 1</label>
                            </div>
                            <div className="col-md-3">
                                <input type="file" id='fy1img' className="form-control" />
                            </div>
                            <br />
                        </div>
                        <hr />
                        <div className="row my-3 py-3">
                            <div className="col-md-2">
                                <label>Input 2</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" id='fy2' className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label>Image 2</label>
                            </div>
                            <div className="col-md-3">
                                <input type="file" id='fy2img' className="form-control" />
                            </div>
                            <br />
                        </div>
                        <hr />
                        <div className="row my-3 py-3">
                            <div className="col-md-2">
                                <label>Input 3</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" id='fy3' className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label>Image 3</label>
                            </div>
                            <div className="col-md-3">
                                <input type="file" id='fy3img' className="form-control" />
                            </div>
                            <br />
                        </div>
                        <hr />
                        <div className="row my-3 py-3">
                            <div className="col-md-2">
                                <label>Input 4</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" id='fy4' className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label>Image 4</label>
                            </div>
                            <div className="col-md-3">
                                <input type="file" id='fy4img' className="form-control" />
                            </div>
                            <br />
                        </div>
                        <hr />
                        <div className="row my-3 py-3">
                            <div className="col-md-2">
                                <label>Input 5</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" id='fy5' className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label>Image 5</label>
                            </div>
                            <div className="col-md-3">
                                <input type="file" id='fy5img' className="form-control" />
                            </div>
                            <br />
                        </div>
                        <hr />
                        <div className="row my-3 py-3">
                            <div className="col-md-2">
                                <label>Input 6</label>
                            </div>
                            <div className="col-md-3">
                                <input type="text" id='fy6' className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label>Image 6</label>
                            </div>
                            <div className="col-md-3">
                                <input type="file" id='fy6img' className="form-control" />
                            </div>
                            <br />
                        </div>
                        <hr />
                        <div className="row my-3">
                            <div className="col-md-6">
                                <label>For You Heading:</label>
                            </div>
                            <div className="col-md-4">
                                <input type="text" id='ForYouHeading' className="form-control" />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <label>For You Description:</label>
                            </div>
                            <div className="col-md-4">
                                <textarea className="form-control" id='ForYouDescription'></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary m-2" onClick={SubmitForYou}>Submit</button>

                </div> {/* For you section Ends here */}

                <br />
                <hr />
                <br />

                <div>
                    <div className='form-control faq-details'>
                        <h3>FAQ</h3>
                        <hr />
                        <button className="btn btn-primary m-2" onClick={AddNewQuestion}>Add Question</button>
                        <button className="btn btn-primary m-2" onClick={SubmitQNA} >Submit</button>
                        <hr />
                        <input type="text" className="form-control my-3" id='Question' placeholder='Question' />
                        <textarea className="form-control" id='Answer' placeholder='Answer'></textarea>
                        
                    </div> {/*  Ends here */}
                </div> {/* About Master Class Ends here */}
            </div> {/* Container Ends here */}
        </div>
    );
}