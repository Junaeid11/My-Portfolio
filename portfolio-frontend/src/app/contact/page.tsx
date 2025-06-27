"use client";

import { useContactMutation } from "@/redux/apis/blogs.slice";
import { useForm } from "react-hook-form";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { toast } from "sonner";

type UserData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserData>();
  const [registerUser] = useContactMutation() || [];

  const onSubmit = async (formData: UserData) => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await registerUser(formData).unwrap();
      if (res.success) {
        toast.success("Message Sent", { id: toastId, duration: 2000 });
        reset();
      } else {
        toast.error("Message send failed", { id: toastId });
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
      toast.error(err.message || "Email already exists", { id: toastId });
    }
  };

  return (
    <div className="mt-10 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-0 md:p-10 flex flex-col md:flex-row overflow-hidden border border-slate-200 dark:border-slate-700">
        {/* Left Side - Info */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-blue-100/60 to-purple-100/60 dark:from-slate-800 dark:to-slate-900 p-8">
          <FaEnvelopeOpenText className="text-5xl text-blue-500 dark:text-blue-400 mb-4" />
          <h2 className="text-2xl font-bold text-blue-700 dark:text-white text-center mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center text-base">
            Have a question or want to work together? Fill out the form and I&apos;ll get back to you soon.
          </p>
        </div>
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex justify-center items-center bg-white/90 dark:bg-slate-900/90">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800 py-3 px-5 text-base text-slate-700 dark:text-slate-200 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-900 transition"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@email.com"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800 py-3 px-5 text-base text-slate-700 dark:text-slate-200 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-900 transition"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                id="message"
                placeholder="Type your message..."
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800 py-3 px-5 text-base text-slate-700 dark:text-slate-200 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-900 transition resize-none"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:from-blue-500 hover:to-purple-500 transition-all text-base mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
