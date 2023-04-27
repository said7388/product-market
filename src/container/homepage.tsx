// @flow strict

import * as React from "react";
import CategoryFilter from "../core-ui/filter/category-filter";
import Products from "../core-ui/products/products";

function Homepage() {
  const [page, setPage] = React.useState(1);

  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='sm:min-w-[256px]'>
        <CategoryFilter />
      </div>
      <div className='overflow-y-auto max-h-[88vh] '>
        <Products page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default Homepage;
