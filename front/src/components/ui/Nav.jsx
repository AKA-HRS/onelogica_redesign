import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNav } from "../redux/slice/navbarSlice";
import logo from "../../assets/logo.png";
import menu from "../../assets/hamburger.svg";

const items = [
  { name: "Product", path: "/product" },
  { name: "Industry", path: "/industry" },
  { name: "Blogs", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Career", path: "/carrer" },
];

export function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nav } = useSelector((state) => state.navbar);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // targeting reload button
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      console.log(e);
      event.returnValue = "Are you sure you want to leave?";
      navigate(0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleNavigation = (path) => {
    if (nav !== path) {
      dispatch(setNav(path));
      navigate(path);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="max-lg:hidden w-full h-full flex relative bg-transparent justify-evenly items-center lg:p-[1em] xl:px-[4em]">
        <button
          onClick={() => handleNavigation("/")}
          className="h-full min-w-72 justify-center items-center flex rounded-2xl"
        >
          <img src={logo} alt="Onelogica" />
        </button>
        <div className="ml-auto flex justify-center items-center h-full max-lg:hidden">
          {items.map((item, index) => (
            <button
              className="m-5 p-2 relative text-xl font-bold flex hover:-translate-y-1 justify-center transition-all duration-300 ease-in-out"
              key={index}
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <button
          onClick={() => handleNavigation("/contact-us")}
          className="ml-auto text-nowrap border p-2 rounded-2xl"
        >
          Contact Us
        </button>
      </div>

      {/* mobile view */}

      <div className="text-center absolute top-0 left-0  hidden max-lg:flex mt-5 ml-5">
        <button
          className=" bg-slate-300 rounded-full  text-sm p-2"
          type="button"
          onClick={toggleDrawer}
        >
          <img src={menu} alt="" className="w-8 h-8" />
        </button>
      </div>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-[100] h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-64 text-black`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-800 uppercase "
        >
          Menu
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                className="m-5 p-2 relative text-xl font-bold flex hover:-translate-y-1 justify-center transition-all duration-300 ease-in-out"
                onClick={() =>{toggleDrawer, handleNavigation("/")}}
              >
                Home
              </button>
            </li>
            {items.map((item, index) => (
              <li key={index}>
                <button
                  className="m-5 p-2 relative text-xl font-bold flex hover:-translate-y-1 justify-center transition-all duration-300 ease-in-out"
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
