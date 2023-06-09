import React, { useEffect } from 'react';
import LatestSignelProduct from './LatestSignelProduct';


import { prodcuts } from '../../../utils/products';
import { Link } from 'react-router-dom';

const LatestProducts = () => {

    return (
        <div className='rounded-3xl md:p-4 mt-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-gray-900 text-2xl text-left font-bold'>Latest Products</h1>
                <Link to="/" className='text-primary hover:text-darkPrimary duration-150 font-bold'>See All</Link>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>

                {
                    prodcuts?.map((product, i) => <LatestSignelProduct key={i} product={product} />)
                }
            </div>
        </div>
    );
};

export default LatestProducts;