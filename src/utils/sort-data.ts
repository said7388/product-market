import { SortingType } from "../types";

// Sort JSON data
export const sortProducts: SortingType[] = [
  {
    title: "Price: Low to High",
    value: "low_price",
  },
  {
    title: "Price: High to Low",
    value: "high_price",
  },
  {
    title: "Customer Review",
    value: "review",
  },
  {
    title: "New",
    value: "new",
  },
  {
    title: "Polygon:Low to High",
    value: "polygon_low_price",
  },
  {
    title: "Polygon:High to Low",
    value: "polygon_high_price",
  },
];
