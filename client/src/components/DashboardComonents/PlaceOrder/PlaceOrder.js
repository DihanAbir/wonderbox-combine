import React, { useContext, useState } from 'react';
import delet from '../../../assets/icons/shopping-cart-icons/delete.png'
import voucher from '../../../assets/icons/shopping-cart-icons/voucher.png'
import rightArrow from '../../../assets/icons/shopping-cart-icons/right-arrow.png'
import { AuthContext } from '@/ContextAPI/AuthProvider';
import ShoppingAddress from './ShoppingAddress';

const PlaceOrder = ({ address, refetch }) => {
    const { user, userRefetch } = useContext(AuthContext)
    const [openModal, setOpenModal] = useState(false)
    const [allAddress, setAllAddress] = useState(address)
    const [show, setShow] = useState(false)
    const closeModal = () => {
        setOpenModal(false)
    }

    // console.log(allAddress);

    // console.log(openModal);
    return (
        <section className='min-h-screen mt-16 relative'>

            <div className={`${openModal && 'opacity-50'}`}>

                <button className='mb-2 text-primary' onClick={() => refetch()} >Shopping Address</button>
                <button onClick={() => setOpenModal(true)}
                    className='w-full h-14 flex justify-center items-center rounded-md text-black cursor-pointer my-4 bg-[#0029FF14] hover:bg-primary hover:text-white duration-300 '>
                    <h1 className=' font-semibold text-xl'>+ Add New Address</h1>
                </button>


                <div className='w-full grid lg:grid-cols-3 gap-5'>

                    <div className='lg:col-span-2 h-fit grid grid-cols-1 w-full gap-5'>


                        <div className='grid grid-cols-1 gap-4 w-full' >
                            {
                                allAddress && allAddress.map((address, i) => <ShoppingAddress key={i} address={address} refetch={refetch} />)
                            }
                        </div>

                        <div className='h-fit border rounded-md p-4'>
                            <div className='w-full h-fit flex justify-between gap-5 items-center'>
                                <div className='flex justify-between items-center gap-4'>
                                    <div>
                                        <img className='w-20 h-16' src='https://i.postimg.cc/6QzF9hp7/img4.png' alt="" />
                                    </div>
                                    <div className='text-left'>
                                        <h1 className='text-black font-semibold text-xl text-left'>Wholesale men’s casual shoes</h1>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-gray-500'>Brand: No,</p>
                                            <p className='text-gray-500'>Color: Black</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p className='text-gray-500'>Qty: 1</p>
                                    <img className='w-4' src={delet} alt="" />
                                </div>
                                <h1 className='text-xl font-bold text-primary'>$10.00</h1>
                            </div>
                            <hr className='my-2' />
                            <div className='grid md:grid-cols-3 gap-4'>
                                <div className='md:col-span-2 w-full flex items-center justify-between gap-4'>
                                    <button className='h-10 w-full border border-[#0029FFA6] rounded-md flex justify-center items-center'>
                                        <span className='text-black'>Received by Feb 22 - 1 Mar</span>
                                    </button>

                                    <button className='h-10 w-full border border-[#0029FFA6] rounded-md flex justify-between items-center px-2'>
                                        <img className='w-4' src={voucher} alt="" />
                                        <span className='text-black'>Get Voucher</span>
                                        <img className='w-3' src={rightArrow} alt="" />
                                    </button>
                                </div>
                                <h1 className='md:col-span-1 text-right'>
                                    <span className='text-gray-500'> 1 Item(s). Subtotal </span>
                                    <span className='text-xl font-bold text-primary'>$10.00</span>
                                </h1>
                            </div>
                        </div>
                        <div className='border rounded-md p-4'>
                            <div className='w-full h-fit flex justify-between gap-5 items-center'>
                                <div className='flex justify-between items-center gap-4'>
                                    <div>
                                        <img className='w-20 h-16' src='https://i.postimg.cc/6QzF9hp7/img4.png' alt="" />
                                    </div>
                                    <div className='text-left'>
                                        <h1 className='text-black font-semibold text-xl text-left'>Wholesale men’s casual shoes</h1>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-gray-500'>Brand: No,</p>
                                            <p className='text-gray-500'>Color: Black</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p className='text-gray-500'>Qty: 1</p>
                                    <img className='w-4' src={delet} alt="" />
                                </div>
                                <h1 className='text-xl font-bold text-primary'>$10.00</h1>
                            </div>
                            <hr className='my-2' />
                            <div className='grid md:grid-cols-3 gap-4'>
                                <div className='md:col-span-2 w-full flex items-center justify-between gap-4'>
                                    <button className='h-10 w-full border border-[#0029FFA6] rounded-md flex justify-center items-center'>
                                        <span className='text-black'>Received by Feb 22 - 1 Mar</span>
                                    </button>

                                    <button className='h-10 w-full border border-[#0029FFA6] rounded-md flex justify-between items-center px-2'>
                                        <img className='w-4' src={voucher} alt="" />
                                        <span className='text-black'>Get Voucher</span>
                                        <img className='w-3' src={rightArrow} alt="" />
                                    </button>
                                </div>
                                <h1 className='md:col-span-1 text-right'>
                                    <span className='text-gray-500'> 1 Item(s). Subtotal </span>
                                    <span className='text-xl font-bold text-primary'>$10.00</span>
                                </h1>
                            </div>
                        </div>
                    </div>


                    <div className='w-full h-fit lg:col-span-1 border rounded-md text-left'>
                        <h1 className='text-black font-semibold text-xl p-4'>Discount and Payment</h1>

                        <div className='flex justify-between items-center mt-3 p-4'>
                            <p className='text-gray-500 text-xl'>Voucher</p>
                            <p className='text-xl font-bold text-black'>No Applicable Voucher</p>
                        </div>

                        <hr className='' />
                        <div className='p-4'>
                            <h1 className='text-left text-black font-semibold text-xl'>Order Summary</h1>
                            <div className='flex justify-between items-center mt-3'>
                                <p className='text-gray-500 md:text-xl'>Items Total</p>
                                <p className='text-xl font-bold text-black'>$20.00</p>
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <p className='text-gray-500 md:text-xl'>Discount</p>
                                <p className='text-xl font-bold text-black'>$0.00</p>
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <p className='text-gray-500 md:text-xl'>Delivery Fee</p>
                                <p className='text-xl font-bold text-black'>$1.00</p>
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <p className='text-gray-500 md:text-xl'>Total Payment</p>
                                <p className='text-xl font-bold text-black'>$21.00</p>
                            </div>
                            <div className='w-full mt-4'>
                                <button className='flex justify-center items-center w-full h-10 rounded-[50px] bg-primary hover:bg-darkPrimary active:bg-rose-600'>
                                    <span className='text-white uppercase'>Place order</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                {
                    openModal && <AddDeliveryAddressModal closeModal={closeModal} sucsess={setShow} />
                }

            </div>
        </section>
    );
};

export default PlaceOrder;