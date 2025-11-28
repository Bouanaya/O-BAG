"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Product, FilterState } from "@/types";
import { ProductCard } from "./ProductCard";
import { fetchoneProduct } from "@/lib/fetchProduct";

interface ProductsProps {
  filters: FilterState;
}

export const Products: React.FC<ProductsProps> = ({ filters }) => {
  const [allProducts, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    fetchoneProduct().then((res) => setProducts(res));
  }, []);

  const filteredProducts = allProducts.filter((product) => {
    const withinPriceRange =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];

    const matchesMaterial =
      filters.materials.length === 0 ||
      filters.materials.includes(product.color);

    return withinPriceRange && matchesMaterial;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="flex-1">
      {/* Sort Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">Sort by:</div>
        <button className="flex items-center gap-2 text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
          Popular
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12 text-gray-500">
            No products found matching your filters
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        {/* Previous */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded border cursor-pointer ${
            currentPage === 1 ? "opacity-40" : "hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded border transition cursor-pointer ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded border cursor-pointer ${
            currentPage === totalPages ? "opacity-40" : "hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
