"use client";

import Search from "@/public/icons/searchIcon";
import ShoppingBag from "@/public/icons/shopping-bag";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";
import { useRef, useState } from "react";
import useClickOutside from "../util/useclickout";

const Header = () => {
  const { items } = useCartStore();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useClickOutside(ref, () => setOpen(false));
  return (
    <header className="bg-[#f7f4f4] sticky">
      <div className="container mx-auto flex items-center justify-between py-4 ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Next.js logo"
            width={180}
            height={38}
            quality={100}
            priority
          />
        </Link>

        <nav className="hidden md:flex space-x-8 text-[18px] font-medium text-[#000]">
          <Link
            href="/"
            className="cursor-pointer relative   hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#9d8361] after:w-0 after:transition-all after:duration-300"
          >
            Home
          </Link>
          <Link
            href="#"
            className="cursor-pointer relative   hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#9d8361] after:w-0 after:transition-all after:duration-300"
          >
            New
          </Link>
          <Link
            href="#"
            className="cursor-pointer relative   hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#9d8361] after:w-0 after:transition-all after:duration-300"
          >
            Featured
          </Link>
          <Link
            href="#"
            className="cursor-pointer relative   hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#9d8361] after:w-0 after:transition-all after:duration-300"
          >
            Brands
          </Link>
          <Link
            href="#"
            className="cursor-pointer relative   hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#9d8361] after:w-0 after:transition-all after:duration-300"
          >
            Sale
          </Link>
        </nav>

        <div className="flex items-center space-x-6">
          <span ref={ref}>
            {!open && (
              <i
                onClick={() => {
                  setOpen(true);
                  setTimeout(() => inputRef.current?.focus(), 0); // ensure focus after render
                }}
              >
                {" "}
                <Search height={30} weight={30} color="black" />
              </i>
            )}
            {open && (
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className=" text-[#383434e1] border-[1px] border-[#6f6e6e] rounded-lg px-3 py-2 text-sm 
                     focus:outline-none focus:ring-1 focus:ring-[#6f6e6e] 
                     transition w-48"
              />
            )}
          </span>
          <Link href={"/cart"} className="relative w-fit">
            <ShoppingBag height={30} weight={30} color="black" />
            <span
              className="absolute flex items-center justify-center
                       -top-2 -right-2 h-5 w-5
                       bg-red-600 text-white text-xs font-bold 
                       rounded-full"
            >
              {items?.length || 0}
            </span>
          </Link>
          <Link
            href="/user/signin"
            className="cursor-pointer relative text-sm text-[#000] font-medium hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-orange-500 after:w-0 after:transition-all after:duration-300"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
