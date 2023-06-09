import { Button, Dialog, DialogBody, DialogFooter, Input, Rating, Textarea, Typography } from '@material-tailwind/react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { useForm } from 'react-hook-form';

const UpdateReviewModal = ({ open, setOpen, refetch }) => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [rating, setRating] = useState(open?.rating)
    const [isPositive, setIsPositive] = useState(open?.isPositive ? "Positive" : "Nagetive")

    const sendReview = (data) => {
        data["reviewerId"] = user?._id
        data["productId"] = open?.productId
        data["rating"] = rating
        data["isPositive"] = isPositive === "Positive" ? true : false

        fetch(`http://localhost:5000/api/review/update/${open?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                refetch && refetch()
                setOpen(null)
            })
    }
    return (
        <Dialog open={open} handler={() => setOpen(null)}>
            <form onSubmit={handleSubmit(sendReview)} >
                <DialogBody divider>
                    <div className='grid grid-cols-1 gap-4 max-w-[600px] h-fit bg-white rounded-md border p-4 mt-6'>
                        <div>
                            <Typography className="font-bold text-gray-900">Write a Review</Typography>
                            <Typography className="font-normal text-gray-500 text-sm">I recently purchased this product and I am extremely satisfied with its performance. It exceeded my expectations in terms of quality and functionality. Highly recommended!</Typography>
                        </div>

                        <div className='flex justify-between items-center'>
                            <Rating onChange={(e) => setRating(e)} value={open?.rating} />
                            <div className='grid grid-cols-2 w-fit' >
                                {["Positive", "Nagetive"].map((item, i) => (
                                    <Button key={i} onClick={() => setIsPositive(item)}
                                        className={`rounded-sm shadow-none hover:shadow-none py-2 w-24
                                ${isPositive === item ? "bg-primary" : "bg-blue-gray-50 text-black"}`} >
                                        {item}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <Input {...register("title", { required: true })}
                            className='rounded-sm'
                            error={errors.title && true}
                            defaultValue={open?.title}
                            size="md" name="title"
                            label="Review Headline" />

                        <Textarea {...register("comment", { required: true })}
                            className='rounded-sm'
                            error={errors.comment && true}
                            defaultValue={open?.comment}
                            size="md" name="comment"
                            label="Review Headline" />

                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="blue-gray" onClick={() => setOpen(null)}>
                        Close
                    </Button>
                    {
                        rating ? <Button type='submit' className='rounded-sm h-10 bg-primary'>
                            Update Review
                        </Button>
                            :
                            <Button disabled className='rounded-sm h-10 bg-blue-300'>
                                Update Review
                            </Button>
                    }
                    {/* <Button variant="gradient" onClick={() => handleBuy()}>
                    Delete
                </Button> */}

                </DialogFooter>
            </form>
        </Dialog>
    );
};

export default UpdateReviewModal;