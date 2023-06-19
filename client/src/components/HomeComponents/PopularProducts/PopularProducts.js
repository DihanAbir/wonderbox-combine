import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ProductCard from "../../cards/ProductCard";
import { Button } from "@material-tailwind/react";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    fetch(`http://localhost:5000/api/product/show/all`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    speed: 700,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-8 relative group">
      <div className="text-center max-w-[800px] mx-auto mb-2">
        <h1 className="font-bold text-2xl text-gray-800">Recently Released</h1>
        <p className="text-gray-600">
          Discover our newest arrivals! Explore the latest products that have
          just hit the shelves. From fashion to tech, our recently released
          collection showcases the freshest and most innovative items. Stay
          ahead of the game and be the first to get your hands on these exciting
          new additions.
        </p>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </Slider>

      <div className="absolute top-[50%] w-full gap-4 flex justify-between items-center">
        <Button
          className="text-white bg-primary hover:bg-darkPrimary active:bg-green-500 h-24 w-fit px-4 rounded-xl"
          onClick={previous}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Button>

        <Button
          className="text-white bg-primary hover:bg-darkPrimary active:bg-green-500 h-24 w-fit px-4 rounded-xl"
          onClick={next}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default PopularProducts;

// useEffect(() => {
//   fetch(`http://localhost:5000/api/product/popular/products/all`)
//     .then((res) => res.json())
//     .then((data) => {
//       setProducts(data);
//     });
// }, []);
