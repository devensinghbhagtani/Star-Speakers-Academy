import React, { useEffect, useState } from 'react';
import { Link , useLocation, useNavigate} from "react-router-dom";
import axios from 'axios';

function Forgotpassword() {

    const location = useLocation();
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(null); 
    const [token, setToken] = useState(null);

  function handlepasswordchange(event){

    event.preventDefault();
    const data=new FormData(event.target);
    console.log(data.get("password"));
    console.log(data.get("confirmpassword"));
    actualchange(token,data.get("password"),data.get("confirmpassword"));
  
}

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

async function actualchange(token,password,confirmpassword){
    try{
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/verifyandchangepassword`, {
            token: token,
            password: password,
            confirmpassword: confirmpassword
        });
        console.log(response);
        // alert(response.data.message);
        displayModal(response.data.message, "success");
    }
    catch(error){
        // console.error("Error during login:", error);
        // alert("Error in changing password");
        displayModal("Error in changing password", "error");
    }
}

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    setToken(token);

  const validateToken = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}auth/validatetoken?token=${token}`);
      if (response.data.valid) {
        setIsValid(true);
      } else {
        setIsValid(false);
        navigate('/error');
      }
    } catch (error) {
      console.error('Error validating token:', error);
      setIsValid(false);
      navigate('/error');
    }
  };

  if (token) {
    validateToken();
  }
}, [location.search, navigate]);



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
              Enter new Password
            </h1>
          </div>
          <form className="w-full mt-6 flex flex-col gap-4" onSubmit={handlepasswordchange}>
            <div className="flex flex-col w-full">
              <label className="text-sm text-zinc-500" htmlFor="email">
                Password
              </label>{" "}
              <input className=" rounded-md p-2 border-2 w-full" type="password" name="password"/>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm text-zinc-500" htmlFor="email">
                Confirm Password
              </label>{" "}
              <input className="rounded-md p-2 border-2 w-full" type="password" name="confirmpassword" />
            </div>

            <div className="flex mt-3 flex-col gap-5">
              <button className="w-full bg-[#20b486] active:bg-[#1e9771] hover:bg-[#1e9771] py-3 rounded-lg text-white" type="submit">
                Submit
              </button>
              <hr className="border-[1px] border-zinc-200" />
            </div>
          </form>
        </div>
        <div className="fixed bottom-3 px-10 py-1 rounded-full text-sm text-white bg-zinc-700 ">
          © Star Speakers Academy 2024
        </div>
      </div>
    </>
  );
}

export default Forgotpassword;
