// @flow strict

import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  updateProducts,
} from "../../redux/features/product-slice";
import { ProductType, SortingType } from "../../types";
import ProductCard from "../card/product-card";

// Sort JSON data
const sortProducts: SortingType[] = [
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

function Products({ page, setPage }: any) {
  const [sort, setSort] = React.useState("");
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const handleChange = (event: SelectChangeEvent) => {
    const temp = JSON.parse(JSON.stringify(products));
    // switch case for update
    switch (event.target.value) {
      case "low_price":
        dispatch(
          updateProducts(
            temp.sort((a: ProductType, b: ProductType) => a.price - b.price),
          ),
        );
        break;
      case "high_price":
        dispatch(
          updateProducts(
            temp.sort((a: ProductType, b: ProductType) => b.price - a.price),
          ),
        );
        break;
      case "review":
        dispatch(
          updateProducts(
            temp.sort((a: ProductType, b: ProductType) => b.rating - a.rating),
          ),
        );
        break;
      case "new":
        // products.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case "polygon_low_price":
        dispatch(
          updateProducts(
            temp.sort(
              (a: ProductType, b: ProductType) => a.polygon - b.polygon,
            ),
          ),
        );
        break;
      case "polygon_high_price":
        dispatch(
          updateProducts(
            temp.sort(
              (a: ProductType, b: ProductType) => b.polygon - a.polygon,
            ),
          ),
        );
        break;
      default:
        // products.sort((a, b) => b.createdAt - a.createdAt);
        break;
    }

    console.log(event.target.value);
    setSort(event.target.value);
  };

  return (
    <div className='p-2 px-3 sm:px-5'>
      <div className='flex justify-between items-center mb-5'>
        <Typography variant='h5' gutterBottom>
          All Items
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 170 }} size='small'>
          <InputLabel id='demo-select-small-label'>Sort by featured</InputLabel>
          <Select
            labelId='demo-select-small-label'
            value={sort}
            label='Sort by featured'
            onChange={handleChange}>
            <MenuItem value='' disabled>
              Featured
            </MenuItem>
            {sortProducts.map((item: SortingType, index: number) => (
              <MenuItem key={index} value={item.value}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
