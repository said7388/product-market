// @flow strict

import * as React from "react";
import CategoryFilter from "../core-ui/filter/category-filter";

function Homepage() {
  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='w-full sm:w-[256px]'>
        <CategoryFilter />
      </div>
      <div className=''>okkkk</div>
    </div>
  );
}

export default Homepage;
