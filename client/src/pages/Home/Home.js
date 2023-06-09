import React from 'react';
import FooterInbox from '../../components/HomeComponents/FooterInbox/FooterInbox';
import ProductRequirements from '../../components/HomeComponents/ProductRequirements/ProductRequirements';
import Product from '../Product/Product';
import VerifiedStores from '../../components/HomeComponents/VerifiedStores/VerifiedStores';

const Home = () => {
    return (
        <section className=''>
            <div className='bg-white mt-4'>
                <img className='w-full h-44' src="https://cse-lidlentzheim.com/img/cms/wonderbox%20baniere.jpg" alt="" />
                <div className='max-w-primary mx-auto px-4 pt-8'>
                    <Product />
                    <VerifiedStores />
                    <ProductRequirements />
                </div>
            </div>

            <div className='bg-[#3432FF]'>
                <div className='max-w-primary mx-auto px-4'>
                    <FooterInbox />
                </div>
            </div>
        </section>
    );
};

export default Home;