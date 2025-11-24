import { CarouselHome } from "@/components/CarouselHome";
import Magento from "@/components/Magento";
import Poignees from "@/components/Poignees";
import ProductList from "@/components/ProductList";

const Page = () => {
  return (
    <div className="relative mt-28 ">
      <Magento />
      <CarouselHome />
      <Poignees />
      <ProductList />
    </div>
  );
};

export default Page;
