import React from "react";
import { Typography } from "@material-tailwind/react";
import ProductCard from "../../components/cards/ProductCard";
import { useLoaderData, useParams } from "react-router-dom";

const ProductList = () => {
  const products = useLoaderData();
  const { parent, children } = useParams();

  const title =
    (parent && `${products[0]?.parent}`) ||
    (children && `${products[0]?.parent}/${products[0]?.children}`);

  return (
    <div className="max-w-primary mx-auto px-4 mt-4 min-h-screen">
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <Typography className="text-xl font-bold mb-2">{title}</Typography>
        <div className="flex items-center md:w-[600px]">
          <input
            className="flex-grow md:flex-grow-0 h-10 w-full focus:outline-none border focus:border-primary px-2"
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.length > 0 &&
          products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        {products.length < 1 && (
          <div className="flex justify-center items-center w-full h-full">
            <img src="" alt="" />
            No Products
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductList;
