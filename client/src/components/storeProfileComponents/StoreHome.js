import React from 'react';
import ProductCard from '../cards/ProductCard';

const StoreHome = ({ products }) => {

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                products.map((product, i) => <ProductCard key={i} product={product} />)
            }
        </div>
    );
};

export default StoreHome;