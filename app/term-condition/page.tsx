import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#1F2937]">
        Terms & Conditions
      </h1>

      <p className="mb-4 text-gray-700">
        Welcome to <strong>DelightCart</strong>, your trusted e-commerce platform in India. 
        By accessing or using our website and services, you agree to comply with the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">1. Account Registration</h2>
      <p className="mb-4 text-gray-700">
        To use certain services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. DelightCart is not liable for any unauthorized access due to your negligence.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">2. Orders & Payment</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>All prices are inclusive of applicable taxes unless stated otherwise.</li>
        <li>Orders are confirmed only after successful payment and confirmation email or SMS.</li>
        <li>DelightCart reserves the right to cancel any order due to stock unavailability, pricing errors, or other reasons.</li>
        <li>We accept payments through secure payment gateways. Users must ensure payment details are accurate.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">3. Delivery & Shipping</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Delivery timelines are estimated and may vary due to logistics or unforeseen circumstances.</li>
        <li>DelightCart is not liable for delays caused by courier partners or external factors beyond our control.</li>
        <li>It is the user’s responsibility to provide correct shipping information.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">4. Returns & Refunds</h2>
      <p className="mb-4 text-gray-700">
        DelightCart follows a return and refund policy aligned with Indian consumer laws:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Products can be returned within 7 days.</li>
        <li>Refunds will be processed through the original payment method.</li>
        <li>Products must be returned in original condition and packaging.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">5. User Conduct</h2>
      <p className="mb-4 text-gray-700">
        Users must not:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Post, share, or transmit unlawful, abusive, or offensive content.</li>
        <li>Engage in fraudulent or misleading activities.</li>
        <li>Attempt to gain unauthorized access to our systems or other user accounts.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">6. Intellectual Property</h2>
      <p className="mb-4 text-gray-700">
        All content on DelightCart, including logos, graphics, text, and software, is owned by DelightCart or its licensors. Users may not copy, reproduce, or distribute any content without prior written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">7. Limitation of Liability</h2>
      <p className="mb-4 text-gray-700">
        DelightCart shall not be liable for indirect, incidental, or consequential damages arising from the use of the platform. Our maximum liability for any claim related to the platform shall not exceed the amount paid by the user for the relevant transaction.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">8. Privacy</h2>
      <p className="mb-4 text-gray-700">
        DelightCart respects your privacy. All personal data collected will be used as described in our <strong><Link href="/privacy-policy" className="hover:underline text-blue-700">Privacy Policy</Link></strong> and in accordance with Indian laws.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">9. Governing Law & Jurisdiction</h2>
      <p className="mb-4 text-gray-700">
        These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from the use of DelightCart services shall be subject to the exclusive jurisdiction of the courts in India.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">10. Changes to Terms</h2>
      <p className="mb-4 text-gray-700">
        DelightCart reserves the right to modify these Terms & Conditions at any time. Users are encouraged to review this page periodically. Continued use of the platform constitutes acceptance of the updated terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">11. Contact Information</h2>
      <p className="mb-4 text-gray-700">
        If you have any questions or concerns regarding these Terms & Conditions, please <span><Link href="/contact-us" className="cursor-pointer text-blue-700 font-bold">contact us</Link></span> at:
      </p>
      <p className="mb-4 text-gray-700 font-semibold">
         Email: jet.ansari.col@gmail.com <br />
        Phone: +91-6395945304
      </p>

      <p className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DelightCart. All rights reserved.
      </p>
    </div>
  );
};

export default TermsAndConditions;
