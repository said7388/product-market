// @flow strict

import { Pagination, Typography } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsArray from "../../data/products.json";
import { selectFilters } from "../../redux/features/filter-slice";
import {
  selectProductTitle,
  selectProducts,
  updateProducts,
} from "../../redux/features/product-slice";
import { ProductType } from "../../types";
import { filterProducts } from "../../utils/filter-products";
import ProductCard from "../card/product-card";
import SortProducts from "./sort-products";

function Products() {
  const [page, setPage] = React.useState(1);
  const products = useSelector(selectProducts);
  const productTitle = useSelector(selectProductTitle);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    const filteredProducts = filterProducts(productsArray, filters);
    dispatch(updateProducts(filteredProducts));
  }, [filters, dispatch]);

  useEffect(() => {
    setPage(1);
  }, [products]);

  return (
    <div className='p-2 px-3 sm:px-5 w-full'>
      <div className=' min-w-full flex justify-between items-center mb-5'>
        <Typography variant='h5' gutterBottom>
          {productTitle}
        </Typography>
        <SortProducts />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
        {products
          .slice((page - 1) * 12, page * 12)
          .map((product: ProductType) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
      <div className='flex justify-center my-3'>
        {products.length > 0 && (
          <Pagination
            size='large'
            onChange={(_, p) => setPage(p)}
            count={Math.ceil(products.length / 12)}
            shape='rounded'
            color='secondary'
          />
        )}
      </div>
    </div>
  );
}

export default Products;
