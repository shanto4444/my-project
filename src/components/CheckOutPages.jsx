import React from "react";
import Common from "./Common";
import CheckOutDetails from "./CheckOutDetails";

const CheckOutPages = () => {
  return (
    <>
      <Common
        pageName="CheckOut Page"
        pageDtails1="Home."
        pageDtails2="Page."
        pageDtails3="checkOut"
      />
      <CheckOutDetails />
    </>
  );
};

export default CheckOutPages;
