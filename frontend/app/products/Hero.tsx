import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const Hero: React.FC = () => {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean); // كيعطينا ["products","bags"]
  return (
    <div className="relative bg-primary h-48 overflow-hidden">
      <div className="container mx-auto px-6 h-full flex items-center">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Product catalog</h1>
          <div className="flex items-center text-sm text-slate-400">
               <Link href="/" className="hover:text-gray-600">Home</Link>
         
               {segments.map((segment, index) => {
                 const href = "/" + segments.slice(0, index + 1).join("/");
         
                 return (
                   <div key={index} className="flex items-center">
                     <span className="mx-2">›</span>
         
                     <Link
                       href={href}
                       className={`hover:text-gray-600 ${
                         index === segments.length - 1 ? "text-gray-600 font-medium" : ""
                       }`}
                     >
                       {segment}
                     </Link>
                   </div>
                 );
               })}
             </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end pr-8 ">
        <img 
          src="https://cdn2.obag.it/rx/q_100,w_1920,ofmt_webp/media/catalog/product/w/l/wlltc550_tes20_56a_notag_unica_l2.jpg" 
          alt="Bag" 
          className="h-46 hidden md:flex object-contain"
        />
        <img 
          src="https://cdn2.obag.it/rx/q_100,w_1920,ofmt_webp/media/catalog/product/4/5/45f7ebc85038c52888f3ded986537f9e.png" 
          alt="Bag" 
          className="h-46 object-contain hidden md:flex"
        />
        <img 
          src="https://cdn2.obag.it/rx/q_100,w_1920,ofmt_webp/media/catalog/product/o/b/obagb977_evs00_01b_notag_unica_l1.jpg" 
          alt="Bag" 
          className="h-46 object-contain hidden md:flex"
        />
        <img 
          src="https://cdn2.obag.it/rx/q_100,w_1920,ofmt_webp/media/catalog/product/o/s/oshsd001_evs00_750_notag_unica_l1.jpg" 
          alt="Bag" 
          className="h-46 object-contain hidden md:flex"
        />
      </div>
    </div>
  );
};