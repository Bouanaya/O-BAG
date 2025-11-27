export interface Category {
  name: string;
  count: number;
}

export interface MaterialColor {
  color: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  color: string;
  image: string;
  sale: boolean;
  saleValue: number;
  discount: number;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  materials: string[];
}

export interface AsideFilterProps {
  onFilterChange: (filters: FilterState) => void;
}