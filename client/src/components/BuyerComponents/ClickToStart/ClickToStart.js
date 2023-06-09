import Link from 'next/link';
import React from 'react';

const ClickToStart = () => {
    return (
        <section className='mt-32'>
            <div className='flex justify-center items-center h-72 w-full p-6'>
                <div>
                    <h1 className='text-center font-bold text-white text-2xl mb-4'>Hello Arpita!  I'm here to assist you.</h1>
                    <Link href='/answare-to-next' className='flex justify-center items-center w-60 h-14 border border-white mx-auto rounded-md bg-primary'>
                        <button className='text-white text-sm uppercase'>Click here to start</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ClickToStart;