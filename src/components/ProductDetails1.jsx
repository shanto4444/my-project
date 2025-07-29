import React from "react";
import Common from "./Common";
import ProductDetailsFullPage from "./ProductDetailsFullPage";

const ProductDetails1 = () => {
  return (
    <div>
      <Common
        pageName="Product Details Page"
        pageDtails1="Home."
        pageDtails2="Page."
        pageDtails3="Product"
      />
      <ProductDetailsFullPage />
    </div>
  );
};

export default ProductDetails1;
