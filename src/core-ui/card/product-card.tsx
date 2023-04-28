import { Checkbox, Fade, Paper, Popper, Rating } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { BsCart3, BsLink45Deg } from "react-icons/bs";
import {
  MdFavoriteBorder,
  MdIosShare,
  MdOutlineFavorite,
} from "react-icons/md";
import { ProductType } from "../../types";

export default function ProductCard({ product }: { product: ProductType }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [open, setOpen] = React.useState(false);

  const handleClickShare = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleCopyToClipboard = (link: number) => {
    setOpen(!open);
    navigator.clipboard.writeText(link.toString());
  };

  return (
    <Card className='relative hover:shadow-2xl transition-all duration-200'>
      <Button className='absolute capitalize flex justify-center items-center gap-1 bg-[#444EF6] text-white rounded-lg top-2 right-2 p-1'>
        <BsCart3 className='text-sm' />{" "}
        <span className='text-sm font-medium'>Add</span>
      </Button>
      <CardMedia
        sx={{ height: 260, minWidth: 260 }}
        image={product.image}
        title={product.title}
      />
      <CardContent className='p-2'>
        <Typography className='text-base m-0 font-medium'>
          {product.title}
        </Typography>
        <div className='flex justify-between items-center'>
          <div className='flex gap-3 m-0 items-center'>
            <Rating
              name='read-only'
              size='small'
              value={product.rating}
              precision={0.1}
              readOnly
            />
            <p className='text-[12px] m-0 text-[#6A6A6A] font-medium'>
              {product.rating} & {product.likes} Likes
            </p>
          </div>
          <Checkbox
            size='medium'
            icon={<MdFavoriteBorder className='text-[#6A6A6A] text-xl' />}
            checkedIcon={
              <MdOutlineFavorite className='text-xl text-[#F84F4F]' />
            }
          />
        </div>
        <div className='flex gap-2 my-1 items-center'>
          <img src={product.thumbnail} className='w-6 h-6 rounded-full' />
          <p className='text-[12px] m-0 text-[#6A6A6A] font-medium'>
            {product.author}
          </p>
        </div>
        <p className='text-xl m-0 font-medium'>
          {" "}
          <span className='text-[12px] font-medium'>$</span> {product.price}
        </p>
        <div className='flex gap-2 m-0 items-center'>
          {product.content === "PCVR" ? (
            <span className='w-4 h-4 rounded-full bg-[#3CD4F5]'></span>
          ) : (
            <span className='w-4 h-4 rounded-full bg-[#75DE73]'></span>
          )}
          <p className='m-0 text-sm'>{product.type} Only</p>
        </div>
        <div className='flex gap-2 m-0 items-end justify-between self-end'>
          {product.autoUpload === "Supported" ? (
            <p className='m-0 text-[13px] font-medium'>
              Auto upload service ready, you can use this avatar within 24
              hours.
            </p>
          ) : (
            <p className='m-0 text-[13px] font-medium  '>
              Auto upload service not ready, you can use this avatar within 24
            </p>
          )}
          <Button
            onClick={handleClickShare}
            className='p-0 min-w-fit text-2xl text-[#6A6A6A]'>
            <MdIosShare />
          </Button>
        </div>
        <Popper open={open} anchorEl={anchorEl} placement='top-end' transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className='mb-2 mr-3'>
                <Button
                  onClick={() => handleCopyToClipboard(product.id)}
                  className=' flex gap-2 items-center text-[#6A6A6A]'>
                  <BsLink45Deg />
                  <span>Copy Link</span>
                </Button>
              </Paper>
            </Fade>
          )}
        </Popper>
      </CardContent>
    </Card>
  );
}
