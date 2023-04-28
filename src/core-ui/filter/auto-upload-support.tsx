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
  updateAutoSupportFilter,
  updateAutoSupportFilterRemove,
} from "../../redux/features/product-slice";
import { supportsFilter } from "../../utils/filter-data";

function AutoUploadSupport() {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(updateAutoSupportFilter(event.target.name));
    } else {
      dispatch(updateAutoSupportFilterRemove(event.target.name));
    }
  };

  return (
    <div>
      <Typography className='text-sm font-semibold pt-3 uppercase'>
        Auto upload support
      </Typography>
      <FormGroup sx={{ pl: 2 }}>
        {supportsFilter.map((content) => (
          <FormControlLabel
            key={content.value}
            control={
              <Checkbox
                className='py-[3px]'
                size='small'
                onChange={handleChange}
                name={content.value}
              />
            }
            label={<p className='text-sm p-0 m-0'>{content.label}</p>}
          />
        ))}
      </FormGroup>
    </div>
  );
}

export default AutoUploadSupport;
