import React from "react";

function ErrorPage() {
  return (
    <>
      <div className="w-full h-[60px] bg-zinc-700 fixed flex items-center justify-center">
        <img className="size-32" src="./assets/Icons/logo.svg" alt="" />
      </div>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-5xl tracking-tighter text-center text-zinc-600">
            Sorry, we{" "}
            <mark className="bg-transparent text-[#20b486]">
              couldn't find that page
            </mark>
          </h1>
          <h1>Error 404 </h1>
        </div>
        <div className="fixed bottom-3 px-10 py-1 rounded-full text-sm text-white bg-zinc-700">
          © Star Speakers Academy 2024
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
