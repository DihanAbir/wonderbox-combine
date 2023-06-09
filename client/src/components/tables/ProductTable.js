import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Typography,
    Chip,
    Avatar,
    IconButton,
    Tooltip,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import { BellIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import QRCode from "react-qr-code";

export default function ProductTable({ data }) {
    const [open, setOpen] = useState(false);
    const [productData, setProductData] = useState(null);

    const handleQrCode = (p) => {
        const productData = {
            name: p?.title,
            price: p.amout,
            id: p?._id
        }
        setProductData(productData)
        setOpen(true)
    }


    const handleDownload = () => {
        const canvas = document.querySelector('canvas');
        const link = document.createElement('a');
        link.download = 'my-product-qr.png';
        link.href = canvas.toDataURL('image/png').replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        link.click();
    };
    return (
        <tr>
            <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                    <Avatar
                        src={data.image}
                        alt=""
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {data?.title}
                </Typography>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {data?.price}
                </Typography>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {data?.type}
                </Typography>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <div className="w-max">
                    <Chip
                        size="sm"
                        variant="ghost"
                        value={data?.active}
                        color={
                            data?.active === "true" ? "green" : data?.active === "false" ? "amber" : "red"
                        }
                    />
                </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <Tooltip content="Edit User">
                    <IconButton onClick={() => handleQrCode(data)} variant="text" color="blue-gray" className="font-bold">
                        View
                    </IconButton>
                </Tooltip>
            </td>


            <Dialog open={open} handler={() => setOpen(false)}>
                <DialogHeader>
                    <Typography variant="h5" color="blue-gray">
                        Your Attention is Required!
                    </Typography>
                </DialogHeader>
                <DialogBody divider className="grid place-items-center gap-4">
                    {
                        productData && (

                            <div className='mx-auto w-80'>
                                <QRCode value={JSON.stringify(productData)} />

                                <button className='w-fit px-6 h-12 hover:bg-darkPrimary bg-primary text-white mt-6 mx-auto' onClick={handleDownload}>Download QR Code</button>
                            </div>

                        )
                    }
                    <Typography className="text-center font-normal">
                        A small river named Duden flows by their place and supplies it with the necessary
                        regelialia.
                    </Typography>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button variant="text" color="blue-gray" onClick={() => setOpen(!open)}>
                        close
                    </Button>
                </DialogFooter>
            </Dialog>

        </tr>
    );
}