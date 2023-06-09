import Link from 'next/link';
import React from 'react';

const UpgradeNow = () => {
    return (
        <section className='mt-8'>
            <div className='bg-[#152caf]'>
                <div className='flex justify-center items-center h-72 w-full p-6'>
                    <div>
                        <h1 className='text-center font-bold text-white text-2xl mb-4'>Sell to millions of business buyers</h1>
                        <p className='text-gray-200 text-sm text-center mb-4'>Upgrade to Gold membership to enjoy more facilities and packages</p>
                        <div className='flex justify-center items-center w-36 h-10 border border-white mx-auto rounded-md bg-primary'>
                            <button className='text-white text-sm uppercase'>upgrade now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 pb-6'>
                <div className='bg-[#F4F6FF] p-5 rounded-md text-center md:text-left'>
                    <h1 className='text-black font-bold text-xl'>Trade Assurance</h1>
                    <p className='text-gray-500 mt-2'>Select the date you intend to book (<Link href='/' className='text-primary font-semibold'>Click Here</Link>) and the rates and availability of the tent will appear</p>
                </div>
                <div className='bg-[#F4F6FF] p-5 rounded-md text-center md:text-left'>
                    <h1 className='text-black font-bold text-xl'>Payment</h1>
                    <p className='text-gray-500 mt-2'>Click on the respective tent type to view the packages included (e.g Couple Deluxe /Couple Suite / Family Suite / Jumbo Tent)</p>
                </div>
                <div className='bg-[#F4F6FF] p-5 rounded-md text-center md:text-left'>
                    <h1 className='text-black font-bold text-xl'>Inspection Solution</h1>
                    <p className='text-gray-500 mt-2'>Scroll down to 'Add On' section to view the extra packages available.</p>
                </div>
                <div className='bg-[#F4F6FF] p-5 rounded-md text-center md:text-left'>
                    <h1 className='text-black font-bold text-xl'>Ocean and Air shipping</h1>
                    <p className='text-gray-500 mt-2'>Click 'Book Now' when you are ready to book</p>
                </div>
            </div>
        </section>
    );
};

export default UpgradeNow;