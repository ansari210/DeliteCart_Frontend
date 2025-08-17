"use client";
import { useCartStore } from "@/app/store/cartStore";
// components/ProductPage.js
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ProductPage() {
    const addItem = useCartStore((state) => state.addItem);
    const { items, total, removeItem, clearCart } = useCartStore();
    console.log(items,total,"itemss>>>")

    const Add_To_Cart=()=>{
        addItem({
            id: '1',
            name: "dsa",
            price: 23,
            size: "L", // pass selected size
            image: 'temp/img1.jpeg',
          }) 
    }
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT SECTION - Product Images */}
        <div className="space-y-4">
          <div className="relative w-full h-[500px] bg-gray-100 rounded">
            <Image
              src="/temp/img1.jpg" 
              alt="Product front view"
              layout="fill"
              
            />
          </div>
         
        </div>

        {/* RIGHT SECTION - Product Info */}
        <div>
          {/* Title */}
          <h1 className="text-2xl font-semibold mb-1">
            Performance On-The-Go Pants
          </h1>

          {/* Reviews */}
          <div className="flex items-center space-x-2 text-sm mb-3">
            <div className="flex items-center text-blue-900">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <a href="#" className="text-blue-700 hover:underline">
              1460 Reviews
            </a>
          </div>

          {/* Price */}
          <p className="text-xl font-bold">$128.00</p>
          <p className="text-sm text-gray-600">
            <span className="text-blue-700">PayPal</span> Pay in 4 interest-free
            payments of $32.00.{" "}
            <Link href="#" className="text-blue-700 hover:underline">
              Learn more
            </Link>
          </p>

          {/* Color */}
          <div className="mt-4">
            <p className="font-medium">Color: Khaki</p>
            <div className="flex space-x-2 mt-2">
              {["#555", "#ccc", "#000", "#D1B38B"].map((color, idx) => (
                <button
                  key={idx}
                  className="w-8 h-8 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Related Styles */}
          <div className="mt-6">
            <p className="font-medium mb-2">Related Styles</p>
            <div className="flex flex-wrap gap-2">
              {[
                "ORIGINAL",
                "STRAIGHT FIT",
                "5-POCKET",
                "LIGHTWEIGHT",
                "9 INCH SHORTS",
              ].map((style, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 rounded-full border text-sm ${
                    style === "ORIGINAL"
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <p className="font-medium mb-2">Size: 33</p>
            <div className="flex flex-wrap gap-2">
              {[28, 30, 31, 32, 33, 34, 35, 36, 38, 40].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded ${
                    size === 33 ? "bg-blue-900 text-white" : "bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Length */}
          <div className="mt-6">
            <p className="font-medium mb-2">Length: 32</p>
            <div className="flex gap-2">
              {[30, 32, 34].map((len) => (
                <button
                  key={len}
                  className={`px-4 py-2 border rounded ${
                    len === 32 ? "bg-blue-900 text-white" : "bg-gray-100"
                  }`}
                >
                  {len}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
        
          <div className="mt-6 item-center flex space-x-3  text-black">
            <button className="px-3 py-1 border rounded ">-</button>
            <span className="px-4">1</span>
            <button className="px-3 py-1 border rounded">+</button>
              <span className="cursor-pointer border-[1px] py-2 px-8 rounded-full bg-[#1c398e] hover:bg-[#3e58a3] border-[#645d5d] text-[#f8f8f8]" onClick={Add_To_Cart}>Add To Cart</span>
              <span className="cursor-pointer border-[1px] py-2 px-8 rounded-full bg-[#8e831c] hover:bg-[#a3a188] border-[#c3c2c2] text-[#f8f8f8]">Buy Now</span>
              
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 border-t pt-6">
        <div className="flex space-x-6 mb-4">
          <button className="text-blue-900 border-b-2 border-blue-900 pb-1">
            Description
          </button>
          <button className="text-gray-600">Features & Care</button>
          <button className="text-gray-600">Gifting & Free Returns</button>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Our bestselling, midweight, flat-front pants feature a soft cotton
          performance fabric blend, built-in stretch and a water-repellent
          finish. The Original Fit offers a tailored feel through the hip and
          thigh, along with a tapered, slim leg from the knee down for a
          polished look.
        </p>
      </div>
    </div>
  );
}
