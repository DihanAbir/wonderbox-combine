import React from 'react';

const RDCapacity = () => {
    return (
        <div className='mb-6'>
            <h1 className='text-xl md:text-2xl text-primary font-semibold text-left mb-4'>R&D Capacity</h1>

            <div className='border border-[#0029FF4D] rounded-md'>
                <h1 className='text-left font-semibold text-black text-xl p-3 md:px-6 pt-3'>Trademarks</h1>
                <div className=''>
                    <table className='mainTable w-full text-left'>
                        <thead className='mainThead bg-[#0029FF14] h-12 text-gray-500 font-normal'>
                            <tr className='mainTr'>
                                <th className='md:pl-6 font-normal'>Picture</th>
                                <th className='md:pl-6 font-normal'>Trademark No</th>
                                <th className='md:pl-6 font-normal'>Trademark Name</th>
                                <th className='md:pl-6 font-normal'>Trademark Category</th>
                                <th className='md:pl-6 font-normal'>Available Date</th>
                                <th className='md:pl-6 font-normal'>Verified</th>
                            </tr>
                        </thead>
                        <tbody className='h-12'>
                            <tr className='tr border-t pt-1 md:pt-0 md:border-none border-primary'>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Picture">
                                    <img className='w-16 h-12 mx-auto mr-0 lg:ml-0' src="https://i.postimg.cc/6QzF9hp7/img4.png" alt="" />
                                </td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Trademark No">231567456</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Trademark Name">Ade Better</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Trademark Category">Clothes; Shoes; Boots; <br /> occer shoes; Rain boots</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Available Date">2021-08-03 ~ <br />
                                    2027-12-2</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Verified">Supplier-
                                    Uploaded</td>
                            </tr>
                            <tr className='border-t pt-1 md:pt-0 md:border-none border-primary'>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Picture">
                                    <img className='w-16 h-12 mx-auto mr-0 lg:ml-0' src="https://i.postimg.cc/6QzF9hp7/img4.png" alt="" />
                                </td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Trademark No">231567456</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Trademark Name">Ade Better</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Trademark Category">Clothes; Shoes; Boots; <br /> occer shoes; Rain boots</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Available Date">2021-08-03 ~ <br />
                                    2027-12-2</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Verified">Supplier-
                                    Uploaded</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RDCapacity;