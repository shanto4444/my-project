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
      <div className="container mx-auto">
        <div className=" py-6">
          <h1 className="font-bold text-[300px] text-neutral-600">404</h1>
          <p className="text-green-800 text-xl font-semibold capitalize text-center pb-7 underline cursor-pointer">
            go back to home page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
