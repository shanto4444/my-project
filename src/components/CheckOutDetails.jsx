import React, { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useSelector } from "react-redux";

const CheckOutDetails = () => {
  let products = useSelector((state) => state.CartItemManeger.cartItems);
  let sum2 = 0;
  for (let i = 0; i < products.length; i++) {
    let item = products[i];
    sum2 += item.qty;
  }
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    let item = products[i];
    sum += item.price * item.qty;
  }
  let [city, setCity] = useState("");
  let [shippingCharge, setShippingCharge] = useState(0);
  const handleAddress = (e) => {
    let value = e.target.value;
    setCity(value);
    if (value.toLowerCase() === "dhaka") {
      setShippingCharge(100);
    } else {
      setShippingCharge(150);
    }
  };

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="">
            <div className="space-y-2 pb-9 pl-7">
              <h1 className="text-3xl font-semibold ">CheckOut</h1>
              <p className="text-sm">cart/information/shipping/payment</p>
            </div>
            <div className="flex justify-between ">
              <div className="w-[65%] py-6 pl-7 bg-slate-300">
                <div className="space-y-8">
                  <h2 className="text-2xl font-semibold py-8">
                    Contact Information
                  </h2>
                  <input
                    className="pl-5 bg-transparent font-semibold border-b-2 text-[16px] w-[50%] h-14 outline-none"
                    type="text"
                    placeholder="Email or Mobile Phone Number"
                  />

                  <div className="flex gap-6 items-center">
                    <MdCheckBoxOutlineBlank className="text-[16px]" />
                    <p className="text-[16px]">
                      Keep me up to date on news and excluive offers
                    </p>
                  </div>
                </div>
                <div className="space-y-12 py-8">
                  <h2 className="text-3xl font-simibold py-8">
                    Shipping Address
                  </h2>
                  <div className="flex justify-between">
                    <input
                      className="h-12 bg-transparent w-96 pl-5 font-semibold text-[16px] outline-none border-b-2"
                      type="text"
                      placeholder="First Name"
                    />

                    <input
                      className="h-12 bg-transparent w-96  mr-24 pl-5 font-semibold text-[16px] outline-none border-b-2"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>

                  <div>
                    <input
                      className="h-12 w-96 bg-transparent  pl-5 font-semibold text-[16px] outline-none border-b-2"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                  <div>
                    <input
                      className="pl-5 w-96 bg-transparent h-12 font-semibold text-[16px] outline-none border-b-2"
                      type="text"
                      placeholder="Appartments,suit,etc(optional)"
                    />
                  </div>
                  <div>
                    <input
                      onChange={handleAddress}
                      className="pl-5 w-96 bg-transparent  h-12 font-semibold text-[16px] outline-none border-b-2"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex justify-between">
                    <input
                      className="pl-5 w-96 bg-transparent  h-12 font-semibold text-[16px] outline-none border-b-2"
                      type="text"
                      placeholder="Country"
                    />
                    <input
                      className="mr-24 w-96 bg-transparent h-12 pl-5 font-semibold text-[16px] outline-none border-b-2"
                      type="text"
                      placeholder="Post Code"
                    />
                  </div>
                </div>
                <button className="my-8 text-white font-semibold text-xl py-3 px-12 bg-red-500 rounded-xl">
                  Continue Shipping
                </button>
              </div>
              <div className="w-[30%] space-y-9">
                {products.map((item) => (
                  <div className="flex text-green-900 font-semibold justify-between items-center h-50 bg-slate-400 pr-8">
                    <div className="flex justify-between items-center">
                      <img
                        className="gap-7 w-[120px]"
                        src={item.thumbnail}
                        alt="have photo"
                      />
                      <div>
                        <h2>{item.title}</h2>
                        <h4>Colour: green</h4>
                        <h4>Size: xl</h4>
                      </div>
                    </div>
                    <h3>${item.price}</h3>
                  </div>
                ))}
                <div className="">
                  <div className="bg-slate-200 py-6 space-y-8 px-5">
                    <div className="flex justify-between text-sm font-semibold border-b-4">
                      <h3>Totle Quantity:</h3>
                      <p>{sum2}</p>
                    </div>
                    <div className="flex justify-between text-sm font-semibold border-b-4">
                      <h3>Service Charge:</h3>
                      <p>${shippingCharge}</p>
                    </div>
                    <div className="flex justify-between text-sm font-semibold border-b-4">
                      <h3>Totals:</h3>
                      <p>${(sum + shippingCharge).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-5 text-sm font-semibold">
                      <MdCheckBoxOutlineBlank />
                      <p>Shipping & texts calculated at checkout</p>
                    </div>
                    <button className="flex mx-auto bg-green-700 py-2 px-24 rounded-xl text-white font-semibold">
                      Confirm Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutDetails;
