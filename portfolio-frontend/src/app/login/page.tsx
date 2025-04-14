/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useLoginMutation } from "@/redux/apis/blogs.slice";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import Cookie from "js-cookie";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [login] = useLoginMutation();
  const router = useRouter();

  const onSubmit = async (formData: FormValues) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await login(formData).unwrap();
      if (response.success) {
        toast.success("Login successful", { id: toastId, duration: 2000 });
        Cookie.set("accessToken", response.data.token);
        router.push("/dashboard");
      } else {
        toast.error("Login failed", { id: toastId, duration: 2000 });
      }
    } catch (err) {
      toast.error("Invalid Password or Email", { id: toastId });
    }
  };

  return (
    <div className="my-10 w-full px-4 bg-transparent min-h-screen flex items-center justify-center">
      <div className="w-full sm:w-[40%] mx-auto bg-black dark:bg-gray-900 p-8 shadow-xl rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-center text-4xl mb-5 font-semibold text-blue-800 dark:text-white">
          Login <span className="text-white dark:text-red-400">Here</span>
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 dark:text-blue-400 hover:underline">
            Create an account
          </Link>
        </p>

     
      </div>
      <Toaster richColors />
    </div>
  );
};

export default LoginPage;
