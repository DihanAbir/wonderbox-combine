import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ProductCard from "../../cards/ProductCard";
import banner1 from "../../../assets/images/banner1.png";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const TopRankingProducts = () => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    fetch(`http://localhost:5000/api/product/top-ranking/all`)
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
      <div className="md:grid grid-cols-2 mb-8 h-[250px] hidden md:block">
        <img className="w-full h-[250px]" src={banner1} alt="" />
        <div className="bg-blue-gray-50 p-4">
          <h1 className="font-bold text-2xl text-gray-800">
            Top Ranking Productsdf
          </h1>
          <p className="mt-6">
            Discover the latest and greatest products that have received top
            rankings.", "Explore the best-selling items that have impressed
            customers with their quality and performance.", "Get your hands on
            the most highly recommended products that are loved by our
            community.
          </p>

          <Link to="/products">
            <Button className="shadow-none mt-8">View All Products</Button>
          </Link>
        </div>
      </div>
      <div className="relative group">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, i) => (
            <ProductCard key={i} product={product} status="ranking" />
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
    </div>
  );
};

export default TopRankingProducts;
