// @flow strict

import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoryFilter,
  updateCategoryFilter,
} from "../../redux/features/filter-slice";

function CategoryFilter() {
  const [open, setOpen] = React.useState(false);
  const [humanOpen, setHumanOpen] = React.useState(false);
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectCategoryFilter);

  const handleClick = () => {
    setOpen(!open);
    setHumanOpen(false);
  };

  const handleHumanClick = () => {
    setHumanOpen(!humanOpen);
  };

  const selectCategory = (value: string) => {
    dispatch(updateCategoryFilter(value));
  };

  return (
    <div className=''>
      <Typography className='text-sm font-semibold pt-3 uppercase'>
        Category
      </Typography>
      <List className='text-[12px]'>
        <ListItemButton selected={open} onClick={handleClick}>
          <ListItemText primary='Full Avatar' />
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              selected={humanOpen}
              onClick={handleHumanClick}
              sx={{ pl: 3 }}>
              <ListItemText primary='Human Based' />
            </ListItemButton>
            <Collapse in={humanOpen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItemButton
                  selected={selectedCategory === "male"}
                  onClick={() => selectCategory("male")}
                  sx={{ pl: 6 }}>
                  <ListItemText primary='Male' />
                </ListItemButton>
                <ListItemButton
                  onClick={() => selectCategory("female")}
                  selected={selectedCategory === "female"}
                  sx={{ pl: 6 }}>
                  <ListItemText primary='Female' />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton
              selected={selectedCategory === "animal"}
              onClick={() => selectCategory("animal")}
              sx={{ pl: 3 }}>
              <ListItemText primary='Animal & mythical based' />
            </ListItemButton>
            <ListItemButton
              selected={selectedCategory === "robot"}
              onClick={() => selectCategory("robot")}
              sx={{ pl: 3 }}>
              <ListItemText primary='Robot Based' />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          selected={selectedCategory === "others"}
          onClick={() => selectCategory("others")}>
          <ListItemText primary='Others' />
        </ListItemButton>
      </List>
    </div>
  );
}

export default CategoryFilter;
