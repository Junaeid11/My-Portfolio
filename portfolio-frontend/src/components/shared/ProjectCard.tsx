/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';



export const ProjectCard = ({ project }: any) => {
  
const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
};
  return (
    <div className="relative bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-slate-50 overflow-hidden">
      <div className="mb-6 rounded-lg overflow-hidden">
        <Image
          src={project.image[0] }
          alt={`Image Not available`}
          className="w-full h-56 object-cover rounded-lg transition-all duration-300 ease-in-out hover:scale-110"
          width={500}
          height={300}
        />
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">{project.name}</h1>

      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">

        <Link className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors" href={project.github}>
          <FaGithub className="mr-2" />
          GitHub Repo
        </Link>
        <span>{formatDate(project.completionDate)}</span>
        <Link href={`/projects/${project._id}`} className="text-red-500 mt-4 inline-block">
          Read More →
        </Link>
      </div>
      <div className="mt-4 text-sm font-bold text-gray-700 gap-2">
        Status: 
        <span
          className={project.status === "Completed" ? "text-green-500 px-2" : "text-yellow-500 px-2"}
        >
          {project.status}
        </span>
      </div>

    </div>
  );
};
