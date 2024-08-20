import React from "react";

export function Card({ img, title, detail }) {
  return (
    <div className="w-72 select-none space-y-3 p-2 relative z-20 rounded-[0.60rem] bg-[#000102f5] ">
      <img
        src={img}
        alt=""
        className="w-10 h-10 p-2 rounded-full bg-gray-300"
      />
      <h2 className="font-bold text-3xl">{title}</h2>
      <p className="text-gray-300 text-wrap">{detail}</p>
    </div>
  );
}
