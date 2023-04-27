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
import ProductCard from "../card/product-card";

interface SortingType {
  title: string;
  value: string;
}

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

function Products({ products, page, setPage }: any) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
            value={age}
            label='Sort by featured'
            onChange={handleChange}>
            <MenuItem value='' disabled>
              Featured
            </MenuItem>
            {sortProducts.map((item: SortingType) => (
              <MenuItem value={item.value}>{item.title}</MenuItem>
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
