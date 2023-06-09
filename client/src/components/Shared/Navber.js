import { useContext, useEffect, useRef, useState } from 'react';
import love from '../../assets/icons/love.png'
import cart from '../../assets/icons/cart.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import ProfileDrawer from '../drawers/ProfileDrawer';
import { useDispatch } from 'react-redux';
import { setOpenProfileDrawer } from '../../Slices/controllerSlice';
const Navber = () => {
    const { user } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    let navberRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!navberRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <nav ref={navberRef} className='bg-white py-4 uppercase border-b'>
            <div className='relative cursor-pointer flex justify-between items-center gap-6 lg:gap-10 h-14 px-4 max-w-primary mx-auto'>
                <div className='flex-grow uppercase font-bold'>
                    <Link to='/'>Wonderbox</Link>
                </div>
                <div className='hidden lg:block'>
                    <Link to='/home' className='text-black hover:text-primary duration-100 font-semibold'>Home</Link>
                </div>
                {
                    user?._id && <div className='hidden lg:block'>
                        <Link to='/dashboard' className='text-black hover:text-primary duration-100 font-semibold'>Dashboard</Link>
                    </div>
                }
                <div className='hidden lg:block'>
                    <Link to='/about-us' className='text-black hover:text-primary duration-100 font-semibold'>About Us</Link>
                </div>
                <div className='hidden lg:block'>
                    <Link to='/contact' className='text-black hover:text-primary duration-100 font-semibold'>Contact</Link>
                </div>
                <div className='hidden lg:block'>
                    <Link to='/faq' className='text-black hover:text-primary duration-100 font-semibold'>FAQ</Link>
                </div>
                <div className='flex justify-between items-center gap-6'>
                    <div  >
                        <div className='relative'>
                            <img className='w-5' src={love} alt="navberImage" />
                            <div className='absolute -right-2 -top-3 h-4 w-4 bg-rose-600 rounded-full flex justify-center items-center'>
                                <span className='text-white p-1'>
                                    0
                                </span>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className='relative'>
                            <img className='w-5' src={cart} alt="navberImage" />
                            <div className='absolute -right-2 -top-3 h-4 w-4 bg-rose-600 rounded-full flex justify-center items-center'>
                                <span className='text-white p-1'>
                                    0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    user?._id ? <div onClick={() => dispatch(setOpenProfileDrawer(true))} className='flex items-center gap-2'>
                        <h1 className='font-bold text-blue-900 hidden sm:block'>{user?.name?.slice(0, 12)}</h1>
                        <div
                            className='relative flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white font-semibold'>
                            {
                                user?.image ? <img className='w-10 h-10 object-cover rounded-full' src={user?.image} alt="" />
                                    :
                                    <span>{user?.name?.slice(0, 1)} </span>
                            }
                        </div>
                    </div>
                        :
                        <div className='hidden lg:block lg:flex justify-between items-center gap-6'>
                            <Link to='/login' className='w-36 h-10 bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center rounded'>
                                <h1 className='text-white font-semibold'>LOG IN</h1>
                            </Link>
                            <Link to='/register' className='w-36 h-10 border border-primary hover:bg-gray-300 duration-300 flex justify-center items-center rounded'>
                                <h1 className='text-primary font-semibold'>REGISTER</h1>
                            </Link>
                        </div>
                }


                <div onClick={() => setOpen(!open)} className="w-10 lg:hidden text-blue-600">
                    {
                        open ? <span>
                            <svg className='w-8 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
                        </span>
                            :
                            <span>
                                <svg className='w-6 ml-2 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                            </span>
                    }
                </div>

            </div>
            <div className={`absolute z-50 duration-300 border-r mt-[17px] lg:hidden flex flex-col items-start w-72 min-h-screen bg-white px-4 py-4
            ${open ? 'left-0' : '-left-[300px]'}`}>
                <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                    <Link to='/home' className='text-black font-semibold hover:text-white w-full py-2'>Home</Link>
                </div>
                <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                    <Link to='/about-us' className='text-black font-semibold hover:text-white w-full py-2'>About Us</Link>
                </div>
                <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                    <Link to='/contact' className='text-black font-semibold hover:text-white w-full py-2'>Contact</Link>
                </div>
                <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                    <Link to='/faq' className='text-black font-semibold hover:text-white w-full py-2'>FAQ</Link>
                </div>
                {
                    !user && <div className='lg:hidden flex items-center gap-6 mt-4'>
                        <Link to='/login' className='w-24 h-8 bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center rounded'>
                            <h1 className='text-white font-semibold'>LOG IN</h1>
                        </Link>
                        <Link to='/register' className='w-24 h-8 border border-[#0029FF] hover:bg-gray-300 duration-300 flex justify-center items-center rounded'>
                            <h1 className='text-primary font-semibold'>REGISTER</h1>
                        </Link>
                    </div>
                }
                <div className='lg:hidden flex items-center gap-6 mt-4'>
                    <Link to='/login' className='w-24 h-8 bg-primary hover:bg-darkPrimary duration-300 flex justify-center items-center rounded'>
                        <h1 className='text-white font-semibold'>LOG IN</h1>
                    </Link>
                    <Link to='/register' className='w-24 h-8 border border-[#0029FF] hover:bg-gray-300 duration-300 flex justify-center items-center rounded'>
                        <h1 className='text-primary font-semibold'>REGISTER</h1>
                    </Link>
                </div>
            </div>

            <ProfileDrawer />

        </nav>
    );
};

export default Navber;