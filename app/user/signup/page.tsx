
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react"

 const SignUp=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}</p>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !name || !agree) {
      alert("Please fill all fields and agree to Terms & Privacy");
      return;
    }
    alert("Logged in successfully ✅");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-20">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-2xl font-bold mb-2 text-[#000]">Get Started Now</h1>
          <p className="text-gray-500 mb-6">
            Enter your credentials to access your account
          </p>

          {/* Social Buttons */}
          <div className="flex gap-4  mb-6">
            <button className="cursor-pointer text-[#2e2d2df5] flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
              <Image src="/goggle-logo.png" alt="Google" width={20} height={20} quality={100} />
              Sign up  with Google
            </button>
           
          </div>

          <div className="relative mb-6 text-center">
            <span className="absolute inset-x-0 top-1/2 border-t border-gray-200"></span>
            <span className="relative bg-white px-3 text-gray-500 text-sm">
              or
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-[#2e2d2df5] l border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border text-[#2e2d2df5]  rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (min 8 chars)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span className="text-[#2e2d2df5] ">
                  I agree to the{" "}
                  <Link href="#" className="text-blue-600 underline">
                    Terms & Privacy
                  </Link>
                </span>
              </label>
             
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
            >
              Signup
            </button>
          </form>

          <p className="mt-6 text-[#2e2d2df5]  text-sm text-center">
            Don't have  account?{" "}
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
          <p className="mb-8">
            Enter your credentials to access your account
          </p>
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
}
export default SignUp;