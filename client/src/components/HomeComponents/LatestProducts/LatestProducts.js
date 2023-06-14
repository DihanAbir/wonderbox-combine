import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ProductCard from "../../cards/ProductCard";

const LatestProducts = () => {
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

  //   const next = () => {
  //     sliderRef.current.slickNext();
  //   };

  //   const previous = () => {
  //     sliderRef.current.slickPrev();
  //   };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    // slidesToScroll: 1,
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
    </div>
  );
};

export default LatestProducts;
