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
    <div className="my-10 w-full mx-auto">
      <h1 className="text-center text-4xl mb-5 font-bold">
        Register <span className="text-red-500 dark:text-red-500">Here</span>
      </h1>

      <div className="sm:w-[50%] w-full mx-auto bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="User Name"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full border border-red-500 dark:border-red-400 text-red-500 dark:text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-red-400 hover:text-black dark:hover:bg-red-500"
            >
              Register
            </button>
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link className="text-red-500 dark:text-red-400 hover:underline" href="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default RegisterPage;
