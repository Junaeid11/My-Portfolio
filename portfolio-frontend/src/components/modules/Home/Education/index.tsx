"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap, FaBook } from "react-icons/fa";

const MyEducation = () => {
  useEffect(() => {
    // Initialize AOS after the DOM is ready
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
    });

    // Update AOS on resize and scroll (to ensure it works during scrolling)
    window.addEventListener("resize", AOS.refresh);
    window.addEventListener("scroll", AOS.refresh);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("resize", AOS.refresh);
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);

  const educationData = [
    {
      title: "Diploma In Engineering (Power Technology)",
      institution: "Chattogram Polytechnic Institute, Chattogram",
      duration: "August 2020 - January 2025",
      result: "3.16",
      align: "left",
    },
  ];

  const courseData = [
    {
      title: "Complete Web Development",
      institution: "Programming Hero",
      duration: "January 2024 - October 2024",
      align: "right",
    },
    {
      title: "Industrial Attachment",
      institution: "1320 MW SS POWER PLANT, Banshkhali, Chattogram",
      duration: "September 2024 - December 2024",
      align: "left",
    },
    {
      title: "Next Level Web Development",
      institution: "Programming Hero",
      duration: "November 2024 - March 2025",
      align: "right",
    },
  ];

  return (
    <div className="min-h-[80vh] dark:bg-black p-10">
      <div className="flex items-center justify-center gap-3 mb-6">
        <FaGraduationCap className="text-[#1e17ef] text-4xl" />
        <h1 className="text-3xl md:text-4xl text-center font-extrabold text-[#17a0ef]">
          My Education
        </h1>
      </div>

      <div className="container mx-auto px-5 py-10">
        <h2
          data-aos="fade-up"
          className="text-2xl font-semibold text-center text-[#94cae8] pb-6"
        >
          Academic Educational Qualification
        </h2>

        {/* Education Section */}
        <div className="relative">
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`flex gap-10 ${edu.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} flex-col-reverse`}
            >
              <div
                className={`w-full md:w-1/2 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 bg-[#1a1a1a] dark:bg-gray-800`}
              >
                <h3 className="text-xl font-semibold text-[#17a0ef]">{edu.title}</h3>
                <h4 className="text-gray-400">{edu.institution}</h4>
                <p className="text-gray-300">{edu.duration}</p>
                <p className="text-gray-300">
                  Result: <span className="text-[#17a0ef] font-bold">{edu.result}</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaGraduationCap className="text-[#1b17ef] text-2xl" />
                <div className="h-20 w-[5px] bg-[#1734ef]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <div className="mt-16">
          <h2
            data-aos="fade-up"
            className="text-2xl font-semibold text-center text-[#94cae8] pb-6"
          >
            Courses
          </h2>
        </div>

        <div className="relative">
          {courseData.map((course, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`flex gap-10 mt-10 ${course.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} flex-col-reverse`}
            >
              <div
                className={`w-full md:w-1/2 bg-[#1a1a1a] dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105`}
              >
                <h3 className="text-xl font-semibold text-[#17a0ef]">{course.title}</h3>
                <h4 className="text-gray-400">{course.institution}</h4>
                <p className="text-gray-300">{course.duration}</p>
              </div>
              <div className="flex flex-col items-center">
                <FaBook className="text-[#1b17ef] text-2xl" />
                <div className="h-20 w-[5px] bg-[#1b17ef]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
