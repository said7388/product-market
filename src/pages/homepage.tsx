// @flow strict
import * as React from "react";
import AutoUploadSupport from "../core-ui/filter/auto-upload-support";
import CategoryFilter from "../core-ui/filter/category-filter";
import ContentFilter from "../core-ui/filter/content-filter";
import PolygonFilter from "../core-ui/filter/polygon-filter";
import PriceFilter from "../core-ui/filter/price-filter";
import Products from "../core-ui/products/products";
import MainLayout from "../layout/main-layout";

function Homepage() {
  const [page, setPage] = React.useState(1);

  return (
    <MainLayout>
      <div className='flex flex-col sm:flex-row max-h-[calc(100vh-64px)]'>
        <div className='sm:min-w-[256px] px-5 overflow-y-auto'>
          <CategoryFilter />
          <ContentFilter />
          <PriceFilter />
          <PolygonFilter />
          <AutoUploadSupport />
        </div>
        <div className='overflow-y-auto'>
          <Products page={page} setPage={setPage} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Homepage;
