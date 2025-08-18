"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();

  // cart data
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Men Top Black Puffed Jacket",
      desc: "Men's Black",
      price: 999,
      qty: 1,
    },
    { id: 2, name: "Women Jacket", desc: "Women top", price: 1200, qty: 1 },
  ]);

  const [shipping, setShipping] = useState<"free" | "express">("free");
  const [discount, setDiscount] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingCost = shipping === "express" ? 9 : 0;
  const tax = 5;
  const total = subtotal + shippingCost + tax - appliedDiscount;
   const [pincode, setPincode] = useState("");
// const [city,setcity]=useState("");
// const [state,setState]=useState("")
  const handleApplyDiscount = () => {
    if (discount === "SAVE10") {
      setAppliedDiscount(10);
    } else {
      setAppliedDiscount(0);
    }
  };
const handle_pin=async (pin:string)=>{
  setPincode(pin)
    
const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
const data = await res.json();
 const postOffice = data[0].PostOffice;
 console.log("Pindcode Data>>>>",postOffice)
}
  const handlePayment = () => {
    router.push("/payment");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
      {/* Left side - Shipping Address */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="block text-sm text-[#383636] font-medium mb-1">
              First Name*
            </span>
            <input
              className="w-full border rounded-lg px-3 py-2 text-[#383636] focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <span className="block text-sm text-[#383636] font-medium mb-1">
              Last Name*
            </span>
            <input
              className="w-full border rounded-lg text-[#383636] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter last name"
            />
          </div>
          <div className="md:col-span-2">
            <span className="block text-sm text-[#383636] font-medium mb-1">
              Email*
            </span>
            <input
              type="email"
              className="w-full border rounded-lg text-[#383636] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter email"
            />
          </div>
          <div className="md:col-span-2">
            <span className="block text-sm text-[#383636] font-medium mb-1">
              Phone number*
            </span>
            <input
              type="number"
              min={10}
              max={13}
              className="w-full border rounded-lg px-3 py-2 text-[#383636] focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter 10-digit number"
              required
            />
          </div>
          <div>
            <span className="block text-sm font-medium text-[#383636] mb-1">
              City*
            </span>
            <input
              className="w-full border rounded-lg px-3 py-2 text-[#383636] focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter city"
            />
          </div>
          <div>
            <span className="block text-sm font-medium text-[#383636] mb-1">
              State*
            </span>
            <input
              className="w-full border rounded-lg px-3 py-2 text-[#383636] focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter state"
            />
          </div>
          <div>
            <span className="block text-sm font-medium mb-1 text-[#383636]">
              Zip Code*
            </span>
            <input
             value={pincode}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handle_pin(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-[#383636] focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter zip"
            />
          </div>
          <div className="md:col-span-2">
            <span className="block text-sm text-[#383636] font-medium mb-1">
              Description*
            </span>
            <textarea
              className="w-full border rounded-lg text-[#383636] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter a description..."
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-6 mb-4">Shipping Method</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setShipping("free")}
            className={`flex-1 border text-[#383636] rounded-lg p-4 text-left transition ${
              shipping === "free"
                ? "border-black ring-1 ring-black"
                : "border-gray-300"
            }`}
          >
            <p className="font-medium">Free Shipping</p>
            <p className="text-sm text-gray-500">7-20 Days</p>
            <p className="font-semibold">$0</p>
          </button>
          <button
            onClick={() => setShipping("express")}
            className={`flex-1 border rounded-lg p-4 text-left transition ${
              shipping === "express"
                ? "border-black ring-1 ring-black"
                : "border-gray-300"
            }`}
          >
            <p className="font-medium">Express Shipping</p>
            <p className="text-sm text-gray-500">1-3 Days</p>
            <p className="font-semibold">$9</p>
          </button>
        </div>
      </div>

      {/* Right side - Cart */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <p>${item.price}</p>
            </div>
          ))}
        </div>

        {/* Discount */}
        <div className="flex gap-2 mt-4">
          <input
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Discount code"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <button
            onClick={handleApplyDiscount}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black"
          >
            Apply
          </button>
        </div>

        {/* Totals */}
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shippingCost}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated taxes</span>
            <span>${tax}</span>
          </div>
          {appliedDiscount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>- ${appliedDiscount}</span>
            </div>
          )}
          <div className="flex justify-between font-semibold text-lg pt-2 border-t">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full mt-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
