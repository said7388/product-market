// @flow strict

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
    <div className='max-w-md mx-auto mt-8'>
      <div className='bg-white rounded-lg overflow-hidden shadow-md'>
        <div className='relative pb-9/16'>
          <img
            className=' h-full w-full object-cover'
            src={product?.image}
            alt={product?.title}
          />
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-bold'>{product?.title}</h2>
          <p className='text-base font-medium text-gray-500'>
            by {product?.author}
          </p>
          <p className='text-base font-medium text-gray-700 mb-4'>
            {product?.content}
          </p>
          <p className='text-lg font-semibold text-gray-900 mb-2'>
            ${product?.price}
          </p>
          <p className='text-sm font-medium text-gray-500 mb-2'>
            {product?.likes} likes, {product?.rating} rating
          </p>
          <p className='text-sm font-medium text-gray-500 mb-2'>
            Category: {product?.category}
          </p>
          <p className='text-sm font-medium text-gray-500 mb-4'>
            Type: {product?.type}
          </p>
          <p className='text-sm font-medium text-gray-500 mb-2'>
            Polygon count: {product?.polygon}
          </p>
          <p className='text-sm font-medium text-gray-500 mb-4'>
            Auto-upload: {product?.autoUpload}
          </p>
          <div className='flex justify-between items-center mb-4'>
            <label
              htmlFor='quantity'
              className='text-sm font-medium text-gray-700 mr-2'>
              Quantity:
            </label>
            <input
              type='number'
              id='quantity'
              name='quantity'
              value={quantity}
              onChange={handleQuantityChange}
              className='py-1 px-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700'
              min='1'
              max='10'
            />
          </div>
          <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
