import React, { useContext, useState } from 'react';
import { AuthContext } from '../../ContextAPI/AuthProvider';
import { useForm } from 'react-hook-form';
import { Button, Input, Rating, Textarea, Typography } from '@material-tailwind/react';

const SendReview = ({ product, refetch }) => {
    const { user, userRefetch, signupWithGoogle } = useContext(AuthContext)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [rating, setRating] = useState()
    const [isPositive, setIsPositive] = useState("Positive")

    const sendReview = (data) => {
        data["reviewerId"] = user?._id
        data["productId"] = product?._id
        data["rating"] = rating
        data["isPositive"] = isPositive === "Positive" ? true : false
        data["storeId"] = product?.storeId
        // console.log(data);
        fetch(`http://localhost:5000/api/review`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                refetch && refetch()
                reset()
            })
    }
    return (
        <form onSubmit={handleSubmit(sendReview)} className='grid grid-cols-1 gap-4 max-w-full h-fit bg-white rounded-md border p-4'>
            <div>
                <Typography className="font-bold text-gray-900">Write a Review</Typography>
                <Typography className="font-normal text-gray-500 text-sm">I recently purchased this product and I am extremely satisfied with its performance. It exceeded my expectations in terms of quality and functionality. Highly recommended!</Typography>
            </div>

            <div className='flex justify-between items-center'>
                <Rating onChange={(e) => setRating(e)} />
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
                size="md" name="title"
                label="Review Headline" />

            <Textarea {...register("comment", { required: true })}
                className='rounded-sm'
                error={errors.comment && true}
                size="md" name="comment"
                label="Review Headline" />

            {
                rating ? <Button type='submit' className='rounded-sm h-10 bg-primary'>
                    Send Review
                </Button>
                    :
                    <Button disabled className='rounded-sm h-10 bg-blue-300'>
                        Send Review
                    </Button>
            }


        </form>
    );
};

export default SendReview;