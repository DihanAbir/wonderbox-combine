/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import FooterInbox from "../../components/HomeComponents/FooterInbox/FooterInbox";
import ProductRequirements from "../../components/HomeComponents/ProductRequirements/ProductRequirements";
import Product from "../Product/Product";
import VerifiedStores from "../../components/HomeComponents/VerifiedStores/VerifiedStores";
import Banner from "../../components/HomeComponents/Banner/Banner";
import { Typography } from "@material-tailwind/react";

const Home = () => {
  return (
    <section className="">
      <div className="max-w-primary mx-auto px-4 pt-4">
        <div className="flex items-center h-10 w-full">
          <div className="w-fit h-full px-2 bg-primary cursor-pointer flex justify-center items-center text-white">
            <span>Announcement</span>
          </div>
          <marquee
            className="bg-blue-gray-50 h-full w-full flex items-center px-2"
            behavior="smooth"
            direction="left"
          >
            <Typography>
              Welcome to our eCommerce website! Discover a world of incredible
              deals and discounts on a wide range of products that will make
              your shopping experience unforgettable. Browse through our
              extensive collection of electronics, fashion, home essentials, and
              more. We have everything you need to meet your lifestyle demands.
              With our user-friendly interface and secure payment options, you
              can shop with confidence from the comfort of your home. Your
              satisfaction is our top priority. Take advantage of our exclusive
              promotions, flash sales, and seasonal offers to save big on your
              favorite products. Shop now and enjoy the thrill of great savings!
            </Typography>
          </marquee>
        </div>
        <Banner />
        <Product />
        <VerifiedStores />
        <ProductRequirements />
      </div>

      <div className="bg-[#3432FF]">
        <div className="max-w-primary mx-auto px-4">
          <FooterInbox />
        </div>
      </div>
    </section>
  );
};

export default Home;
