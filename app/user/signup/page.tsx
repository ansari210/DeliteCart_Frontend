"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateUser } from "@/app/api/query/userQuery";


const Signup_schema = z.object({
 name: z.string()
  .min(3, "Full name is required")
  .regex(/^[A-Za-z]+$/, "Name must contain only letters"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  term_privacy: z
    .boolean()
    .refine((v) => v === true, "You must agree to the terms and privacy"),
});
type FormValues = z.infer<typeof Signup_schema>;
const SignUp = () => {
  const {mutate,error,isSuccess}=useCreateUser()
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(Signup_schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      term_privacy: false,
    },
  });
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}</p>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }
  

  const on_signup = async (data: FormValues) => {
    console.log("first signup data>>>", data);
    mutate(data, {
      onSuccess: (res) => {
       
      },
      onError: (error) => {
        console.error("❌ Login failed:", error);
      },
    });
    
  };

  return (
    <div className="min-h-screen flex">
    
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-20">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-2xl font-bold mb-2 text-[#000]">
            Get Started Now
          </h1>
          <p className="text-gray-500 mb-6">
            Enter your credentials to access your account
          </p>

          
          <div className="flex gap-4  mb-6">
            <button className="cursor-pointer text-[#2e2d2df5] flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
              <Image
                src="/goggle-logo.png"
                alt="Google"
                width={20}
                height={20}
                quality={100}
              />
              Sign up with Google
            </button>
          </div>

          <div className="relative mb-6 text-center">
            <span className="absolute inset-x-0 top-1/2 border-t border-gray-200"></span>
            <span className="relative bg-white px-3 text-gray-500 text-sm">
              or
            </span>
          </div>

          
          <form onSubmit={handleSubmit(on_signup)} className="space-y-4">
            <input
              {...register("name")}
              placeholder="Enter Full Name"
              className="w-full text-[#2e2d2df5] l border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.name && (
              <p className="text-xs text-red-600">{errors.name.message}</p>
            )}
            <input
              {...register("email")}
              placeholder="Enter Email"
              className="w-full border text-[#2e2d2df5]  rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.email && (
              <p className="text-xs text-red-600">{errors.email.message}</p>
            )}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Enter Password"
                className="w-full text-[#2e2d2df5]  border rounded-lg px-4 py-2 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-sm text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-600">{errors.password.message}</p>
            )}

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" {...register("term_privacy")} />
                <span className="text-[#2e2d2df5] ">
                  I agree to the{" "}
                  <Link href="#" className="text-blue-600 underline">
                    Terms & Privacy
                  </Link>
                </span>
              </label>
            </div>
            {errors.term_privacy && (
              <p className="text-xs text-red-600">
                {errors.term_privacy.message}
              </p>
            )}
           {isSuccess?<div className="text-[#3eee08] text-[16px] font-bold">Now you're register go on login page</div>: <button
               type="submit"
               disabled={isSubmitting}
              className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
            >
              {isSubmitting ? 'Sending…' : 'Signup'}
              
            </button>}
            {error&&<div className="text-xs text-red-600">{error.message}</div>}
          </form>

          <p className="mt-6 text-[#2e2d2df5]  text-sm text-center">
            Don't have account?{" "}
            <Link href="/user/signin" className="text-blue-600 underline">
              Sign in
            </Link>
          </p>

          <p className="mt-10 text-xs text-gray-500 text-center">
            2025 Delitecart, All rights reserved
          </p>
        </div>
      </div>

      {/* Right Illustration Section */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white justify-center items-center relative">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-semibold mb-4">
            The simplest way to manage your workforce
          </h2>
          <p className="mb-8">Enter your credentials to access your account</p>
          <Image
            src="/dashboard.png"
            alt="Dashboard Preview"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <div className="flex justify-center mt-6 gap-6 opacity-70">
            <span>WeChat</span>
            <span>Booking.com</span>
            <span>Google</span>
            <span>Spotify</span>
            <span>Stripe</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
