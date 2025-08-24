import Link from "next/link"
import Image from "next/image"
import { signIn, signOut, useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogineUser } from "@/app/api/query/userQuery";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";


type FormValues = z.infer<typeof schema>;
const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Message is required"),
});

 interface VoidType{
    useClik:()=>void
}
const Login=({useClik}:VoidType)=>{
      const loginUser = useLogineUser();
const { data: session } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
    const on_login = async (data: FormValues) => {
      loginUser.mutate(data, {
        onSuccess: (res) => {
          document.cookie = `access_token=${
            res?.data
          }; httpOnly: true;  secure: true;  path=/; max-age=${new Date(
            Date.now() + 24 * 60 * 60 * 1000
          )}; SameSite=None; Secure`;
          window.location.reload();
        },
        onError: (error) => {
          console.error("❌ Login failed:", error);
        },
      });
    };
  if (session) {
    return (
      <div>
        <p>Welcome, {session.user?.name}</p>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  const On_step_click = () => {
    useClik();
  };
    return(
        <><h1 className="text-2xl font-bold mb-2 text-[#000]">
                  Get Started Now
                </h1>
                <p className="text-gray-500 mb-6">
                  Enter your credentials to access your account
                </p>

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
                <form onSubmit={handleSubmit(on_login)} className="space-y-4">
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                  <input
                    placeholder="Email address"
                    {...register("email")}
                    className="w-full border text-[#2e2d2df5]  rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password (min 8 chars)"
                      {...register("password")}
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
                    <button
                      onClick={On_step_click}
                      className="text-blue-600 cursor-pointer hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full bg-blue-600  text-white py-2 rounded-lg font-medium hover:bg-blue-700"
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
                </p></>
    )
}

export default Login