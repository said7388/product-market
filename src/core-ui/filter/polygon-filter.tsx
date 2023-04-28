// @flow strict

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/features/product-slice";
import { ProductType } from "../../types";
import { polygonRanges } from "../../utils/filter-data";

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

function PolygonFilter() {
  const [selectedPolygon, setSelectedPolygon] = React.useState<string[]>([]);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked) {
      setSelectedPolygon(
        selectedPolygon.filter((price) => price !== event.target.name),
      );
    } else {
      const temp = JSON.parse(JSON.stringify(selectedPolygon));
      const filteredProducts = filterProductsByPrice(products, [
        ...temp,
        event.target.name,
      ]);
      // dispatch(updateProducts(filteredProducts));
      // console.log(filteredProducts);
      // console.log([...selectedPrice, event.target.name]);
      setSelectedPolygon([...temp, event.target.name]);
    }
  };

  return (
    <div>
      <Typography className='text-sm font-semibold pt-3 uppercase'>
        Polygon
      </Typography>
      <FormGroup sx={{ pl: 2 }}>
        {polygonRanges.map((range) => (
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

export default PolygonFilter;
