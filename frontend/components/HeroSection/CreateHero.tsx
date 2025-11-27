"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="w-full bg-[#FFF1A8]  ">
      <div className=" flex flex-col md:flex-row items-center pt-10 px-6 gap-10 ">
        
        {/* TEXTE À GAUCHE */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Personnalisez-le ! <br />
            Créez votre propre O bag
          </h1>

          <p className="text-gray-700 max-w-md">
            Découvrez, choisissez et combinez les nombreux accessoires 
            disponibles pour créer votre O bag unique.
          </p>

          <Button className="bg-white px-6 py-3 rounded-full text-yellow-500 duration-700 shadow hover:shadow-lg cursor-pointer transition hover:bg-amber-50 font-medium">
            Créer maintenant
          </Button>
        </div>

        {/* IMAGE À DROITE */}
        <div className="flex-1 flex justify-center relative">
          <Image src="/CreateHero.png" alt="Hero Image" width={500} height={500} className="" />
        </div>
      </div>
    </section>
  );
}
