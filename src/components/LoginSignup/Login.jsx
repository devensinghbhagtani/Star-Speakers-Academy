import React from "react";
import { Link } from "react-router-dom";

function Login() {
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
              Welcome!
            </h1>
            <h1 className="text-sm">
              Please{" "}
              <mark className="bg-transparent text-[#20b486]">
                Login to your account
              </mark>{" "}
              and start learning.
            </h1>
          </div>
          <form className="w-full mt-6 flex flex-col gap-4" action="">
            <div className="flex flex-col w-full">
              <label className="text-sm text-zinc-500" htmlFor="email">
                Email
              </label>{" "}
              <input className=" rounded-md p-2 border-2 w-full" type="text" />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm text-zinc-500" htmlFor="email">
                Password
              </label>{" "}
              <input className="rounded-md p-2 border-2 w-full" type="text" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1 text-zinc-500 text-sm">
                <input type="checkbox" name="rememberme" id="rememberme" />
                <label htmlFor="rememberme">Remember Me</label>
              </div>
              <a className="flex underline gap-1 text-[#20b486] text-sm">
                Forgot Password
              </a>
            </div>
            <div className="flex mt-3 flex-col gap-5">
              <button className="w-full bg-[#20b486] active:bg-[#1e9771] hover:bg-[#1e9771] py-3 rounded-lg text-white ">
                Login
              </button>
              <hr className="border-[1px] border-zinc-200" />
              <button className="w-full py-3 rounded-lg border-2 flex  active:bg-zinc-100 hover:bg-zinc-50 text-zinc-700 items-center justify-center gap-3">
                <img src="./assets/Icons/google.svg" alt="" />
                Login with Google
              </button>
              <div className="w-full justify-center flex text-sm gap-1">
                <h1>Need an Account?</h1>
                <a className="text-[#20b486] underline" href="">
                  Sign up
                </a>
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

export default Login;
