import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/icons/google.png"
import { AuthContext } from "../../ContextAPI/AuthProvider";
import { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export default function Login() {
    const { userRefetch, signupWithGoogle } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider()
    const [isLoadingGoogle, setIsLoadingGoogle] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [show, setShow] = useState(false)

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
                // console.log(data);
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
                console.log(err)
            }
            )
    }

    const onSubmit = (data) => {
        // console.log(data);
        fetch(`http://localhost:5000/api/user/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.token) {
                    localStorage.setItem("wonderboxtoken", data.token)
                    navigate("/home")
                }
            })
    }

    return (
        <Card color="transparent" shadow={false} className="w-96 mx-auto mt-8">
            <Typography variant="h4" color="blue-gray">
                Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your Email and Password to Login.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input {...register("email", { required: true })}
                        size="lg" name="email" label="Email" />
                    <Input {...register("password", { required: true })}
                        type="password" name="password" size="lg" label="Password" />
                </div>
                <Checkbox
                    label={
                        (
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-blue-500"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        )
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button type="submit" className="mt-6" fullWidth>
                    Login
                </Button>

                <Button color='green' onClick={() => handleLoginWithGoogle()}
                    className='w-full h-12 border rounded-md flex justify-center items-center gap-4 mt-4'>
                    <img className='w-8' src={google} alt="" />
                    <h1 className='text-white font-bold'>Google</h1>
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <Link to="/register"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    >
                        Register
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}