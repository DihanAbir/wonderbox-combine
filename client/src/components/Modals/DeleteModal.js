import React, { useEffect, useRef } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";

export default function DeleteModal({ open, close, endpoint, refetch }) {

    const confirm = () => {
        fetch(`http://localhost:5000/api/${endpoint}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                refetch && refetch()
                close(false);
            })
        close(false);
    }

    return (
        <Dialog open={open} handler={() => close(false)}>
            <DialogBody>
                <div className={``}>
                    <div>
                        <div className="flex flex-col items-center gap-2">
                            <TrashIcon className="text-red-600 w-8" />
                            <h1 className="text-center font-bold text-xl">Are You Sure?</h1>
                        </div>
                        <p className="text-sm font-sans text-gray-600 text-center mt-4">Do You Really Want to Delete these Records? This proccess cannot be undone.</p>
                    </div>

                </div >
            </DialogBody>
            <DialogFooter>
                <div className="flex justify-end gap-2 mt-4">
                    <button onClick={() => close(false)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button onClick={() => confirm()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
            </DialogFooter>
        </Dialog>
    );
}