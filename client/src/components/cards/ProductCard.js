import React, { useContext, useEffect, useState } from 'react';
import love from '../../assets/icons/lovew.png'
import love2 from '../../assets/icons/love.png'
import { Link } from 'react-router-dom';
import { Button, Rating, Typography } from '@material-tailwind/react';
import ProductImageCorousel from './ProductImageCarousel';


const ProductCard = ({ product }) => {
    const [rated, setRated] = useState(5);

    return (
        <div className="flex flex-col justify-between border border-gray-600/20 bg-white max-h-[500px] overflow-hidden" id='box-shadow' >

            <div>
                <div className='relative w-full h-48 overflow-hidden bg-slate-200 bg-gray-100 group'>
                    <ProductImageCorousel images={product?.images} />
                </div>
                <Link to={`/products/${product?._id}`}
                    className="grid grid-cols-1 gap-2 p-3">
                    <h1 className="flex-grow font-bold text-gray-800 md:text-[18px]">{product?.title.slice(0, 50)}</h1>
                    <div className="flex items-center gap-1">
                        <Rating value={product?.rating} readonly />
                        <Typography color="blue-gray" className="font-medium text-sm mt-1">
                            {product?.rating}.0
                        </Typography>
                    </div>
                    <div className="flex flex-col gap-1 text-sm overflow-hidden">
                        {
                            product?.features.map((feature, i) => (
                                <li>{feature}</li>
                            ))
                        }
                    </div>
                </Link>
            </div>

            <div className='flex items-center justify-between p-2'>
                <h1 className='text-gray-800 text-2xl font-bold text-left'>₹ {product?.price}</h1>

                <Link to={`/products/${product?._id}`}>
                    <Button className='py-2 rounded-sm'>View Details</Button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;