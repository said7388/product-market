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
  updateContentFilter,
  updateContentFilterRemove,
} from "../../redux/features/filter-slice";

function ContentFilter() {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(updateContentFilter(event.target.name));
    } else {
      dispatch(updateContentFilterRemove(event.target.name));
    }
  };

  return (
    <div>
      <Typography className='text-sm font-semibold pt-3 uppercase'>
        Content
      </Typography>
      <FormGroup sx={{ pl: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              className='py-[3px]'
              color='secondary'
              size='small'
              onChange={handleChange}
              name='Quest'
            />
          }
          label={
            <p className='text-sm p-0 m-0 flex items-center gap-[6px]'>
              <span>VRChat(Quest)</span>{" "}
              <span className='bg-[#75DE73] w-3 h-3 inline-block rounded-full'></span>
            </p>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              className='py-[3px]'
              color='secondary'
              size='small'
              onChange={handleChange}
              name='PCVR'
            />
          }
          label={
            <p className='text-sm p-0 m-0 flex items-center gap-[6px]'>
              <span>VRChat(PCVR)</span>{" "}
              <span className='bg-[#3CD4F5] w-3 h-3 inline-block rounded-full'></span>
            </p>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              className='py-[3px]'
              color='secondary'
              size='small'
              onChange={handleChange}
              name='others'
            />
          }
          label={
            <p className='text-sm p-0 m-0 flex items-center gap-[6px]'>
              <span>Others</span>{" "}
            </p>
          }
        />
      </FormGroup>
    </div>
  );
}

export default ContentFilter;
