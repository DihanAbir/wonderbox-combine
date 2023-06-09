import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/cards/ProductCard';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/api/product/show/all`)
            .then(res => res.json())
            .then(data => {
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

export default Product;