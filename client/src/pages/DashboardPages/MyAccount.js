import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { Button } from '@material-tailwind/react';

const MyAccount = () => {
    const { user, userRefetch } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [isEditable, setIsEditable] = useState(false);

    // handle update user data
    const handleUpdate = (data) => {
        fetch(`http://localhost:5000/api/user/${user?._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.update) {
                    userRefetch()
                    setIsEditable(false)
                }
                setIsEditable(false)
            })
    }


    return (
        <section className='p-4 bg-white'>
            <h1 className='text-primary font-bold text-left text-xl uppercase' >My Details</h1>

            <div className='mt-6'>
                <h1 className='text-black font-semibold text-left'>Personal Information</h1>
                <hr className='border-gray-400' />

                <form onSubmit={handleSubmit(handleUpdate)}>

                    <div className="flex items-center gap-2 my-6 md:hidden">
                        <div className='w-16 h-16 rounded-full'>
                            <img className="object-cover w-16 h-16 rounded-full"
                                src={user?.image ? user?.image : "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"} alt="avatar" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h4 className="font-medium text-gray-900 uppercase">{user?.name}</h4>
                            <p className="text-sm font-medium text-gray-600">{user?.email}</p>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-4 mt-6'>

                        <div className='flex flex-col items-start'>
                            <span className='text-left font-bold text-gray-900 uppercase text-sm' >Your Name</span>
                            <input {...register('name', { required: true })}
                                className={`w-full h-10 px-3 rounded focus:outline-none border focus:border-primary 
                                ${isEditable ? "bg-white" : "bg-slate-50"}
                                ${errors.name && "border-red-500"}`}
                                type="text"
                                name="name"
                                defaultValue={user?.name}
                                disabled={!isEditable}
                                readOnly={!isEditable} />
                        </div>

                        <div className='flex flex-col items-start'>
                            <span className='text-left font-bold text-gray-900 uppercase text-sm' >Phone Number</span>
                            <input {...register('phone', { required: true })}
                                className={`w-full h-10 px-3 rounded focus:outline-none border focus:border-primary 
                                ${isEditable ? "bg-white" : "bg-slate-50"}
                                ${errors.phone && "border-red-500"}`}
                                type="text"
                                name="phone"
                                defaultValue={user?.phone}
                                disabled={!isEditable}
                                readOnly={!isEditable} />
                        </div>

                        <div className='flex flex-col items-start'>
                            <span className='text-left font-bold text-gray-900 uppercase text-sm' >Email address</span>
                            <input className={`w-full h-10 px-3 rounded focus:outline-none border focus:border-primary bg-slate-50`}
                                type="email"
                                name="email"
                                value={user?.email}
                                disabled />
                        </div>

                        <div className='flex flex-col items-start'>
                            <span className='text-left font-bold text-gray-900 uppercase text-sm' >Password</span>
                            <input className={`w-full h-10 px-3 rounded focus:outline-none border focus:border-primary bg-slate-50`}
                                type="password"
                                name="password"
                                value="******"
                                disabled />
                        </div>

                        <div className='flex flex-col items-start'>
                            <span className='text-left font-bold text-gray-900 uppercase text-sm' >Country/Region</span>
                            <input {...register('country', { required: true })}
                                className={`w-full h-10 px-3 rounded focus:outline-none border focus:border-primary 
                                ${isEditable ? "bg-white" : "bg-slate-50"}
                                ${errors.country && "border-red-500"}`}
                                type="text"
                                name="country"
                                defaultValue={user?.country}
                                disabled={!isEditable}
                                readOnly={!isEditable} />
                        </div>

                        {/* <div className='flex flex-col items-start'>
                            <span className='text-left font-bold text-gray-900 uppercase text-sm' >Company</span>
                            <input {...register('company', { required: true })}
                                className={`w-full h-10 px-3 rounded focus:outline-none border focus:border-primary 
                                ${isEditable ? "bg-white" : "bg-slate-50"}
                                ${errors.company && "border-red-500"}`}
                                type="text"
                                name="company"
                                defaultValue={company}
                                disabled={!isEditable}
                                readOnly={!isEditable} />
                        </div> */}

                    </div>

                    <div className="flex justify-end gap-6 mt-6">

                        {
                            isEditable && <button type='submit'
                                className="w-24 h-10 flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-semibold px-2 rounded cursor-pointer"
                            >
                                SAVE
                            </button>
                        }

                        {!isEditable && (
                            <Button
                                onClick={() => setIsEditable(true)}
                                className="w-24 h-10 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-2 rounded-sm hover:shadow-none cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                <span>EDIT</span>
                            </Button>
                        )}
                        {isEditable && (
                            <Button
                                onClick={() => setIsEditable(false)}
                                className="w-24 h-10 flex items-center justify-center bg-pink-500 hover:bg-rose-700 text-white font-semibold px-2 rounded-sm hover:shadow-none cursor-pointer"
                            >
                                CANCEL
                            </Button>
                        )}
                    </div>

                </form>

            </div>
        </section>
    );
};
export default MyAccount;