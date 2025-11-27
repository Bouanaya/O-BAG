"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Filter, X } from "lucide-react";

interface Props {
  onSelect: (category: string) => void;
}

const categories = [
  "new",
  "sacs à dos",
  "montres",
  "accessoires",
  "chaussures",
];

const ProductFilter: React.FC<Props> = ({ onSelect }) => {
  const [active, setActive] = useState<string>("new");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (cat: string) => {
    setActive(cat);
    onSelect(cat);
    setIsOpen(false); // Close mobile menu after selection
  };

  return (
    <section className="py-8 bg-white">
      {/* Desktop View */}
      <ul className="hidden md:flex justify-start gap-6">
        {categories.map((cat) => (
          <li key={cat}>
            <Button
              variant="ghost"
              onClick={() => handleClick(cat)}
              className={`text-4xl cursor-pointer font-light transition 
                ${active === cat ? "text-black" : "text-gray-400 hover:text-black"}`}
            >
              {cat}
            </Button>
          </li>
        ))}
      </ul>

      {/* Mobile View */}
      <div className="md:hidden px-4">
        {/* Filter Button */}
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-1/2 flex items-center justify-between text-lg py-6 bg-white"
        >
          <span className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            {active}
          </span>
          {isOpen ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
        </Button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 bg-white shadow-lg border-t z-50 mt-2">
            <ul className="py-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <Button
                    variant="ghost"
                    onClick={() => handleClick(cat)}
                    className={`w-full text-left text-xl py-6 justify-start transition
                      ${active === cat ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50"}`}
                  >
                    {cat}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductFilter;