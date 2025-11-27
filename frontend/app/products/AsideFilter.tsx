"use client"
import React, { useState, useEffect } from 'react';
import { AsideFilterProps, Category, MaterialColor } from '@/types';

export const AsideFilter: React.FC<AsideFilterProps> = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([45, 1500]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const categories: Category[] = [
  
    { name: 'Sacs', count: 123 },
    { name: 'Sacs à dos', count: 154 },
    { name: 'Montres', count: 76 },
    { name: 'Accessoires', count: 34 },
    { name: 'Chaussures', count: 13 }
  ];

  const materialColors: MaterialColor[] = [
    { color: 'bg-gray-800', name: 'Black' },
    { color: 'bg-amber-800', name: 'Brown' },
    { color: 'bg-red-500', name: 'Red' },
    { color: 'bg-green-500', name: 'Green' },
    { color: 'bg-purple-500', name: 'Purple' },
    { color: 'bg-yellow-400', name: 'Yellow' },
    { color: 'bg-pink-300', name: 'Pink' },
    { color: 'bg-gray-400', name: 'Gray' },
    { color: 'bg-blue-400', name: 'Blue' },
    { color: 'bg-lime-300', name: 'Lime' }
  ];

  // Notify parent component when filters change
  useEffect(() => {
    onFilterChange({
      category: selectedCategory,
      priceRange,
      materials: selectedMaterials
    });
  }, []);

  const handleCategoryClick = (categoryName: string): void => {
    setSelectedCategory(categoryName);
  };

  const toggleMaterial = (color: string): void => {
    setSelectedMaterials(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <aside className="md:w-64 w-40 pr-8 flex-shrink-0 bg-amber-50 p-4">
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="mb-6">
          <div className="text-sm font-medium mb-2 text-gray-600">New Collections</div>
          <div className="text-sm font-semibold mb-3">Bags</div>
          {categories.map((cat) => (
            <div 
              key={cat.name} 
              onClick={() => handleCategoryClick(cat.name)}
              className={`flex justify-between items-center py-1.5 text-sm hover:text-blue-600 cursor-pointer ${
                selectedCategory === cat.name ? 'text-blue-600' : ''
              }`}
            >
              <span className={cat.name === 'All' ? 'font-medium' : ''}>{cat.name}</span>
              <span className="text-gray-500">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter by Price */}
      <div className="mb-8">
         <h3 className="text-lg font-semibold mb-4">Filter by</h3>
         <div className="mb-4">
           <div className="text-sm font-medium mb-3">Price</div>
           <div className="px-2">
             <div className="flex justify-between mb-2">
               <span className="text-sm text-gray-700">${priceRange[0]}</span>
               <span className="text-sm text-gray-700">${priceRange[1]}</span>
             </div>
             <div className="relative h-2">
               {/* Track */}
               <div className="absolute w-full h-1 bg-gray-300 rounded top-1/2 -translate-y-1/2"></div>
               {/* Active Range */}
               <div 
                 className="absolute h-1 bg-black rounded top-1/2 -translate-y-1/2"
                 style={{
                   left: `${((priceRange[0] - 45) / (1500 - 45)) * 100}%`,
                   right: `${100 - ((priceRange[1] - 45) / (1500 - 45)) * 100}%`
                 }}
               ></div>
               {/* Min Thumb */}
               <input
                 type="range"
                 min="45"
                 max="1500"
                 value={priceRange[0]}
                 onChange={(e) => {
                   const value = parseInt(e.target.value);
                   if (value < priceRange[1]) {
                     setPriceRange([value, priceRange[1]]);
                   }
                 }}
                 className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:border-0"
               />
               {/* Max Thumb */}
               <input
                 type="range"
                 min="45"
                 max="1500"
                 value={priceRange[1]}
                 onChange={(e) => {
                   const value = parseInt(e.target.value);
                   if (value > priceRange[0]) {
                     setPriceRange([priceRange[0], value]);
                   }
                 }}
                 className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:border-0"
               />
             </div>
           </div>
         </div>
       </div>


      {/* Material */}
      <div className="mb-8">
        <div className="text-sm font-medium mb-3">Colors</div>
        <div className="flex flex-wrap gap-2">
          {materialColors.map((mat, idx) => (
            <button
              key={idx}
              onClick={() => toggleMaterial(mat.name)}
              className={`w-7 h-7 rounded-full ${mat.color} border-2 ${
                selectedMaterials.includes(mat.name) ? 'border-gray-800' : 'border-gray-300'
              } hover:scale-110 transition-transform`}
              title={mat.name}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};