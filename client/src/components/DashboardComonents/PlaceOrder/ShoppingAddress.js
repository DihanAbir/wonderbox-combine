import React, { useState } from 'react';
import ChangeAddressModal from '../../Modals/ShoppingCartsModals/ChangeAddressModal';
import DeleteModal from '../../Modals/DeleteModal';

const ShoppingAddress = ({ address, refetch }) => {
    const [openModal, setOpenModal] = useState(false)
    const [show, setShow] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)


    return (
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 border rounded-xl md:p-4 p-2 w-full min-h-[100px] h-fit bg-white'>

            <div className='flex-grow'>
                <div className='flex items-center gap-2' >
                    <h1 className='text-black uppercase font-bold' >Shipping Address</h1>
                    <svg className='text-black w-5 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>

                <div className='flex flex-col mt-1'>
                    <h1 className='text-darkPrimary font-semibold uppercase'>{address?.name}</h1>
                    <p className='text-gray-900'>Phone: {address?.mobileNumber}</p>
                    <p className='text-gray-900'><span className='font-bold'>Delivery Address:</span> {address?.deliveryAddress}</p>
                    <p className=' text-black font-semibold'>
                        {address?.address}, {address?.city}, {address?.landmark} {address?.providence}</p>
                </div>
            </div>
            {/* md:flex-col flex-row justify-end md:justify-center */}
            <div className='flex md:flex-col flex-row justify-end md:justify-center gap-2' >

                <button onClick={() => setDeleteModal(true)}
                    className='w-20 h-8 rounded text-black hover:text-white bg-red-200 hover:bg-red-500 duration-150 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>

                <button onClick={() => setOpenModal(true)}
                    className='w-20 h-8 rounded text-black hover:text-white bg-gray-200 hover:bg-primary duration-150 flex justify-center items-center uppercase text-sm font-bold'>
                    <span>Change</span>
                </button>
            </div>

            {
                openModal && <ChangeAddressModal closeModal={setOpenModal} sucsess={setShow} address={address}
                    refetch={refetch} />
            }

            <DeleteModal open={deleteModal} close={setDeleteModal} endpoint={`address/${address?._id}`} refetch={refetch} />

        </div>
    );
};

export default ShoppingAddress;