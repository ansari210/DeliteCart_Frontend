"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ManageSVG from "@/public/icons/manageicon";
import OrderSVG from "@/public/icons/ordericon";
import LogoutSVG from "@/public/icons/logout";


interface UserProfileProps {
  name: string;
  imageUrl: string;
}

const UserProfile = ({ name, imageUrl }: UserProfileProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handle_route = (route: string) => {
    router.push(route);
  };

  const handle_logout = () => {
    document.cookie = "access_token=; Max-Age=0; path=/;";
    window.location.reload();
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Profile Button */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src={imageUrl||"https://www.svgrepo.com/show/452030/avatar-default.svg"}
          alt="profile"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
        <span className="text-gray-800 font-medium">{name}</span>
      </div>

      {/* Dropdown */}
      
      {open && (
        <div className="absolute right-0 w-60  rounded-2xl shadow-lg bg-white border border-gray-100 z-50">
          <div className="p-4 flex flex-col ">
            <div className=" flex flex-row  cursor-pointer hover:bg-gray-100 hover:rounded-[10px] p-2 items-center border-b border-gray-300">
                <i><ManageSVG height={20} weight={20} color="#000"/></i>
            <Link
              href={"#"}
              className="px-4 py-2 text-gray-700  cursor-pointer"
            >
              Manage Profile
            </Link>
            </div>
            <div className="flex flex-row  cursor-pointer hover:bg-gray-100 hover:rounded-[10px] p-2 items-center border-b border-gray-300">
                <i><OrderSVG height={20} weight={20} color="#000"/></i>
            <Link
              href={"#"}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Orders
            </Link>
            </div>
            <div className="flex flex-row  cursor-pointer hover:bg-red-50 hover:rounded-[10px] p-2 items-center">
                 <i><LogoutSVG height={20} weight={20} color="#f70000"/></i>
            <button
              onClick={handle_logout}
              className="px-4 py-2 text-red-600  cursor-pointer hover:rounded-[10px]"
            >
              Logout
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
