// @flow strict

import { Button, Container, Divider, Grid, Paper, Rating } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import * as React from "react";
import { ProductType } from "../../types";

interface PropsType {
  product: ProductType | any;
  handleAddToCart: Function;
}

function ProductViewUI({ product, handleAddToCart }: PropsType) {
  return (
    <Container className='w-full h-full mt-5'>
      <Paper>
        <Grid container>
          <Grid item xs={5} className='w-full'>
            <CustomImageList itemData={product?.images} />
            {/* <img src={product?.image} alt='' className='w-full' /> */}
          </Grid>
          <Grid item xs={7}>
            <div className='mb-5 p-5'>
              <div className='font-medium text-xl mb-5 text-[#4a1f87]'>
                {product?.category}
              </div>
              <h1 className='text-2xl font-medium'>{product?.title}</h1>
              <Rating
                name='read-only'
                size='medium'
                value={product?.rating}
                precision={0.1}
                readOnly
              />
              <p className='text-2xl font-bold'>$ {product?.price}</p>

              <div className='flex gap-2 m-0 items-center'>
                {product?.content === "PCVR" ? (
                  <span className='w-4 h-4 rounded-full bg-[#3CD4F5]'></span>
                ) : (
                  <span className='w-4 h-4 rounded-full bg-[#75DE73]'></span>
                )}
                <p className='m-0 text-sm'>{product?.type} Only</p>
              </div>
              <div className='flex items-center gap-5  mt-5'>
                <Button
                  onClick={() => product && handleAddToCart(product)}
                  variant='outlined'
                  className='w-2/5 py-2 hover:bg-[#4a1f87] hover:text-white text-[#4a1f87] border-[#4a1f87]'>
                  Add to Cart
                </Button>
                <Button
                  variant='contained'
                  className='w-2/5 py-2 bg-[#4a1f87] text-white'>
                  Buy Now
                </Button>
              </div>
            </div>
            <Divider />
            <div className='p-5'>
              <h3 className='font-medium'>Full Details:</h3>
              <p>Name: {product?.title}</p>
              <p>Category: {product?.category}</p>
              <p>Price: ${product?.price}</p>
              <p>Author: {product?.author}</p>
              <p>Likes: {product?.likes}</p>
              <p>Rating: {product?.rating}</p>
              <p>Content: {product?.content}</p>
              <p>Polygon: {product?.polygon}</p>
              <p>Auto Upload Supported: {product?.autoUpload}</p>
              <p>Device: {product?.type}</p>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default ProductViewUI;

export function CustomImageList({ itemData }: any) {
  function srcset(
    image: string,
    width: number,
    height: number,
    rows = 1,
    cols = 1,
  ) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <ImageList
      sx={{
        width: "100%",
        transform: "translateZ(0)",
      }}
      rowHeight={200}
      gap={1}>
      {itemData.map((item: any) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img {...srcset(item.img, 250, 200, rows, cols)} loading='lazy' />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
