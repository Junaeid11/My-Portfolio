/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

const BlogDetailsPage = ({ blog }: any) => {
  const formattedDate = new Date(blog.data.createdAt).toLocaleDateString();

  return (
    <div className="max-w-4xl mx-auto bg-white text-black shadow-xl rounded-3xl p-8 mt-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">

      {blog.data.image ? (
        <figure className="mb-5">
          <Image
            src={blog.data.image}
            width={500}
            height={350}
            alt="blog image"
            className="rounded-2xl w-full object-cover shadow-lg "
          />
        </figure>
      ) : (
        <p className="text-center text-gray-500">No image available</p>
      )}
      <div className="relative mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800 my-5">{blog.data.title}</h2>
        <p className="absolute flex top-0 right-2 text-red-500  w-fit px-4 py-1 rounded-full text-sm">
          <FaCalendar className="mr-2" />
          {formattedDate}
        </p>
        <div className="text-gray-700 text-lg leading-relaxed mt-8">
          <p className="text-justify text-gray-600">{blog.data.content}</p>
        </div>
      </div>
      <div className="flex items-center justify-end py-2 px-4 rounded-full gap-3 mt-6">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          width={40}
          height={40}
          alt="author image"
          className="rounded-full border-2 border-teal-500"
        />
        <span className="text-lg font-semibold text-gray-700">{blog.data.author}</span>
      </div>
      
    </div>
  );
};

export default BlogDetailsPage;
