import { useContext } from "react";
import { apiData } from "./ContexApi";
import Slider from "react-slick";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute bottom-[-30px] ml-[51%] cursor-pointer text-2xl z-10 bg-pink-600 text-white p-3 rounded-full"
    onClick={onClick}
  >
    <FaArrowAltCircleRight />
  </div>
);
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute bottom-[-30px] ml-[45%] cursor-pointer text-2xl z-10 bg-pink-600 text-white p-3 rounded-full"
    onClick={onClick}
  >
    <FaArrowAltCircleLeft />
  </div>
);

const Freatured = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  let data = useContext(apiData);

  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div>
          <div className="text-center pb-12">
            <h2 className="font-bold text-[36px] ">Featured Products</h2>
          </div>
          <div className=" ">
            <Slider {...settings}>
              {data.map((item) => (
                <div className="!w-[95%] shadow-lg mb-7">
                  <div className=" bg-[#F6F7FB]  flex justify-center pt-6 pb-6">
                    <img src={item.thumbnail} alt=" have a image" />
                  </div>
                  <div className="text-center py-5">
                    <h3 className="text-[#FB2E86]">{item.title}</h3>
                    <p className="text-[#151875]">- - -</p>
                    <p className="text-[#151875]">code :6875</p>
                    <p className="text-[#151875]">$ {item.price}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freatured;
