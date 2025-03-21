/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Spinner from "@/components/shared/Spinner";
import { useDeleteBlogsMutation, useGetBlogsQuery } from "@/redux/apis/blogs.slice";
import { TBlog } from "@/types/types";
import Image from "next/image";
import { toast, Toaster } from "sonner";

const ALlBlogs = () => {
  const { data, isLoading, refetch } = useGetBlogsQuery(undefined);
  const [deleteBlogs] = useDeleteBlogsMutation()
  console.log(data);

  if (isLoading) {
    return <Spinner />;
  }
  const handleDeleteOrder = async (_id: string) => {
    try {
      await deleteBlogs(_id).unwrap();
      toast.success("Blogs deleted successfully!");
      refetch();
    } catch (err: any) {
      toast.error(err?.message || "Failed to delete the order.");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-6">
      {data.data.map((blog :TBlog) => (
        <div
          key={blog._id}
          className="border border-gray-300 rounded-lg p-4 bg-white shadow-md"
        >
          <Image
            src={blog.image }
            alt={"image nai"}
            width={500}
            height={200}
            layout="responsive"
          />
          <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{blog.content.substring(0, 100)}...</p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Author: {blog.author}</span>
            <span
              className={`text-xs font-semibold ${blog.isPublished ? "text-green-600" : "text-red-600"}`}
            >
              {blog.isPublished ? "Published" : "Draft"}
            </span>
            <button
              className="btn btn-primary text-white p-4 rounded-xl bg-red-500 mx-2"
              onClick={() => handleDeleteOrder(blog._id)}
            >
              Delete
            </button>
          </div>
        </div>

      ))}

      <Toaster richColors />
    </div>
  )
}

export default ALlBlogs
