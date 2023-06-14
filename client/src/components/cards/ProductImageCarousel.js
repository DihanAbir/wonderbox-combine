import React, { useState, useRef } from "react";
import { lazy } from "react";
import Slider from "react-slick";

const ProductImageCarousel = ({ images }) => {
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {images?.map((img, i) => (
          <div
            className="relative flex justify-center items-center w-full h-[280px] p-2"
            key={i}
          >
            <img
              draggable="false"
              className="h-52 object-cover mx-auto"
              src={img}
              alt=""
              onLoad={handleImageLoad}
              onPlay={lazy}
            />

            {loading && (
              <div className="flex justify-center items-center w-full h-full bg-gray-100 text-black absolute top-0 text-center"></div>
            )}
          </div>
        ))}
      </Slider>

      {images?.length > 1 && (
        <div className="hidden group-hover:block">
          <div className="absolute top-[40%] w-full flex items-center justify-between px-3">
            <button
              className="bg-gray-100 hover:bg-primary hover:text-white text-gray-900 h-8 w-8 flex items-center justify-center rounded-full object-cover overflow-hidden"
              onClick={previous}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              className="bg-gray-100 hover:bg-primary hover:text-white text-gray-900 h-8 w-8 flex items-center justify-center rounded-full object-cover overflow-hidden"
              onClick={next}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductImageCarousel;
