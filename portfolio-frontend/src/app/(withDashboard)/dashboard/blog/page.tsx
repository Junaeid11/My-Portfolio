/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCreateBlogMutation } from "@/redux/apis/blogs.slice";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

type UserData = {
  title: string;
  image: string;
  author: string;
  content: string;
};

const CreateBlogs = () => {
  const { register, handleSubmit, reset } = useForm<UserData>();
  const [createBlog] = useCreateBlogMutation();

  const onSubmit = async (formData: UserData) => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await createBlog(formData).unwrap();
      if (res.success) {
        toast.success("Blog Created Successfully", { id: toastId, duration: 2000 });
        reset();
      } else {
        toast.error("Blog creation failed", { id: toastId });
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error(err.message || "Error occurred", { id: toastId });
    }
  };

  return (
    <div className="flex items-center justify-center my-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-semibold mb-6 text-red-600 text-center">
            Create Blog
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                type="text"
                id="author"
                {...register("author", { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter author name"
              />
            </div>

          </div>
          <div className="my-5">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Blog Image URL
            </label>
            <input
              type="url"
              id="image"
              {...register("image", { required: true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Paste image URL here"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              {...register("content", { required: true })}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter blog content"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create
          </button>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default CreateBlogs;
