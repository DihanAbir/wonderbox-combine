import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
    Spinner,
    Radio,
} from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import google from "../../assets/icons/google.png"
import { AuthContext } from '../../ContextAPI/AuthProvider';

const Register = () => {
    const { userRefetch, signupWithGoogle } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [agree, setAgree] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const [emailResult, setEmailResult] = useState("")
    const [passwordResult, setPasswordResult] = useState("")
    const [show, setShow] = useState(false)
    const [role, setRole] = useState("seller")


    const googleProvider = new GoogleAuthProvider()
    const [isLoadingGoogle, setIsLoadingGoogle] = useState(false)


    const handleSaveUser = (newUser) => {
        setIsLoadingGoogle(true)
        fetch(`http://localhost:5000/api/user/signup/withsocial`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success === true) {
                    localStorage.setItem('wonderboxtoken', data.token)
                    setIsLoading(false)
                }
                if (data?.token) {
                    const token = localStorage.getItem('wonderboxtoken')
                    if (token) {
                        userRefetch()
                        setIsLoading(false)
                        navigate('/home')
                        setShow(true)
                    }
                }
            })
    }


    const handleLoginWithGoogle = () => {
        signupWithGoogle(googleProvider)
            .then(result => {
                const user = result.user
                const newUser = {
                    email: user.email,
                    name: user.displayName,
                    image: user.photoURL,
                    createWith: "google",
                    verified: "true"
                }
                const filteredNewUser = Object.fromEntries(
                    Object.entries(newUser).filter(([key, value]) => value)
                );
                if (filteredNewUser) {
                    handleSaveUser(filteredNewUser);
                }
            })
            .catch(err => {
                // console.log(err)
            }
            )
    }

    const handleRegister = (data) => {
        console.log(data);
        setIsLoading(true)

        if (data?.password !== data?.confirmpassword) {
            setIsLoading(false)
            setPasswordResult("Password Not Matched")
            return;
        }

        const newUser = {
            name: data?.firstname + ' ' + data?.lastname,
            country: data?.country,
            email: data?.email,
            phone: data?.phone,
            password: data?.password,
            role: role,
        }
        // console.log(newUser);
        fetch(`http://localhost:5000/api/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.message?.emailMessage) {
                    setEmailResult(data?.message?.emailMessage)
                    setIsLoading(false)
                }
                if (data?.token) {
                    localStorage.setItem("wonderboxtoken", data?.token)
                    setIsLoading(false)
                    userRefetch()
                    navigate('/home')
                    setShow(true)
                }
                else {
                    setIsLoading(false)
                }
            })
    }

    return (
        <div className='bg-light-blue-100'>
            <div className='max-w-[1440px] mx-auto px-4 grid lg:grid-cols-5 items-center p-6'>
                <div className='lg:col-span-2 bg-light-green-700 w-full h-full hidden lg:block'>
                    <img className='w-full h-full object-cover' src="https://www.cadeau-local.net/wp-content/uploads/2022/09/Coffret-Cadeau-Wonderbox-HOME.jpg" alt="" />
                </div>
                <div className='lg:col-span-3 w-full h-full p-16 bg-blue-gray-50'>
                    <h1 className='font-bold text-left text-3xl text-gray-900 mt-4'>Register</h1>
                    <h1 className='text-left text-gray-600'>Manage All Lotterly Efficiently</h1>

                    <p className='text-gray-500 text-sm mt-4'>Let's you get up all setup so you can verify you personal account and begin setting up your profile</p>


                    <form onSubmit={handleSubmit(handleRegister)}
                        className='mt-6' >

                        <div className='grid md:grid-cols-2 gap-6' >

                            <Input {...register("firstname", { required: true })}
                                className='rounded-none'
                                size="md" name="firstname" label="First Name" />

                            <Input {...register("lastname", { required: false })}
                                className='rounded-none'
                                size="md" name="lastname" label="Last Name" />

                            <Input {...register("phone", { required: false })}
                                className='rounded-none'
                                size="md" name="phone" label="Phone Number" />

                            <Input {...register("country", { required: true })}
                                className='rounded-none'
                                size="md" name="country" label="Country*" />

                            <Input {...register("email", { required: true })}
                                className='rounded-none'
                                size="md" name="email" label="Email*" />

                            <Input {...register("password", { required: true })}
                                className='rounded-none'
                                size="md" name="password" label="Password*" />

                            <Input {...register("confirmpassword", { required: true })}
                                className='rounded-none'
                                size="md" name="confirmpassword" label="Confirm Password*" />

                            <div className="flex gap-10">
                                <Radio onClick={() => setRole("seller")} id="seller" name="type" label="Seller" defaultChecked />
                                <Radio onClick={() => setRole("buyer")} id="buyer" name="type" label="Buyer" />
                            </div>

                        </div>

                        <Checkbox onClick={() => setAgree(!agree)} label={
                            <Typography color="blue-gray" className="font-medium flex p-0">I agree with the
                                <Typography as="a" href="#" color="blue" className="font-medium hover:text-blue-700 transition-colors">
                                    &nbsp;terms and conditions
                                </Typography>.
                            </Typography>
                        } />

                        {
                            agree ? <Button type="submit" className='w-36 h-10 my-8 flex justify-center items-center rounded-md bg-primary hover:bg-darkPrimary duration-200 text-white font-bold'>
                                {
                                    isLoading ? <div className='flex items-center gap-2'><h1>Register</h1>
                                        <Spinner /></div> : <h1>Register</h1>
                                }
                            </Button>
                                :
                                <button disabled className='w-36 h-10 mt-8 flex justify-center items-center rounded-md bg-gray-500 cursor-not-allowed text-white font-bold'>
                                    <h1>Register</h1>
                                </button>
                        }

                    </form>
                    <Button color='green' onClick={() => handleLoginWithGoogle()}
                        className='w-full h-12 border rounded-md flex justify-center items-center gap-4'>
                        <img className='w-8' src={google} alt="" />
                        <h1 className='text-white font-bold'>Google</h1>
                    </Button>
                </div>
            </div>
        </div >
    );
};

export default Register;