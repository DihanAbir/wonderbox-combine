import {
  Typography,
  Chip,
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import moment from "moment";

import { useState } from "react";

export default function DepositTableRow({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <tr className="w-full py-4 bg-blue-gray-50 border-b border-white">
      <td className="text-gray-800 px-4 py-2">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {data?.bank}
        </Typography>
      </td>

      <td className="text-white px-4 py-2">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {data?.branch}
        </Typography>
      </td>
      <td className="text-white px-4 py-2">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {data?.amount}
        </Typography>
      </td>
      <td className="text-white px-4 py-2">
        <Typography variant="small" color="blue-gray" className="font-normal">
          <Chip
            className="w-fit"
            value={data?.approved ? "Approved" : "Pending"}
            variant="ghost"
            color={data?.approved ? "green" : "pink"}
          />
        </Typography>
      </td>
      <td className="text-white px-4 py-2">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {moment(data.createdAt).format("YYYY-MM-DD HH:mm:ss")}
        </Typography>
      </td>
      <td className="text-white px-4 py-2">
        <div>
          <IconButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </IconButton>
        </div>
      </td>
      <Dialog open={open} handler={() => setOpen(false)}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Your Attention is Required!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
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
