import React from "react";
import call from "../../../assets/icons/call.png";
import BannerCarousel from "./BannerCarousel";
import Categories from "./Categories";

const Banner = () => {
  return (
    <section className="">
      <div className="grid lg:grid-cols-4 gap-6 pt-4">
        <Categories />

        <div className="lg:col-span-3 order-first lg:order-none w-full">
          <div className="w-full flex flex-col-reverse lg:flex-row lg:items-center gap-6">
            <div className="flex-grow relative">
              <div className="flex-grow flex items-center">
                <input
                  className="flex-grow h-10 w-full focus:outline-none border focus:border-primary px-2"
                  type="search"
                  name="search"
                  placeholder="What do you need?"
                />
                <button
                  className="w-36 h-10 text-white bg-primary hover:bg-darkPrimary duration-150 flex justify-center items-center"
                  type="submit"
                >
                  <span>Search</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+ 6511 22 333">
                <img className="w-10" src={call} alt="" />
              </a>
              <div className="flex flex-col gap-1">
                <a href="tel:+ 6511 22 333" className="text-sm text-gray-600">
                  + 6511 22 333
                </a>
                <a
                  href="tel:+ 6511 22 333"
                  className="text-[10px] text-gray-900"
                >
                  Support 24/7 time
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full max-h-[368px] mt-6">
            <BannerCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
