import React from "react";
import Common from "./Common";
import ProductsItem from "./ProductsItem";
import ShopDtails from "./ShopDtails";

const Shopp = () => {
  return (
    <div>
      <Common
        pageName="Shop Page"
        pageDtails1="Home."
        pageDtails2="Page."
        pageDtails3="shop"
      />
      <ShopDtails />
    </div>
  );
};

export default Shopp;
