import React from "react";

const Common = (props) => {
  return (
    <section className="bg-slate-200">
      <div className="container mx-auto">
        <div className="h-72  flex flex-col justify-center">
          <h1 className="text-[35px] font-bold font-serif pb-2">
            {props.pageName}
          </h1>
          <div className="flex gap-1">
            <p className="font-normal font-semibold"> {props.pageDtails1}</p>
            <p className="font-normal font-semibold"> {props.pageDtails2}</p>
            <p className="text-red-500 font-normal font-semibold">
              {props.pageDtails3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
