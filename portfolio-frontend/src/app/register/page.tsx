/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRegisterMutation } from "@/redux/apis/blogs.slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

export type UserData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>();
  const router = useRouter();
  const [registerUser] = useRegisterMutation();

  const onSubmit = async (formData: UserData) => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await registerUser(formData).unwrap();
      if (res.success) {
        toast.success("Registered successfully", { id: toastId, duration: 2000 });
        router.push("/login");
      } else {
        toast.error("Registration failed", { id: toastId });
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error(err.message || "Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="my-10 w-full mx-auto bg-transparent min-h-screen flex items-center justify-center">
      <div className="w-full sm:w-[40%] mx-auto bg-black dark:bg-gray-900 p-8 shadow-xl rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-center text-4xl mb-5 font-semibold text-blue-800 dark:text-white">
          Register <span className="text-white dark:text-red-400">Here</span>
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-500 dark:text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm sm:text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-500 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm sm:text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-500 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm sm:text-sm bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-400 hover:shadow-2xl transition-all ease-in-out"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 dark:text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default RegisterPage;
