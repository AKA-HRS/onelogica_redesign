import React from "react";
import test from "../../assets/test.png";
import CardSwiper from "../ui/CardSwiper";
import DisplayAnimation from "../ui/DisplayAnimation";
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
import structure from "../../assets/workingStructure.png";

const images = [img1, img3, img4, img5, img6, img7, img8, img9];

const testimonials = [
  {
    name: "Kenzie Edgar",
    imgSrc: "https://i.pravatar.cc/100?img=1",
    text: "Kenzie Edgar’s exceptional problem-solving skills and strategic vision significantly transformed our approach. Her insights led to a marked improvement in our operational efficiency and overall success.",
  },
  {
    name: "Stevie Tifft",
    imgSrc: "https://i.pravatar.cc/100?img=2",
    text: "Stevie Tifft played a crucial role in refining our digital strategy. His innovative solutions and dedication resulted in a seamless implementation process and measurable gains in productivity.",
  },
  {
    name: "Tommie Ewart",
    imgSrc: "https://i.pravatar.cc/100?img=3",
    text: "Tommie Ewart’s expertise in managing complex projects was invaluable. His strategic approach and commitment to excellence helped us achieve our goals on time and within budget.",
  },
  {
    name: "Charlie Howse",
    imgSrc: "https://i.pravatar.cc/100?img=4",
    text: "Charlie Howse’s deep knowledge and hands-on support were instrumental in overcoming our technical challenges. His solutions were both innovative and practical, driving significant improvements.",
  },
  {
    name: "Nevada Herbertson",
    imgSrc: "https://i.pravatar.cc/100?img=5",
    text: "Nevada Herbertson’s contribution to our project was outstanding. Her strategic insights and proactive problem-solving led to a highly successful implementation and notable business growth.",
  },
  {
    name: "Kris Stanton",
    imgSrc: "https://i.pravatar.cc/100?img=6",
    text: "Kris Stanton’s strategic guidance and technical expertise greatly benefited our organization. His ability to navigate complex scenarios and deliver effective solutions was crucial to our success.",
  },
  {
    name: "Alex Martinez",
    imgSrc: "https://i.pravatar.cc/100?img=7",
    text: "Alex Martinez's innovative approach and dedication brought a fresh perspective to our project. His effective strategies and solutions have had a lasting impact on our business operations.",
  },
  {
    name: "Jordan Lee",
    imgSrc: "https://i.pravatar.cc/100?img=8",
    text: "Jordan Lee’s strategic insights and hands-on support were instrumental in achieving our business objectives. His expertise and commitment to excellence made a significant difference in our outcomes.",
  },
  {
    name: "Morgan Taylor",
    imgSrc: "https://i.pravatar.cc/100?img=9",
    text: "Morgan Taylor’s exceptional skills in project management and strategy were key to our success. Her innovative solutions and thorough approach ensured we met all our goals effectively.",
  },
  {
    name: "Casey Jordan",
    imgSrc: "https://i.pravatar.cc/100?img=10",
    text: "Casey Jordan’s contributions were invaluable. Her deep understanding of industry trends and practical solutions helped us navigate challenges and achieve remarkable results.",
  },
];

