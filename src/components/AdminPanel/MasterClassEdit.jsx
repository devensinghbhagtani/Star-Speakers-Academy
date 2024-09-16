import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Speaker } from "lucide-react";
import Swal from 'sweetalert2'

export default function MasterClassEdit() {
	let files = [];

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
			// alert("Please enter all the fields");
			displayModal("Please enter all the fields", "error");
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
		const url = `http://localhost:8081/masterclass/addmasterclassskills`;
		const { data } = await axios.post(url, {
			skill1: skill1,
			skill2: skill2,
			skill3: skill3,
			skill4: skill4,
			skill5: skill5,
		});
		console.log(data);
		// alert(data.message);
		displayModal(data.message, "success");
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
			// alert("Please enter all the fields");
			displayModal("Please enter all the fields", "error");
		}
		else if (data.get("inlineRadioOptions") === "Free" && data.get("priceat") !== "0") {
			// alert("Please select the event type");
			displayModal("If it is free then set price to 0", "error");
		}
		else {
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
		const url = `http://localhost:8081/masterclass/addmasterclass`;
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
		// alert(data.message);
		displayModal(data.message, "success");
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
			fileInput.className = "border my-3 mx-2 p-2";
			let formControl = document.querySelector(".feedback-file-details");
			formControl?.appendChild(fileInput);
		} else {
			// alert("You can add only 5 new file inputs");
			displayModal("You can add only 5 new file inputs", "error");
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

		const url = `http://localhost:8081/masterclass/addmasterclasssfeedback`;
		try {
			const response = await axios.post(url, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			// console.log(response.data);
			displayModal("Sucessfully submitted the Feedback", "success");
			// Now do what you want with the response;
		} catch (error) {
			console.error("Error sending feedback:", error);
		}
	}
	const [newFeedBackLink, setNewFeedBackLink] = React.useState(0);

	const AddNewFeedBackLink = () => {
		setNewFeedBackLink(newFeedBackLink + 1);
		if (newFeedBackLink < 5) {
			let fileInput = document.createElement("input");
			fileInput.type = "text";
			fileInput.placeholder = "Link " + (newFeedBackLink + 1);
			fileInput.name = "yt-link" + (newFeedBackLink + 1);
			fileInput.className = "border my-3 mx-2 p-2";
			let formControl = document.querySelector(".feedback-link-details");
			formControl?.appendChild(fileInput);
		} else {
			// alert("You can add only 5 new file inputs");
			displayModal("You can add only 5 new file inputs", "error");
		}
	};

	const SubmitFeedbackLink = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const links = [];
		for (let i = 0; i < newFeedBackLink; i++) {
			const link = data.get(`yt-link${i + 1}`);
			console.log(link);

			if (link && link !== "") {
				console.log(link);
				links.push({ S: link });
			}
		}
		console.log(links);
		sendfeedbacklinkserver(links);
	};
	async function sendfeedbacklinkserver(links) {
		const url = `http://localhost:8081/masterclass/addmasterclassfeddbackvid`;
		const { data } = await axios.post(url, {
			links: links,
		});
		console.log(data);
		// alert(data.message);
		displayModal(data.message, "success");
	}

	const SubmitDiscount = (event) => {
		event.preventDefault();
		const formdata = new FormData(event.currentTarget);
		console.log(formdata.get("discount"));
		const discount = formdata.get("discount");
		senddiscount(String(discount));
	};

	async function senddiscount(discount) {
		const url = `http://localhost:8081/masterclass/addmasterclassdiscount`;
		const { data } = await axios.post(url, {
			discount: discount,
		});
		// alert(data.message);
		displayModal(data.message, "success");
	}

	function submitspeaker(event) {
		event.preventDefault();
		const formdata = new FormData(event.currentTarget);
		console.log(formdata.get("speakername"));
		console.log(formdata.get("speakerimage"));
		console.log(formdata.get("speakerbio"));
		sendspeakerdetails(formdata);
	}

	async function sendspeakerdetails(formdata) {
		const url = `http://localhost:8081/masterclass/addspeakerdetails`;
		const { data } = await axios.post(url, formdata, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		console.log(data);
		// alert(data.message);
		displayModal(data.message, "success");
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
			// alert("Please enter all the followers count");
			displayModal("Please enter all the followers count", "error");
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
		const url = `http://localhost:8081/masterclass/addmasterclassfollowers`;
		const { data } = await axios.post(url, {
			instagram: instagram,
			twitter: twitter,
			linkedin: linkedin,
			youtube: youtube,
		});
		console.log(data);
		// alert(data.message);
		
		displayModal(data.message, "success");
	}


	const [newQuestion, setNewQuestion] = React.useState(3);

	const AddNewQuestion = () => {
		setNewQuestion(newQuestion + 1);
		if (newQuestion < 10) {
			let question = document.createElement("input");
			// i want a label on left and input on right side in 1 div use tailwind
			let questionDiv = document.createElement("div");
			questionDiv.className = "flex items-center justify-center";
			question.type = "text";
			question.placeholder = "Your Question " + (newQuestion + 1);
			question.name = "question" + (newQuestion + 1);
			question.className = "border  mb-2 w-1/3 rounded p-2 mr-3 ";
			let formControl = document.querySelector(".faq-details");
			let answer = document.createElement("input");
			answer.type = "text";
			answer.placeholder = "Answer";
			answer.name = "answer" + (newQuestion + 1);
			answer.className = "border  mb-2 w-1/3 rounded p-2 mr-3";
			formControl?.appendChild(document.createElement("br"));
			questionDiv.appendChild(question);
			questionDiv.appendChild(answer);
			formControl?.appendChild(questionDiv);

		} else {
			// alert("You can add only 5 new question inputs");
			displayModal("You can add only 5 new question inputs", "error");
		}
	};

	const SubmitQNA = (event) => {
		const op = []
		event.preventDefault();
		console.log("QNA Submitted");
		const data = new FormData(event.currentTarget);
		for (let i = 0; i <= newQuestion; i++) {
			if (data.get(`question${i}`) && data.get(`answer${i}`)
				&& data.get(`question${i}`) !== "" && data.get(`answer${i}`) !== "") {
				op.push({ Question: data.get(`question${i}`), Answer: data.get(`answer${i}`) });
			}
		}
		if (op.length !== 0) {
			sendfaq(op);
		}
		console.log(op);
	};

	async function sendfaq(faq) {
		const url = `http://localhost:8081/masterclass/addmasterclassfaq`;
		const { data } = await axios.post(url, {
			faq: faq,
		});
		console.log(data);
		// alert(data.message);
		displayModal(data.message, "success");
	}

	function SubmitForYou(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log(data.get('ip1'));
		if (data.get('ip1') && data.get('ip2') && data.get('ip3') && data.get('ip4') && data.get('ip5') && data.get('ip6') && data.get('heading') && data.get('description')) {
			sendforyou({ ip1: data.get('ip1'), ip2: data.get('ip2'), ip3: data.get('ip3'), ip4: data.get('ip4'), ip5: data.get('ip5'), ip6: data.get('ip6'), heading: data.get('heading'), description: data.get('description') });
		}
	}

	async function sendforyou(foryou) {
		console.log(foryou);
		const url = `http://localhost:8081/masterclass/addmasterclassforyou`;
		const { data } = await axios.post(url, {
			foryou: foryou,
		});

		// alert(data.message);
		displayModal(data.message, "success");
	}

	return (
		<div className="container mx-auto p-4">
			<div className="text-center mb-8">
				<h1 className="text-2xl font-bold">Master Class Edit</h1>
				<hr className="my-4" />
				<div className="UpperSection">
					<form onSubmit={SubmitUpperDetails}>
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">Upper Section Details</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Title:</label>
								<input
									type="text"
									className="border rounded p-2"
									id="eventTitle"
									placeholder="Event Title"
									name="title"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Date:</label>
								<input
									type="date"
									id="eventDate"
									className="border rounded p-2"
									name="date"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Speaker:</label>
								<input
									type="text"
									id="eventSpeaker"
									className="border rounded p-2"
									placeholder="Name of the speaker"
									name="speaker"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Time:</label>
								<input
									type="time"
									id="eventTime"
									className="border rounded p-2"
									name="time"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Venue:</label>
								<input
									type="text"
									id="eventVenue"
									className="border rounded p-2"
									placeholder="Venue"
									name="venue"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Language:</label>
								<input
									type="text"
									className="border rounded p-2"
									id="language"
									placeholder="Language"
									name="language"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Price At:</label>
								<input
									type="number"
									className="border rounded p-2"
									id="Price"
									placeholder="Rs."
									name="priceat"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Enroll Link:</label>
								<input
									type="text"
									className="border rounded p-2"
									id="Link"
									placeholder="Link"
									name="enrolllink"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Enroll Text:</label>
								<input
									type="text"
									className="border rounded p-2"
									id="Btn-text"
									placeholder="Text for the Button"
									name="enrolltext"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Access at:</label>
								<input
									type="text"
									id="access-text"
									className="border rounded p-2"
									placeholder="Access Text"
									name="accessat"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Video Link:</label>
								<input
									type="text"
									id="video-link"
									className="border rounded p-2"
									placeholder="Video Link"
									name="videolink"
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="items-center">Event Type:</label>
								<div className="flex gap-4 items-center">
									<label className="items-center">
										<input
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio1"
											value="Free"
											className="mr-2"
										/>
										Free
									</label>
									<label className="items-center">
										<input
											type="radio"
											name="inlineRadioOptions"
											id="inlineRadio2"
											value="Paid"
											className="mr-2"
										/>
										Paid
									</label>
								</div>
							</div>
							<button
								type="submit"
								className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
				<hr className="my-8" />
				<div className="About-MasterClass">
					<form onSubmit={SubmitAboutMasterClass}>
						<div className="space-y-4">
							<h3 className="text-xl font-semibold">About Master Class</h3>
							<hr className="my-4" />
							<div className="space-y-4">
								{[...Array(5)].map((_, i) => (
									<textarea
										key={i}
										className="border rounded p-2 flex w-1/3 mx-auto"
										name={`skill${i + 1}`}
										placeholder="Skills Learning in this class"
									></textarea>
								))}
							</div>
							<button
								type="submit"
								className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
				<hr className="my-8" />
				<div>
					<div className="space-y-4">
						<h3 className="text-xl font-semibold">User Feedback Screenshots</h3>
						<hr className="my-4" />
						<div className="row">
							<button
								className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300 flex-col"
								type="button"
								onClick={AddNewFeedBackFile}
							>
								Add New File
							</button>
							
								
							
						</div>
						<form onSubmit={SubmitFeedback}>

						<hr className="my-4" />
						<div className="space-y-4 feedback-file-details">
							Feedback input will be displayed here
							<br />
							{[...Array(3)].map((_, i) => (
								<input
									key={i}
									type="file"
									className="border my-3 mx-2 p-2"
									name={`file${i + 1}`}
								/>
							))}
							<br />
							<button
									type="submit"
									className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300 flex-col"
								>
									Submit
								</button>

							<br />
						</div>
						</form>
					</div>
				</div>
				{/* <hr className="" /> */}
				<br />
				{/* <div>
					<div className="space-y-4">
						<h3 className="text-xl font-semibold">User Feedback Videos</h3>
						<hr className="my-4" />
						<div className="row">
							<button
								className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300 flex-col "
								onClick={AddNewFeedBackLink}
							>
								Add New File
							</button>
							<form onSubmit={SubmitFeedbackLink} className="flex-col">

								<button
									type="submit"
									className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300 flex-col"
								>
									Submit
								</button>
							</form>
						</div>
						<hr className="my-4" />
						<div className="space-y-4 feedback-link-details">
							Feedback Links will be displayed here
							<br />
						</div>


					</div>
				</div> */}
				<hr className="my-8" />
				<div>
					<div className="space-y-4">
						<h3 className="text-xl font-semibold">Discounts and Offers</h3>
						<hr className="my-4" />
						<form onSubmit={SubmitDiscount}>
							<div className="space-y-4">
								{[...Array(1)].map((_, i) => (
									<div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<label className="items-center">Offer Text:</label>
										<input
											type="text"
											className="border rounded p-2"
											name={`discount`}
										/>
									</div>
								))}
							</div>
							<button
								type="submit"
								className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
				<hr className="my-8" />
				<div>
					<div className="space-y-4">
						<h3 className="text-xl font-semibold">Followers List</h3>
						<hr className="my-4" />
						<form onSubmit={SubmitFollowers}>
							<div className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<label className="items-center">Instagram:</label>
									<input
										type="number"
										className="border rounded p-2"
										name="instagram"
									/>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<label className="items-center">Twitter:</label>
									<input
										type="number"
										className="border rounded p-2"
										name="twitter"
									/>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<label className="items-center">Linkedin:</label>
									<input
										type="number"
										className="border rounded p-2"
										name="linkedin"
									/>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<label className="items-center">Youtube:</label>
									<input
										type="number"
										className="border rounded p-2"
										name="youtube"
									/>
								</div>
							</div>
							<button
								type="submit"
								className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
				{/* <hr className="my-8" /> */}
				{/* <div>
					<div className="space-y-4">
						<h3 className="text-xl font-semibold">Speakers List</h3>
						<hr className="my-4" />
						<button
							type="button"
							className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300"
							onClick={submitspeaker}
						>
							Add Speaker
						</button>
						<form onSubmit={SubmitForYou}>
							<button
								type="submit"
								className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300"
							>
								Submit
							</button>
						</form>
					</div>
				</div> */}
				<hr className="my-8" />
				<div>
					<div className="">
						<h3 className="text-xl font-semibold">FAQs</h3>
						<hr className="my-4" />
						<button
							type="button"
							className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300"
							onClick={AddNewQuestion}
						>
							Add New Question
						</button>
						<form onSubmit={SubmitQNA}>

							<hr className="my-4" />
							<div className="faq-details grid grid-cols-1 md:grid-cols-1 items-center">
								{[...Array(3)].map((_, i) => (
									<div key={i} className=" ">
										<input
											type="text"
											className="border  mb-5 w-1/3 rounded p-2 mr-3"
											name={`question${i + 1}`}
											placeholder={`Your Question ${i + 1}`}
										/>
										<input
											type="text"
											className="border w-1/3 rounded p-2"
											name={`answer${i + 1}`}
											placeholder="Answer"
										/>
										{/* <hr /> */}
									</div>
								))}
							</div>
							<button
								type="submit"
								className="bg-custom-green text-white px-4 py-2 rounded mt-4 hover:bg-[#0d865f] transition-all duration-300"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);

}
