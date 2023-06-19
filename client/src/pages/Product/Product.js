import React, { useEffect, useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import { Typography } from "@material-tailwind/react";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/product/show/all`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="mt-16 max-w-primary mx-auto px-4">
      <Typography className="text-xl font-bold mb-2">
        Latest Products
      </Typography>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
