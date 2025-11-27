"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export default function MonthlyBags() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="px-10">

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl text-black mb-4">
          Find out what bag to carry in 2026 :
        </h2>
        <p className="text-3xl text-slate-600 mb-12">
          A fashionable guide for month
        </p>

        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD COMPONENT */}
          {[
            {
              img: "https://obaguk.co.uk/cdn/shop/files/obag-21_1024x1024.jpg?v=1690133630",
              alt: "April Bag",
            },
            {
              img: "https://obaguk.co.uk/cdn/shop/files/obag-16_1024x1024.jpg?v=1690131064",
              alt: "May Bag",
            },
            {
              img: "https://obaguk.co.uk/cdn/shop/files/obag-6_1024x1024.jpg?v=1690130371",
              alt: "June Bag",
            },
          ].map((bag, index) => (
            <div key={index} className="">

              {/* WRAPPER AVEC DIMENSIONS FIXES */}
              <div className="w-full h-[450px] overflow-hidden ">
                <img
                  src={bag.img}
                  alt={bag.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <button className="mt-4 text-sm font-medium text-gray-700 ">
                Discover more
                <span className="ml-2 inline-block w-8 h-[1px] bg-black"></span>
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
