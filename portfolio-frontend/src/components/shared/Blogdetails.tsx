/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

const BlogDetailsPage = ({ blog }: any) => {
  const formattedDate = new Date(blog.data.createdAt).toLocaleDateString();

  return (
    <div className="max-w-3xl mx-auto bg-white text-black shadow-lg rounded-xl p-8 mt-8 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
      {/* Blog Image */}
      {blog.data.image ? (
        <figure className="mb-6">
          <Image
            src={blog.data.image}
            width={700}
            height={400}
            alt="blog image"
            className="rounded-xl w-full object-cover shadow-md"
          />
        </figure>
      ) : (
        <p className="text-center text-gray-400">No image available</p>
      )}

      {/* Blog Content */}
      <div className="relative mb-6">
        <h2 className="text-4xl font-bold text-gray-800 my-5 leading-tight">{blog.data.title}</h2>

        {/* Date */}
        <p className="absolute flex top-0 right-2 text-gray-500 w-fit px-4 py-1 rounded-full text-sm">
          <FaCalendar className="mr-2" />
          {formattedDate}
        </p>

        {/* Blog Content */}
        <div
          className="text-gray-600 mt-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.data.content }} // Correctly wrapped in `{ __html: ... }`
        />
      </div>

      {/* Author Info */}
      <div className="flex items-center justify-start py-3 px-4 rounded-full gap-3 mt-8 border-t-2 border-gray-200">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          width={40}
          height={40}
          alt="author image"
          className="rounded-full border-2 border-teal-500"
        />
        <span className="text-lg font-medium text-gray-700">{blog.data.author}</span>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
