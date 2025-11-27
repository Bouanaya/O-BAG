import { CarouselHome } from "@/components/HeroSection/CarouselHome";
import CreateHero from "@/components/HeroSection/CreateHero";
import Magento from "@/components/HeroSection/Magento";
import MonthlyBags from "@/components/HeroSection/MonthlyBags";
import Poignees from "@/components/HeroSection/Poignees";
import ProductList from "@/components/HeroSection/ProductList";
import NewsletterBags from "@/components/HeroSection/NewsletterSection";

const Page = () => {
  return (
    <div className="relative  bg-white ">
      <Magento />
      <CarouselHome />
      <Poignees />
      <ProductList />
      <CreateHero />
      <MonthlyBags />
      <NewsletterBags />
      
    </div>
  );
};

export default Page;
