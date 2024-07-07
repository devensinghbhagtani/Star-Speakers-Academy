import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Speaker } from "lucide-react";

export default function MasterClassEdit() {
  let files = [];

  // const EventDetails = {
  //     title: "",
  //     date: "",
  //     speaker: "",
  //     time: "",
  //     venue: "",
  //     language: "",
  //     price: "",
  //     link: "",
  //     btnText: "",
  //     accessText: "",
  //     eventType: "",
  // }

  const SubmitAboutMasterClass = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("skill1"));
    console.log(data.get("skill2"));
    console.log(data.get("skill3"));
    console.log(data.get("skill4"));
    console.log(data.get("skill5"));
    if (
      data.get("skill1") === "" ||
      data.get("skill2") === "" ||
      data.get("skill3") === "" ||
      data.get("skill4") === "" ||
      data.get("skill5") === ""
    ) {
      alert("Please enter all the fields");
    } else {
      masterclassskills(
        data.get("skill1"),
        data.get("skill2"),
        data.get("skill3"),
        data.get("skill4"),
        data.get("skill5")
      );
    }
  };

  async function masterclassskills(skill1, skill2, skill3, skill4, skill5) {
    const url = "http://localhost:8081/masterclass/addmasterclassskills";
    const { data } = await axios.post(url, {
      skill1: skill1,
      skill2: skill2,
      skill3: skill3,
      skill4: skill4,
      skill5: skill5,
    });
    console.log(data);
    alert(data.message);
  }

  // const [event, setEvent] = React.useState(EventDetails);

  const SubmitUpperDetails = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      data.get("title") === "" ||
      data.get("date") === "" ||
      data.get("speaker") === "" ||
      data.get("time") === "" ||
      data.get("venue") === "" ||
      data.get("language") === "" ||
      data.get("priceat") === "" ||
      data.get("enrolllink") === "" ||
      data.get("enrolltext") === "" ||
      data.get("accessat") === "" ||
      data.get("videolink") === "" ||
      data.get("inlineRadioOptions") === ""
    ) {
      alert("Please enter all the fields");
    } else {
      senddata(
        data.get("title"),
        data.get("date"),
        data.get("speaker"),
        data.get("time"),
        data.get("venue"),
        data.get("language"),
        data.get("priceat"),
        data.get("enrolllink"),
        data.get("enrolltext"),
        data.get("accessat"),
        data.get("videolink"),
        data.get("inlineRadioOptions")
      );
    }

    // setEvent({
    //     title: (document.getElementById('eventTitle') as HTMLInputElement).value,
    //     date: (document.getElementById('eventDate') as HTMLInputElement).value,
    //     speaker: (document.getElementById('eventSpeaker') as HTMLInputElement).value,
    //     time: (document.getElementById('eventTime') as HTMLInputElement).value,
    //     venue: (document.getElementById('eventVenue') as HTMLInputElement).value,
    //     language: (document.getElementById('language') as HTMLInputElement).value,
    //     price: (document.getElementById('Price') as HTMLInputElement).value,
    //     link: (document.getElementById('Link') as HTMLInputElement).value,
    //     btnText: (document.getElementById('Btn-text') as HTMLInputElement).value,
    //     accessText: (document.getElementById('access-text') as HTMLInputElement).value,
    //     eventType: (document.getElementById('inlineRadio1') as HTMLInputElement).value,
    // });
    // // alert(event)
    // if (event.title === "" || event.date === "" || event.speaker === "" || event.time === "" || event.venue === "" || event.language === "" || event.price === "" || event.link === "" || event.btnText === "" || event.accessText === "" || event.eventType === "") {
    //     alert("Please enter all the fields");
    // }
    // console.log(event);
  };

  async function senddata(
    title,
    date,
    speaker,
    time,
    venue,
    language,
    priceat,
    enrolllink,
    enrolltext,
    accessat,
    videolink,
    status
  ) {
    const url = "http://localhost:8081/masterclass/addmasterclass";
    const { data } = await axios.post(url, {
      title: title,
      date: date,
      speaker: speaker,
      time: time,
      venue: venue,
      language: language,
      priceat: priceat,
      enrolllink: enrolllink,
      enrolltext: enrolltext,
      accessat: accessat,
      videolink: videolink,
      status: status,
    });
    console.log(data);
    alert(data.message);
  }

  // const [newSkillArea, setNewSkillArea] = React.useState(0);

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

  const [newFeedBackFile, setNewFeedBackFile] = React.useState(3);

  const AddNewFeedBackFile = () => {
    setNewFeedBackFile(newFeedBackFile + 1);
    if (newFeedBackFile < 5) {
      let fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.name = "file" + (newFeedBackFile + 1);
      fileInput.className = "form-control my-3";
      let formControl = document.querySelector(".feedback-details");
      formControl?.appendChild(fileInput);
    } else {
      alert("You can add only 5 new file inputs");
    }
  };

  const SubmitFeedback = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const files = [];

    for (let i = 0; i < newFeedBackFile; i++) {
      const file = data.get(`file${i + 1}`);
      if (file && file.name !== "") {
        files.push(file);
      }
    }
    console.log(files);
    sendfeedbackserver(files);
  };

  async function sendfeedbackserver(files) {
    const formData = new FormData();

    files.forEach((file, index) => {
      formData.append(`image`, file);
    });

    const url = "http://localhost:8081/masterclass/addmasterclasssfeedback";
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      // Now do what you want with the response;
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  }
  const [newFeedBackLink, setNewFeedBackLink] = React.useState(3);

  const AddNewFeedBackLink = () => {
    setNewFeedBackLink(newFeedBackLink + 1);
    if (newFeedBackLink < 5) {
      let fileInput = document.createElement("input");
      fileInput.type = "text";
      fileInput.placeholder = "Link";
      fileInput.name = "yt-link" + (newFeedBackLink + 1);
      fileInput.className = "form-control my-3";
      let formControl = document.querySelector(".feedback-link-details");
      formControl?.appendChild(fileInput);
    } else {
      alert("You can add only 5 new file inputs");
    }
  };

  const SubmitFeedbackLink = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const links = [];
    for (let i = 0; i < newFeedBackLink; i++) {
      const link = data.get(`yt-link${i + 1}`);
      if (link && link !== "") {
        console.log(link);
        links.push({ S: link });
      }
    }
    console.log(links);
    sendfeedbacklinkserver(links);
  };
  async function sendfeedbacklinkserver(links) {
    const url = "http://localhost:8081/masterclass/addmasterclassfeddbackvid";
    const { data } = await axios.post(url, {
      links: links,
    });
    console.log(data);
    alert(data.message);
  }

  const SubmitDiscount = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    console.log(formdata.get("discount"));
    const discount = formdata.get("discount");
    senddiscount(String(discount));
  };

  async function senddiscount(discount) {
    const url = "http://localhost:8081/masterclass/addmasterclassdiscount";
    const { data } = await axios.post(url, {
      discount: discount,
    });
    alert(data.message);
  }

  function submitspeaker(event){
    event.preventDefault();
    const formdata=new FormData(event.currentTarget);
    console.log(formdata.get("speakername"));
    console.log(formdata.get("speakerimage"));
    console.log(formdata.get("speakerbio"));
    sendspeakerdetails(formdata);
  }

  async function sendspeakerdetails(formdata){ 
  const url="http://localhost:8081/masterclass/addspeakerdetails";
  const {data}=await axios.post(url,formdata,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  });
  console.log(data);
  alert(data.message);
  }


  function SubmitFollowers(event) {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    if (
      formdata.get("instagram") === "" ||
      formdata.get("twitter") === "" ||
      formdata.get("linkedin") === "" ||
      formdata.get("youtube") === ""
    ) {
      alert("Please enter all the followers count");
    } else {
      sendfollowers(
        formdata.get("instagram"),
        formdata.get("twitter"),
        formdata.get("linkedin"),
        formdata.get("youtube")
      );
    }
  }

  async function sendfollowers(instagram, twitter, linkedin, youtube) {
    const url = "http://localhost:8081/masterclass/addmasterclassfollowers";
    const { data } = await axios.post(url, {
      instagram: instagram,
      twitter: twitter,
      linkedin: linkedin,
      youtube: youtube,
    });
    console.log(data);
    alert(data.message);
  }


  const [newQuestion, setNewQuestion] = React.useState(0);

  const AddNewQuestion = () => {
    setNewQuestion(newQuestion + 1);
    if (newQuestion < 10) {
      let question = document.createElement("input");
      question.type = "text";
      question.className = "form-control my-3";
      question.placeholder = "Question";
      question.name = "question" + (newQuestion + 1);

      question.id = "Question";

      let answer = document.createElement("textarea");
      answer.className = "form-control";
      answer.placeholder = "Answer";
      answer.id = "Answer";
      answer.name = "answer"+(newQuestion+1);

      let formControl = document.querySelector(".faq-details");
      formControl?.appendChild(question);
      formControl?.appendChild(answer);
      formControl?.appendChild(document.createElement("hr"));
    } else {
      alert("You can add only 5 new question inputs");
    }
  };

  const SubmitQNA = (event) => {
    const op=[]
    event.preventDefault();
    console.log("QNA Submitted");
    const data = new FormData(event.currentTarget);
    for(let i=0;i<=newQuestion;i++){
      if(data.get(`question${i}`) && data.get(`answer${i}`)
      && data.get(`question${i}`) !== "" && data.get(`answer${i}`) !== ""){
        op.push({Question:data.get(`question${i}`),Answer:data.get(`answer${i}`)});
      }
    }
    if(op.length!==0){
      sendfaq(op);
    }
    console.log(op);
  };

  async function sendfaq(faq){
    const url = "http://localhost:8081/masterclass/addmasterclassfaq";
    const { data } = await axios.post(url, {
      faq: faq,
    });
    console.log(data);
    alert(data.message);
  }

  function SubmitForYou(event){
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    console.log(data.get('ip1'));
    if(data.get('ip1') && data.get('ip2') && data.get('ip3') && data.get('ip4') && data.get('ip5') && data.get('ip6') && data.get('heading') && data.get('description')){
      sendforyou({ip1:data.get('ip1'),ip2:data.get('ip2'),ip3:data.get('ip3'),ip4:data.get('ip4'),ip5:data.get('ip5'),ip6:data.get('ip6'),heading:data.get('heading'),description:data.get('description')});
    }
  }

  async function sendforyou(foryou){
    console.log(foryou);
    const url="http://localhost:8081/masterclass/addmasterclassforyou";
    const {data}=await axios.post(url,{
      foryou:foryou,
    });

    alert(data.message);
  }

  return (
    <div>
      <div className="container text-center">
        <h1>Master Class Edit</h1>
        <hr />
        <div className="UpperSection">
          <form onSubmit={SubmitUpperDetails}>
            <div className="form-control">
              <h3>Upper Section Details</h3>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Title:</label>
                </div>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    id="eventTitle"
                    type="text"
                    placeholder="Event Title"
                    name="title"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Date:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="date"
                    id="eventDate"
                    className="form-control"
                    name="date"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Speaker:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    id="eventSpeaker"
                    className="form-control"
                    placeholder="Name of the speaker"
                    name="speaker"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Time:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="time"
                    id="eventTime"
                    className="form-control"
                    name="time"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Venue:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    id="eventVenue"
                    className="form-control"
                    placeholder="Venue"
                    name="venue"
                  />
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-6">
                  <label>Language:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    id="language"
                    placeholder="Language"
                    name="language"
                  />
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-6">
                  <label>Price At:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    id="Price"
                    placeholder="Rs."
                    name="priceat"
                  />
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-6">
                  <label>Enroll Link:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    id="Link"
                    placeholder="Link"
                    name="enrolllink"
                  />
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-6">
                  <label>Enroll Text:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    id="Btn-text"
                    placeholder="Text for the Button"
                    name="enrolltext"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Access at:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    id="access-text"
                    className="form-control"
                    placeholder="Access Text"
                    name="accessat"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Video Link:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    id="video-link"
                    className="form-control"
                    placeholder="VideoLink"
                    name="videolink"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Event Type:</label>
                </div>
                <div className="col-md-4">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="Free"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Free
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="Paid"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Paid
                    </label>
                  </div>
                </div>
              </div>
              <input
                className="btn btn-primary my-3"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>{" "}
        {/* Upper Section Ends here */}
        <br />
        <hr />
        <br />
        <div className="About-MasterClass">
          <form onSubmit={SubmitAboutMasterClass}>
            <div className="form-control about-master-class">
              <h3>About Master Class</h3>
              <hr />

              {/* <button className="btn btn-primary m-2" onClick={AddNewSkillArea}>Add New Skill</button> */}
              <hr />
              <div>
                <textarea
                  className="form-control my-3"
                  name="skill1"
                  placeholder="Skills Learning in this class"
                  id="skills"
                ></textarea>
              </div>
              <div>
                <textarea
                  className="form-control my-3"
                  name="skill2"
                  placeholder="Skills Learning in this class"
                  id="skills"
                ></textarea>
              </div>
              <div>
                <textarea
                  className="form-control my-3"
                  name="skill3"
                  placeholder="Skills Learning in this class"
                  id="skills"
                ></textarea>
              </div>
              <div>
                <textarea
                  className="form-control my-3"
                  name="skill4"
                  placeholder="Skills Learning in this class"
                  id="skills"
                ></textarea>
              </div>
              <div>
                <textarea
                  className="form-control my-3"
                  name="skill5"
                  placeholder="Skills Learning in this class"
                  id="skills"
                ></textarea>
              </div>
              <hr />
              <button className="btn btn-primary m-2">Submit</button>
            </div>
          </form>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <div className="form-control ">
            <h3>User Feedback ScreenShots</h3>
            <hr />
            <button
              className="btn btn-primary m-2"
              type='button'
              onClick={AddNewFeedBackFile}
            >
              Add New File
            </button>
            <form onSubmit={SubmitFeedback}>
              <button className="btn btn-primary m-2" type="submit">
                Submit
              </button>
              <hr />
              <div className="form-control feedback-details">
                <div>
                  <input
                    type="file"
                    className="form-control my-3"
                    name="file1"
                  />
                </div>
                <div>
                  <input
                    type="file"
                    className="form-control my-3"
                    name="file2"
                  />
                </div>
                <div>
                  <input
                    type="file"
                    className="form-control my-3"
                    name="file3"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>{" "}
        {/* User Feedback Ends here */}
        <div>
          <div className="form-control ">
            <h3>User Feedback Videos</h3>
            <hr />
            <button
              className="btn btn-primary m-2"
              onClick={AddNewFeedBackLink}
            >
              Add New File
            </button>
            <form onSubmit={SubmitFeedbackLink}>
              <button className="btn btn-primary m-2" type="submit">
                Submit
              </button>
              <hr />
              <div className="form-control feedback-link-details">
                <div>
                  <input
                    type="text"
                    className="form-control my-3"
                    id="yt-link1"
                    name="yt-link1"
                    placeholder="Link"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control my-3"
                    id="yt-link2"
                    name="yt-link2"
                    placeholder="Link"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control my-3"
                    id="yt-link3"
                    name="yt-link3"
                    placeholder="Link"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>{" "}
        {/* User Feedback Ends here */}
        <br />
        <hr />
        <br />
        <form onSubmit={SubmitDiscount}>
          <div>
            <div className="form-control">
              <h3>Edit Discount</h3>
              <hr />
              <input
                type="text"
                className="form-control my-3"
                id="discount"
                name="discount"
                placeholder="Discount Percent"
              />
              <button className="btn btn-primary m-2" type="submit">
                Submit
              </button>
            </div>
          </div>{" "}
        </form>
        {/* Edit Discount Ends here */}
        <br />
        <hr />
        <br />
        <form onSubmit={SubmitFollowers}>
          <div>
            <div className="form-control">
              <h3>Social Media Followers</h3>
              <hr />
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Instagram:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    name="instagram"
                    className="form-control"
                    id="InstaFollowers"
                    placeholder="Followers"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Twitter:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    name="twitter"
                    id="TwitterFollowers"
                    placeholder="Followers"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>LinkedIn:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    name="linkedin"
                    id="LinkedInFollowers"
                    placeholder="Followers"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <label>Youtube:</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    name="youtube"
                    id="YoutubeFollowers"
                    placeholder="Followers"
                  />
                </div>
              </div>

              <button className="btn btn-primary m-2">Submit</button>
            </div>
          </div>
        </form>
        {/* Followers Ends here */}
        <br />
        <hr />
        <br />
        <div>
          <form onSubmit={submitspeaker}> 
          <div className="form-control">
            <h3>Speaker Details</h3>
            <hr />
            <div className="row my-3">
              <div className="col-md-6">
                <label>Speaker Name:</label>
              </div>
              <div className="col-md-4">
                <input type="text" id="AboutSpeaker" className="form-control" name='speakername' />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6">
                <label>Speaker Image:</label>
              </div>
              <div className="col-md-4">
                <input type="file" className="form-control" id="SpeakerImage" name='speakerimage' />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6">
                <label>Speaker Bio:</label>
              </div>
              <div className="col-md-4">
                <textarea className="form-control" id="SpeakerBio" name="speakerbio"></textarea>
              </div>
            </div>
          </div>
           <button className="btn btn-primary m-2">Submit</button>
          </form>
        </div>{" "}
        Speaker Details Ends here
        <br />
        <hr />
        <br />
        <div>
        <form onSubmit={SubmitForYou}>  
          <div className="form-control">

            <h3>For You Section</h3>
            <hr />
            <div className="row my-3 py-3">
              <div className="col-md-2">
                <label>Input 1</label>
              </div>
              <div className="col-md-3">
                <input type="text" id="fy1" name='ip1' className="form-control" />
              </div>
              {/* <div className="col-md-3">
                <label>Image 1</label>
              </div> */}
              {/* <div className="col-md-3">
                <input type="file" id="fy1img" className="form-control" />
              </div> */}
              <br />
            </div>
            <hr />
            <div className="row my-3 py-3">
              <div className="col-md-2">
                <label>Input 2</label>
              </div>
              <div className="col-md-3">
                <input type="text" id="fy2" name='ip2' className="form-control" />
              </div>
              {/* <div className="col-md-3">
                <label>Image 2</label>
              </div>
              <div className="col-md-3">
                <input type="file" id="fy2img" className="form-control" />
              </div> */}
              <br />
            </div>
            <hr />
            <div className="row my-3 py-3">
              <div className="col-md-2">
                <label>Input 3</label>
              </div>
              <div className="col-md-3">
                <input type="text" id="fy3" name='ip3' className="form-control" />
              </div>
              {/* <div className="col-md-3">
                <label>Image 3</label>
              </div>
              <div className="col-md-3">
                <input type="file" id="fy3img" className="form-control" />
              </div> */}
              <br />
            </div>
            <hr />
            <div className="row my-3 py-3">
              <div className="col-md-2">
                <label>Input 4</label>
              </div>
              <div className="col-md-3">
                <input type="text" id="fy4" name='ip4' className="form-control" />
              </div>
              {/* <div className="col-md-3">
                <label>Image 4</label>
              </div>
              <div className="col-md-3">
                <input type="file" id="fy4img" className="form-control" />
              </div> */}
              <br />
            </div>
            <hr />
            <div className="row my-3 py-3">
              <div className="col-md-2">
                <label>Input 5</label>
              </div>
              <div className="col-md-3">
                <input type="text" id="fy5" name='ip5' className="form-control" />
              </div>
              {/* <div className="col-md-3">
                <label>Image 5</label>
              </div>
              <div className="col-md-3">
                <input type="file" id="fy5img" className="form-control" />
              </div> */}
              <br />
            </div>
            <hr />
            <div className="row my-3 py-3">
              <div className="col-md-2">
                <label>Input 6</label>
              </div>
              <div className="col-md-3">
                <input type="text" id="fy6" className="form-control" name='ip6'/>
              </div>
              {/* <div className="col-md-3">
                <label>Image 6</label>
              </div>
              <div className="col-md-3">
                <input type="file" id="fy6img" className="form-control" />
              </div> */}
              <br />
            </div>
            <hr />
            <div className="row my-3">
              <div className="col-md-6">
                <label>For You Heading:</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  id="ForYouHeading"
                  name='heading'
                  className="form-control"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6">
                <label>For You Description:</label>
              </div>
              <div className="col-md-4">
                <textarea
                  name="description"
                  className="form-control"
                  id="ForYouDescription"
                ></textarea>
              </div>
            </div>
           
          </div>
         
          <button className="btn btn-primary m-2" type="submit">Submit</button>
          </form>
        </div>{" "}
        {/* For you section Ends here */}
        <br />
        <hr />
        <br />
        <div>
          <form onSubmit={SubmitQNA}> 
          <div className="form-control faq-details">
            <h3>FAQ</h3>
            <hr />
            <button className="btn btn-primary m-2" type="button" onClick={AddNewQuestion}>
              Add Question
            </button>
            <button className="btn btn-primary m-2">
              Submit
            </button>
            <hr />
            <input
              type="text"
              className="form-control my-3"
              id="Question"
              name="question0"
              placeholder="Question"
            />
            <textarea
              className="form-control"
              id="Answer"
              name="answer0"
              placeholder="Answer"
            ></textarea>
          </div>{" "}
          </form>
          {/*  Ends here */}
        </div>{" "}
        {/* About Master Class Ends here */}
      </div>{" "}
      {/* Container Ends here */}
    </div>
  );
}
