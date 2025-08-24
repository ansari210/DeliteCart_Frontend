"use client";


import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Login from "./login";
import { useGenrateOtp_forget_password } from "@/app/api/query/userQuery";



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"login" | "forgot" | "otp" | "reset">(
    "login"
  );

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
const {mutate,error,}=useGenrateOtp_forget_password()
  const [frmData,setFrmData]=useState({
    email:"",
    password:"",
    confirm_password:""
  })
  const [msg,setMsg]=useState({
    mess:"",
    err:""
  })
    const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handle_genrate_otp = () => {
    if (!validateEmail(frmData?.email)) {
      setMsg((prev) => ({ ...prev, err: "please enter valid email" }));
    } else {
      mutate(frmData?.email, {
        onSuccess: (res) => {
          
          setStep("otp");
          setMsg({ mess: "", err: "" });
        },
        onError: (errror) => {
          setMsg((prev) => ({ ...prev,err: error?.message||"" }));
         
        },
      });
    }
  };

  const handle_verify_otp = () => {
    console.log("response otp verify>>>", otp);
  };

const handleChnage = (name: string, value: string) => {
  setFrmData((prev) => ({ ...prev, [name]: value }));

  if (!validateEmail(value)) {
    setMsg((prev) => ({ ...prev, err: "Invalid email format" }));
  } else {
    setMsg((prev) => ({ ...prev, err: "" }));
  }
};

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
if (index < 5) {
  setMsg((prev) => ({ ...prev, err: "please enter valid OTP" }));
} else {
  setMsg((prev) => ({ ...prev, err: "" }));
}
      if (value && index < 5) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };


  return (
    <div className="min-h-screen flex">
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-20">
        <div className="max-w-md w-full mx-auto">
          <div className="w-full max-w-md mx-auto mt-10    relative overflow-hidden">
            {step === "login" && <Login useClik={()=>setStep("forgot")}/>}

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
                    name="email"
                    placeholder="Enter your email"
                    value={frmData?.email}
                    readOnly={false}
                    onChange={(e) => handleChnage(e.target.name,e.target.value)}
                    className="w-full border text-[#2e2d2df5] rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
              {msg?.err&&<div className="text-[#ee0808] text-[12px] ">{msg?.err}</div>}
                  <button
                    onClick={handle_genrate_otp}
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
            {step === "otp" && (
              <div className="animate-slide-in space-y-4">
                <h1 className="text-2xl font-bold mb-2 text-[#000]">
                  Verify Email
                </h1>
                <p className="text-gray-500 mb-6">Enter OTP to verify email</p>
                <button onClick={handle_genrate_otp} className="text-blue-500">Resend OTP </button>
                <span className="text-gray-500 mb-6"> 02:00</span>
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
 {msg?.err&&<div className="text-[#ee0808] text-[12px] ">{msg?.err}</div>}
                <button
                  // onClick={() => setStep("reset")}
                  onClick={handle_verify_otp}
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

          <p className="mt-10 text-xs text-gray-500 text-center">
            2025 Delitecart, All rights reserved
          </p>
        </div>
      </div>

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

