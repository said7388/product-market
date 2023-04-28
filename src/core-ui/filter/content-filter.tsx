// @flow strict

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import * as React from "react";
import { contentsFilter } from "../../utils/filter-data";

function ContentFilter() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Typography className='text-sm font-semibold pt-3 uppercase'>
        Content
      </Typography>
      <FormGroup sx={{ pl: 2 }}>
        {contentsFilter.map((content) => (
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

export default ContentFilter;
