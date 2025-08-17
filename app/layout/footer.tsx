"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

 const Footer=()=> {
  return (
    <footer className="bg-[#3096eab5] border-t-1 border-t-[#fffdfd] ">
     <div className="bg-[#172337] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

     
        <div className="space-y-8">
       
          <div>
            <h3 className="text-base font-medium mb-4 text-[#f8f8f8]">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
               <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-base font-medium mb-4">Social Media</h3>
            <div className="flex space-x-4 text-lg">
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaInstagram /></Link>
               <Link href="#"><FaTwitter /></Link>
            </div>
          </div>

      
     

      
          <div className="flex space-x-2">
            <img src="/paypal.png" alt="PayPal" className="h-6" />
            <img src="/applepay.png" alt="Apple Pay" className="h-6" />
            <img src="/amex.png" alt="Amex" className="h-6" />
            <img src="/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/discover.png" alt="Discover" className="h-6" />
          </div>
        </div>

       
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Subscribe to our newsletter and</h3>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 border border-gray-400 bg-transparent text-white text-sm focus:outline-none"
            />
            <button className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-100">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-300">
            Get regular updates on our product with our newsletter.
          </p>
        </div>
      </div>

    
      
    </div>
    <p className="text-lg  text-white font-md py-3 max-w-4xl mx-auto text-center">
        DeliteCart © 2019
      </p>
    </footer>
  );
}
export default Footer;