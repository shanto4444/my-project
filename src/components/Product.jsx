import Common from "./Common";
import ProductsItem from "./ProductsItem";
import ProductTitleBox from "./ProductTitleBox";

const Product = () => {
  return (
    <div>
      <Common
        pageName="Products Page"
        pageDtails1="Home."
        pageDtails2="Page."
        pageDtails3="product"
      />
      <ProductTitleBox />
      <ProductsItem />
    </div>
  );
};

export default Product;
