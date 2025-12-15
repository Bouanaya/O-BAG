import React from "react";
import { Handbag, Heart } from "lucide-react";
import useCounterStore from "@/store/useCounterStore";

const ProductCard = ({ product }: any) => {
  const { incrementFav, incrementCart } = useCounterStore();

  return (
    <div className="group relative bg-white p-4 shadow-sm cursor-pointer overflow-hidden">

      {/* Image */}
      <div className="relative flex items-center justify-center h-56">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain transition-all duration-500 ease-out group-hover:scale-125"
        />

        {/* Premium Icons */}
        <div className="absolute space-y-4 top-0 gap-4 translate-y-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 right-0">
          
          {/* Heart */}
          <button
            onClick={incrementFav}
            className="
              w-12 h-12 rounded-full
              bg-white/70 backdrop-blur-md
              shadow-lg
              cursor-pointer
              flex items-center justify-center
              transition-all duration-300
              hover:scale-110 hover:bg-red-500
              hover:text-white
            "
          >
            <Heart className="w-5 h-5" />
          </button>

          {/* Shop */}
          <button
            onClick={incrementCart}
            className="
              w-12 h-12 rounded-full
              bg-black text-white
              cursor-pointer
              shadow-lg
              flex items-center justify-center
              transition-all duration-300
              hover:scale-110 hover:bg-gray-800
            "
          >
            <Handbag className="w-5 h-5" />
          </button>

        </div>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-center text-lg font-medium text-slate-600 group-hover:text-black transition-colors">
        {product.title}
      </h3>

      {/* Price */}
      <div className="flex justify-center gap-4 mt-3 text-lg">
        {product.oldPrice && (
          <span className="line-through text-red-400">
            ${product.oldPrice}
          </span>
        )}
        <span className="font-semibold text-black">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
