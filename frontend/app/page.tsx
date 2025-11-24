import { CarouselHome } from "@/components/CarouselHome";
import CreateHero from "@/components/CreateHero";
import Magento from "@/components/Magento";
import MonthlyBags from "@/components/MonthlyBags";
import Poignees from "@/components/Poignees";
import ProductList from "@/components/ProductList";

const Page = () => {
  return (
    <div className="relative mt-28 ">
      <Magento />
      <CarouselHome />
      <Poignees />
      <ProductList />
      <CreateHero />
      <MonthlyBags />
    </div>
  );
};

export default Page;
