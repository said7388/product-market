export interface SortingType {
  title: string;
  value: string;
}

export interface ProductType {
  id: number;
  title: string;
  image: string;
  rating: number;
  likes: number;
  author: string;
  thumbnail: string;
  price: number;
  category: string;
  content: string;
  polygon: number;
  autoUpload: string;
  type: string;
  createdAt: string;
}

export interface Filters {
  category: string;
  price: string[];
  content: string[];
  polygon: string[];
  autoSupport: string[];
}

export interface ProductState {
  products: ProductType[];
}

export interface FilterState {
  filters: Filters;
}
