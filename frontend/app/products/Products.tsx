
"use client"

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Product, FilterState } from '@/types';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';

interface ProductsProps {
  filters: FilterState;
}

export const Products: React.FC<ProductsProps> = ({ filters }) => {
  const allProducts: Product[] = [
    { id: 1, name: 'Shade', price: 150, color: 'Purple', image: 'https://cdn2.obag.it/rx/q_100,w_1920,ofmt_webp/media/catalog/product/4/5/45f7ebc85038c52888f3ded986537f9e.png', sale: false, saleValue: 20, discount: 10 },
    { id: 2, name: 'Shade', price: 150, color: 'Purple', image: 'https://cdn2.obag.it/rx/q_100,w_1920,ofmt_webp/media/catalog/product/4/5/45f7ebc85038c52888f3ded986537f9e.png', sale: false, saleValue: 10, discount: 5 },
    { id: 3, name: 'Shade', price: 150, color: 'Purple', image: 'https://cdn2.obag.it/rx/q_100,w_1920,ofmt_webp/media/catalog/product/4/5/45f7ebc85038c52888f3ded986537f9e.png', sale: true, saleValue: 30, discount: 15 },
    
    
    
  ];

  // Filter products based on selected filters
  const filteredProducts = allProducts.filter(product => {
    // Price filter
    const withinPriceRange = product.price >= filters.priceRange[0] && 
                             product.price <= filters.priceRange[1];
    
    // Material/Color filter
    const matchesMaterial = filters.materials.length === 0 || 
                           filters.materials.includes(product.color);
    
    return withinPriceRange && matchesMaterial;
  });

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
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12 text-gray-500">
            No products found matching your filters
          </div>
        )}
      </div>

      {/* Show All Button */}
      <div className="flex justify-center">
        <Button className="bg-primary text-white px-6 py-3 rounded-full duration-700   shadow hover:shadow-lg cursor-pointer transition font-medium">
          Show all products
        </Button>
      </div>
    </div>
  );
};