import React, { useEffect } from 'react';
import love from '../../../assets/icons/lovew.png'
import love2 from '../../../assets/icons/love.png'
import { Link } from 'react-router-dom';

const LatestSignelProduct = ({ product }) => {
    // const { wishlistItems, cartItems } = useSelector((state) => state.controllerSlice)
    // const dispatch = useDispatch()

    // const handleWishlistRemove = (id) => {
    //     const products = wishlistItems.filter((product) => product?._id !== id)
    //     dispatch(setWishlistItems(products))
    // }
    // const handleAddWishlist = (product) => {
    //     dispatch(setWishlistItems([...wishlistItems, product]))
    // }
    // const handleAddToCart = (product) => {
    //     dispatch(setCartItems([...cartItems, product]))
    // }

    // const wishlised = wishlistItems.find(p => p?.productId === product?._id)
    // console.log(product);

    return (
        <div className='relative w-full mx-auto flex flex-col justify-center items-start gap-2 rounded-xl p-3 border hover:bg-blue-100 hover:shadow-xl hover:shadow-purple-100 duration-300 cursor-pointer mt-6'>
            <div className='relative w-full h-28 overflow-hidden'>

                {
                    product?.image ? <img className='w-full h-28 rounded-xl hover:scale-150 duration-500' src={product?.image} alt="" />
                        :
                        <img className='w-full h-28 rounded-xl hover:scale-150 duration-500' src={product.img} alt="" />
                }
                {/* {wishlised ?
                    < Image onClick={() => handleWishlistRemove(wishlised?._id)}
                        className='w-8 border shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full absolute top-3 right-3 hover:scale-125 duration-200' src={love2} alt="" />
                    :
                    < Image onClick={() => handleAddWishlist(product)}
                        className='w-8 border shadow-xl shadow-blue-400 hover:shadow-green-600 rounded-full absolute top-3 right-3 hover:scale-125 duration-200' src={love} alt="" />
                } */}
            </div>
            <Link to="/" className='flex flex-col items-start gap-2'>
                <span className='text-black font-bold text-left hover:text-primary duration-150'>{product.title}</span>
                <span className='text-gray-900 text-xl font-bold text-left'>₹ {product.price}</span>
                <span className='text-gray-400 text-sm text-left'>{product.description?.slice(0, 40) + '...'}</span>
            </Link>
            <button className='w-36 lg:w-48 h-7 md:h-9 mx-auto bg-primary hover:bg-darkPrimary duration-150 flex justify-center items-center rounded-[50px]'>
                <h1 className='text-white font-semibold md:font-bold'>Buy Now</h1>
            </button>

        </div>
    );
};

export default LatestSignelProduct;