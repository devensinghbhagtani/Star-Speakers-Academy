import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Changepassword() {
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

  function handlepasswordchange(event){
    event.preventDefault();
    const data=new FormData(event.target);
    console.log(data.get("email"));
    if(data.get("email")==""){
      // alert("Please enter email");
      displayModal("Please enter email", "error");
      return;
    }
    sendconfirmeail(data.get("email"));
  }

  async function sendconfirmeail(email){
    try{
        const response = await axios.post("http://localhost:8081/auth/changepassword", {
            email: email,
        });
        console.log(response);
        // alert(response.data.message);
        displayModal(response.data.message, "success");
    }
    catch(error){
        // console.error("Error during login:", error);
        // alert("Email does not exist");
        displayModal("Email does not exist", "error");
    }
  }

//   function handlesecuirtycode(event){
//     event.preventDefault();
//     const data=new FormData(event.target);
//     console.log(data.get("security"));
//     }



  return (
    <>
      <div className="w-full h-[80px] md:h-[60px] bg-zinc-700 fixed flex items-center justify-center">
        <Link to="/">
          <img className="size-32" src="./assets/Icons/logo.svg" alt="" />
        </Link>
      </div>
      <div className=" w-full h-screen flex flex-col justify-center items-center bg-white md:bg-zinc-100 pt-5">
        <div className="min-w-[380px] md:w-[450px] min-h-[530px] bg-white p-8 md:p-10 rounded-2xl flex flex-col items-center justify-center text-zinc-700">
          <div className="w-full ">
            <h1 className="text-3xl mb-1 font-medium tracking-tight text-zinc-600">
              Enter Registered email
            </h1>
          </div>
          <form className="w-full mt-6 flex flex-col gap-4" onSubmit={handlepasswordchange}>
            <div className="flex flex-col w-full">
              <label className="text-sm text-zinc-500" htmlFor="email">
                Email
              </label>{" "}
              <input className=" rounded-md p-2 border-2 w-full" type="email" name="email"/>
              <div className="flex mt-3 flex-col gap-5">
                <hr className="border-[1px] border-zinc-200" />
                <button className="w-full bg-[#20b486] active:bg-[#1e9771] hover:bg-[#1e9771] py-3 rounded-lg text-white" type="submit">Verify Email</button>
              </div>
            </div>
        </form>
        {/* <form onSubmit={handlesecuirtycode}>  
            <div className="flex flex-col w-full">
              <label className="text-sm text-zinc-500" htmlFor="email">
                Security Code sent to your email
              </label>{" "}
              <input className="rounded-md p-2 border-2 w-full" type="text" name="security" />
            </div>

            <div className="flex mt-3 flex-col gap-5">
              <button className="w-full bg-[#20b486] active:bg-[#1e9771] hover:bg-[#1e9771] py-3 rounded-lg text-white" type="submit">
                Submit
              </button>
            
              <hr className="border-[1px] border-zinc-200" />
            </div>
            </form> */}
          
        </div>
        <div className="fixed bottom-3 px-10 py-1 rounded-full text-sm text-white bg-zinc-700 ">
          © Star Speakers Academy 2024
        </div>
      </div>
    </>
  );
}

export default Changepassword;
