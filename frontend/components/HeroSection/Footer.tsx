"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const footerLinks = [
  {
    title: "O bag World",
    links: ["Work with us", "Contacts"],
  },
  {
    title: "Brand",
    links: [
      "The brand",
      "Research and innovation",
      "Products",
      "Constructor",
      "The Collection",
    ],
  },
  {
    title: "Customer care",
    links: [
      "Returns and refunds",
      "Shipments",
      "Orders and payments",
      "Terms and conditions",
      "Privacy and cookie Policy",
      "Assembly instructions",
      "Contacts",
    ],
  },
  {
    title: "Store locator",
    links: ["Find the closest shop"],
  },
];

const socialIcons = [
  "ri-youtube-line",
  "ri-instagram-line",
  "ri-twitter-line",
  "ri-facebook-circle-line",
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t pt-16 pb-10">

      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* FOLLOW + EMAIL */}
        <div>
          <h4 className="font-semibold mb-4 text-black">Follow us</h4>

          <div className="flex gap-4 text-xl text-gray-700">
            {socialIcons.map((icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="hover:text-black transition cursor-pointer"
              >
                <i className={icon}></i>
              </Link>
            ))}
          </div>

          <h4 className="font-semibold mt-10 mb-4 text-black">Subscribe to us</h4>

          <div className="flex items-center border-b border-black pb-1 w-[180px] group">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent placeholder:text-slate-900 text-black outline-none text-sm"
            />
            <Button className="text-lg cursor-pointer bg-transparent text-primary hover:bg-transparent font-bold ">
              &gt;
            </Button>
          </div>
        </div>

        {/* FOOTER COLUMNS */}
        {footerLinks.map((col, idx) => (
          <div key={idx}>
            <h4 className="font-semibold mb-4 text-black">{col.title}</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              {col.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="cursor-pointer hover:text-black hover:underline underline-offset-4 transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="border-t mt-14 pt-4">
        <div className="container mx-auto px-6 md:px-16 flex items-center justify-between">

          {/* PAYMENT */}
          <div className="flex items-center gap-6 opacity-70">
            <Image src="/accets/paypal.png" alt="PayPal" width={60} height={30} />
            <Image src="/accets/card.png" alt="Mastercard" width={50} height={30} />
            <Image src="/accets/visa.png" alt="Visa" width={50} height={30} />
          </div>

          {/* SCROLL TO TOP */}
        {/*<button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 border rounded-full flex items-center justify-center bg-primary cursor-pointer transition"
          >
            <i className="ri-arrow-up-s-line text-xl"></i>
          </button>
        */}

        </div>
      </div>

    </footer>
  );
}
