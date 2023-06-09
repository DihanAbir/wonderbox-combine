import React from 'react';
import { Link } from 'react-router-dom';

const StoreCard = ({ store }) => {
    return (

        <Link to={`/stores/${store?.username}`}
            className='cursor-pointer w-fit h-fit flex justify-center items-center mx-auto rounded-full hover:border-primary duration-150 relative overflow-hidden'>
            <img draggable="false" className='w-60 h-60 rounded-full border-[8px] md:border-[14px] border-blue-gray-50' src={store?.logo} alt="" />
            <div className='absolute w-full h-8 md:h-10 bg-white flex justify-center items-center object-cover'>
                <span className='text-black font-semibold text-sm'>{store?.name}</span>
            </div>
        </Link>
    );
};

export default StoreCard;