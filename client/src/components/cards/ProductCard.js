import React from "react";
import { Link } from "react-router-dom";
import { Button, Rating, Typography } from "@material-tailwind/react";
import ProductImageCorousel from "./ProductImageCarousel";

const ProductCard = ({ product }) => {
  return (
    <div
      className="flex flex-col justify-between border border-gray-600/20 bg-white max-h-[500px] overflow-hidden"
      id="box-shadow"
    >
      <div>
        <div className="relative w-full h-24 md:h-48 object-cover overflow-hidden bg-slate-200 bg-gray-100 group">
          <ProductImageCorousel images={product?.images} />
        </div>
        <Link
          to={`/products/${product?._id}`}
          className="grid grid-cols-1 md:gap-2 p-3"
        >
          <h1 className="flex-grow font-bold text-gray-800 md:text-[18px]">
            {product?.title.slice(0, 50)}
          </h1>
          <div className="flex items-center gap-1">
            <Rating className="" value={product?.rating} readonly />
            <Typography color="blue-gray" className="font-medium text-sm mt-1">
              {product?.rating}.0
            </Typography>
          </div>
          <div className="flex flex-col gap-1 text-sm overflow-hidden hidden md:block">
            {product?.type === "Package" ? (
              <>
                {product?.features.map((feature, i) => (
                  <li>{feature}</li>
                ))}
              </>
            ) : (
              <Typography>{product?.description.slice(0, 20)}</Typography>
            )}
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-between p-2">
        <h1 className="text-gray-800 md:text-2xl font-bold text-left">
          ₹ {product?.price}
        </h1>

        <Link to={`/products/${product?._id}`}>
          <Button className="md:py-2 rounded-sm text-[10px] py-1">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
