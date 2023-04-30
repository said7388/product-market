// @flow strict

import * as React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductViewUI from "../core-ui/product-view/product-view-ui";
import products from "../data/products.json";
import { addToCart } from "../redux/features/cart-slice";
import { ProductType } from "../types";

function ProductView() {
  const params = useParams();
  const id = params.id || "";
  const dispatch = useDispatch();

  const product = products.find(
    (product: ProductType) => product.id === parseInt(id),
  );

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  return <ProductViewUI product={product} handleAddToCart={handleAddToCart} />;
}

export default ProductView;
