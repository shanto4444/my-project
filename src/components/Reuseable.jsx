import React from "react";

const Reuseable = (props) => {
  return (
    <section>
      <div className="container">
        <div className="">
          <div className="flex items-center bg-[#F6F7FB] justify-center pb-6">
            <img src={props.image} alt="" />
          </div>
          <div className="flex justify-between px-10 pb-5">
            <p>{props.name}</p>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reuseable;
