import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider } from "firebase/auth";
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
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/icons/google.png";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import Login from "./Login";

const items = ["Register", "Login"];

const Register = () => {
  const { userRefetch, signupWithGoogle } = useContext(AuthContext);
  const [selectedData, setSelectedData] = useState("Register");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [agree, setAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [emailResult, setEmailResult] = useState("");
  const [passwordResult, setPasswordResult] = useState("");
  const [show, setShow] = useState(false);
  const [role, setRole] = useState("seller");

  const googleProvider = new GoogleAuthProvider();
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);

  const handleSaveUser = (newUser) => {
    setIsLoadingGoogle(true);
    fetch(`http://localhost:5000/api/user/signup/withsocial`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success === true) {
          localStorage.setItem("wonderboxtoken", data.token);
          setIsLoading(false);
        }
        if (data?.token) {
          const token = localStorage.getItem("wonderboxtoken");
          if (token) {
            userRefetch();
            setIsLoading(false);
            navigate("/home");
            setShow(true);
          }
        }
      });
  };

  const handleLoginWithGoogle = () => {
    signupWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        const newUser = {
          email: user.email,
          name: user.displayName,
          image: user.photoURL,
          createWith: "google",
          verified: "true",
        };
        const filteredNewUser = Object.fromEntries(
          Object.entries(newUser).filter(([key, value]) => value)
        );
        if (filteredNewUser) {
          handleSaveUser(filteredNewUser);
        }
      })
      .catch((err) => {
        // console.log(err)
      });
  };

  const handleRegister = (data) => {
    console.log(data);
    setIsLoading(true);

    if (data?.password !== data?.confirmpassword) {
      setIsLoading(false);
      setPasswordResult("Password Not Matched");
      return;
    }

    const newUser = {
      name: data?.firstname + " " + data?.lastname,
      country: data?.country,
      email: data?.email,
      phone: data?.phone,
      password: data?.password,
      role: role,
    };
    // console.log(newUser);
    fetch(`http://localhost:5000/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.message?.emailMessage) {
          setEmailResult(data?.message?.emailMessage);
          setIsLoading(false);
        }
        if (data?.token) {
          localStorage.setItem("wonderboxtoken", data?.token);
          setIsLoading(false);
          userRefetch();
          navigate("/home");
          setShow(true);
        } else {
          setIsLoading(false);
        }
      });
  };

  return (
    <div className="bg-blue-50">
      <div className="max-w-[800px] mx-auto px-4 p-6">
        <div>
          <div className="grid grid-cols-2">
            {items.map((item, i) => (
              <Button
                key={i}
                onClick={() => setSelectedData(item)}
                className={`w-full rounded-none shadow-none hover:shadow-none h-12
                                ${
                                  selectedData === item
                                    ? "bg-primary"
                                    : "bg-gray-50 text-black"
                                }`}
              >
                {item}
              </Button>
            ))}
          </div>

          {selectedData === "Register" && (
            <div className="w-full h-full md:px-16 p-6 bg-white">
              <form onSubmit={handleSubmit(handleRegister)} className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    {...register("firstname", { required: true })}
                    className="rounded-none"
                    size="md"
                    name="firstname"
                    label="First Name"
                  />

                  <Input
                    {...register("lastname", { required: false })}
                    className="rounded-none"
                    size="md"
                    name="lastname"
                    label="Last Name"
                  />

                  <Input
                    {...register("phone", { required: false })}
                    className="rounded-none"
                    size="md"
                    name="phone"
                    label="Phone Number"
                  />

                  <Input
                    {...register("country", { required: true })}
                    className="rounded-none"
                    size="md"
                    name="country"
                    label="Country*"
                  />

                  <Input
                    {...register("email", { required: true })}
                    className="rounded-none"
                    size="md"
                    name="email"
                    label="Email*"
                  />

                  <Input
                    {...register("password", { required: true })}
                    className="rounded-none"
                    size="md"
                    name="password"
                    label="Password*"
                  />

                  <Input
                    {...register("confirmpassword", { required: true })}
                    className="rounded-none"
                    size="md"
                    name="confirmpassword"
                    label="Confirm Password*"
                  />

                  <div className="flex gap-10">
                    <Radio
                      onClick={() => setRole("seller")}
                      id="seller"
                      name="type"
                      label="Seller"
                      defaultChecked
                    />
                    <Radio
                      onClick={() => setRole("buyer")}
                      id="buyer"
                      name="type"
                      label="Buyer"
                    />
                  </div>
                </div>

                <Checkbox
                  onClick={() => setAgree(!agree)}
                  label={
                    <Typography
                      color="blue-gray"
                      className="font-medium flex p-0"
                    >
                      I agree with the
                      <Typography
                        as="a"
                        href="#"
                        color="blue"
                        className="font-medium hover:text-blue-700 transition-colors"
                      >
                        &nbsp;terms and conditions
                      </Typography>
                      .
                    </Typography>
                  }
                />

                {agree ? (
                  <Button
                    type="submit"
                    className="w-36 h-10 my-4 flex justify-center items-center rounded-sm bg-primary hover:bg-darkPrimary duration-200 text-white font-bold"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <h1>Register</h1>
                        <Spinner />
                      </div>
                    ) : (
                      <h1>Register</h1>
                    )}
                  </Button>
                ) : (
                  <button
                    disabled
                    className="w-36 h-10 my-4 flex justify-center items-center rounded-sm bg-gray-500 cursor-not-allowed text-white font-bold"
                  >
                    <h1>Register</h1>
                  </button>
                )}
              </form>
              <Button
                color="green"
                onClick={() => handleLoginWithGoogle()}
                className="w-full h-12 border rounded-sm bg-white hover:bg-gray-50 flex justify-center items-center gap-2 shadow-none hover:shadow-none"
              >
                <img className="w-8" src={google} alt="" />
                <h1 className="text-gray-800 font-bold">Google</h1>
              </Button>
            </div>
          )}

          {selectedData === "Login" && (
            <div className="w-full h-full p-6 bg-white">
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
