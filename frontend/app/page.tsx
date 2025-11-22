import { CarouselHome } from "@/components/CarouselHome";
import Magento from "@/components/Magento";
import Poignees from "@/components/Poignees";

const Page = () => {
  return (
    <div className="relative mt-28 ">
      <Magento />
      <CarouselHome />
      <Poignees />
    </div>
  );
};

export default Page;