export function AboutPage() {
  return (
    <div className="w-full h-full flex justify-center flex-col">
      <DisplayAnimation>
        <div className="container mx-auto px-4  p-8 flex justify-center items-center gap-5 max-md:flex-col">
          <div className="flex flex-[2] justify-center flex-col space-y-5 items-center">
            <h1 className="text-5xl max-md:text-2xl ">WHO are WE</h1>
            <p className="text-wrap text-justify text-gray-300 text-xl">
              We are a 4.0 era forward-thinking company, born in the cloud,
              committed to harnessing cutting-edge technologies to design and
              develop innovative products and solutions that drive disruptive
              transformation for businesses. Our focus is on building top-notch
              products that solve complex and evolving challenges, while
              constantly pushing the boundaries of traditional solutions through
              innovation. We endeavour to stay ahead of industry reforms and
              norms, such as Open Banking, Banking 4.0, Industry 4.0, and Open
              Healthcare. As a data and analytics company, we provide
              comprehensive solutions across a range of industries and
              technologies. Our offerings span the entire data analytics
              lifecycle, including data management, data quality, master data
              management, data governance, data warehousing, big data,
              analytics, AI and ML, as well as complementary technologies like
              RPA, blockchain, and bots. We also offer low-code no-code smart
              application development on the customer's preferred cloud platform
              (Azure, AWS, or GCP). We are dedicated to finding unique and
              effective solutions for our customers and continuously pushing the
              boundaries of data and technology.
            </p>
          </div>
          <div className="flex justify-center flex-col space-y-5 items-center flex-1">
            <img src={test} alt="" className="w-[496px] " />
          </div>
        </div>
      </DisplayAnimation>
      <DisplayAnimation>
        <div className="space-y-8 container mx-auto px-4 p-8 my-14">
          <h1 className="text-5xl max-md:text-2xl">
            Unlock Your Journey in 3 Simple Steps
          </h1>
          <span className="flex-col text-gray-300 text-xl flex pl-5 gap-y-5">
            <p className="relative w-fit hover-strike-through cursor-pointer">
              Master the Secrets of Databases
            </p>
            <p className="relative w-fit hover-strike-through cursor-pointer">
              Embark on the Adventure of Data Science Workflow
            </p>
            <p className="relative w-fit hover-strike-through cursor-pointer">
              Ascend to New Heights with Big Data
            </p>
          </span>
        </div>
      </DisplayAnimation>
      <DisplayAnimation>
        <div className="container mx-auto px-4 p-8 text-5xl max-md:text-2xl my-14">
          <h1 className="text-center">Our Partner</h1>
          {
            <span className="container flex-wrap flex space-x-8 justify-center items-center">
              {images.map((img, index) => (
                <img
                  src={img}
                  alt=""
                  key={index}
                  className="w-28 object-contain"
                />
              ))}
            </span>
          }

          <h3 className="text-2xl text-center text-gray-300">
            While we are at the forefront of and specialize in design-build,
            <br /> we are very familiar with a number of delivery methods and
            are confident we can find the process that will best help you meet
            your goals.
          </h3>
        </div>
      </DisplayAnimation>
      <DisplayAnimation>
        <div className="container mx-auto px-4 py-8 flex justify-center items-center">
          <div className="w-full h-[50vh] flex justify-center items-center flex-col">
            <div className="w-full m-2">
              <h1 className="text-5xl max-md:text-2xl text-center p-3">
                Meet Our Team
              </h1>
            </div>
            <CardSwiper />
          </div>
        </div>
      </DisplayAnimation>

      <DisplayAnimation>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl max-md:text-2xl text-center">
            Our Experties
          </h1>
          <div className="flex-1 flex max-md:flex-col container">
            <div className="flex-1 p-8">
              <h3 className="text-wrap text-4xl max-md:text-xl pl-5">
                Leveraging our expertise in cutting-edge technologies to address
                and solve your business challenges.
              </h3>
            </div>
            <div className="flex-1 p-8">
              <p className="text-wrap text-justify text-gray-300 text-xl pl-5">
                At Onelogica, we excel in crafting innovative solutions for
                complex enterprise challenges.
                <br /> By leveraging cutting-edge technologies and a profound
                grasp of industry best practices,
                <br /> we tailor our strategies to address your unique needs and
                obstacles.
                <br /> Our expert team is dedicated to delivering impactful
                results that propel your business forward.
              </p>
            </div>
          </div>
        </div>
      </DisplayAnimation>
      <DisplayAnimation>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl text-center mb-8 max-md:text-2xl">
            Our Success Stories
          </h1>
          <div className="flex flex-wrap max-md:flex-col w-full p-5">
            {testimonials.map((testimonial, index) => (
              <div
                className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 flex flex-col"
                key={index}
              >
                <DisplayAnimation>
                  <div className="flex-1 w-full mx-auto rounded-lg bg-white border-gray-200 p-5 text-gray-800 font-light flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                        <img
                          src={testimonial.imgSrc}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          {testimonial.name}
                        </h6>
                      </div>
                    </div>
                    <p className="text-sm leading-tight flex-1">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {testimonial.text}
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </DisplayAnimation>
              </div>
            ))}
          </div>
        </div>
      </DisplayAnimation>
      <DisplayAnimation>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl max-md:text-2xl text-center">
            Our Working structure
          </h1>
          <img src={structure} alt="" />
        </div>
      </DisplayAnimation>
    </div>
  );
}
