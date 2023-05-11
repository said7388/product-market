// @flow strict

import {
  Box,
  Checkbox,
  Divider,
  Paper,
  Rating,
  Tab,
  Tabs,
} from "@mui/material";
import * as React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import products from "../../data/products.json";
import { ProductType } from "../../types";
import ProductCard from "../card/product-card";

function ProductDetailsFooter({ product }: { product: ProductType }) {
  const [value, setValue] = React.useState("specification");

  const filteredProducts = products.filter(
    (product) => product.category === product.category,
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper className='my-5 h-[600px] overflow-auto w-full'>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='secondary'
            className='overflow-auto'
            indicatorColor='secondary'>
            <Tab value='specification' label='Specification' />
            <Tab value='description' label='Description' />
            <Tab value='reviews' label='Customer Reviews' />
          </Tabs>
        </Box>
        <Divider />
        <div hidden={value !== "specification"} className='p-5'>
          <div className='flex gap-4 '>
            <p className='uppercase my-2 font-medium'>Title: </p>
            <p className=' my-2'>{product?.title}</p>
          </div>
          <div className='flex gap-4 '>
            <p className='uppercase my-2 font-medium'>Category: </p>
            <p className=' my-2'>{product?.category}</p>
          </div>
          <div className='flex gap-4 '>
            <p className='uppercase my-2 font-medium'>price: </p>
            <p className=' my-2'>{product?.price}</p>
          </div>
          <div className='flex gap-4 '>
            <p className='uppercase my-2 font-medium'>author: </p>
            <p className=' my-2'>{product?.author}</p>
          </div>
          <div className='flex gap-4 '>
            <p className='uppercase my-2 font-medium'>likes: </p>
            <p className=' my-2'>{product?.likes}</p>
          </div>
          <div className='flex gap-4 '>
            <p className='uppercase my-2 font-medium'>rating: </p>
            <p className=' my-2'>{product?.rating}</p>
          </div>
          <div className='flex gap-4 '>
            <p className='uppercase my-2 font-medium'>content: </p>
            <p className=' my-2'>{product?.content}</p>
          </div>
          <div className='flex gap-4 '>
            <p className='uppercase my-2 font-medium'>polygon: </p>
            <p className=' my-2'>{product?.polygon}</p>
          </div>
          <div className='flex gap-4 '>
            <p className='uppercase my-2 font-medium'>
              Auto Upload Supported:{" "}
            </p>
            <p className=' my-2'>{product?.autoUpload}</p>
          </div>

          <div className='flex gap-4 '>
            <p className='uppercase font-medium'>Device: </p>
            <p>{product?.type}</p>
          </div>
        </div>

        <div hidden={value !== "description"} className='p-5'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo
            odio facilis obcaecati tempore reprehenderit suscipit voluptatum
            dolores est delectus, accusantium exercitationem nostrum maxime,
            itaque rerum amet, aperiam minus cumque? Veniam alias fugiat
            sapiente debitis laborum, sit et officiis ab magnam voluptate quae
            aperiam exercitationem commodi vel quasi accusamus impedit
            voluptatibus omnis quia dolorum earum porro ipsum? Architecto, eos
            molestias? Quia, quisquam at animi saepe veritatis nisi beatae
            facere totam! Odio ut assumenda repellendus dicta eveniet ipsam
            corporis, fugit iure ipsum hic, non aspernatur debitis voluptatem.
            Fugit itaque, numquam, rerum aspernatur consequuntur hic distinctio
            quaerat quasi voluptates, saepe sapiente delectus Veniam alias
            fugiat sapiente debitis.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Odio ut assumenda repellendus dicta.</li>
            <li>Fugit itaque, numquam, rerum aspernatur.</li>
            <li>sapiente debitis laborum, sit et officiis.</li>
            <li>Veniam alias fugiat sapiente debitis.</li>
            <li>Fugit itaque, numquam, rerum aspernatur.</li>
            <li>sapiente debitis laborum, sit et officiis.</li>
            <li>Veniam alias fugiat sapiente debitis.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Odio ut assumenda repellendus dicta.</li>
          </ul>
        </div>

        <div hidden={value !== "reviews"} className='p-5'>
          <div className=''>
            <div className='flex items-center justify-between'>
              <Rating
                name='read-only'
                size='small'
                value={4.8}
                precision={0.1}
                readOnly
              />
              <p className='my-0 text-gray-500'>{new Date().toDateString()}</p>
            </div>
            <div className='flex items-center gap-3'>
              <p className='my-2 italic text-gray-500'>By: Alex Xu</p>
              <p className='flex items-center my-2 gap-1 text-green-700'>
                <MdVerified className='text-lg' />
                <span className='m-0'>Verified Purchase</span>
              </p>
            </div>
            <p className='my-2'>
              The VR avatar product I tried was impressive. The level of
              customization allowed me to create an avatar that closely
              resembled my real-life appearance. The product's tracking system
              was also very accurate, making my avatar's movements feel
              incredibly realistic.
            </p>
            <Checkbox
              size='medium'
              icon={<AiOutlineLike className='text-[#9C27B0] text-xl' />}
              checkedIcon={<AiFillLike className='text-xl text-[#9C27B0]' />}
            />
            <Divider className='mb-4' />
          </div>
          <div className=''>
            <div className='flex items-center justify-between'>
              <Rating
                name='read-only'
                size='small'
                value={4.8}
                precision={0.1}
                readOnly
              />
              <p className='my-0 text-gray-500'>{new Date().toDateString()}</p>
            </div>
            <div className='flex items-center gap-3'>
              <p className='my-2 italic text-gray-500'>By: Alex Xu</p>
              <p className='flex items-center my-2 gap-1 text-green-700'>
                <MdVerified className='text-lg' />
                <span className='m-0'>Verified Purchase</span>
              </p>
            </div>
            <p className='my-2'>
              I was disappointed with the limited customization options of the
              VR avatar product I tried. Additionally, the product's tracking
              was inconsistent.
            </p>
            <Checkbox
              size='medium'
              icon={<AiOutlineLike className='text-[#9C27B0] text-xl' />}
              checkedIcon={<AiFillLike className='text-xl text-[#9C27B0]' />}
            />
            <Divider className='mb-4' />
          </div>
          <div className=''>
            <div className='flex items-center justify-between'>
              <Rating
                name='read-only'
                size='small'
                value={4.8}
                precision={0.1}
                readOnly
              />
              <p className='my-0 text-gray-500'>{new Date().toDateString()}</p>
            </div>
            <div className='flex items-center gap-3'>
              <p className='my-2 italic text-gray-500'>By: Alex Xu</p>
              <p className='flex items-center my-2 gap-1 text-green-700'>
                <MdVerified className='text-lg' />
                <span className='m-0'>Verified Purchase</span>
              </p>
            </div>
            <p className='my-2'>
              The VR avatar product I used exceeded my expectations. The product
              offered a wide range of customization options, allowing me to
              create a truly unique avatar. The tracking was also very precise,
              making my movements in the virtual world feel natural and
              immersive. I highly recommend this product.
            </p>
            <Checkbox
              size='medium'
              icon={<AiOutlineLike className='text-[#9C27B0] text-xl' />}
              checkedIcon={<AiFillLike className='text-xl text-[#9C27B0]' />}
            />
          </div>
        </div>
      </Paper>
      <Paper className='p-4'>
        <p className='text-3xl mt-0 font-bold text-[#9C27B0] uppercase'>
          Related Products
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
          {filteredProducts.slice(0, 4).map((product: ProductType) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </Paper>
    </>
  );
}

export default ProductDetailsFooter;
