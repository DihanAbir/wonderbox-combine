import {
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Switch,
} from "@material-tailwind/react";

import { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

export default function OrderTable({ data }) {
  const [open, setOpen] = useState(false);
  const [productData, setProductData] = useState(null);
  //   console.log(data);

  const handleQrCode = (p) => {
    const productData = {
      name: p?.title,
      price: p.amout,
      id: p?._id,
    };
    setProductData(productData);
    setOpen(true);
  };

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    link.download = "my-product-qr.png";
    link.href = canvas
      .toDataURL("image/png")
      .replace(/^data:image\/[^;]/, "data:application/octet-stream");
    link.click();
  };
  return (
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
        <Typography variant="small" color="blue-gray" className="font-normal">
          {new Date(data.createdAt && data.createdAt).toLocaleDateString(
            "en-GB"
          )}
        </Typography>
      </td>

      <td className="text-white px-4 py-2 flex items-center gap-2">
        <Tooltip content="Edit User">
          <Link to={`/dashboard/orders/${data?._id}`}>
            <IconButton
              variant="text"
              color="blue"
              className="font-bold bg-blue-50"
            >
              <svg
                class="w-6 h-6 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </IconButton>
          </Link>
        </Tooltip>
      </td>

      <Dialog open={open} handler={() => setOpen(false)}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Your Attention is Required!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          {productData && (
            <div className="mx-auto w-80">
              <QRCode value={JSON.stringify(productData)} />

              <button
                className="w-fit px-6 h-12 hover:bg-darkPrimary bg-primary text-white mt-6 mx-auto"
                onClick={handleDownload}
              >
                Download QR Code
              </button>
            </div>
          )}
          <Typography className="text-center font-normal">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="text"
            color="blue-gray"
            onClick={() => setOpen(!open)}
          >
            close
          </Button>
        </DialogFooter>
      </Dialog>
    </tr>
  );
}
