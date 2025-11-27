"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export default function NewsletterSection() {
  return (
    <section className="w-full bg-[#f7c7b8] py-20">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* IMAGE */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          <img
            src="https://cdn2.obag.it/rx/q_100,w_1920,ofmt_webp/media/catalog/product/C/O/COBC1A01_TE701_078_NOTAG_UNICA_L1.jpg"
            alt="Bags"
            className="object-contain h-full"
          />
        </div>

        {/* TEXT & FORM */}
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl text-black font-medium leading-tight mb-4">
            10€ discount* on your next purchase!
          </h2>

          <p className="text-gray-700 mb-8">
            Subscribe to O bag newsletter and get a 10€ discount right away.
          </p>

          {/* Email Input */}
          <div className="flex flex-col w-full max-w-sm">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-b border-black py-2 mb-6 outline-none"
            />

            <Button className="bg-white hover:bg-red-50 cursor-pointer text-black px-6 py-3 rounded-full font-medium shadow hover:shadow-md transition">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
