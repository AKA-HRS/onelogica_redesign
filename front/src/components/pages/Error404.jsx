import React from "react";
import notfound from "../../assets/404.svg";
import { useNavigate } from "react-router-dom";

export function Error404() {
  const navigate = useNavigate();
  return (
    <main className="grid  w-full h-screen bg-black place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center flex flex-col items-center">
        <img src={notfound} alt="" className="w-28 h-28" />
        <p className="text-base font-semibold text-white">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-500 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-white">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => navigate("/")}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </button>
        </div>
      </div>
    </main>
  );
}
