import React from 'react';
import { useForm } from 'react-hook-form';

const FooterInbox = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleInbox = (data) => {
        console.log(data);
    }
    return (
        <section className='w-full h-[427px] mt-24'>
            <div className='py-16 px-2 md:px-6'>
                <h1 className='text-center font-bold text-white text-2xl md:text-4xl lg:px-12'>Trade Alert - Delivering the latest product trends and
                    industry news straight to your inbox.</h1>

                <form onSubmit={handleSubmit(handleInbox)} className='flex items-center mt-8 md:max-w-[700px] mx-auto'>
                    <input {...register('email', { required: 'Email is required' })}
                        className='rounded-l-[50px] w-full h-12 md:h-16 px-3 backdrop-blur-sm bg-white bg-opacity-10 border-y border-l text-white text-opacity-100 placeholder-white focus:outline-none' type="email" name="email" placeholder='Email Address' />
                    <button type="submit"
                        className='rounded-r-[50px] w-32 md:w-44 h-12 md:h-16 flex justify-center items-center bg-white hover:bg-gray-200 duration-150 text-xl text-primary font-bold'>
                        <h1>Submit</h1>
                    </button>
                </form>
            </div>
            <small className='text-sm text-center flex justify-center text-white'>We’ll never share your email address with a third-party.</small>
        </section>
    );
};

export default FooterInbox;