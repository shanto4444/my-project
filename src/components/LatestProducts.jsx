import React, { useContext } from "react";
import Reuseable from "./Reuseable";
import Reuseable1 from "../components/Reuseable1";
import { apiData } from "./ContexApi";
import Slider from "react-slick";
import img2 from "../assets/about2.png";
import img3 from "../assets/about3.png";
import img4 from "../assets/about4.png";
import img5 from "../assets/about5.png";
const LatestProducts = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  let data = useContext(apiData);

  return (
    <section>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-[26px] font-bold pb-8">Latest Products</h2>
          <ul className="flex gap-9 justify-center text-[18px] font-semibold">
            <li>New Arrivel</li>
            <li>Best Seller</li>
            <li>Featured</li>
            <li>Special Offers</li>
          </ul>
        </div>
        <div className="py-16">
          <Slider {...settings}>
            {data.map((item) => (
              <div className=" !w-[95%] lg:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2  shadow-lg mb-7 ">
                <Reuseable
                  image={item.thumbnail}
                  name={item.category}
                  price={item.price}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <div className="text-center text-[26px] font-bold py-5">
            <h2>What Shopex Offers</h2>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Reuseable1
                image1={img2}
                title="this is a title"
                subTitle="this is a subtitle"
                heading="this is a heading"
              />
              <Reuseable1
                image1={img3}
                title="this is a title"
                subTitle="this is a subtitle"
                heading="this is a heading"
              />
              <Reuseable1
                image1={img4}
                title="this is a title"
                subTitle="this is a subtitle"
                heading="this is a heading"
              />
              <Reuseable1
                image1={img5}
                title="this is a title"
                subTitle="this is a subtitle"
                heading="this is a heading"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
