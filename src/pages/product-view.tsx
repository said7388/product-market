// @flow strict

import * as React from "react";
import { useParams } from "react-router-dom";
import ProductViewUI from "../core-ui/product-view/product-view-ui";
import products from "../data/products.json";
import { ProductType } from "../types";

function ProductView() {
  const params = useParams();
  const id = params.id || "";

  // console.log(id);

  const product = products.find(
    (product: ProductType) => product.id === parseInt(id),
  );

  return <ProductViewUI product={product} />;
}

export default ProductView;
