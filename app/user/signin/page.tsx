"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"login" | "forgot" | "otp" | "reset">(
    "login"
  );
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [confirmPassword, setConfirmPassword] = useState("");
 const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { data: session } = useSession();

  const handleOtpChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };
  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}</p>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !agree) {
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
          {/* Form */}

          <div className="w-full max-w-md mx-auto mt-10    relative overflow-hidden">
            {/* ================= Login Step ================66666 */}
            {step === "login" && (
              <>
                <h1 className="text-2xl font-bold mb-2 text-[#000]">
                  Get Started Now
                </h1>
                <p className="text-gray-500 mb-6">
                  Enter your credentials to access your account
                </p>

                {/* Social Buttons */}
                <div className="flex gap-4  mb-6">
                  <button
                    onClick={() => signIn("google")}
                    className="cursor-pointer text-[#2e2d2df5] flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50"
                  >
                    <Image
                      src="/goggle-logo.png"
                      alt="Google"
                      width={20}
                      height={20}
                      quality={100}
                    />
                    Log in with Google
                  </button>
                </div>

                <div className="relative mb-6 text-center">
                  <span className="absolute inset-x-0 top-1/2 border-t border-gray-200"></span>
                  <span className="relative bg-white px-3 text-gray-500 text-sm">
                    or
                  </span>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="absolute right-3 top-2 text-sm cursor-pointer text-gray-500"
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
                    <button
                      onClick={() => setStep("forgot")}
                      className="text-blue-600 cursor-pointer hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg font-medium hover:bg-blue-700"
                  >
                    Login
                  </button>
                </form>
                <p className="mt-6 text-[#2e2d2df5]  text-sm text-center">
                  Don't have account?{" "}
                  <Link
                    href="/user/signup"
                    className="cursor-pointer text-blue-600 underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </>
            )}

            {/* ================= Forgot Password Step ================= */}
            {step === "forgot" && (
              <>
                <h1 className="text-2xl font-bold mb-2 text-[#000]">
                  Forget Password
                </h1>
                <p className="text-gray-500 mb-6">
                  Enter your email for OTP request
                </p>
                <div className="animate-slide-in space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    readOnly={false}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border text-[#2e2d2df5] rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                  <button
                    onClick={() => setStep("otp")}
                    className="w-full bg-blue-600 text-white py-2 cursor-pointer rounded-lg font-medium hover:bg-blue-700"
                  >
                    Request OTP
                  </button>
                  <div className="flex justify-between">
                    <button
                      onClick={() => setStep("login")}
                      className="cursor-pointer text-blue-600 underline"
                    >
                      Sign In
                    </button>
                    <Link
                      href="/user/signup"
                      className="cursor-pointer text-blue-600 underline"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </>
            )}

            {/* ================= OTP Step ================= */}
            {step === "otp" && (
              <div className="animate-slide-in space-y-4">
                <h1 className="text-2xl font-bold mb-2 text-[#000]">
                  Verify Email
                </h1>
                <p className="text-gray-500 mb-6">Enter OTP to verify email</p>
                <p className="text-blue-500">Resend OTP </p>
                <span className="text-gray-500 mb-6">02:00</span>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full border bg-gray-100 text-gray-600 rounded-lg px-4 py-2 outline-none"
                />

                <div className="flex gap-1 justify-between">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      value={digit}
                      ref={(el) => {
                        otpRefs.current[i] = el;
                      }}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="w-12 h-12 text-center border text-[#2e2d2df5]  rounded-lg text-lg   outline-none"
                    />
                  ))}
                </div>

                <button
                  onClick={() => setStep("reset")}
                  className="w-full bg-blue-600 text-white py-2 cursor-pointer rounded-lg font-medium hover:bg-blue-700"
                >
                  Verify OTP
                </button>
                <div className="flex justify-between">
                  <button
                    onClick={() => setStep("login")}
                    className="cursor-pointer text-blue-600 underline"
                  >
                    Sign In
                  </button>
                  <Link
                    href="/user/signup"
                    className="cursor-pointer text-blue-600 underline"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}

            {/* ================= Reset Password Step ================= */}
            {step === "reset" && (
              <div className="animate-slide-in space-y-4">
                <h1 className="text-2xl font-bold mb-2 text-[#000]">
                  Change Password
                </h1>
                <p className="text-gray-500 mb-6">
                  Enter new password to secure your access
                </p>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full border bg-gray-100 text-gray-600 rounded-lg px-4 py-2 outline-none"
                />
                <div className="flex gap-1 justify-between">
                  {otp.map((digit, i) => (
                    <input
                      readOnly
                      key={i}
                      type="text"
                      maxLength={1}
                      value={digit}
                      ref={(el) => {
                        otpRefs.current[i] = el;
                      }}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      className="w-12 h-12 text-center border text-[#2e2d2df5] bg-gray-100 rounded-lg text-lg   outline-none"
                    />
                  ))}
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password (min 8 chars)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-[#2e2d2df5]  border rounded-lg px-4 py-2 pr-12  outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2 cursor-pointer text-sm text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password (min 8 chars)"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full text-[#2e2d2df5]  border-[1px] rounded-lg px-4 py-2 pr-12  border-[#2e2d2df5]  outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2 text-sm cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <button className="w-full bg-green-600 text-white py-2 cursor-pointer rounded-lg font-medium hover:bg-green-700">
                  Change Password
                </button>
                <div className="flex justify-between">
                  <button
                    onClick={() => setStep("login")}
                    className="cursor-pointer text-blue-600 underline"
                  >
                    Sign In
                  </button>
                  <Link
                    href="/user/signup"
                    className="cursor-pointer text-blue-600 underline"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* endform */}

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
}
