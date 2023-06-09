import React from 'react';
import icon1 from '../../../assets/icons/product-requirements-icons/icon1.png'
import icon2 from '../../../assets/icons/product-requirements-icons/icon2.png'
import icon3 from '../../../assets/icons/product-requirements-icons/icon3.png'
import icon4 from '../../../assets/icons/product-requirements-icons/icon4.png'

const ProductRequirements = () => {
    return (
        <section className='pb-16 pt-32'>
            <h1 className='text-gray-900 text-2xl md:text-3xl text-center font-semibold mb-16'>Can’t find the <strong>PRODUCTS</strong> that meets <br /> your requirement exactly? </h1>

            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto'>
                <div className='border shadow rounded-md p-7 hover:-translate-y-8 duration-700'>
                    <div className='w-16 h-14 bg-[#0029FF1A] rounded-full flex mx-auto justify-center items-center'>
                        <img className='w-10' src={icon1} alt="" />
                    </div>
                    <h1 className='text-gray-900 md:font-bold text-center md:text-xl mt-6'>Trade With <br /> Confidence</h1>
                </div>
                <div className='border shadow rounded-md p-7 hover:-translate-y-8 duration-700'>
                    <div className='w-16 h-14 bg-[#0029FF1A] rounded-full flex mx-auto justify-center items-center'>
                        <img className='w-10' src={icon2} alt="" />
                    </div>
                    <h1 className='text-gray-900 md:font-bold text-center md:text-xl mt-6'>FREE QUOTES <br /> FROM SELLERS</h1>
                </div>
                <div className='border shadow rounded-md p-7 hover:-translate-y-8 duration-700'>
                    <div className='w-16 h-14 bg-[#0029FF1A] rounded-full flex mx-auto justify-center items-center'>
                        <img className='w-10' src={icon3} alt="" />
                    </div>
                    <h1 className='text-gray-900 md:font-bold text-center md:text-xl mt-6'>VERIFIED <br /> CONNECTED BUYERS</h1>
                </div>
                <div className='border shadow rounded-md p-7 hover:-translate-y-8 duration-700'>
                    <div className='w-16 h-14 bg-[#0029FF1A] rounded-full flex mx-auto justify-center items-center'>
                        <img className='w-10' src={icon4} alt="" />
                    </div>
                    <h1 className='text-gray-900 md:font-bold text-center md:text-xl mt-6'>24/7 HELP <br /> CENTER</h1>
                </div>
            </div>


        </section>
    );
};

export default ProductRequirements;