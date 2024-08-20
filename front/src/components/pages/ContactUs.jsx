import React, { useState } from "react";
import DisplayAnimation from "../ui/DisplayAnimation";
import { useDispatch } from "react-redux";
import { setNav } from "../redux/slice/navbarSlice";
import axios from "axios";
import { Submitting } from "../ui";

export function ContactUs() {
  const [data, setData] = useState({
    name: "",
    company: "",
    goal: "",
    date: "",
    budget: "",
    email: "",
    productDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!data.name) {
      formErrors.name = "Name is required.";
      isValid = false;
    }
    if (!data.company) {
      formErrors.company = "Company name is required.";
      isValid = false;
    }
    if (!data.goal) {
      formErrors.goal = "Goal is required.";
      isValid = false;
    }
    if (!data.date) {
      formErrors.date = "Date is required.";
      isValid = false;
    }
    if (!data.email) {
      formErrors.email = "Email is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "/query",
          { data: data },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert(
          "Your inquiry has been successfully submitted! we will get in touch with in 2-3 working days"
        );
        setTimeout(() => {
          dispatch(setNav("/"));
        }, 2000);
      } catch (error) {
        console.error("Error submitting data:", error);
        setErrors({
          submit: "An error occurred while submitting your inquiry.",
        });
        console.log(errors.submit);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container mx-auto shadow-xl shadow-[#ffffff38] rounded-3xl px-4 py-8 max-md:h-auto max-md:py-4">
      <DisplayAnimation>
        <div className="flex  flex-col justify-between h-full max-md:h-auto">
          <h1 className="text-8xl my-5 max-md:text-4xl text-wrap">
            LET'S START
            <br />A PROJECT TOGETHER
          </h1>
          <div className="text-3xl leading-[80px] text-wrap max-md:text-xl mt-20">
            Hi! My name is
            <input
              className="bg-transparent leading-none outline-none mx-2 border-b text-[#FFFF00] max-md:w-full"
              name="name"
              placeholder="Enter your name*"
              onChange={handleChangeInput}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
            and I represent
            <input
              className="bg-transparent leading-normal outline-none mx-2 border-b text-[#FFFF00] max-md:w-full"
              name="company"
              placeholder="Company name*"
              onChange={handleChangeInput}
            />
            {errors.company && (
              <span className="text-red-500">{errors.company}</span>
            )}
            . I am looking for a partner to help me with
            <textarea
              className="bg-transparent leading-normal outline-none mx-2 border-b text-[#FFFF00] max-md:w-full"
              name="goal"
              placeholder="Your goal*"
              onChange={handleChangeInput}
            />
            {errors.goal && <span className="text-red-500">{errors.goal}</span>}
            . I aim to have this completed by
            <input
              className="bg-transparent outline-none mx-2 border-b text-[#FFFF00] max-md:w-full"
              name="date"
              type="date"
              onChange={handleChangeInput}
            />
            {errors.date && <span className="text-red-500">{errors.date}</span>}
            and would like to keep the budget around
            <input
              className="bg-transparent outline-none mx-2 border-b text-[#FFFF00] max-md:w-full"
              name="budget"
              placeholder="Budget (USD)*"
              onChange={handleChangeInput}
            />
            {errors.budget && (
              <span className="text-red-500">{errors.budget}</span>
            )}
            . You can reach me at
            <input
              className="bg-transparent outline-none mx-2 border-b text-[#FFFF00] max-md:w-full"
              name="email"
              type="email"
              placeholder="name@example.com"
              onChange={handleChangeInput}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
            to start the conversation. Optionally, I'm sharing more details:
            <textarea
              className="bg-transparent w-[80%] leading-normal outline-none mx-2 border-b text-[#FFFF00] max-md:w-full max-md:mt-2"
              name="productDetails"
              placeholder="Product details..."
              onChange={handleChangeInput}
            />
          </div>
          {isSubmitting ? (
            <div className="w-full justify-center items-center flex">

              <Submitting />
            </div>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="border-t rounded-b-lg mx-auto w-28 h-10 hover:bg-[#ffffff88] hover:text-black transition-all duration-200 ease-in max-md:mt-4"
            >
              Send Inquiry
            </button>
          )}
          {errors.submit && (
            <span className="text-red-500">{errors.submit}</span>
          )}
        </div>
      </DisplayAnimation>
    </div>
  );
}
