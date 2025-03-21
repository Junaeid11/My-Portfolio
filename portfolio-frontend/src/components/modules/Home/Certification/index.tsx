"use client";

import { Eye } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const CertificateSection = () => {
  const certificates = [
    {
      title: "Next.js: Creating and Hosting a Full-Stack Site",
      institution: "LinkedIn Learning",
      instructor: "Shaun Wassell",
      completionDate: "February 27, 2025",
      link: "https://www.linkedin.com/learning/certificates/0b306c7a5bf3917b5ecc2837f56c6b93901f03693068945158b78486bb4031e5?trk=share_certificate",
    },
    {
      title: "Generative AI for Web Developers",
      institution: "LinkedIn Learning",
      instructor: "Pearson and Shaun Wassell",
      completionDate: "February 18, 2025",
      link: "https://www.linkedin.com/learning/certificates/a751fcf0b9aad4924418c43ee020af2ca8ac4e5bdcf4692561a997d4e0252181?trk=share_certificate",
    },
    {
      title: "Docker Foundations Professional Certificate",
      institution: "Docker and LinkedIn",
      completionDate: "February 17, 2025",
      link: "https://www.linkedin.com/learning/certificates/6bcddc356648cbcde16eb75ffc06dffdcd110430b5c74a2daaf92fb8082d1133?trk=share_certificate",
    },
    {
      title: "Learning Docker",
      institution: "LinkedIn Learning",
      instructor: "Carlos Nunez",
      completionDate: "February 17, 2025",
      link: "https://www.linkedin.com/learning/certificates/6bcddc356648cbcde16eb75ffc06dffdcd110430b5c74a2daaf92fb8082d1133?trk=share_certificate",
    },
  ];

  return (
    <section className="text-black  py-20 px-6 md:px-10"
    style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-abstract-portfolio-pink-memphis-playful-image_593414.jpg')",backgroundSize:"cover" ,backgroundRepeat:"no-repeat", }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-red-400 text-xl font-bold uppercase">Check Out</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">MY CERTIFICATES</h2>
          <p className="text-gray-500 mt-4 text-lg">
            I have completed various courses to enhance my skills. Click on the icon to view the certificates.
          </p>
          <div className="mt-4 flex justify-center md:justify-start">
            <Link
              href="https://www.linkedin.com/in/junaeidahmedtanim/"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              <FaLinkedin size={24} />
              Connect on LinkedIn
            </Link>
          </div>
        </div>

        {/* Right Side - Certificates */}
        <div className="md:w-1/2 bg flex flex-col gap-6 w-full">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg flex justify-between items-center shadow-lg hover:shadow-xl transition-all"
            >
              {/* Certificate Text */}
              <div>
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-red-500 font-semibold">{cert.institution}</p>
                <p className="text-gray-500 text-sm">{cert.completionDate}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-green-300 transition-all"
              >
                <Eye size={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
