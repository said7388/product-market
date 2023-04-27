// @flow strict
import * as React from "react";
import allProducts from "../assets/data/products.json";
import { ProductType } from "../types";

function useProducts() {
  const [products, updateProducts] = React.useState<ProductType[]>(allProducts);

  return { products, updateProducts };
}

export default useProducts;
