import React, { useContext, useState } from 'react';

// import search from "../../../assets/icons/search.png"
// import avater from "../../../assets/icons/avater.png"
import { Link } from 'react-router-dom';
import { Avatar, Popover, PopoverContent, PopoverHandler } from '@material-tailwind/react';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenDashboardDrawer } from '../../Slices/controllerSlice';
import Notifications from '../DashboardComonents/Notifications';
const DashboardNavber = () => {
    const { user } = useContext(AuthContext)
    const { openDashboardDrawer } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()

    return (
        <nav className='w-full' >
            <div className='flex items-center gap-4 w-full bg-white h-16 shadow-sm px-2 lg:px-8'>

                <button onClick={() => dispatch(setOpenDashboardDrawer(!openDashboardDrawer))}
                    className="w-10 lg:hidden text-primary hover:text-darkPrimary duration-300 cursor-pointer">
                    {
                        openDashboardDrawer ? <span>
                            <svg className='w-8 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
                        </span>
                            :
                            <span>
                                <svg className='w-6 ml-2 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                            </span>
                    }
                </button>

                <div className='flex-grow flex justify-end items-center gap-4 lg:gap-8' >
                    {/* <Link to="/dashboard/documentation" className='hidden lg:block'>
                        <p className='text-secondary hover:text-primary'>Documentation</p>
                    </Link> */}


                    <Popover className="cursor-pointer" >
                        <PopoverHandler>
                            <button className='flex items-center justify-center hover:text-primary' >
                                <svg className='hover:text-primary' width="26" height="30" viewBox="0 0 27 31" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.626 27.4829C11.3598 28.3003 12.3019 28.7494 13.2794 28.7494H13.2808C14.2626 28.7494 15.2089 28.3003 15.9442 27.4814C16.338 27.0465 17.0095 27.0111 17.4444 27.4035C17.8807 27.7959 17.9162 28.4688 17.5237 28.9038C16.3791 30.1745 14.8732 30.8744 13.2808 30.8744H13.278C11.6899 30.8729 10.1868 30.1731 9.0464 28.9023C8.65399 28.4674 8.6894 27.7945 9.12574 27.4035C9.56207 27.0097 10.2336 27.0451 10.626 27.4829ZM13.35 0.416016C19.647 0.416016 23.8772 5.32052 23.8772 9.9006C23.8772 12.2565 24.4765 13.2553 25.1125 14.3149C25.7415 15.3604 26.4541 16.5476 26.4541 18.7916C25.9597 24.5248 19.9743 24.9923 13.35 24.9923C6.72562 24.9923 0.738788 24.5249 0.250019 18.8823C0.245788 16.5476 0.958371 15.3604 1.58737 14.3149L1.80943 13.9412C2.35616 13.0015 2.8227 11.9794 2.8227 9.9006C2.8227 5.32052 7.05287 0.416016 13.35 0.416016ZM13.35 2.54102C8.3987 2.54102 4.9477 6.41985 4.9477 9.9006C4.9477 12.8458 4.13029 14.2073 3.40779 15.4086C2.82837 16.3734 2.37079 17.1355 2.37079 18.7916C2.60737 21.4634 4.37112 22.8673 13.35 22.8673C22.2792 22.8673 24.0982 21.4011 24.3334 18.6995C24.3291 17.1355 23.8715 16.3734 23.2921 15.4086C22.5696 14.2073 21.7522 12.8458 21.7522 9.9006C21.7522 6.41985 18.3012 2.54102 13.35 2.54102Z" fill="currentColor" />
                                </svg>
                            </button>
                        </PopoverHandler>
                        <PopoverContent className='mr-10 w-80'>
                            <Notifications />
                        </PopoverContent>
                    </Popover>




                    <Popover className="cursor-pointer" >
                        <PopoverHandler>
                            <Avatar className='cursor-pointer' src={user?.image ? user?.image : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}></Avatar>
                        </PopoverHandler>
                        <PopoverContent className='flex flex-col gap-4 w-fit h-32 lg:hidden'>
                            <div className='flex flex-col justify-center items-center px-3'>
                                <h1 className='font-bold text-black'>Md. Robiul Alam</h1>
                                <p className='text-secondary'>robiulalam@gmail.com</p>
                            </div>
                            <Link to="/dashboard/documentation" className=''>
                                <p className='text-secondary hover:text-primary'>Documentation</p>
                            </Link>
                        </PopoverContent>
                    </Popover>

                </div>

            </div>
        </nav>
    );
};

export default DashboardNavber;