import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import DisplayAnimation from "../ui/DisplayAnimation";

export function FullBlog() {
  // Hook called at the top level
  const { selectedBlog } = useSelector((state) => state.blog);

  if (!selectedBlog) {
    return <div>No blog found.</div>;
  }
  useEffect(()=>{
    console.log("componet rendered")
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <DisplayAnimation>
          <h1 className="text-3xl sm:text-5xl md:text-8xl">
            {selectedBlog.title}
          </h1>
        </DisplayAnimation>
        <DisplayAnimation>
          <span className="flex space-x-2 items-end my-5">
            <img
              src="https://i.pravatar.cc/100?img=8"
              alt=""
              className="rounded-full w-20 h-20"
            />
            <span>
              <p>{selectedBlog.author}</p>
              <span className="text-gray-400">
                Publish in
                <span className="text-white">
                  {" "}
                  {selectedBlog.created_at}
                </span>{" "}
              </span>
            </span>
          </span>
        </DisplayAnimation>
        <div className="my-5">
          <DisplayAnimation>
            <div className="relative rounded-2xl h-96 my-14 overflow-hidden text-gray-700 bg-transparent shadow-2xl bg-clip-border">
              {selectedBlog.images.length > 1 ? (
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
                  loop={true}
                  modules={[Autoplay]}
                >
                  {selectedBlog.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Slide ${index}`}
                        className="bg-center bg-cover w-full h-full"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img
                  src={selectedBlog.coverImageUrl}
                  alt="Blog cover"
                  className="h-full w-full transition-all duration-500 ease-in-out"
                />
              )}
            </div>
          </DisplayAnimation>
          <DisplayAnimation>
            <p className="text-xl">{selectedBlog.content}</p>
          </DisplayAnimation>
        </div>
      </div>
    </div>
  );
}
