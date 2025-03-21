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
    <div className="my-10 w-full px-4">
      <h1 className="text-center text-4xl mb-5 font-bold">
        Login <span className="text-red-500 dark:text-red-400">Here</span>
      </h1>

      <div className="w-full sm:w-[40%] mx-auto bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm sm:text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm sm:text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full border border-red-500 dark:border-red-400 text-red-500 dark:text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-red-400 hover:text-black dark:hover:bg-red-500"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-red-500 dark:text-red-400 hover:underline">
            Create an account
          </Link>
        </p>

        <p className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">Or Sign Up Using</p>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://noob-portfolio.vercel.app/dashboard",
              })
            }
            className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Image
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              width={30}
              height={30}
              alt="Google logo"
            />
          </button>
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://noob-portfolio.vercel.app/dashboard",
              })
            }
            className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              width={25}
              height={25}
              alt="GitHub logo"
            />
          </button>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default LoginPage;
