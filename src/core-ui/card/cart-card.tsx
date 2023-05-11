// @flow strict

import { Button, Paper } from "@mui/material";
import * as React from "react";
import { HiMinusSm } from "react-icons/hi";
import { IoAdd } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity } from "../../redux/features/cart-slice";
import { OrderType } from "../../types";

function CardCart({
  product,
  removeOrderFromCart,
}: {
  product: OrderType;
  removeOrderFromCart: Function;
}) {
  const dispatch = useDispatch();

  return (
    <Paper key={product.id} className='flex items-start gap-2 my-2'>
      <img
        src={product.image}
        className='w-[76px] h-[88px] rounded-s-sm'
        alt=''
      />
      <div className='m-0 p-0'>
        <p className='text-[10px] line-clamp-2 p-0 m-0'>{product.title}</p>
        <div className='flex items-center justify-between mb-0'>
          <p className='m-0 p-0 text-[10px]'>Quantity: {product.quantity}</p>
          <div className='flex items-center gap-1'>
            <Button
              onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
              className='min-w-fit'>
              <IoAdd />
            </Button>
            <Button
              onClick={() => dispatch(decreaseQuantity(product.id))}
              className='min-w-fit'>
              <HiMinusSm />
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-between mb-0'>
          <p className='text-sm font-semibold m-0 py-[6px]'>
            $ {product.price * product.quantity}
          </p>
          <Button
            onClick={() => removeOrderFromCart(product.id)}
            className='min-w-fit px-2 py-0 m-0 text-base '
            color='error'>
            <MdDelete />
          </Button>
        </div>
      </div>
    </Paper>
  );
}

export default CardCart;
