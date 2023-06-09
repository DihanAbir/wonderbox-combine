import React, { useEffect, useState } from 'react';
import StoreCard from '../../cards/StoreCards/StoreCard';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';

const VerifiedStores = () => {
    const [stores, setStores] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/api/store/getVerifiedStores`)
            .then(res => res.json())
            .then(data => {
                setStores(data);
            })
    }, [])
    return (
        <div className='mt-12'>
            <div className='mx-auto max-w-[800px]'>
                <Typography className="text-3xl text-center font-bold">Verified Suppliers</Typography>
                <Typography className="font-normal text-center text-gray-600">Find reliable, verified suppliers for all your business requirements. Streamline your sourcing process with our platform and access a wide range of high-quality products and services. Stay ahead in the competitive market with our trusted network of suppliers committed to excellence.</Typography>
            </div>

            <div className='mt-4'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
                    {
                        stores && stores?.map((store, i) => <StoreCard key={i} store={store} />)
                    }
                </div>
                <Link to='/stores' className='flex justify-center items-center mt-20 mx-auto'>
                    <Button className='text-white font-semibold py-2 bg-primary hover:bg-darkPrimary duration-150 h-14 md:w-60 rounded-sm'>View More</Button>
                </Link>
            </div>
        </div>
    );
};

export default VerifiedStores;