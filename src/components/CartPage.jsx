import React from "react";
import Common from "./Common";
import CartDetails from "./CartDetails";

const CartPage = () => {
  return (
    <div>
      <Common
        pageName="Cart Page"
        pageDtails1="Home."
        pageDtails2="Page."
        pageDtails3="Cart"
      />
      <CartDetails />
    </div>
  );
};

export default CartPage;
