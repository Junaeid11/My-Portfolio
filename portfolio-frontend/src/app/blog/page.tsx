"use client";

import Spinner from "@/components/shared/Spinner";
import { useGetBlogsQuery } from "@/redux/apis/blogs.slice";
import { TBlog } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const { data, isLoading } = useGetBlogsQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto px-4 pt-20 py-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#276ac7]">My Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {data?.data.map((blog: TBlog) => (
          <div
            key={blog._id}
            className="bg-transparent backdrop-blur-md shadow-xl border border-blue-500 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden"
          >
            <div className="h-[200px] w-full relative">
              <Image
                src={blog.image}
                alt="Blog"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-white">
              <h2 className="text-xl font-bold mb-2 line-clamp-2">{blog.title}</h2>
              <p
                className="text-sm bg-white/10 p-5 rounded-xl text-gray-300 mb-3 line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: blog.content.slice(0, 120) + "...",
                }}
              ></p>

              <p className="text-xs text-gray-400 mb-4">
                By <span className="font-semibold">{blog.author}</span> |{" "}
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>

              <Link
                href={`/blog/${blog._id}`}
                className="inline-block mt-auto text-sm font-semibold text-teal-400 hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
