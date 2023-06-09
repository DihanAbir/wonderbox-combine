// import React from 'react';

// const ProductSubmit = () => {
//     return (
//         <section className='mt-16 min-h-screen'>
//             <h1 className='text-2xl text-black font-semibold text-left mb-4'>Send your messages to this supplier</h1>
//             <div className='flex items-center gap-5 text-gray-500'>
//                 <p>To :</p>
//                 <p>Lisa Yang</p>
//             </div>

//             <h1 className='text-md text-black font-semibold text-left mb-3 mt-4'>Message :</h1>
//             <form action="">
//                 <textarea className='border border-[#0029FF4D] focus:outline-primary rounded-md h-72 w-full p-6' name="message" placeholder='Enter your inquiry details such as product name, color, size, MOQ, FOB, etc.  '></textarea>
//                 <p className='text-sm text-left text-gray-500 py-2'>Your message must be between 20-8000 characters</p>
//                 <div>
//                     <label className='text-left block' htmlFor="quantity">Quantity:</label>
//                     <div className='grid md:grid-cols-2 gap-4 md:gap-16'>
//                         <div>
//                             <input className='block px-3 w-full h-10 focus:outline-none border' defaultValue='1' name='quantity' type="number" />
//                         </div>
//                         <div className='relative cursor-pointer'>
//                             <input className='cursor-pointer block px-3 w-full h-10 focus:outline-none border' type="text" placeholder='Pair / Pairs' />

//                             <svg className='cursor-pointer w-4 absolute top-4 right-4' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" fill="#f3da35"></path> </svg>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center gap-3 mt-6'>
//                     <input type="checkbox" name="" id="" />
//                     <span className='text-sm text-left text-gray-500'>Recommend matching suppliers if this supplier  doesn’t contact me on message center within 24 hours.</span>
//                 </div>
//                 <div className='flex items-center gap-3 mt-6'>
//                     <input type="checkbox" name="" id="" />
//                     <span className='text-sm text-left text-gray-500'>I agree to share my <strong className='text-gray-900'>Business Card</strong> to the supplier</span>
//                 </div>

//                 <button className='w-56 h-12 bg-primary flex justify-center items-center rounded-md mx-auto my-14' type="submit">
//                     <span className='text-white text-md font-semibold'>Submit</span>
//                 </button>
//             </form>


//             <div>
//                 <h1 className='text-black font-semibold text-md mb-3 text-left'>Frequently bought together</h1>
//                 <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
//                     <div>
//                         <img className='w-full h-52' src="https://www.wonderbox.fr/wondermedias/sys_master/productmedias/h24/hf1/1286332-854x1067.jpg" alt="" />
//                     </div>
//                     <div>
//                         <img className='w-full h-52' src="https://www.wonderbox.fr/wondermedias/sys_master/productmedias/h51/hea/1087095-854x1067.jpg" alt="" />
//                     </div>
//                     <div>
//                         <img className='w-full h-52' src="https://www.wonderbox.fr/wondermedias/sys_master/productmedias/h30/hc2/798923-560x373.jpg" alt="" />
//                     </div>
//                     <div>
//                         <img className='w-full h-52' src="https://www.wonderbox.fr/wondermedias/sys_master/productmedias/h11/hc2/785111-560x373.jpg" alt="" />
//                     </div>
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default ProductSubmit;