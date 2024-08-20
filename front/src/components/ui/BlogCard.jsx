import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const formatDate = (dateTimeString) => {
  const date = new Date(dateTimeString);

  // aisa aayga "18 Aug 2024"
  const optionsDate = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", optionsDate);

  // aisa aayga "02:17 PM"
  const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };
  const formattedTime = date.toLocaleTimeString("en-US", optionsTime);
  return `${formattedTime} on ${formattedDate}`;
};

export function BlogCard({
  author,
  title,
  content,
  coverImageUrl,
  created_at,
  onClick,
  images,
}) {
  return (
    <div className="relative h-[55vh] flex w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-3 m-5">
      <h4 className="p-3 block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {author}
      </h4>
      <div className="relative rounded-2xl h-52 max-xl:h-[160px] overflow-hidden text-gray-700 bg-transparent shadow-2xl bg-clip-border">
        {images.length > 1 ? (
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
          >
            {images.map((image, el) => {
              return (
                <SwiperSlide key={el}>
                  <img
                    src={image}
                    alt=""
                    className="bg-center w-full h-full bg-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="w-full h-full">
            <img
              src={coverImageUrl}
              alt="ui/ux review check"
              className="object-cover w-full h-full transition-all duration-500 ease-in-out"
            />
          </div>
        )}
      </div>
      <div className="p-5 transition-all duration-500 ease-in-out">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 max-h-96 overflow-x-auto">
          {title}
        </h4>
        <p className="block mt-3 p-2 font-sans text-xl antialiased shadow-inner rounded-xl font-normal leading-relaxed text-wrap text-gray-700 h-16 overflow-hidden">
          {content}
        </p>

        <button
          className="flex h-5 items-center text-blue-600  hover:text-black cursor-pointer w-24 justify-center mt-5"
          onClick={onClick}
        >
          Read More
        </button>
      </div>
      <div className="flex items-center justify-end p-6 mt-auto">
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          {formatDate(created_at)}
        </p>
      </div>
    </div>
  );
}
