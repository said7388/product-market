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

export interface OrderType extends ProductType {
  quantity: number;
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
  productTitle: string;
}

export interface CartState {
  carts: OrderType[];
}

export interface FilterState {
  filters: Filters;
}

export type CategoryType = {
  value: string;
  label: string;
  children?: CategoryType[];
};
