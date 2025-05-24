import React from "react";
import footerimg from "../assets/Hekto.png";
const Fotter = () => {
  return (
    <section className="bg-purple-50 py-16 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center lg:justify-between justify-center lg:gap-14 ">
          <div className=" border-b-4 border-gray-700  lg:w-[30%] left-0 py-8 mb-8 flex flex-col justify-center items-center lg:items-start lg:flex-none">
            <img
              className=" sm:flex items-center justify-center pb-8"
              src={footerimg}
              alt="footer image"
            />
            <div className="flex pb-6">
              <input
                className="h-10 w-52 border outline-none pl-2 bg-slate-300"
                type="text"
              />
              <button className="flex h-10  w-24 justify-center items-center bg-red-500 text-white font-semibold">
                sign up
              </button>
            </div>
            <h3 className="text-gray-500 pb-3">Contact information</h3>
            <p className="text-gray-500">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
          <div className=" lg:w-[70%] flex lg:justify-between justify-evenly gap-12">
            <div className="flex-col items-center">
              <p className="font-bold text-black text-xl pb-7">Catagories</p>
              <ul className="text-base/10 ">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
            <div className="flex-col items-center">
              <p className="font-bold text-black text-xl pb-7">Customer Care</p>
              <ul className="text-base/10 ">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
            <div className="flex-col items-center">
              <p className="font-bold text-black text-xl pb-7">Pages</p>
              <ul className="text-base/10 ">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fotter;
