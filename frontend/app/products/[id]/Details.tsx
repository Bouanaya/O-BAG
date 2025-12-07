"use client";

import { useState, useEffect, useRef } from "react";
import { ShoppingCart, ChevronRight } from "lucide-react";
import { fetchProduct } from "@/lib/fetchProduct";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DetailRow from "./DetailRow";
import { Product } from "@/types";

interface DetailsProps {
  id: string;
}



export default function Details({ id }: DetailsProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("blue");
  const detailsRef = useRef<HTMLDivElement>(null);

  const colors = [
    { id: "blue", name: "Blue", hex: "#87CEEB" },
    { id: "brown", name: "Brown", hex: "#8B4513" },
    { id: "black", name: "Black", hex: "#000000" },
    { id: "navy", name: "Navy", hex: "#191970" },
    { id: "red", name: "Red", hex: "#DC143C" },
  ];


  useEffect(() => {
    fetchProduct(id).then((res) => setProduct(res));
  }, [id]);

  console.log(product);
  

  const handleAddToCart = () => {
    console.log("Added to cart:", { size: selectedSize, color: selectedColor });
    alert("Product added to cart!");
  };

  if (!product) return (
    <div className="min-h-screen bg-primary animate-pulse">
           <div className="container mx-auto px-10 py-8 space-y-4">
             <div className="h-6 bg-white/30 w-1/3 rounded"></div>
             <div className="h-10 bg-white/30 w-2/3 rounded"></div>
             <div className="h-4 bg-white/30 w-1/2 rounded"></div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
               <div className="space-y-4">
                 <div className="h-6 bg-white/30 w-1/4 rounded"></div>
                 <div className="h-6 bg-white/30 w-1/2 rounded"></div>
                 <div className="h-10 bg-white/30 w-full rounded"></div>
               </div>
               <div className="h-80 bg-white/30 rounded-3xl"></div>
             </div>
           </div>
         </div>
  )

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-10 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-white text-sm mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:underline">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/products/${product.title}`} className="opacity-70">{product.title}</Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-white text-sm font-medium mb-2">{product.title}</h2>
            <p className="text-white/80 text-sm">{product.description}</p>
            <Button
                    variant="link"
                    className="text-white cursor-pointer px-0"
                    onClick={() =>
                      detailsRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    View all details
                  </Button>
            {/* Size Selection */}
            <div className="space-y-3">
              <label className="text-white text-lg font-medium">Size</label>
              <div className="flex space-x-3">
                {["S", "M"].map((size) => (
                  <Button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={` rounded-full   bg-white px-3 py-2 w-8 h-8  duration-700 shadow  cursor-pointer transition hover:bg-amber-50 font-medium ${
                      selectedSize === size
                        ? "bg-white text-gray-800"
                        : "bg-white/30 text-white hover:bg-white/40"
                    }`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
        

            {/* Price + Add to Cart */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-white text-3xl font-bold">$ {product.price}</span>
              
            </div>

            {/* Color Selection */}
            <div className="flex space-x-3 pt-4">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-8 h-8 rounded-full cursor-pointer overflow-hidden border-4 transition-all ${
                    selectedColor === color.id
                      ? "border-white scale-110"
                      : "border-transparent hover:border-white/50"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="flex items-center space-x-2 bg-white text-gray-800 px-8 py-2 cursor-pointer rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg"
              >
                Ajouter au panier <ShoppingCart className="w-5 h-5 mx-3" />
              </button>
            
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="">
            
            <div className="flex justify-center ">
              <img
                src={product.image}
                alt={product.title}
                className="w-[400px] drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      
      
      
      <div id="product-details" ref={detailsRef} className="mt-20 bg-white    overflow-hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                 {/* Left - Details Info */}
                 <div className="p-12">
                   <h2 className="text-3xl font-bold text-gray-800 mb-8">Details</h2>
                   
                   <div className="space-y-6">
                     <h3 className="text-xl font-semibold text-gray-800 mb-4">Product info</h3>
                     
                     <div className="space-y-3">
                       <DetailRow label="Model" value={product.model || 'Backpack'} />
                       <DetailRow label="Material" value={product.material || 'Grained cowhide leather'} />
                       <DetailRow label="Dimensions" value={product.dimensions || '35 x 26.4 x 12.9 cm'} />
                       <DetailRow label="Weight" value={product.weight || '0.66 kg'} />
                       <DetailRow label="SKU" value={product.sku || '125966-8222'} />
                       <DetailRow label="Material Info" value={product.materialInfo || 'Softside'} />
                       <DetailRow label="Zippers" value={product.zippers || 'Yes'} />
                       <DetailRow label="Handles" value={product.handles || 'Top handle(s)'} />
                       <DetailRow label="Exterior pockets" value={product.exteriorPockets || '1 front pocket'} />
                       <DetailRow label="Backpack straps" value={product.backpackStraps || 'Adjustable'} />
                       <DetailRow label="Main compartment" value={product.mainCompartment || 'Yes'} />
                       <DetailRow label="Zipped Compartment" value={product.zippedCompartment || 'Yes'} />
                     </div>
                   </div>
                 </div>
     
                 {/* Right - Product Image */}
                 <div className="bg-gray-50 p-12 flex flex-col items-center ">
                   
                     {product.detailImages ? product.detailImages.map((url:string,index:number) => (
                       <Link href={url} target="_blank" key={index}>
                         <img src={url} alt="Product Image" className="w-80 h-auto " />
                       </Link>
                     )): <img src={product.image} alt="Product Image" className="w-full h-auto" />
              }
                 
              
                 </div>
               </div>
             </div>
           
    </div>
  );
}
