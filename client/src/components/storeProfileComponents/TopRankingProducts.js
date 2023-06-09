import React, { useEffect, useState } from 'react';
import ProductCard from '../cards/ProductCard';

const TopRankingProducts = ({ storeId }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/api/product/top-ranking-products/${storeId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                products.map((product, i) => <ProductCard key={i} product={product} />)
            }
        </div>
    );
};
export default TopRankingProducts;