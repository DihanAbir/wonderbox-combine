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
      <div className="md:grid grid-cols-2 mb-8 h-[250px] hidden md:block">
        <img className="w-full h-[250px]" src={banner1} alt="" />
        <div className="bg-blue-gray-50 p-4">
          <h1 className="font-bold text-2xl text-gray-800">
            Top Ranking Products
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
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} status="ranking" />
        ))}
      </Slider>
    </div>
  );
};

export default TopRankingProducts;
