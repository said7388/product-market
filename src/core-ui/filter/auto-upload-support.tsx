// @flow strict

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import * as React from "react";
import { supportsFilter } from "../../utils/filter-data";

function AutoUploadSupport() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ [event.target.name]: event.target.checked });
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
