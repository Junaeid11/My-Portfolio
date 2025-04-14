/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";

const BlogDetailsPage = ({ blog }: any) => {
  const formattedDate = new Date(blog.data.createdAt).toLocaleDateString();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
        {/* Blog Image */}
        {blog.data.image ? (
          <figure className="relative h-[350px] w-full overflow-hidden">
            <Image
              src={blog.data.image}
              fill
              alt="Blog cover"
              className="object-cover object-center w-full h-full"
            />
          </figure>
        ) : (
          <p className="text-center py-6 text-gray-400">No image available</p>
        )}

        <div className="p-8 text-white">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            {blog.data.title}
          </h1>

          {/* Date */}
          <div className="flex items-center text-sm text-gray-300 mb-6">
            <FaCalendar className="mr-2" />
            {formattedDate}
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.data.content }}
          />

          {/* Author Info */}
          <div className="mt-10 border-t border-gray-700 pt-6 flex items-center gap-4">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              width={48}
              height={48}
              alt="author"
              className="rounded-full border-2 border-teal-500"
            />
            <div>
              <p className="text-base font-medium text-gray-100">
                {blog.data.author}
              </p>
              <p className="text-sm text-gray-400">Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
