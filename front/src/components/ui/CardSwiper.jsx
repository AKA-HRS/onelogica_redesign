import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import linkedin from "../../assets/footerIcon/linkedin.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CardSwiper.css";
import { Parallax } from "swiper/modules";
import dp from "../../assets/dp.jpg";
import dp2 from "../../assets/dp2.jpg";
import bga from "../../assets/bga.jpg";
import { Autoplay } from "swiper/modules";

const team = [
  {
    postition: "Co-Founder & CEO",
    name: "Navin Kumar",
    linkedin: "",
    img: "https://i.pravatar.cc/300?img=12",
  },
  {
    postition: "Co-Founder & CTO",
    name: "Shiva Kumar",
    linkedin: "",
    img: "https://i.pravatar.cc/300?img=13",
  },
  {
    postition: "Chief Delivery Officer",
    name: "Pradeep",
    linkedin: "",
    img: "https://i.pravatar.cc/300?img=11",
  },
  {
    postition: "Human Resource Head",
    name: "Sima Priya",
    linkedin: "",
    img:"https://i.pravatar.cc/300?img=5",
  },
  {
    postition: "Product Mentor",
    name: "Siddheshwar Kumar",
    linkedin: "",
    img: dp,
  },
  {
    postition: "Finance Mentor",
    name: "Rajeev Kumar",
    linkedin: "",
    img: "https://i.pravatar.cc/300?img=59",
  },
  {
    postition: "Cloud Mentor",
    name: "Badal Vishal",
    linkedin: "",
    img: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=300",
  },
];

export default function CardSwiper() {
  return (
    <>
      <Swiper
        speed={1200}
        parallax={true}
        modules={[Autoplay, Parallax]}
        className="rounded-3xl overflow-hidden"
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
          pauseOnMouseEnter:true
        }}
        loop={true}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${bga})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        {team.map((t, index) => (
          <SwiperSlide key={index} className=" relative flex max-md:flex-col items-center p-5">
            <div
              className="flex flex-col gap-3 select-none items-center justify-center absolute md:right-4 max-md:p-3"
              data-swiper-parallax="-300"
            >
              <img
                src={t.img}
                alt=""
                className="rounded-2xl w-72 h-72 drop-shadow-2xl"
              />

              <p
                className="text-white font-bold max-md:-mt-12"
                data-swiper-parallax="200"
              >
                {t.postition}
              </p>
            </div>
            <div className="absolute top-5 max-md:left-3 max-md:top-8" data-swiper-parallax="-200">
              <a href={t.linkedin} className="text-white">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-16 h-16 max-md:w-10 max-md:h-10 bg-white md:rounded-xl rounded-lg"
                />
              </a>
            </div>
            <div
              className="absolute bottom-5 select-none"
              data-swiper-parallax="-100"
            >
              <h3 className="text-white md:text-4xl text-xl max-md:text:sm font-bold">{t.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
