import React from "react";
import { useDispatch } from "react-redux";
import { setNav } from "../redux/slice/navbarSlice";
import management from "../../assets/landingIcons/management.svg";
import language from "../../assets/landingIcons/language.svg";
import enterprise from "../../assets/landingIcons/enterprise.svg";
import { Card, Counter, RotatingBorder } from "../ui";
import "./landingPage.css";
import DisplayAnimation from "../ui/DisplayAnimation";
import img from "../../assets/img.jpg";
import {
  img1,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "../../assets/infiniteScrollerImage";

const cardData = [
  {
    img: management,
    title: "GLAM Management",
    detail: `GLAM is an AI-driven tool designed to optimize content through advanced
        language analysis, enhancing communication effectiveness and maximizing
        engagement across platforms.`,
  },
  {
    img: enterprise,
    title: "GLAM Management",
    detail: `GLAM is an AI-driven tool designed to optimize content through advanced
        language analysis, enhancing communication effectiveness and maximizing
        engagement across platforms.`,
  },
  {
    img: language,
    title: "GLAM Management",
    detail: `GLAM is an AI-driven tool designed to optimize content through advanced
        language analysis, enhancing communication effectiveness and maximizing
        engagement across platforms.`,
  },
];

const images = [img1, img3, img4, img5, img6, img7, img8, img9];
export function LandingPage() {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full text-white flex flex-col overflow-hidden justify-center items-center relative">
      <DisplayAnimation>
        <div className=" w-full flex flex-col relative items-start overflow-hidden">
          <div
            className="flex w-full grid-background max-lg:flex-col relative p-8 md:px-20"
            style={{ "--deg1": "0deg", "--deg2": "180deg" }}
          >
            <div className="flex-1 flex flex-col space-y-5 z-20">
              <h1 className="text-3xl md:text-7xl flex-1 text-wrap leading-snug text-white">
                We provide smart application using cloud and leading edge
                technologies
              </h1>
              <p className="text-lg text-gray-400 w-full">
                At Onelogica, we believe in finding innovative solutions to
                complex enterprise problems. With a focus on cutting-edge
                technologies and a deep understanding of industry best
                practices, we tailor our approach to meet your unique needs and
                challenges. Our team of experts is committed to delivering
                measurable results that drive business success.
              </p>
              <div>
                <button className="p-5 bg-white text-black rounded-full w-36 font-bold m-2">
                  Explore
                </button>
                <button onClick={()=>dispatch(setNav('/contact-us'))} className="p-5 border text-white rounded-full w-36 font-bold m-2">
                  Connect &gt;
                </button>
              </div>
            </div>

            <div className=" w-1/2 shadow-inner hidden relative md:flex overflow-hidden">
              <iframe
                src="https://giphy.com/embed/hPcDTIEdpPQu1VLy0G"
                className="absolute pointer-events-none w-full h-full "
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col w-full space-x-2 justify-center items-center gap-5 mt-20 text-xl text-gray-300">
            <span>Trusted by the big MNCs and tech companies</span>
            <span className=" flex space-x-8">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="w-16 object-contain grayscale"
                />
              ))}
            </span>
          </div>
        </div>
      </DisplayAnimation>

      <DisplayAnimation>
        <div
          className="h-auto max-md:max-w-md w-[70vw] my-10 relative flex flex-col items-center justify-between rounded-2xl grid-background overflow-hidden"
          style={{ "--deg1": "90deg", "--deg2": "270deg" }}
        >
          <div className="w-full flex flex-col md:flex-row relative justify-center items-center select-none">
            <div className="flex z-10 relative justify-center text-4xl font-bold text-center [text-shadow:_0px_3px_2px_#b0b0b0] items-center mx-4 mt-4 md:mt-0">
              Our Product and Solutions
            </div>
          </div>

          <div className=" w-full flex flex-wrap gap-5 justify-center items-center p-4">
            {cardData.map((data, index) => (
              <DisplayAnimation key={index}>
                <RotatingBorder>
                  <Card
                    img={data.img}
                    title={data.title}
                    detail={data.detail}
                  />
                </RotatingBorder>
              </DisplayAnimation>
            ))}
          </div>
          <button
            onClick={() => dispatch(setNav("/product"))}
            className="md:py-2 md:px-5 absolute right-5 top-2 z-10 max-md:w-28 max-md:h-16 transition-all duration-500 ease-in-out hover:-translate-y-2 text-center border border-white rounded-full mx-4"
          >
            Explore
          </button>
        </div>
      </DisplayAnimation>

      <DisplayAnimation>
        <div className="w-full flex max-lg:flex-col p-7 mt-5 lg:space-x-14 justify-evenly">
          <div className=" flex justify-center items-center  p-2 max-w-[500px]">
            <h1 className="text-5xl">
              Trust, But verify our <br /> transformative tech projects.
            </h1>
          </div>
          <div className=" flex justify-center items-start  p-2 max-w-[500px]">
            <p className="text-base">
              Over the past few years, we’ve delivered pioneering projects in
              <br />
              AI, cloud computing, and cybersecurity, enhancing digital
              <br />
              experiences and driving technological advancements for diverse
              <br />
              industries.
            </p>
          </div>
        </div>
      </DisplayAnimation>

      <div className=" border border-gray-600 my-20 relative w-[80%]"></div>

      <DisplayAnimation>
        <div
          className=" max-md:max-w-md w-[75vw] my-10 relative p-2 md:p-8 flex items-center justify-between rounded-2xl grid-background overflow-hidden"
          style={{ "--deg1": "110deg", "--deg2": "300deg" }}
        >
          <div className="flex max-lg:flex-col-reverse justify-between gap-7 z-40 w-full h-full">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-semibold">
                  Our Specialized Solutions
                </h2>
                <p className="text-lg">
                  We employ a proven, targeted, and efficient approach.
                </p>
              </div>

              <div className="flex justify-between mt-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold">
                    <Counter endValue={500} symbol={"+"} speed={1} />
                  </h3>
                  <p className="text-sm mt-2">Awards & Honors</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold">
                    <Counter endValue={97} symbol={"%"} />
                  </h3>
                  <p className="text-sm mt-2">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold">
                    <Counter endValue={20} symbol={"+"} speed={20} />
                  </h3>
                  <p className="text-sm mt-2">Creative Experts</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={img}
                alt="Professional"
                className="rounded-lg w-52 h-52 object-cover mb-4"
              />
              <p className="text-right text-3xl text-gray-300">
                Make your product
                <br /> stand out to the
                <br /> right audience
              </p>
            </div>
          </div>
        </div>
      </DisplayAnimation>
      <DisplayAnimation>
        <div
          className=" max-md:max-w-md w-[75vw] flex-col my-10 relative p-2 md:p-14 flex items-center justify-between rounded-2xl grid-background overflow-hidden"
          style={{
            "--deg1": "165deg",
            "--deg2": "190deg",
            "--colorr": "#273B4F",
          }}
        >
          <div className="z-40 space-y-10 text-white ">
            <h1 className="text-6xl text-center">
              Join the tech elite who
              <br /> trust us to power their growth.
            </h1>
            <p className="text-xl text-gray-300 text-center">
              Unlock the future of digital innovation with the industry's top
              tech agency,
              <br /> We're here to fuel your success and keep you ahead of the
              curve.
            </p>

            <div className="w-full flex justify-center items-center">
              <button
                onClick={() => dispatch(setNav("/about"))}
                className="px-6 py-3 bg-[#EEEEEE] text-black font-semibold rounded-md shadow-md hover:bg-[#c7c7c7] hover:-translate-y-3 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              >
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </DisplayAnimation>
    </div>
  );
}

// // rgba(13, 13, 13, 0.7)
