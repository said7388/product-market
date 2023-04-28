// @flow strict

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useDispatch } from "react-redux";
import {
  updatePriceFilter,
  updatePriceFilterRemove,
} from "../../redux/features/product-slice";
import { ProductType } from "../../types";
import { priceRanges } from "../../utils/filter-data";

function filterProductsByPrice(products: ProductType[], priceRanges: string[]) {
  return products.filter((product: ProductType) => {
    const price = product.price;
    return priceRanges.some((range) => {
      switch (range) {
        case "under_10":
          return price < 10;
        case "10_to_20":
          return price >= 10 && price < 20;
        case "20_to_30":
          return price >= 20 && price < 30;
        case "30_to_40":
          return price >= 30 && price < 40;
        case "40_to_50":
          return price >= 40 && price < 50;
        case "50_to_70":
          return price >= 50 && price < 70;
        case "70_and_above":
          return price >= 70;
        default:
          return false;
      }
    });
  });
}

function PriceFilter() {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(updatePriceFilter(event.target.name));
    } else {
      dispatch(updatePriceFilterRemove(event.target.name));
    }
  };

  return (
    <div>
      <Typography className='text-sm font-semibold pt-3 uppercase'>
        Price
      </Typography>
      <FormGroup sx={{ pl: 2 }}>
        {priceRanges.map((range) => (
          <FormControlLabel
            key={range.value}
            control={
              <Checkbox
                className='py-[3px]'
                size='small'
                onChange={handleChange}
                name={range.value}
              />
            }
            label={<p className='text-sm p-0 m-0'>{range.label}</p>}
          />
        ))}
      </FormGroup>
    </div>
  );
}

export default PriceFilter;
