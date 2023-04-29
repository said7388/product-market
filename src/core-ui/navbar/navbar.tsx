import { Badge, Fade, InputBase, Paper, Popper } from "@mui/material";
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
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, selectCarts } from "../../redux/features/cart-slice";
import { selectFilters } from "../../redux/features/filter-slice";
import { updateProducts } from "../../redux/features/product-slice";
import { OrderType } from "../../types";
import products from "../../utils/data/products.json";
import { filterProducts } from "../../utils/filter-products";
import CardCart from "../card/cart-card";

export default function Navbar({ handleDrawerToggle }: any) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [openOrder, setOpenOrder] = React.useState(false);
  const carts = useSelector(selectCarts);
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSearchProduct = (e: { target: { value: string } }) => {
    const matchedProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    const filteredProducts = filterProducts(matchedProducts, filters);
    dispatch(updateProducts(filteredProducts));
  };

  const handleClickCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenOrder(!openOrder);
  };

  const removeOrderFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <AppBar
        component='nav'
        className='bg-gradient-to-r h-16 from-[#381E85] to-[#801F8B]'>
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
            <Link to='/'>
              <img
                className='cursor-pointer hidden sm:block flex-grow w-32 '
                src='https://i.ibb.co/Yf7XwyQ/logo1.png'
              />
            </Link>
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
                onChange={handleSearchProduct}
                sx={{ ml: 1, flex: 1 }}
                placeholder='Search Avatar by name.'
                inputProps={{ "aria-label": "Search Avatar" }}
              />
              <IconButton type='button' sx={{ p: "6px" }} aria-label='search'>
                <BiSearch />
              </IconButton>
            </Paper>
            <Box className='flex items-center gap-3'>
              <Badge badgeContent={3} color='warning'>
                <Button className='bg-[#34353A] p-2 rounded-lg min-w-fit'>
                  <HiOutlineBell className='text-2xl text-white' />
                </Button>
              </Badge>
              <Badge badgeContent={carts.length} color='warning'>
                <Button
                  onClick={handleClickCart}
                  className='bg-[#34353A] p-2 rounded-lg min-w-fit'>
                  <IoMdCart className='text-2xl text-white' />
                </Button>
              </Badge>

              <Button className='bg-white p-2 rounded-lg min-w-fit'>
                <FcBusinessman className='text-2xl' />
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Popper
        open={openOrder && carts.length > 0}
        anchorEl={anchorEl}
        placement='bottom'
        transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className='mt-2 mr-2 !z-[35001] p-5 bg-white w-[260px]'>
              {carts.map((product: OrderType) => (
                <CardCart
                  product={product}
                  key={product.id}
                  removeOrderFromCart={removeOrderFromCart}
                />
              ))}
              <div className='mt-5 text-center'>
                <Button variant='contained' size='small'>
                  Checkout
                </Button>
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}
