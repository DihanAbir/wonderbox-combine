import React from 'react';

const TradeCapabilities = () => {
    return (
        <div className='mb-6'>
            <h1 className='text-xl md:text-2xl text-primary font-semibold text-left mb-4'>Trade Capabilities</h1>

            <div className='border border-[#0029FF4D] rounded-md'>
                <h1 className='text-left font-semibold text-black text-xl p-3 md:px-6 pt-3'>Main Market & Product</h1>
                <div className='border-b border-[#0029FF4D]'>
                    <table className='mainTable w-full text-left'>
                        <thead className='mainThead bg-[#0029FF14] h-12 text-gray-500 font-normal'>
                            <tr className='mainTr'>
                                <th className='md:pl-6 font-normal'>Main Market</th>
                                <th className='md:pl-6 font-normal'>Total Revenue %</th>
                                <th className='md:pl-6 font-normal'>Main Product</th>
                                <th className='md:pl-6 font-normal'>Verified</th>
                            </tr>
                        </thead>
                        <tbody className='mainTbody h-12'>
                            <tr className='mainTr border-t pt-1 md:pt-0 md:border-none border-primary'>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2'
                                    data-label="Main Market">Asia</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2'
                                    data-label="Total Revenue %">30%</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2'
                                    data-label="Main Product">-</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Verified">-</td>
                            </tr>
                            <tr className='border-t pt-1 md:pt-0 md:border-none border-primary'>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2'
                                    data-label="Main Market">Middle-East</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2'
                                    data-label="Total Revenue %">30%</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2'
                                    data-label="Main Product">-</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Verified">-</td>
                            </tr>
                            <tr className='border-t pt-1 md:pt-0 md:border-none border-primary'>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2'
                                    data-label="Main Market">Europe</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2'
                                    data-label="Total Revenue %">30%</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2'
                                    data-label="Main Product">-</td>
                                <td className='mainTd bg-gray-200 md:bg-white my-1 px-2 md:px-6 py-2' data-label="Verified">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <h1 className='text-left font-semibold text-black text-xl p-3 md:px-6 pt-3'>Trade Ability</h1>
                <div className='grid md:grid-cols-2 gap-6 p-3 md:p-6'>
                    <div className=''>
                        <div className='grid md:grid-cols-5 mb-4'>
                            <h1 className='md:col-span-2 text-left text-gray-500 text-md font-semibold'>Language Spoken:</h1>
                            <h1 className='md:col-span-3 text-left text-gray-500 text-sm'>English, Chinese, Spanish, Japanese, Arbic, French, Hindi, Italian</h1>
                        </div>
                        <div className='grid md:grid-cols-5 mb-4'>
                            <h1 className='md:col-span-2 text-left text-gray-500 text-md font-semibold'>No of Employees in Trade Department:</h1>
                            <h1 className='md:col-span-3 text-left text-gray-500 text-sm'>10-15 People</h1>
                        </div>
                        <div className='grid md:grid-cols-5 mb-4'>
                            <h1 className='md:col-span-2 text-left text-gray-500 text-md font-semibold'>Total Annual Revenue:</h1>
                            <h1 className='md:col-span-3 text-left text-gray-500 text-sm'>Bellow $1 million</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeCapabilities;