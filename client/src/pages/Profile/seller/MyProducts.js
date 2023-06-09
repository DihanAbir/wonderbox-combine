import React, { useEffect, useState, } from 'react';
import QRCode from 'react-qr-code';
import {
    Typography,
    CardBody,
} from "@material-tailwind/react";
import ProductTable from '../../../components/tables/ProductTable';

const MyProducts = () => {
    const [products, setProducts] = useState([])
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/api/product/store/6462723333057f3bb6fea4aa`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
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


    const handleDownload = () => {
        const canvas = document.querySelector('canvas');
        const link = document.createElement('a');
        link.download = 'my-product-qr.png';
        link.href = canvas.toDataURL('image/png').replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        link.click();
    };



    return (
        <main>
            <div className="h-full w-[1000px] mx-auto">

                <CardBody className="">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        image
                                    </Typography>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Title
                                    </Typography>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        price
                                    </Typography>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Type
                                    </Typography>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Status
                                    </Typography>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Action
                                    </Typography>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map((product, i) => <ProductTable data={product} />)
                            }
                        </tbody>
                    </table>
                </CardBody>

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
export default MyProducts;