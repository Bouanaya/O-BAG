import { CarouselHome } from "@/components/CarouselHome";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";



const Page = () => {
  return (
    <div className="relative" >
      <div className="absolute z-50 right-0 top-1/2 w-25 h-30 bg-black flex flex-col items-center justify-center rounded-l-lg">
        <Image src="/sac.gif" alt="Logo" width={50} height={50} />
      <Link href="/login">
          <span className="text-white text-sm ">vouz créez</span>
          
        </Link>
      </div>
      <div className="flex justify-center items-center  h-full ">

         <CarouselHome />
      
      </div>
    </div>
  );
};

export default Page;
