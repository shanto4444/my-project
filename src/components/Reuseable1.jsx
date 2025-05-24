import React from "react";

const Reuseable1 = (props) => {
  return (
    <section>
      <div className="container">
        <div className="py-12">
          <div className="flex flex-col items-center justify-center pb-4">
            <img src={props.image1} alt="this is a picture" />
            <p className="pt-3 text-red-500 font-semibold ">24/7 Support</p>
          </div>
          <div className="text-center">
            <p>{props.title}</p>
            <p>{props.subTitle}</p>
            <p>{props.heading}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reuseable1;
