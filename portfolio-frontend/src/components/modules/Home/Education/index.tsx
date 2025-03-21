"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap, FaBook } from "react-icons/fa";

const MyEducation = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
    });
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
    <div className=" min-h-screen   dark:from-gray-900 dark:to-gray-700 p-10"
    style={{ backgroundImage: "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNjA0YmF0Y2gyLWJhY2tncm91bmQtYm0tMDItMDEtYS5qcGc.jpg')",backgroundSize:"cover" ,backgroundRepeat:"no-repeat", }}>
      <div className="flex items-center justify-center gap-3">
        <FaGraduationCap className="text-[#FF4081] text-4xl" />
        <h1 className="text-3xl md:text-4xl text-center font-extrabold text-black dark:text-white">
          My Education
        </h1>
      </div>

      <div className="container mx-auto px-5 py-10">
        <div>
          <h2
            data-aos="fade-up"
            className="text-2xl font-semibold text-center text-red-500 pb-6"
          >
            Academic Educational Qualification
          </h2>
        </div>

        <div className="relative">
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`flex gap-10 ${
                edu.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } flex-col-reverse`}
            >
              <div
                className={`w-full md:w-1/2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all ${
                  edu.align === "left" ? "text-end" : "text-start"
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.title}
                </h3>
                <h4 className="text-gray-700 dark:text-gray-400">
                  {edu.institution}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{edu.duration}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Result: <span className="text-red-500 font-bold">{edu.result}</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaGraduationCap className="text-red-500 text-2xl" />
                <div className="h-20 w-[5px] bg-gray-400 dark:bg-gray-600"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <div className="mt-16">
          <h2
            data-aos="fade-up"
            className="text-2xl font-semibold text-center text-red-500 pb-6"
          >
            Courses
          </h2>
        </div>

        <div className="relative">
          {courseData.map((course, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`flex gap-10 mt-10 ${
                course.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } flex-col-reverse`}
            >
              <div
                className={`w-full md:w-1/2 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all ${
                  course.align === "right" ? "text-start" : "text-end"
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <h4 className="text-gray-700 dark:text-gray-400">
                  {course.institution}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{course.duration}</p>
              </div>
              <div className="flex flex-col items-center">
                <FaBook className="text-red-500 text-2xl" />
                <div className="h-20 w-[5px] bg-gray-400 dark:bg-gray-600"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEducation;