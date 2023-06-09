import React from 'react';

const ProductCapacity = () => {
    return (
        <div className='mb-6'>
            <h1 className='text-2xl text-primary font-semibold text-left mb-4'>Product Capacity</h1>

            <div className='border border-[#0029FF4D] rounded-md'>
                <h1 className='text-left font-semibold text-black text-xl p-3 md:px-6 pt-6'>Factory Information</h1>
                <div className='grid md:grid-cols-2 gap-6 p-3 md:p-6'>
                    <div className=''>
                        <div className='grid grid-cols-5 mb-4'>
                            <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Factory Size:</h1>
                            <h1 className='col-span-3 text-left text-gray-500 text-md'>1,000 square meters</h1>
                        </div>
                        <div className='grid grid-cols-5 mb-4'>
                            <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>No of production  line:</h1>
                            <h1 className='col-span-3 text-left text-gray-500 text-md'>OEM Service offered</h1>
                        </div>
                        <div className='grid grid-cols-5 mb-4'>
                            <h1 className='col-span-2 text-left text-gray-500 text-md font-semibold'>Annual Output Value:</h1>
                            <h1 className='col-span-3 text-left text-gray-500 text-md'>Bellow $1 million</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCapacity;