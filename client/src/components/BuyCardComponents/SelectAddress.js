import { ListItem, Typography } from '@material-tailwind/react';
import React from 'react';

const SelectAddress = ({ address }) => {
    return (
        <div>
            <ListItem className='bg-gray-50 rounded-sm' >
                <div className='flex items-start gap-2' >
                    {
                        address?.deliveryAddress === "home" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-primary">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                    }
                    <div>
                        <div className='flex items-center gap-2'>
                            <Typography variant="" className="uppercase" >{address?.area},</Typography>
                            <Typography variant="small" color="gray" className="" >{address?.address}</Typography>
                        </div>
                        <Typography variant="small" color="" className="" >{address?.name}</Typography>
                        <Typography variant="small" color="gray" className="" >{address?.mobileNumber}</Typography>
                    </div>
                </div>
            </ListItem>
        </div>
    );
};

export default SelectAddress;