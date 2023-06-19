import React, { useContext, useState } from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import ShippingAddress from "../../components/BuyCardComponents/ShippingAddress";
import Payment from "../../components/BuyCardComponents/Payment";
import PaymentSuccess from "../../components/BuyCardComponents/PaymentSuccess";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextAPI/AuthProvider";

import { v4 as uuidv4 } from "uuid";

const BuyCard = () => {
  const { user, userRefetch } = useContext(AuthContext);
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const product = useLoaderData();
  const navigate = useNavigate();

  const handleBuy = () => {
    const newCard = {
      productId: product?._id,
      userId: user?._id,
      storeId: product?.storeId,
      amount: product?.discount,
      type: product?.type,
      price: product?.price,
    };

    if (product?.type === "Wallet") {
      newCard["amount"] = product.amount;
    } else {
      newCard["features"] = product.features;
    }

    if (newCard) {
      fetch(`http://localhost:5000/api/card/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCard),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            navigate("/dashboard/orders");
          }
        });
    }
  };

  // console.log(activeStep);
  const handleNext = () => {
    if (activeStep === 1) {
      handleBuy();
    } else {
      setActiveStep(!isLastStep && activeStep + 1);
    }
  };

  return (
    <div className="max-w-primary mx-auto py-4 px-4">
      <div className="w-full py-4">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <div className="absolute -bottom-7 text-center">
              <Typography
                variant="small"
                color={activeStep === 0 ? "blue" : "blue-gray"}
              >
                Address
              </Typography>
            </div>
          </Step>

          <Step onClick={() => setActiveStep(1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div className="absolute -bottom-7 text-center">
              <Typography
                variant="small"
                color={activeStep === 1 ? "blue" : "blue-gray"}
              >
                Pyament
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="absolute -bottom-7 text-center">
              <Typography
                variant="small"
                color={activeStep === 2 ? "blue" : "blue-gray"}
              >
                Success
              </Typography>
            </div>
          </Step>
        </Stepper>

        <div className="overflow-auto w-full h-full pt-12">
          {activeStep === 0 && <ShippingAddress />}
          {activeStep === 1 && <Payment />}
          {activeStep === 2 && <PaymentSuccess />}
        </div>

        <div className="flex justify-between mt-6">
          <Button
            onClick={() => setActiveStep(!isFirstStep && activeStep - 1)}
            disabled={isFirstStep}
          >
            Prev
          </Button>
          <Button onClick={() => handleNext()} disabled={isLastStep}>
            {activeStep === 1 ? "Buy Now" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
