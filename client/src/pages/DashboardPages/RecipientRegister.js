import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import img1 from "../../assets/icons/tick-mark.png";
import img2 from "../../assets/icons/invalid.png";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import { useNavigate } from "react-router-dom";

const img =
  "https://www.wonderbox.fr/medias/wbx-dcs-register-modal-fr.jpg?context=bWFzdGVyfGltYWdlc3w2OTI2ODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDQzL2gxMi8xMDQ5NjMyODM2ODE1OC5qcGd8MjAwZDNmM2JjYTI5MTg0NGE4ZmJiN2RkN2ZiMzViMDdlMmI0NmJmZjYzZTNhNWEwYmY2OWNlYTU3YzAxMzcyMw";

const RecipientRegister = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resultModal, setResultModal] = useState(null);

  const navigate = useNavigate();

  const handleVerify = (data) => {
    setIsLoading(true);
    fetch(`http://localhost:5000/api/storecard/verify`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setResultModal(data);
      });
  };

  const handleActiveCard = (data) => {
    setIsLoading(true);
    const newCard = {
      cardId: data._id,
      productId: data.productId,
      userId: user?._id,
      storeId: data?.storeId,
      type: data.type,
      price: data.price,
      privateKey: data?.privateKey,
      checkNumber: data?.checkNumber,
      serialNumber: data?.serialNumber,
      securityCode: data?.securityCode,
    };

    if (data?.type === "Wallet") {
      newCard["amount"] = data.amount;
    } else {
      newCard["features"] = data.features;
    }
    fetch(`http://localhost:5000/api/card/createcard_after_verify`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        navigate("/dashboard/orders");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleVerify)}
        className="w-full md:w-[800px] mx-auto bg-white h-full md:p-6"
      >
        <Typography className="text-xl text-center">
          <strong>Register</strong> your gift
        </Typography>
        <hr />
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="flex flex-col">
            <Typography className="text-left text-sm">
              Cheque number*
            </Typography>
            <Input
              {...register("checkNumber", { required: true })}
              size="md"
              type="number"
              name="checkNumber"
              placeholder="Enter Check Number"
              className={`rounded-sm ${
                errors.checkNumber && "outline outline-pink-500"
              }`}
            />
          </div>
          <div className="grid md:grid-cols-2 items-end gap-4">
            <div className="flex flex-col">
              <Typography className="text-left text-sm">
                Security code**
              </Typography>
              <Input
                {...register("securityCode", { required: true })}
                size="md"
                type="number"
                name="securityCode"
                placeholder="Enter Security Code"
                className={`rounded-sm ${
                  errors.securityCode && "outline outline-pink-500"
                }`}
              />
            </div>
            <Button
              onClick={() => setOpen(!open)}
              className="rounded-sm bg-pink-500 text-white py-0 h-12"
            >
              Where to find this information ?
            </Button>
          </div>

          <div className="flex flex-col">
            <Typography className="text-left text-sm">Email*</Typography>
            <Input
              {...register("email", { required: true })}
              size="md"
              type="email"
              name="email"
              placeholder="Enter Email"
              className={`rounded-sm ${
                errors.email && "outline outline-pink-500"
              }`}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="flex items-center justify-center rounded-sm bg-green-600 text-white py-0 h-12 w-full mt-6"
        >
          {isLoading ? <Spinner color="red" /> : "Verify Now"}
        </Button>
      </form>

      {/* ----------------modal------------------ */}
      <Dialog
        open={open}
        handler={() => setOpen(false)}
        size="xxl"
        className="h-[800px] relative"
      >
        <Button
          onClick={() => setOpen(false)}
          className="rounded-none bg-pink-500 text-white w-fit mx-auto mr-0"
        >
          close
        </Button>

        <img className="md:h-[600px] object-cover" src={img} alt="" />
      </Dialog>

      <Dialog open={resultModal}>
        <DialogBody divider>
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              className="w-28 mx-auto"
              src={resultModal?.status === "success" ? img1 : img2}
              alt=""
            />
            {resultModal?.status === "success" ? (
              <Typography className="text-2xl font-bold text-green-600">
                Card is Valid
              </Typography>
            ) : (
              <Typography className="text-2xl font-bold text-red-600">
                Card is invalid
              </Typography>
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="red"
            onClick={() => setResultModal(null)}
            className="rounded-sm"
          >
            <span>Close</span>
          </Button>
          {resultModal?.status === "success" && (
            <Button
              onClick={() => handleActiveCard(resultModal.data)}
              variant="gradient"
              color="green"
              className="rounded-sm ml-4"
            >
              {isLoading ? <Spinner color="red" /> : "Active"}
            </Button>
          )}
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default RecipientRegister;
