import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../ContextAPI/AuthProvider';

const ChangeAddressModal = ({ closeModal, sucsess, address, refetch }) => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [deliveryAddress, setDeliveryAddress] = useState(address?.deliveryAddress)

    const handleChangeAddress = (data) => {
        if (!deliveryAddress) {
            return;
        }
        else {
            const newData = {
                name: data.name,
                address: data.address,
                mobileNumber: data.mobileNumber,
                providence: data.providence,
                area: data.area,
                landmark: data.landmark,
                city: data.city,
                deliveryAddress: deliveryAddress
            }

            // console.log(newData);
            fetch(`http://localhost:5000/api/address/${address?._id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.update) {
                        sucsess(true)
                        refetch()
                        closeModal(false)
                    }
                    // console.log(data);
                })

        }

    }

    let modalRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!modalRef.current.contains(e.target)) {
                closeModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <div className='z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-primary bg-opacity-25 w-full h-full'>
            <div ref={modalRef} className='w-full md:max-w-[1000px] h-fit bg-white shadow-xl p-5 m-5 zoom-in'>
                <div>

                    <h1 className='text-center font-bold text-gray-600 text-xl'>Change Delivery Address</h1>

                    <form onSubmit={handleSubmit(handleChangeAddress)}
                        className='px-6 md:px-12 mt-4'>
                        <div className='grid md:grid-cols-2 gap-6 '>
                            <div className=''>

                                <div className='flex flex-col items-start gap-2 mb-6'>
                                    <label className='text-left font-bold text-gray-900' htmlFor="name" id='name'>Full Name <span className='text-primary'>*</span></label>
                                    <input {...register('name', { required: 'Full Name is required' })}
                                        className='w-full h-10 px-3 border rounded focus:outline-primary'
                                        type="text" name="name" defaultValue={address?.name} />
                                    {errors.name && <p className='text-red-600 text-sm'>{errors.name.message}</p>}
                                </div>

                                <div className='flex flex-col items-start gap-2 mb-6'>
                                    <label className='text-left font-bold text-gray-900' htmlFor="mobileNumber" id='phone'>Mobile Number <span className='text-primary'>*</span></label>
                                    <input {...register('mobileNumber', { required: 'Mobile Number is required' })}
                                        className='w-full h-10 px-3 border rounded focus:outline-primary'
                                        type="text" name="mobileNumber" defaultValue={address?.mobileNumber} />
                                    {errors.mobileNumber && <p className='text-red-600 text-sm'>{errors.mobileNumber.message}</p>}
                                </div>

                                <div className='flex flex-col items-start gap-2 mb-6'>
                                    <label className='text-left font-bold text-gray-900' htmlFor="providence" id='providence'>Providence <span className='text-primary'>*</span></label>
                                    <input {...register('providence', { required: 'Providence is required' })}
                                        className='w-full h-10 px-3 border rounded focus:outline-primary'
                                        type="text" name="providence" defaultValue={address?.providence} />
                                    {errors.providence && <p className='text-red-600 text-sm'>{errors.providence.message}</p>}
                                </div>

                                <div className='flex flex-col items-start gap-2 mb-6'>
                                    <label className='text-left font-bold text-gray-900' htmlFor="providence" id='providence'>Area <span className='text-primary'>*</span></label>
                                    <input {...register('area', { required: 'Area is required' })}
                                        className='w-full h-10 px-3 border rounded focus:outline-primary'
                                        type="text" name="area" defaultValue={address?.area} />
                                    {errors.area && <p className='text-red-600 text-sm'>{errors.area.message}</p>}
                                </div>
                            </div>

                            <div>
                                <div className='flex flex-col items-start gap-2 mb-6'>
                                    <label className='text-left font-bold text-gray-900' htmlFor="address" id='providence'>Address <span className='text-primary'>*</span></label>
                                    <input {...register('address', { required: 'Address is required' })}
                                        className='w-full h-10 px-3 border rounded focus:outline-primary'
                                        type="text" name="address" defaultValue={address?.address} />
                                    {errors.address && <p className='text-red-600 text-sm'>{errors.address.message}</p>}
                                </div>

                                <div className='flex flex-col items-start gap-2 mb-6'>
                                    <label className='text-left font-bold text-gray-900' htmlFor="landmark" id='providence'>Landmark</label>
                                    <input {...register('landmark')}
                                        className='w-full h-10 px-3 border rounded focus:outline-primary'
                                        type="text" name="landmark" defaultValue={address?.landmark} />
                                    {errors.landmark && <p className='text-red-600 text-sm'>{errors.landmark.message}</p>}
                                </div>

                                <div className='flex flex-col items-start gap-2 mb-6'>
                                    <label className='text-left font-bold text-gray-900' htmlFor="city" id='city'>City <span className='text-primary'>*</span></label>
                                    <input {...register('city', { required: 'City is required' })}
                                        className='w-full h-10 px-3 border rounded focus:outline-primary'
                                        type="text" name="city" defaultValue={address?.city} />
                                    {errors.city && <p className='text-red-600 text-sm'>{errors.city.message}</p>}
                                </div>


                                <div className='flex flex-col items-start gap-2 mb-6'>
                                    <h1 className='text-left font-bold text-gray-900' >Select a label for effective delivery <span className='text-primary'>*</span></h1>

                                    <div className='grid grid-cols-2 gap-4 w-full'>
                                        <input onClick={() => setDeliveryAddress('home')}
                                            {...register('deliveryAddressHome', { required: 'Delivery is required' })}
                                            className={`w-full text-center h-10 cursor-pointer border rounded focus:outline-none 
                                            ${deliveryAddress === 'home' ? 'bg-primary text-white' : 'bg-white text-black'}`}
                                            type='text' value='Home' name='deliveryAddressHome' readOnly />

                                        <input onClick={() => setDeliveryAddress('office')}
                                            {...register('deliveryAddressOffice', { required: 'Delivery is required' })}
                                            className={`w-full text-center h-10 cursor-pointer border rounded focus:outline-none 
                                            ${deliveryAddress === 'office' ? 'bg-primary text-white' : 'bg-white text-black'}`}
                                            type='text' value='office' name='deliveryAddressOffice' readOnly />
                                    </div>

                                    {errors.deliveryAddressHome || errors.deliveryAddressOffice && <p className='text-red-600 text-sm'>Please Select Home or Office</p>}
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            {
                                deliveryAddress ? <button className='w-56 h-10 rounded-3xl flex justify-center items-center bg-primary hover:bg-darkPrimary duration-200' type="submit">
                                    <span className='text-white'>CHANGE</span>
                                </button>
                                    :
                                    <button disabled className='w-56 cursor-not-allowed h-10 rounded-3xl flex justify-center items-center bg-gray-600' type="submit">
                                        <span className='text-white'>CHANGE</span>
                                    </button>
                            }
                            <button onClick={() => closeModal(false)} className='md:hidden w-56 h-10 rounded-3xl flex justify-center items-center bg-rose-600' type="submit">
                                <span className='text-white'>Cancel</span>
                            </button>
                        </div>
                    </form>

                </div>
            </div >
        </div >
    );
};

export default ChangeAddressModal;