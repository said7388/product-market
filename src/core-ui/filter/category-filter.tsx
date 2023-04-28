// @flow strict

import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import * as React from "react";

function CategoryFilter() {
  const [open, setOpen] = React.useState(false);
  const [humanOpen, setHumanOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    setHumanOpen(false);
  };

  const handleHumanClick = () => {
    setHumanOpen(!humanOpen);
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
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary='Male' />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary='Female' />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemText primary='Animal & mythical based' />
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemText primary='Robot Based' />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemText primary='Others' />
        </ListItemButton>
      </List>
    </div>
  );
}

export default CategoryFilter;
