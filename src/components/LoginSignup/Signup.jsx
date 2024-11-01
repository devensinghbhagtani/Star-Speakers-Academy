import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Signup() {
  function displayModal(message, status) {
    if (status === "success") {
      Swal.fire({
        title: "Success",
        text: message,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#20B486",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  function handleform(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    //  console.log(data.get("name"));
    //  console.log(data.get("email"));
    //  console.log(data.get("password"));

    if (!data.get("name") || !data.get("email") || !data.get("password")) {
      alert("Please fill all the fields");
      return;
    }

    // if password is less than 8 characters and it must conrtain a special character and a number
    if (
      data.get("password").length < 8 ||
      !data
        .get("password")
        .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)
    ) {
      // alert("Password must contain atleast 8 characters, a number and a special character");
      displayModal(
        "Password must contain atleast 8 characters, a number and a special character",
        "error"
      );
      return;
    } else {
      sendregister(data.get("name"), data.get("email"), data.get("password"));
    }
  }

  async function sendregister(name, email, pass) {
    const url = `${import.meta.env.VITE_SERVER_URL}/email/send`;
    const { data } = axios.post(url, {
      name: name,
      email: email,
      password: pass,
    });
    //  console.log(data);
    displayModal("Mail has been sent! Please verify your account.", "success");
  }

  async function handlegoogle() {
    //  console.log("Google login");
    window.open(
      `${import.meta.env.VITE_SERVER_URL}/auth/google/callback`,
      "_self"
    );
  }

  function displayModal(message, status) {
    if (status === "success") {
      Swal.fire({
        title: "Success",
        text: message,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#20B486",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <>
      <div className="w-full h-[80px] md:h-[60px] bg-zinc-700 fixed flex items-center justify-center">
        <Link to="/">
          <img className="size-32" src="/assets/Icons/logo.svg" alt="" />
        </Link>
      </div>
      <div className=" w-full  flex flex-col justify-center items-center bg-white md:bg-zinc-100 pt-5">
        <div className="mt-20 mb-20 min-w-[380px] md:w-[450px] min-h-[530px] bg-white p-8 md:p-10 rounded-2xl flex flex-col items-center justify-center text-zinc-700">
          <div className="w-full ">
            <h1 className="text-3xl mb-2 font-medium tracking-tight pl-0 text-zinc-600">
              Create Account
            </h1>
            <h1 className="text-sm pl-0">
              Please{" "}
              <mark className="bg-transparent text-[#20b486]">sign-up</mark> to
              continue!
            </h1>
          </div>
          <form
            className="w-full mt-6 flex flex-col gap-4"
            onSubmit={handleform}
          >
            <div className="flex flex-col w-full">
              <label className="text-sm text-zinc-500" htmlFor="name">
                Name
              </label>{" "}
              <input
                className=" rounded-md p-2 border-2 w-full"
                type="name"
                name="name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm text-zinc-500" htmlFor="email">
                Email
              </label>{" "}
              <input
                className=" rounded-md p-2 border-2 w-full"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm text-zinc-500" htmlFor="password">
                Password
              </label>{" "}
              <input
                className="rounded-md p-2 border-2 w-full"
                type="password"
                name="password"
              />
            </div>
            {/* <div className="flex justify-between">
              <div className="flex gap-2 text-zinc-500 text-xs">
                <input type="checkbox" name="news" id="news" />
                <label htmlFor="news">
                  Yes, Ram Verma Academy can email me with promotions and news.
                  (optional)
                </label>
              </div>
            </div> */}
            <div className="flex mt-2 flex-col gap-5">
              <button
                className="w-full bg-[#20b486] active:bg-[#1e9771] hover:bg-[#1e9771] py-3 rounded-lg text-white"
                type="submit"
              >
                Signup
              </button>
              <hr className="border-[1px] border-zinc-200" />
              <button
                className="w-full py-3 rounded-lg border-2 flex  active:bg-zinc-100 hover:bg-zinc-50 text-zinc-700 items-center justify-center gap-3"
                type="button"
                onClick={handlegoogle}
              >
                <img src="/assets/Icons/google.svg" alt="" />
                Continue with Google
              </button>
              <div className="w-full justify-center flex text-sm gap-1">
                <h1>
                  Already have an account?{" "}
                  <a className="text-[#20b486] underline" href="/login">
                    Sign in
                  </a>
                </h1>
              </div>
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

export default Signup;
