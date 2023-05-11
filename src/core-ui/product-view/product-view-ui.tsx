// @flow strict

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  Paper,
  Rating,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import * as React from "react";
import { BsCartPlus, BsHeart } from "react-icons/bs";
import { TfiMinus, TfiPlus } from "react-icons/tfi";
import InnerImageZoom from "react-inner-image-zoom";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/features/product-slice";
import { ProductType } from "../../types";
import ProductCard from "../card/product-card";

interface PropsType {
  product: ProductType | any;
  handleAddToCart: Function;
}

function ProductViewUI({ product, handleAddToCart }: PropsType) {
  const [thumbnail, setThumbnail] = React.useState(product?.image);
  const [quantity, setQuantity] = React.useState(1);
  const [value, setValue] = React.useState("specification");
  const products = useSelector(selectProducts);

  const filteredProducts = products.filter(
    (product) => product.category === product.category,
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container className='w-full h-full my-6'>
      <Paper>
        <Grid container>
          <Grid item xs={5} className='w-full'>
            <InnerImageZoom
              src={thumbnail}
              className='w-full h-[450px] object-cover'
              zoomType='hover'
            />
            <div className='grid grid-cols-4 gap-1 mt-4'>
              {product?.images.map((item: any, index: number) => (
                <img
                  src={item.img}
                  onClick={() => setThumbnail(item.img)}
                  key={index}
                  alt=''
                  className='w-full h-[100px] object-cover hover:cursor-pointer'
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={7}>
            <div className='mb-5 p-5'>
              <h1 className='text-2xl md:text-3xl text-[#9C27B0] ragular-title capitalize font-medium'>
                {product?.title}
              </h1>

              <Rating
                name='read-only'
                size='medium'
                value={product?.rating}
                precision={0.1}
                readOnly
              />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui...
              </p>
              <p className='text-3xl font-bold text-[#9C27B0]'>
                $ {product?.price}
              </p>
              <div className='flex gap-5 items-center'>
                <p className='w-28 m-0 font-medium regular title  uppercase'>
                  Device:
                </p>
                <div className='flex gap-2 m-0 items-center'>
                  {product?.content === "PCVR" ? (
                    <span className='w-4 h-4 rounded-full bg-[#3CD4F5]'></span>
                  ) : (
                    <span className='w-4 h-4 rounded-full bg-[#75DE73]'></span>
                  )}
                  <p className='m-0 text-sm'>{product?.type} Only</p>
                </div>
              </div>

              <div className='flex gap-5 items-center'>
                <p className='w-28 font-medium regular title  uppercase'>
                  Quantity:
                </p>
                <div className='flex items-center gap-1'>
                  <Button
                    variant='outlined'
                    color='secondary'
                    onClick={() => quantity > 0 && setQuantity(quantity - 1)}
                    className='py-[7px] min-w-fit'>
                    <TfiMinus className='text-2xl text-[#9C27B0] font-bold' />
                  </Button>
                  <TextField
                    color='secondary'
                    variant='outlined'
                    size='small'
                    type='number'
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    value={quantity}
                    className='w-16'
                  />
                  <Button
                    variant='outlined'
                    onClick={() => setQuantity(quantity + 1)}
                    color='secondary'
                    className='py-[7px]  min-w-fit'>
                    <TfiPlus className='text-2xl text-[#9C27B0] font-bold' />
                  </Button>
                </div>
              </div>
              <div className='flex gap-5 items-center'>
                <p className='w-28 m-0 font-medium regular title  uppercase'>
                  Subtotal:
                </p>
                <p className='text-2xl my-1 font-bold text-[#9C27B0]'>
                  $ {product?.price * quantity}
                </p>
              </div>

              <div className='flex gap-5 items-center'>
                <p className='w-28 m-0 font-medium regular title  uppercase'>
                  Category:
                </p>
                <p className='text-base capitalize'>{product?.category}</p>
              </div>

              <ButtonGroup color='secondary' className=' mt-4 w-full'>
                <Button
                  onClick={() => product && handleAddToCart(product)}
                  variant='outlined'
                  color='secondary'
                  className='py-2.5 hover:bg-[#9C27B0] hover:text-white text-[#4a1f87] border-[#4a1f87] transition-all duration-700 '>
                  <BsCartPlus className='text-lg me-1' />
                  Add to Cart
                </Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  className=' hover:bg-[#9C27B0] hover:text-white text-[#4a1f87] border-[#4a1f87] transition-all duration-700 '>
                  Buy it Now
                </Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  className='hover:bg-[#9C27B0] hover:text-white text-[#4a1f87] border-[#4a1f87] transition-all duration-700 '>
                  <BsHeart className='text-base me-1' />
                  Add to wishlist
                </Button>
              </ButtonGroup>
            </div>
          </Grid>
        </Grid>

        <div className='mt-5 h-[500px] w-full'>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor='secondary'
              indicatorColor='secondary'>
              <Tab value='specification' label='Specification' />
              <Tab value='description' label='Description' />
              <Tab value='reviews' label='Reviews' />
            </Tabs>
          </Box>
          <Divider />
          <div hidden={value !== "specification"} className='p-5'>
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
          <div hidden={value !== "description"} className='p-5'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              nemo odio facilis obcaecati tempore reprehenderit suscipit
              voluptatum dolores est delectus, accusantium exercitationem
              nostrum maxime, itaque rerum amet, aperiam minus cumque? Veniam
              alias fugiat sapiente debitis laborum, sit et officiis ab magnam
              voluptate quae aperiam exercitationem commodi vel quasi accusamus
              impedit voluptatibus omnis quia dolorum earum porro ipsum?
              Architecto, eos molestias? Quia, quisquam at animi saepe veritatis
              nisi beatae facere totam! Odio ut assumenda repellendus dicta
              eveniet ipsam corporis, fugit iure ipsum hic, non aspernatur
              debitis voluptatem. Fugit itaque, numquam, rerum aspernatur
              consequuntur hic distinctio quaerat quasi voluptates, saepe
              sapiente delectus.
            </p>
          </div>
          <div hidden={value !== "reviews"} className='p-5'>
            reviews
          </div>
        </div>
        <div className=''>
          <p className='text-3xl font-bold text-[#9C27B0]'>Related Products</p>
          <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
            {filteredProducts.slice(0, 4).map((product: ProductType) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </Paper>
    </Container>
  );
}

export default ProductViewUI;
