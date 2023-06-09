import React from 'react';
import right from '../../../assets/icons/buyer-welcome-page-icons/right.png'
import blueRight from '../../../assets/icons/buyer-welcome-page-icons/blue-right.png'
import grayRight from '../../../assets/icons/buyer-welcome-page-icons/gray-right.png'
import Image from 'next/image';
import Link from 'next/link';

const RegisterComplete = () => {
    return (
        <section className='bg-[#F8FAFF] mt-8'>
            <div className='grid md:grid-cols-3 h-fit w-full border-t-8 md:border-t-0 rounded-t-xl md:border-l-8 border-[#1F4B9D] rounded-l-xl p-6'>
                <div className='md:col-span-2 border-b md:border-b-0 md:border-r border-[#1F4B9D]'>
                    <div className='flex items-start gap-2 pb-4'>
                        <div className='flex flex-col justify-start'>
                            <Image className='w-8' src={right} alt="" />
                        </div>
                        <div className='flex flex-col justify-start gap-5'>
                            <h1 className='text-left text-black font-semibold text-2xl'>Congratulation your registration is complete.</h1>
                            <div className='flex items-center gap-4 mt-4'>
                                <h1 className='text-gray-600 font-semibold text-xl'>Sign in email :</h1>
                                <h1 className='text-gray-400 text-xl'>D*******@Gmail.com</h1>
                            </div>
                            <h1 className='text-gray-500 text-xl text-left'>Tell us about your sourcing to personalize your account. </h1>
                            <Link href='/personalize' className='flex justify-center items-center w-40 h-12 rounded-md bg-primary'>
                                <button className='text-white text-xl font-semibold'>Personalize</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-1 flex flex-col justify-start gap-4 p-6'>
                    <div className='flex items-center gap-2'>
                        <Image className='w-6' src={blueRight} alt="" />
                        <h1 className='text-gray-900 text-xl'>Registration</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image className='w-6' src={grayRight} alt="" />
                        <h1 className='text-gray-600 text-xl'>Personalized Profile</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterComplete;