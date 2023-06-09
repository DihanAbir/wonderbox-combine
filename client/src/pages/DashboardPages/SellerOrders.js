import React, { useContext, useEffect, useState, } from 'react';
import QRCode from 'react-qr-code';
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";
import OrderTable from '../../components/tables/OrderTable';

const SellerOrders = () => {
    const [products, setProducts] = useState([])
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/api/storecard/getcards/6462723333057f3bb6fea4aa`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.data)
            })
    }, [])

    const handleQrCode = (p) => {
        const productData = {
            name: p?.title,
            price: p.price,
            id: p?._id
        }
        setProductData(productData)
    }
    console.log(products);

    const handleDownload = () => {
        const canvas = document.querySelector('canvas');
        const link = document.createElement('a');
        link.download = 'my-product-qr.png';
        link.href = canvas.toDataURL('image/png').replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        link.click();
    };



    return (
        <main>
            <div className="h-full w-full mx-auto">

                <table className="w-full table-auto text-left overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    QR Code
                                </Typography>
                            </th>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Title
                                </Typography>
                            </th>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Amount
                                </Typography>
                            </th>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Status
                                </Typography>
                            </th>
                            <th className="bg-blue-500 p-4 text-left text-white">
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal leading-none"
                                >
                                    Action
                                </Typography>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((data, i) => (
                                <tr className="w-full py-4 bg-blue-gray-50 border-b border-white">
                                    <td className="text-white px-4 py-2">
                                        <div className="flex items-center gap-3">
                                            <Avatar
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                                alt=""
                                                size="md"
                                                className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                            />
                                        </div>
                                    </td>
                                    <td className="text-white px-4 py-2">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {data?.title}
                                        </Typography>
                                    </td>
                                    <td className="text-white px-4 py-2">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {data?.amount}
                                        </Typography>
                                    </td>
                                    <td className="text-white px-4 py-2">
                                        <div className="w-max">
                                            <Chip
                                                size="sm"
                                                variant="ghost"
                                                value={data?.active === "true" ? "sold" : "sell"}
                                                color={
                                                    data?.active === "true" ? "red" : "green"
                                                }
                                            />
                                        </div>
                                    </td>
                                    <td className="text-white px-4 py-2">
                                        <Tooltip content="Edit User">
                                            <IconButton variant="text" color="blue" className="font-bold bg-blue-gray-100">
                                                View
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>





            {
                productData && (

                    <div className='mx-auto w-80'>
                        <QRCode value={JSON.stringify(productData)} />

                        <button className='w-fit px-6 h-12 hover:bg-darkPrimary bg-primary text-white mt-6 mx-auto' onClick={handleDownload}>Download QR Code</button>
                    </div>

                )
            }

        </main>
    );
};

export default SellerOrders;