// @flow strict

import { Container } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../types";
import products from "../utils/data/products.json";

function ProductView() {
  const params = useParams();
  const id = params.id || "";
  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (product: ProductType) => product.id === parseInt(id),
  );
  const handleQuantityChange = (event: { target: { value: string } }) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <Container className='w-full h-full mt-5 grid grid-cols-2'>
      <img src={product?.image} alt='' className='w-9/12' />
      <div className=''></div>
    </Container>
  );
}

export default ProductView;
