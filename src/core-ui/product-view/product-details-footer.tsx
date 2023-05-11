// @flow strict

import { Box, Divider, Tab, Tabs } from "@mui/material";
import * as React from "react";
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
    <div>
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
            quaerat quasi voluptates, saepe sapiente delectus.
          </p>
        </div>
        <div hidden={value !== "reviews"} className='p-5'>
          reviews
        </div>
      </div>
      <div className='p-5'>
        <p className='text-3xl font-bold text-[#9C27B0]'>Related Products</p>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
          {filteredProducts.slice(0, 4).map((product: ProductType) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsFooter;
