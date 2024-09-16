import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./CoursePlayer.module.css";
import { useCallback } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Helper from "../VideoPlayer/main";
import Swal from "sweetalert2";
import { AlignHorizontalJustifyCenter } from "lucide-react";
// import Helper from "../Play Course/main";
function CoursePlayer(props) {

	const [courseData, setCourseData] = useState(null);
	const { folder } = useParams();
	const [selectedTab, setSelectedTab] = useState("Description");
	const [checkedLectures, setCheckedLectures] = useState([]);
	const [obfuscatedURL, setObfuscatedURL] = useState(null);
	const [videoname, setvideoname] = useState(null);

	console.log(folder)
	// console.log(props.user);
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

	function logincheck() {
		if (props.user == null) {
			// alert("Please login to view the course");
			displayModal("Please login to view the course", "error");
			return false;
		}
		else {
			return true
		}
	}

	const fetchObfuscatedURL = async (video_name) => {

		console.log("Video Name:", video_name);
		//  if(checkvideo(video_name)){
		console.log("Fetching obfuscated URL for video:", video_name);

		//console.log(checkvideo(video_name));
		try {

			const response = await axios.get(
				`http://localhost:8081/videos/api/obfuscate-url?video_name=${video_name}`
			);
			setObfuscatedURL(response.data.obfuscatedURL);
			console.log("Obfuscated URL:", response.data.obfuscatedURL);
		} catch (error) {
			console.error("Error fetching obfuscated URL:", error);
		}
		// }
	};


	const getCourseInfo = useCallback(async () => {
		console.log("Folder:", folder);
		try {
			const cacheddata = sessionStorage.getItem(`courseData-${folder}`);
			//console.log("Cached Data:", cacheddata);

			const response = await axios.get(
				`http://localhost:8081/videos/getvideodetails?folder=${folder}`
			);
			console.log("Response:", response.data);
			setvideoname(response.data.tableout.course_video.S);
			// sessionStorage.setItem(
			//   `courseData-${folder}`,
			//   JSON.stringify(response.data)
			// )
			setCourseData(response.data);
			console.log(courseData);
			console.log(response.data.tableout.course_video.S);
			fetchObfuscatedURL(response.data.tableout.course_video.S);

		} catch (error) {
			console.error("Error fetching course information:", error);
		}

	}, [folder]);

	useEffect(() => {
		getCourseInfo();
	}, [getCourseInfo]);



 


	function handlecomments(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		console.log(data);
		submitcomment(data.get('name'), data.get('email'), data.get('comment'), folder);
	}

	async function submitcomment(name, email, comment, folder) {
		try {
			const url = 'http://localhost:8081/videos/addcomment';
			const { data } = await axios.post(url, {
				name: name,
				email: email,
				comment: comment,
				folder: folder,
			});
			// alert(data.message)
			displayModal(data.message, "success");
		}
		catch (error) {
			// console.error("Error in submitting comment:", error);
			displayModal("Error in submitting comment", "error");
		}
	}

	// async function submitFeedback(name, feedback, folder) {
	// 	try {
	// 		const url = 'http://localhost:8081/videos/addfeedback';
	// 		const { data } = await axios.post(url, {
	// 			name: name,
	// 			feedback: feedback,
	// 			folder: folder,
	// 		});
	// 		alert(data.message)
	// 	}
	// 	catch (error) {
	// 		console.error("Error in submitting feedback:", error);
	// 	}
	// }

	const modules = [];

	const handleFeedback = (event) => {
	    event.preventDefault();
		const data = new FormData(event.target);
		console.log(data.get('name')), console.log(data.get('Feedback')), console.log(data.get('designation'));
		submitFeedback(folder, props.user?.Name?.S, data.get('Feedback'), data.get('designation'));
		// submitFeedback(data.get('name'), data.get('Feedback'), folder);
	}

	async function submitFeedback(course, name, feedback, designation) {
		try {
			const url = 'http://localhost:8081/masterclass/addfeedbacktocourse';
			const { data } = await axios.post(url, {
				course: course,
				name: name,
				feedback: feedback,
				designation: designation,
			});
			// alert(data.message)
			displayModal(data.message, "success");
		}
		catch (error) {
			// console.error("Error in submitting feedback:", error);
			displayModal("Error in submitting feedback", "error");
		}
	}

	const handleTabClick = (tab) => {
		setSelectedTab(tab);
	};

	// const handleCheckboxChange = (lectureId) => {
	//   setCheckedLectures((prevCheckedLectures) =>
	//     prevCheckedLectures.includes(lectureId)
	//       ? prevCheckedLectures.filter((id) => id !== lectureId)
	//       : [...prevCheckedLectures, lectureId]
	//   );
	// };

	const justifyText = {
		textAlign: "justify",
	};

	const renderContent = () => {
		switch (selectedTab) {
			case "Description":
				return (
					<div className="m-3">
						<h3 className="text-2xl font-bold mb-4">Course Description: </h3>
						<p className="text-base leading-relaxed" style={{textAlign:"justify"}}>
							{courseData && courseData.tableout.course_description.S}
						</p>
						<hr className="my-4" />
						<div className="flex items-center">
							<h3 className="text-2xl font-bold">Course Instructor: </h3>
							<h3 className="text-2xl font-bold text-blue-500 ml-2">
								<a href="https://starspeakers">
									{courseData && courseData.tableout.course_speaker.S}
								</a>
							</h3>
						</div>
						<hr className="my-4" />
						<h3 className="text-2xl font-bold mb-2">Course Objectives: </h3>
						<ul className="list-disc list-inside text-base leading-relaxed">
							<li>{courseData && courseData.tableout.course_line.S}</li>
						</ul>
						<hr className="my-4" />
						<div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-2">
							<div>
								<h4 className="text-lg font-semibold">Course Duration:</h4>
								<p>{courseData && courseData.tableout?.course_duration?.S}</p>
							</div>
							<div>
								<h4 className="text-lg font-semibold">Course Language:</h4>
								<p>{courseData && courseData.tableout.course_language.S}</p>
							</div>
							<div>
								<h4 className="text-lg font-semibold">Total Lectures:</h4>
								<p>
									{courseData &&
										Object.values(courseData.tableout.Modules.M).reduce(
											(sum, module) => sum + module.M.lectures.L.length,
											0
										)}
								</p>
							</div>
							<div>
								<h4 className="text-lg font-semibold">Course Price: </h4>
								<p>{courseData && courseData.tableout.price.N}</p>
								{/* <button
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={displayRazorpay}
                >
                  Buy Now
                </button> */}

							</div>
						</div>
						<hr className="my-4" />
					</div>
				);

			//   case "Comments":
			//     return (
			//       <div className="m-3">
			//         <h3 className="text-2xl font-bold mb-4">Comments</h3>
			//         <form onSubmit={handlecomments}>
			//           <div className="mb-4">
			//             <label htmlFor="name" className="block text-base font-medium">
			//               Name:
			//             </label>
			//             <input
			//               type="text"
			//               className="w-full border border-gray-300 rounded p-2 mt-1"
			//               id="name"
			//               name="name"
			//             />
			//           </div>
			//           <div className="mb-4">
			//             <label htmlFor="email" className="block text-base font-medium">
			//               Email:
			//             </label>
			//             <input
			//               type="email"
			//               className="w-full border border-gray-300 rounded p-2 mt-1"
			//               id="email"
			//               name="email"
			//             />
			//           </div>
			//           <div className="mb-4">
			//             <label htmlFor="comment" className="block text-base font-medium">
			//               Comment:
			//             </label>
			//             <textarea
			//               className="w-full border border-gray-300 rounded p-2 mt-1"
			//               id="comment"
			//               rows="3"
			//               name="comment"
			//             ></textarea>
			//           </div>
			//           <button
			//             type="submit"
			//             className="bg-custom-green text-white py-2 px-4 rounded"
			//           >
			//             Submit
			//           </button>
			//         </form>
			//       </div>
			//     );

			case "Bookmarks":
				return (
					<div className="m-3">
						<h3 className="text-2xl font-bold mb-4">Bookmarks</h3>
						<p>Bookmark your favorite lectures to watch later:</p>
					</div>
				);

			case "Course Content":
				return (
					<div className="m-3">
						<div className="flex justify-between mb-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<h4 className="text-lg font-semibold">Course Progress:</h4>
								</div>
								<div>
									<p>
										{Math.round((checkedCount / totalLectures) * 100)}% completed
									</p>
								</div>
							</div>
						</div>
						<hr className="my-4" />
						<ul className="list-group">{renderModuleProgress()}</ul>
					</div>
				);

			case "Resources":
				return (
					<div className="m-3">
						<h3 className="text-2xl font-bold mb-4">Resources</h3>
						{/* <p>Download the course resources from the links below:</p> */}
						<ul className="list-disc list-inside">
							{
								courseData?.tableout?.resources ?
									courseData.tableout.resources.L.map((resource, index) => (
										<li key={index}>
											<a href={resource.S} className="text-blue-500">{resource.S}</a>
										</li>
									)) : null
							}
						</ul>
						<hr className="my-4" />
					</div>
				);

			case "Feedback":
				return (
					<div className="m-3">
						<h3 className="text-2xl font-bold mb-4">Feedback</h3>
						<p>Share your feedback about the course:</p>
						{/* feedback form */}
						<Form className="mt-4" onSubmit={handleFeedback}>
							<div className="mb-4">
								<label htmlFor="name" className="block text-base font-medium">
									Name:
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2 mt-1"
									id="name"
									name="name"
									disabled
									value={props.user?.Name?.S}
								/>
								<label htmlFor="name" className="block text-base font-medium">
									Designation:
								</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded p-2 mt-1"
									id="designation"
									name="designation"
								/>

								<label htmlFor="Feedback" className="block text-base font-medium mt-4">
									Feedback:
								</label>
								<textarea
									className="w-full border border-gray-300 rounded p-2 mt-1"
									id="Feedback"
									name="Feedback"
									rows="3"
								></textarea>

								<button
									type="submit"
								
									className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
								>
									Submit
								</button>

							</div>
						</Form>
						<hr className="my-4" />
					</div>
				);
			default:
				return null;
		}
	};

	const handleClick = (video_name) => {
		if (logincheck()) {
			fetchObfuscatedURL(video_name);
		}
	};

	const renderLectures = (moduleName, lectures) => {
		console.log("Lectures:", lectures);
		return lectures.map((lecture, index) => (
			<div
				key={index}
				onClick={() => handleClick(lecture.S)}
				className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
			>
				{/* <input
          type="checkbox"
          id={`${moduleName}-lecture${index}`}
          value={lecture.S.split("/")[1]}
        /> */}
				<label
					htmlFor={`${moduleName}-lecture${index}`}
					className="ml-2 text-sm font-medium text-gray-700"
					style={{ cursor: "pointer", fontSize: "1.1rem" }}
				>
					{lecture.S.split("/")[2]}
				</label>
			</div>
		));
	};




	const totalLectures = modules.reduce(
		(sum, module) => sum + module.lectures.length,
		0
	);
	const checkedCount = checkedLectures.length;

	const renderModuleProgress = () => {
		const modulesArray = [];

		if (
			courseData &&
			courseData.tableout &&
			courseData.tableout.Modules &&
			courseData.tableout.Modules.M
		) {
			const modules = courseData.tableout.Modules.M;
			console.log("Modules:", modules);

			for (let moduleName in modules) {
				console.log("Module Name:", moduleName);
				if (modules.hasOwnProperty(moduleName)) {
					modulesArray.push(
						<li
							key={moduleName}
							className="p-4 border border-gray-200 rounded-lg shadow-sm mb-4"
						>
							<details className="bg-gray-50 rounded-lg">
								<summary className="cursor-pointer p-2 font-medium text-lg">
									{moduleName}
								</summary>
								<hr className="my-2 border-gray-300" />
								{renderLectures(moduleName, modules[moduleName].M.lectures.L)}
							</details>
						</li>
					);
				}
			}
		}
		return modulesArray;
	}

	// const renderModuleProgress = () => {
	//   const modulesArray = [];

	//   if (courseData && courseData.tableout && courseData.tableout.Modules && courseData.tableout.Modules.M) {
	//     const modules = courseData.tableout.Modules.M;

	//     const sortedModuleNames = Object.keys(modules).sort(); // Sort module names alphabetically

	//     for (let moduleName of sortedModuleNames) {
	//       console.log("Module Name:", moduleName);
	//       if (modules.hasOwnProperty(moduleName)) {
	//         modulesArray.push(
	//           <li key={moduleName} className={`list-group-item module-item ${styles.moduleItem}`}>
	//             <details>
	//               <summary className="m-2">{moduleName}</summary>
	//               <hr />
	//               {renderLectures(moduleName, modules[moduleName].L)}
	//             </details>
	//           </li>
	//         );
	//       }
	//     }
	//   }
	//   return modulesArray;
	// }



	const handleTrigger = () => {
		var x = document.getElementById("content");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	};

	const FloatingDiv = {
		display: "none",
		position: "absolute",
		backgroundColor: "white",
		color: "black",
		width: "200px",
		height: "100px",
		zIndex: "1",
		border: "1px solid black",
		borderRadius: "10px",
		padding: "10px",
		boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
		right: "0",
		top: "40",
		marginTop: "55px",
	};

	const progressBtn = {
		color: "white",
		cursor: "pointer",
	};


	function loadScript(src) {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	}

	async function displayRazorpay() {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			// alert("Razorpay SDK failed to load. Are you online?");
			displayModal("Razorpay SDK failed to load. Are you online?", "error");
			return;
		}

		const result = await axios.post("http://localhost:8081/payment/orders",
			{
				folder: folder,
				email: props.user.email,
				amount: courseData.tableout.price.N
			}
		);

		if (!result) {
			// alert("Server error. Are you online?");
			displayModal("Server error. Are you online?", "error");
			return;
		}

		const { amount, id: order_id, currency } = result.data;

		const options = {
			key: "rzp_live_d5ZVQOUIw3XRX6",
			amount: amount.toString(),
			currency: currency,
			name: "StarSpeakers.",
			description: "Test Transaction",

			order_id: order_id,
			handler: async function (response) {
				const data = {
					orderCreationId: order_id,
					razorpayPaymentId: response.razorpay_payment_id,
					razorpayOrderId: response.razorpay_order_id,
					razorpaySignature: response.razorpay_signature,
				};

				const result = await axios.post("http://localhost:8081/payment/success", data);

				// alert(result.data.msg);
				displayModal(result.data.msg, "success");
			},
			prefill: {
				name: "Star Speakers",
				email: "starspeaker@gmail.com",
				contact: "9999999999",
			},
			notes: {
				address: "chembur, Mumbai",
			},
			theme: {
				color: "#61dafb",
			},
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	return (
<div className={`container-fluid mx-10 pt-24 grid grid-cols-1 lg:grid-cols-3 gap-4 ${styles.mainDiv} 
    ${props.user?.coursesinfo?.M && props.user?.coursesinfo?.M[folder] ? "" : "blur-sm pointer-events-none"}`} >

			{/* Left Section - Video and Description */}
			<div className="lg:col-span-2">
				<div className="mb-4">
					{console.log("Obfuscated URL:", obfuscatedURL)}
					<Helper obfuscatedURL={obfuscatedURL} title={folder} />
					<hr className="my-4" />
				</div>

				{/* Tabs */}
				<div className="tabs mb-4">
					<ul className="flex border-b">
						<li className="mr-4">
							<button
								className={`px-4 py-2 ${selectedTab === "Description"
									? "border-b-2 border-blue-500 text-blue-500"
									: "text-gray-700 hover:text-blue-500"
									}`}
								onClick={() => handleTabClick("Description")}
							>
								Description
							</button>
						</li>
						{
							courseData?.tableout?.resources ?
								<li className="nav-item">
									<button
										className={`px-4 py-2  ${selectedTab === "Resources" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-700 hover:text-blue-500"
											}`}
										onClick={() => handleTabClick("Resources")}
									>
										Resources
									</button>
								</li> :
								null
						}
						<li className="mr-4">
							<button
								className={`px-4 py-2 ${selectedTab === "Feedback"
									? "border-b-2 border-blue-500 text-blue-500"
									: "text-gray-700 hover:text-blue-500"
									}`}
								onClick={() => handleTabClick("Feedback")}
							>
								Feedback
							</button>
						</li>
					</ul>
				</div>

				<div className={`${styles.content}`}>{renderContent()}</div>
				<br />
			</div>

			{/* Right Section - Course Contents */}
			<div className="lg:col-span-1 lg:sticky lg:top-16">
				<h2 className="text-xl font-semibold mb-4">Course Contents</h2>
				<hr className="my-4" />
				<div
					className="course-content overflow-y-auto"
				>
					<ul className="list-none">{renderModuleProgress()}</ul>
				</div>
			</div>
		</div>);
}

export default CoursePlayer;
