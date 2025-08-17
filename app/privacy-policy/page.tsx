"use client"
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#1F2937]">
        Privacy Policy
      </h1>

      <p className="mb-4 text-gray-700">
        Welcome to <strong>DelightCart</strong>, India’s trusted e-commerce platform. 
        Your privacy and trust are of utmost importance to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">1. Information We Collect</h2>
      <p className="mb-4 text-gray-700">
        We may collect the following types of information when you use DelightCart:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Personal details such as name, email, phone number, and delivery address.</li>
        <li>Payment information securely processed via our payment partners.</li>
        <li>Account credentials and login details for registered users.</li>
        <li>Information about your shopping preferences and order history.</li>
        <li>Technical data including IP address, device information, and browser type.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">2. How We Use Your Information</h2>
      <p className="mb-4 text-gray-700">
        DelightCart uses your information for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>To process and deliver your orders efficiently.</li>
        <li>To provide customer support and respond to inquiries.</li>
        <li>To improve our services, offerings, and personalized recommendations.</li>
        <li>To send important updates, promotional emails, and notifications (with your consent).</li>
        <li>To detect and prevent fraudulent activities or unauthorized transactions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">3. Sharing Your Information</h2>
      <p className="mb-4 text-gray-700">
        We value your privacy and will never sell your personal information. We may share your information in limited cases such as:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>With our trusted delivery and payment partners to complete transactions.</li>
        <li>When required by law or to comply with Indian regulations.</li>
        <li>In the event of a merger, acquisition, or sale of assets, ensuring your data is protected.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">4. Data Security</h2>
      <p className="mb-4 text-gray-700">
        DelightCart implements industry-standard security measures to protect your data. We encrypt sensitive information and regularly monitor our systems to prevent unauthorized access.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">5. Your Rights</h2>
      <p className="mb-4 text-gray-700">
        As a user, you have the right to:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Access the personal information we hold about you.</li>
        <li>Request corrections or updates to your personal data.</li>
        <li>Request deletion of your account and personal information.</li>
        <li>Opt out of marketing communications at any time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">6. Cookies & Tracking</h2>
      <p className="mb-4 text-gray-700">
        We use cookies and similar technologies to enhance your shopping experience, remember preferences, and track site usage for analytics. You can manage cookies via your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">7. Children’s Privacy</h2>
      <p className="mb-4 text-gray-700">
        DelightCart does not knowingly collect personal information from children under 18 years of age. If you believe your child has shared personal data, please contact us to remove it.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">8. Updates to This Policy</h2>
      <p className="mb-4 text-gray-700">
        We may update this Privacy Policy from time to time to comply with legal requirements or improve transparency. Changes will be posted on this page with the effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#1F2937]">9. Contact Us</h2>
      <p className="mb-4 text-gray-700">
        If you have any questions or concerns about this Privacy Policy, please <span><Link href="/contact-us" className="cursor-pointer text-blue-700 font-bold">contact us</Link></span> at:
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

export default PrivacyPolicy;
