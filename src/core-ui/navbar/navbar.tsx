import { InputBase, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { BiSearch } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { HiMenu, HiOutlineBell } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";

export default function Navbar({ handleDrawerToggle }: any) {
  return (
    <AppBar
      component='nav'
      className='bg-gradient-to-r from-[#381E85] to-[#801F8B]'>
      <Toolbar className='grid grid-cols-2 justify-between'>
        <Box>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <HiMenu />
          </IconButton>
          <img
            className='cursor-pointer hidden sm:block flex-grow w-32 '
            src='https://i.ibb.co/Yf7XwyQ/logo1.png'
          />
        </Box>
        <Box className='hidden sm:flex items-center justify-between'>
          <Paper
            component='form'
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 420,
            }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Search Avatar by name.'
              inputProps={{ "aria-label": "Search Avatar" }}
            />
            <IconButton type='button' sx={{ p: "6px" }} aria-label='search'>
              <BiSearch />
            </IconButton>
          </Paper>
          <Box className='flex items-center gap-3'>
            <Button className='bg-[#34353A] p-2 rounded-lg min-w-fit'>
              <HiOutlineBell className='text-3xl text-white' />
            </Button>
            <Button className='bg-[#34353A] p-2 rounded-lg min-w-fit'>
              <IoMdCart className='text-3xl text-white' />
            </Button>
            <Button className='bg-white p-2 rounded-lg min-w-fit'>
              <FcBusinessman className='text-3xl' />
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
