import { Filters, ProductType } from "../types";

export function filterProducts(products: ProductType[], filters: Filters) {
  return products.filter((product) => {
    // Filter by category
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    // Filter by price
    if (filters.price && filters.price.length > 0) {
      const priceRange = getPriceRange(product.price);

      if (!filters.price.includes(priceRange)) {
        return false;
      }
    }

    // Filter by content
    if (filters.content && filters.content.length > 0) {
      if (!filters.content.includes(product.content)) {
        return false;
      }
    }

    // Filter by polygon
    if (filters.polygon && filters.polygon.length > 0) {
      const polygonRange = getPolygonRange(product.polygon);

      if (!filters.polygon.includes(polygonRange)) {
        return false;
      }
    }

    // Filter by autoSupport
    if (filters.autoSupport && filters.autoSupport.length > 0) {
      if (!filters.autoSupport.includes(product.autoUpload)) {
        return false;
      }
    }

    return true;
  });
}

function getPriceRange(price: number) {
  if (price < 10) {
    return "under_10";
  } else if (price < 20) {
    return "10_to_20";
  } else if (price < 30) {
    return "20_to_30";
  } else if (price < 40) {
    return "30_to_40";
  } else if (price < 50) {
    return "40_to_50";
  } else if (price < 70) {
    return "50_to_70";
  } else {
    return "70_and_above";
  }
}

function getPolygonRange(polygon: number) {
  if (polygon < 7500) {
    return "under_7500";
  } else if (polygon < 10000) {
    return "7500_to_10000";
  } else if (polygon < 15000) {
    return "10000_to_15000";
  } else if (polygon < 20000) {
    return "15000_to_20000";
  } else if (polygon < 32000) {
    return "20000_to_32000";
  } else if (polygon < 70000) {
    return "32000_to_70000";
  } else {
    return "70000_and_above";
  }
}
