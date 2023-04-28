// @flow strict

import { Pagination, Typography } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import productsArray from "../../assets/data/products.json";
import {
  selectFilters,
  selectProducts,
  updateProducts,
} from "../../redux/features/product-slice";
import { filterProducts } from "../../utils/filter-products";
import ProductCard from "../card/product-card";
import SortProducts from "./sort-products";

function Products({ page, setPage }: any) {
  const products = useSelector(selectProducts);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const filteredProducts = filterProducts(productsArray, filters);
    dispatch(updateProducts(filteredProducts));
  }, [filters, dispatch]);

  return (
    <div className='p-2 px-3 sm:px-5'>
      <div className='flex justify-between items-center mb-5'>
        <Typography variant='h5' gutterBottom>
          All Items
        </Typography>
        <SortProducts />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
        {products
          .slice((page - 1) * 12, page * 12)
          .map((product: { id: any }) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
      <div className='flex justify-center my-3'>
        <Pagination
          size='large'
          onChange={(_, p) => setPage(p)}
          count={Math.ceil(products.length / 12)}
          shape='rounded'
        />
      </div>
    </div>
  );
}

export default Products;
