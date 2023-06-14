import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../../cards/ProductCard";
import Slider from "react-slick";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    fetch(`http://localhost:5000/api/product/popular/products/all`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
    <div className="mt-16 relative group">
      <h1 className="font-bold text-2xl text-gray-800 mb-2">
        Popular Products
      </h1>
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} status="" />
        ))}
      </Slider>
    </div>
  );
};

export default PopularProducts;
