// @flow strict

import { Container, Rating } from "@mui/material";
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
      <div className=''>
        <p className='text-xl font-medium'>{product?.category}</p>
        <h1 className='text-2xl font-medium'>{product?.title}</h1>
        <Rating
          name='read-only'
          size='medium'
          value={product?.rating}
          precision={0.1}
          readOnly
        />
        <p className='text-2xl font-bold'>$ {product?.price}</p>
        <div className='flex gap-2 m-0 items-center'>
          {product?.content === "PCVR" ? (
            <span className='w-4 h-4 rounded-full bg-[#3CD4F5]'></span>
          ) : (
            <span className='w-4 h-4 rounded-full bg-[#75DE73]'></span>
          )}
          <p className='m-0 text-sm'>{product?.type} Only</p>
        </div>
      </div>
    </Container>
  );
}

export default ProductView;
