// @flow strict

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useDispatch } from "react-redux";
import { polygonRanges } from "../../data/filter-data";
import {
  updatePolygonFilter,
  updatePolygonFilterRemove,
} from "../../redux/features/filter-slice";

function PolygonFilter() {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(updatePolygonFilter(event.target.name));
    } else {
      dispatch(updatePolygonFilterRemove(event.target.name));
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
                color='secondary'
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
