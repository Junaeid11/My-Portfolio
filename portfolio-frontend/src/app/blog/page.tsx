"use client";

import Spinner from "@/components/shared/Spinner";
import { useGetBlogsQuery } from "@/redux/apis/blogs.slice";
import { TBlog } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const { data, isLoading } = useGetBlogsQuery(undefined);


  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Blogs</h1>
      <div className="grid dark:bg-white grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {data?.data.map((blog: TBlog) => (
          <div key={blog._id} className="  text-black p-6 rounded-lg shadow-lg">
           
            <div className="">
            <Image
            src={blog.image}
            alt={'imageNai'}
            width={500}
            height={300}
            
            
            />
            </div>
            <h2 className="text-xl dark:text-white font-semibold mt-4">{blog.title}</h2>
            <p className="text-gray-300 mt-2">{blog.content.slice(0, 100)}...</p>
            <p className="text-sm text-gray-400 mt-2">
              By {blog.author} | {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <Link href={`/blog/${blog._id}`} className="text-teal-400 mt-4 inline-block">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
