import React, { useEffect } from "react";
import { Nav } from "./components/ui";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBgColor } from "./components/redux/slice/navbarSlice";
import { Footer } from "./components/pages";

export default function Layout() {
  const dispatch = useDispatch();
  const { bgColor } = useSelector((state) => state.navbar);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        dispatch(
          setBgColor(
           
            "fixed text-white font-bold bg-[rgba(255,255,255,0.25)] shadow-[0_8px_32px_0_rgba(0,0,0,0.7)] backdrop-blur-[12px] rounded-[10px] border-[rgba(255,255,255,0.18)]"
          )
        );
      } else {
        dispatch(setBgColor(bgColor));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <div className="relative flex min-h-screen w-full flex-col font-inter bg-[#000102f5]">
      <div
        className={`${bgColor} w-full z-50 transition-[background-color,box-shadow] duration-[800ms]`}
      >
        <Nav />
      </div>

      <div className="flex-grow w-full h-full text-base text-white">
        <Outlet />
      </div>

      <div className="container mx-auto px-4 py-8">
        <Footer />
      </div>
    </div>
  );
}
