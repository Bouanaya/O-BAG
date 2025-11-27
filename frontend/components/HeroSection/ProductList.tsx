"use client";

import React, { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import ProductFilter from "./ProductFilter";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CarouselProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<string>("new");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  // Filter products
  const filtered =
    selected === "new"
      ? products.slice(0, 3)
      : products.filter((p) => p.category === selected);

  return (
    <div className="w-full bg-amber-50">
      {/* Filters */}
      <ProductFilter onSelect={setSelected} />

      {/* Carousel */}
      <Carousel className="w-full overflow-x-hidden p-10 ">
        <CarouselContent className="-ml-1">
          {filtered.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-1 md:basis-1/2 lg:basis-1/4 "
            >
              <div className="p-2">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

       
      </Carousel>
    </div>
  );
};

export default CarouselProducts;
