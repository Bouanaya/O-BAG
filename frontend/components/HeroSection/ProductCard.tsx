import React from "react";


export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice: number | null;
  discount: string | null;
  image: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white p-4 h-80 relative shadow-sm cursor-pointer">
      {product.discount && (
        <span className="absolute right-4 top-4 bg-yellow-400 text-xs px-2 py-1 font-semibold">
          {product.discount}
        </span>
      )}

      <img
        src={product.image}
        alt={product.title}
        className="mx-auto h-40 object-contain"
      />

      <h3 className="mt-4 text-center text-lg font-medium text-slate-500">
        {product.title}
      </h3>

      <div className="flex justify-center gap-5 mt-5  text-xl">
        {product.oldPrice && (
          <span className="line-through text-red-400">
            ${product.oldPrice}
          </span>
        )}
        <span className="font-semibold text-black">
          ${product.price}
        </span>
       
      </div>
    </div>
  );
};

export default ProductCard;
