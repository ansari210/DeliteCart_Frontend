"use client";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";
import Link from "next/link";


export default function CartPage() {
  const { items, updateQty, removeItem, total } = useCartStore();
const discount=60;
  return (
    <div>
      <div className="bg-gray-100  p-4 md:flex md:justify-center min-h-screen">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-4">
          {/* LEFT: Cart Items */}
          <div className="flex-1 bg-white rounded shadow p-4">
            {/* {items?.map((item) => ( */}
            <div
              //   key={item.id}
              className="flex flex-col md:flex-row border-b py-4 gap-4"
            >
              <Image
                src="/temp/img1.jpg"
                // alt={item.name}
                alt="poi"
                width={100}
                height={100}
                className="object-contain"
              />
              <div className="flex-1">
                {/* <h2 className="text-lg font-medium">{item.name}</h2>
                 */}
                <h2 className="text-lg font-medium text-black">Name</h2>

                <div className="text-gray-500 text-sm">8 GB RAM</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="line-through text-gray-400">
                    {/* ₹{item.price} */}
                    56
                  </span>
                  <span className="text-lg font-semibold text-black">
                    {/* ₹{item.price-20} */}
                    70
                  </span>
                  <span className="text-green-600 font-medium">21% Off</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div
                    className="border cursor-pointer px-2 w-[28px] text-center text-[18px] h-[28px] text-black bg-[#f9f9f9] border-[#c2c2c2] rounded-full "
                    // onClick={() => updateQty(item.id, item.size, item.quantity - 1)}
                  >
                    -
                  </div>
                  <input
                    value={5}
                    className="text-black border-[2px] border-[#c2c2c2] w-[46px] h-[28px] rounded-[3px] text-center font-bold focus:outline-none focus:ring-0 focus:border-[#c2c2c2]
             select-none"
                    readOnly
                  />
                  <button
                    className=" cursor-pointer border  px-2 w-[28px] text-center text-[18px] h-[28px] text-black bg-[#f9f9f9] border-[#c2c2c2] rounded-full "
                    // onClick={() => updateQty(item.id, item.size, item?.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="ml-4 cursor-pointer text-sm text-lg text-black font-bold hover:text-[#ff8c8c]"
                    // onClick={() => removeItem(item.id, item.size)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>

          {/* RIGHT: Price Details */}
          <div className="w-full md:w-80 bg-white rounded shadow p-4 h-fit">
            <h2 className="text-gray-500  border-b pb-2 font-bold">
              PRICE DETAILS ({items.length} items)
            </h2>
            <div className="flex justify-between mt-4 text-black">
              <span>Price</span>
              <span>₹{total + discount}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>
            <div className="flex justify-between mt-2 text-black">
              <span>Total Amount</span>
              <span className="font-semibold">₹{total}</span>
            </div>
            <p className="text-green-600 text-sm mt-2">
              You will save ₹{discount} on this order
            </p>
            <button className="bg-[#172337] hover:bg-[#5f4735] cursor-pointer text-white w-full py-2 mt-4 rounded font-semibold">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-[#afadad] p-5 px-6">
        <div className="text-[#565656] flex">
          <span className="flex gap-4">
           <span>Policies:</span> 
            <Link href="/privacy-policy"  className="text-blue-700 hover:underline">Privacy Policy |</Link>
            <Link href="/term-condition" className="text-blue-700 hover:underline">Terms & Condition </Link>
            
          </span>
          <span> © 2025 Delightcart.co.in</span>
        </div>
      </div>
    </div>
  );
}
