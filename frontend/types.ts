export interface Category {
  name: string;
  count: number;
}

export interface MaterialColor {
  color: string;
  name: string;
}

export interface Product {
  _id?: string; // MongoDB automatic ID (optional on create)

  title: string;
  description: string;
  size: string;
  color: string;
  price: number;
  oldPrice: number;
  discount: number;
  model: string;
  material: string;
  dimensions: string;
  weight: string;
  sku: string;
  image: string;

  materialInfo: string;
  zippers: string;
  handles: string;
  exteriorPockets: string;
  backpackStraps: string;
  mainCompartment: string;
  zippedCompartment: string;
  detailImages: string[];
}




export interface FilterState {
  category: string;
  priceRange: [number, number];
  materials: string[];
}

export interface AsideFilterProps {
  onFilterChange: (filters: FilterState) => void;
}