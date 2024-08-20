import React from "react";

export function RotatingBorder({ children }) {
  return (
    <div className=" transition-shadow duration-300 ease-in-out hover:shadow-2xl group flex w-full max-w-lg rounded-xl items-center justify-center">
      <div className="relative z-10 flex w-full items-center overflow-hidden rounded-xl p-[1.5px]">
        <div className="group-hover:animate-rotate absolute inset-0 h-full w-full rounded-full group-hover:bg-[conic-gradient(#fff_10deg,transparent_120deg)]"></div>
        {children}
      </div>
    </div>
  );
}
