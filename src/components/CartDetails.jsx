import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { allclear, decrement, deleteItem, increment } from "./slices/CartSlice";
import { Link } from "react-router-dom";
const CartDetails = () => {
  let products = useSelector((state) => state.CartItemManeger.cartItems);

  let dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };
  const handleIncreement = (index) => {
    dispatch(increment(index));
  };
  const handleDcrement = (index) => {
    dispatch(decrement(index));
  };
  const allDeleteCartItems = () => {
    dispatch(allclear());
  };
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    let item = products[i];
    sum += item.price * item.qty;
  }
  let sum2 = 0;
  for (let i = 0; i < products.length; i++) {
    let item = products[i];
    sum2 += item.qty;
  }

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          {products.length > 0 ? (
            <div className="flex justify-between gap-12">
              <div className="w-[65%] space-y-10">
                <div className="flex justify-between text-xl font-bold ">
                  <h2 className="w-[285px]">Product</h2>
                  <h2>Price</h2>
                  <h2>Quality</h2>
                  <h2>Total</h2>
                </div>

                {products.map((item, index) => (
                  <div className="flex justify-between border-b-4 items-center">
                    <div className="flex w-[350px]">
                      <img
                        className="w-[150px] bg-slate-200 p-3"
                        src={item.thumbnail}
                        alt="product"
                      />
                      <div onClick={() => handleDelete(index)}>
                        <RxCrossCircled className="transition text-3xl text-black bg-white hover:text-white hover:bg-slate-700" />
                      </div>
                      <div className="space-y-2 ml-5">
                        <h1>{item.title}</h1>
                        <h4>Color:Green</h4>
                        <h4>Size:Xl</h4>
                      </div>
                    </div>
                    <p>${item.price}</p>
                    <div className="flex justify-between  ">
                      <p
                        onClick={() => handleDcrement(index)}
                        className="w-[60px] bg-slate-100 border flex justify-center items-center text-xl font-semibold "
                      >
                        -
                      </p>
                      <p className="w-[60px] bg-slate-200 border flex justify-center items-center text-xl font-semibold ">
                        {item.qty}
                      </p>
                      <p
                        onClick={() => handleIncreement(index)}
                        className="w-[60px] bg-slate-100 border flex justify-center items-center text-xl font-semibold "
                      >
                        +
                      </p>
                    </div>
                    <p>${(item.price * item.qty).toFixed(2)}</p>
                  </div>
                ))}
                <div className="flex justify-between">
                  <button className="bg-red-700 py-2 px-4 text-white font-semibold rounded-xl">
                    Update Cart
                  </button>
                  <button
                    onClick={allDeleteCartItems}
                    className="bg-red-700 py-2 px-4 text-white font-semibold rounded-xl"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              <div className="w-[25%]">
                <div className="">
                  <h2 className="text-center text-xl font-bold pb-5">
                    Cart Totals
                  </h2>
                  <div className="bg-slate-200 py-6 space-y-8 px-5">
                    <div className="flex justify-between text-sm font-semibold border-b-4">
                      <h3>Quantity:</h3>
                      <p>{sum2}</p>
                    </div>
                    <div className="flex justify-between text-sm font-semibold border-b-4">
                      <h3>Totals:</h3>
                      <p>${sum.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-5 text-sm font-semibold">
                      <MdCheckBoxOutlineBlank />
                      <p>Shipping & texts calculated at checkout</p>
                    </div>
                    <button className="flex mx-auto bg-green-700 py-2 px-12 rounded-xl text-white font-semibold">
                      <Link to="/checkoutpage">Proceed To Checkout</Link>
                    </button>
                  </div>
                </div>
                {/* <div className=" py-4">
                  <h2 className="text-center text-xl font-bold pb-4">
                    Calculate Shopping
                  </h2>
                  <div className="px-5 bg-slate-200 py-7">
                    <ul className="space-y-4 pb-6 text-sm font-normal">
                      <li className="border-b-4">bangladesh</li>
                      <li className="border-b-4">Dhaka</li>
                      <li className="border-b-4">postal code</li>
                    </ul>
                    <button className="bg-red-700 py-2 px-4 rounded-xl text-white font-semibold">
                      calculate shipping
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          ) : (
            <div>
              <h3>Cart is empty</h3>
              <p>go to shop page</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CartDetails;
