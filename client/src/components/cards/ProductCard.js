import React from "react";
import { Link } from "react-router-dom";
import { Button, Chip, Rating, Typography } from "@material-tailwind/react";
import ProductImageCorousel from "./ProductImageCarousel";
import ranking from "../../assets/icons/ranking.png";

const ProductCard = ({ product, status }) => {
  return (
    <div
      className="flex flex-col justify-between border border-gray-600/20 bg-white h-[506px] mx-2 hover:shadow-2xl"
      id="box-shadow"
    >
      <div>
        <div className="relative w-full h-[280px] object-cover overflow-hidden group">
          {status && status === "ranking" && (
            <img className="absolute top-3 right-3 w-10" src={ranking} alt="" />
          )}
          <ProductImageCorousel images={product?.images} />
        </div>
        <div className="grid grid-cols-1 md:gap-2 p-3 cursor-pointer">
          <h1 className="flex-grow font-bold text-gray-800 md:text-[18px]">
            {product?.title?.slice(0, 50)}
          </h1>
          <div className="flex items-center gap-1">
            <Rating className="" value={product?.rating} readonly />
            <Typography color="blue-gray" className="font-medium text-sm mt-1">
              {product?.rating}.0
            </Typography>
          </div>
          <div className="flex flex-col gap-1 text-sm overflow-hidden hidden md:block">
            <spam>{product?.smallDescription?.slice(0, 100)}</spam>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <h1 className="text-gray-800 md:text-2xl font-bold text-left">
            ₹ {product?.price}
          </h1>
          {product?.discount > 0 && (
            <>
              <Chip
                variant="ghost"
                color="red"
                size="sm"
                value={`SAVE ${product?.discount}%`}
              />
              <span className="text-sm line-through text-gray-500">
                ₹{product?.originalPrice}
              </span>
            </>
          )}
        </div>

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
