'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FiMail, FiPhone, FiMapPin,
  FiInstagram, FiFacebook, FiTwitter, FiYoutube
} from 'react-icons/fi';
import Link from 'next/link';
;
import { useCreateQuery } from '../api/query/queryQuery';

const schema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(1, 'Message is required'),
  receiver_comm_message: z.boolean().refine(v => v === true, 'Please consent to receive other communication'),
  store_data: z.boolean().refine(v => v === true, 'Please consent to store your data'),
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const {mutate}=useCreateQuery()
  const [sent, setSent] = useState<null | 'ok' | 'err'>(null);
  const {
    register, handleSubmit, formState: { errors, isSubmitting }, reset
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
      receiver_comm_message: false,
      store_data: false,
    }
  });

  const onSubmit = async (data: FormValues) => {
    
    mutate(data, {
      onSuccess: () => {
        setSent("ok");
        reset()
      },
      onError: () => {
        setSent("err");
      },
    });
  };

  return (
    <main className="min-h-screen ">
    
      <section className="container mx-auto px-4 pt-8">
        <div
          className="
            relative overflow-hidden rounded-3xl
            bg-[linear-gradient(180deg,#1e90ff_0%,#1778e5_100%)]
            text-white text-center py-14 md:py-16
          "
          style={{
            boxShadow: '0 10px 30px rgba(23,120,229,0.25)',
          }}
        >
          {/* decorative rings */}
          <div className="pointer-events-none absolute -left-16 -bottom-24 h-[280px] w-[280px] rounded-full border-[18px] border-white/25" />
          <div className="pointer-events-none absolute -left-6 -bottom-10 h-[220px] w-[220px] rounded-full border-[14px] border-white/25" />
          <div className="pointer-events-none absolute -right-14 -top-16 h-[300px] w-[300px] rounded-full border-[18px] border-white/25" />
          <div className="pointer-events-none absolute -right-4 -top-6 h-[240px] w-[240px] rounded-full border-[14px] border-white/25" />

          <div className="inline-flex items-center rounded-full bg-white text-[#1778e5] px-4 py-2 text-xs font-semibold tracking-wide">
            WRITE TO US
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold">Get In Touch</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* LEFT: FORM CARD */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">Let’s Talk!</h2>
            <p className="mt-2 text-gray-600">
              Get in touch with us using the enquiry form or contact details below.
            </p>

            <hr className="my-5 border-gray-200" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="block text-sm font-medium text-gray-700">First Name <span className='text-red-600'>*</span></span>
                  <input
                    {...register('first_name')}
                    className="mt-1 w-full text-[#383636e9] rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[#1778e5] focus:ring-4 focus:ring-[#1778e5]/15"
                    placeholder="First name"
                  />
                  {errors.first_name && <p className="mt-1 text-xs text-red-600">{errors.first_name.message}</p>}
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700">Last Name <span className='text-red-600'>*</span></span>
                  <input
                    {...register('last_name')}
                    className="mt-1 w-full text-[#383636e9] rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[#1778e5] focus:ring-4 focus:ring-[#1778e5]/15"
                    placeholder="Last name"
                  />
                  {errors.last_name && <p className="mt-1 text-xs text-red-600">{errors.last_name.message}</p>}
                </div>
              </div>

              {/* email */}
              <div>
                <span className="block text-sm font-medium text-gray-700">Email<span className='text-red-600'>*</span></span>
                <input
                  type="email"
                  {...register('email')}
                  className="mt-1 w-full text-[#383636e9] rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[#1778e5] focus:ring-4 focus:ring-[#1778e5]/15"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
              </div>

              {/* message */}
              <div>
                <span className="block text-sm font-medium text-gray-700">Message<span className='text-red-600'>*</span></span>
                <textarea
                  rows={5}
                  {...register('message')}
                  className="mt-1 text-[#383636e9] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[#1778e5] focus:ring-4 focus:ring-[#1778e5]/15"
                  placeholder="Type something..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
              </div>

              {/* checkboxes */}
              <div className="space-y-3">
                <label className="flex items-start gap-3">
                  <input type="checkbox" {...register('receiver_comm_message')} className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1778e5] focus:ring-[#1778e5]" />
                  <span className="text-sm text-gray-700">
                    I agree to receive other communication messages.<span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.receiver_comm_message && <p className="text-xs text-red-600">{errors.receiver_comm_message.message}</p>}

                <label className="flex items-start gap-3">
                  <input type="checkbox" {...register('store_data')} className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1778e5] focus:ring-[#1778e5]" />
                  <span className="text-sm text-gray-700">
                    I give my consent to Delightcart Presenter to store my data.<span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.store_data && <p className="text-xs text-red-600">{errors.store_data.message}</p>}
              </div>

              {/* small paragraph */}
              <p className="text-xs leading-relaxed text-gray-500">
                Delightcart Presenter, a platform of smart mart, is committed to protecting and respecting your
                privacy according to our <Link className="underline" href="#">Privacy Policy</Link>.
              </p>

              {/* actions */}
              <div className="pt-2">
                {sent==="ok"?"":<button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-xl bg-[#1778e5] px-5 py-2.5 text-white font-medium shadow-md shadow-[#1778e5]/30 hover:bg-[#156bd0] disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>}
                {sent === 'ok' && <span className="ml-3 text-sm text-emerald-600">Thanks! We’ll get back to you shortly.</span>}
                {sent === 'err' && <span className="ml-3 text-sm text-red-600">Something went wrong. Please try again.</span>}
              </div>
            </form>
          </div>

         
          <div className="space-y-6">
           
            <div className="relative overflow-hidden rounded-2xl bg-[#eef5ff] p-6 md:p-8">
             
              <div className="pointer-events-none absolute left-6 top-6 h-28 w-28 rounded-full border-[10px] border-[#cfe3ff]" />
              <div className="pointer-events-none absolute left-12 top-12 h-28 w-28 rounded-full border-[10px] border-[#cfe3ff]" />
              <div className="pointer-events-none absolute right-6 bottom-6 h-28 w-28 rounded-full border-[10px] border-[#cfe3ff]" />
              <div className="pointer-events-none absolute right-12 bottom-12 h-28 w-28 rounded-full border-[10px] border-[#cfe3ff]" />
          
              <img
                src="/contact-hero.png"
                alt="Happy person with phone"
                className="relative text-gray-600 z-[1] mx-auto max-h-[380px] object-contain"
              />
            </div>

         
            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-7 shadow-sm">
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef5ff] text-[#1778e5]">
                    <FiMail />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Quick Contact</p>
                    <p className="text-sm text-gray-600">Email: jet.ansari.col@gmail.com</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef5ff] text-[#1778e5]">
                    <FiPhone />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone Number</p>
                    <p className="text-sm text-gray-600">India +91-6395945304</p>
                   
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef5ff] text-[#1778e5]">
                    <FiMapPin />
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Headquarter</p>
                    <p className="text-sm text-gray-600">
                      F-587 Ansar vihar, Loni, Ghaziabad, Uttarpradesh (201102)
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-4 text-[20px] text-gray-800">
                <Link href="#" aria-label="Instagram" className="hover:text-[#1778e5]"><FiInstagram /></Link>
                <Link href="#" aria-label="Facebook" className="hover:text-[#1778e5]"><FiFacebook /></Link>
                <Link href="#" aria-label="YouTube" className="hover:text-[#1778e5]"><FiYoutube /></Link>
                <Link href="#" aria-label="Twitter" className="hover:text-[#1778e5]"><FiTwitter /></Link>
              </div>
            </div>
          </div>
        </div>

    
      </section>
    </main>
  );
}
