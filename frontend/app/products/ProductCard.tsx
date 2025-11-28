import { Product } from "@/types";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product._id}`}>
      <div className="cursor-pointer rounded-xl p-4 shadow hover:shadow-lg transition relative">
        {product.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white z-10 text-xs px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}

        <div className="flex items-center justify-center h-40 mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="text-lg font-semibold">{product.title}</h3>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-xl font-bold">{product.price}€</span>
          {product.oldPrice && (
            <span className="line-through text-gray-500">
              {product.oldPrice}€
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
