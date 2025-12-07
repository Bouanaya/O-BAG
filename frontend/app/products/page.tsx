"use client";

import React, { useState } from "react";
import { Hero } from "./Hero";
import { AsideFilter } from "./AsideFilter";
import { Products } from "./Products";
import { FilterState } from "@/types";

const ProductCatalog: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: "All",
    priceRange: [45, 1500],
    materials: [],
  });

  const handleFilterChange = (newFilters: FilterState) => {
    
    setFilters(newFilters);
    console.log("hello",newFilters);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] ">
      <Hero />
      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          <AsideFilter onFilterChange={handleFilterChange} />
          <Products filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
