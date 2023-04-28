// @flow strict

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  updateProducts,
} from "../../redux/features/product-slice";
import { ProductType, SortingType } from "../../types";
import { sortProducts } from "../../utils/sort-data";

function SortProducts() {
  const products = useSelector(selectProducts);
  const [sort, setSort] = React.useState("");
  const dispatch = useDispatch();

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
        dispatch(
          updateProducts(
            temp.sort(
              (a: ProductType, b: ProductType) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            ),
          ),
        );
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
        break;
    }

    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 170 }} size='small'>
      <InputLabel id='demo-select-small-label'>Sort by featured</InputLabel>
      <Select
        labelId='demo-select-small-label'
        value={sort}
        label='Sort by featured'
        MenuProps={{
          style: { zIndex: 1 },
        }}
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
  );
}

export default SortProducts;
