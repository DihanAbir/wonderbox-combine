import React, { useContext, useState } from "react";
import logo from "../../assets/logo/logo.png";
import moment from "moment";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import { useForm } from "react-hook-form";
import { Button, Input, Spinner, Textarea } from "@material-tailwind/react";
import { toast } from "react-toastify";

const DepositForm = () => {
  const { user, imageUpload } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const date = moment("2023-01-10").format("DD/MMM/YYYY");
  const [isLoading, setIsLoading] = useState(false);

  const [images, setImages] = useState([]);
  const handleImageSet = (input) => {
    if (images?.length > 2) {
      toast.error("Max 3 Images Can Added", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setImages([...images, input]);
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    if (images.length === 0) {
      toast.warning("Image is Required for Payment Proof", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsLoading(false);
      return;
    }
    data["type"] = "Deposit";
    data["user"] = user?._id;
    const imagesFiles = await imageUpload(images);
    if (imagesFiles) {
      data["images"] = imagesFiles;
    }

    if (data) {
      fetch(`http://localhost:5000/api/transaction`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            const message = data.success ? toast.success : toast.error;
            message(
              `${data?.success ? data?.message : "Deposit Request Failed"}`,
              {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              }
            );
          }
          reset();
          setImages([]);
          setIsLoading(false);
        });
    }
  };
  return (
    <section className="max-w-primary mx-auto px-4">
      <div className="max-w-[800px] mx-auto p-4 bg-white rounded-md">
        <div className="flex flex-col justify-center items-center gap-1">
          <img className="w-16 mx-auto rounded-full" src={logo} alt="" />
          <h1 className="text-gray-800 font-bold">Wonderbox</h1>
        </div>
        <h1 className="text-sm text-gray-800">Date: {date}</h1>
        <hr className="my-3 border-8 border-primary" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 md:grid grid-cols-2 gap-4">
            <Input
              {...register("bank", { required: true })}
              size="lg"
              className="rounded"
              type="text"
              name="bank"
              error={errors.bank}
              label="Bank Name"
            />
            <Input
              {...register("branch", { required: true })}
              size="lg"
              className="rounded"
              type="text"
              name="branch"
              error={errors.branch}
              label="Branch Name"
            />
          </div>
          <div className="mb-4 md:grid grid-cols-2 gap-4">
            <Input
              {...register("accountNo", { required: true })}
              size="lg"
              className="rounded"
              type="number"
              name="accountNo"
              error={errors.accountNo}
              label="Account Number"
            />
            <Input
              {...register("amount", { required: true })}
              size="lg"
              className="rounded"
              type="number"
              name="amount"
              error={errors.amount}
              label="Amount"
            />
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4">
            <Input
              {...register("txnId", { required: true })}
              size="lg"
              className="rounded"
              type="text"
              name="txnId"
              error={errors.txnId}
              label="Transaction ID"
            />
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4">
            <Textarea
              {...register("description", { required: false })}
              maxLength={300}
              size="lg"
              className="rounded"
              type="text"
              name="description"
              error={errors.description}
              label="Description"
            />
            <p class="text-xs text-gray-500">Max Characters 300</p>
          </div>
          <div>
            <h1 className="text-sm text-gray-800 mb-1">Add Payment Proof</h1>
            <div className="flex items-center flex-wrap gap-2 mb-2">
              {images.length > 0 &&
                images?.map((file) => (
                  <img
                    className="w-32 h-24 object-cover"
                    src={URL.createObjectURL(file)}
                    alt=""
                  />
                ))}
            </div>
          </div>

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full lg:h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 3 Images)
                </p>
              </div>
              <input
                onChange={(e) => handleImageSet(e.target.files[0])}
                type="file"
                id="dropzone-file"
                accept="image/*"
                multiple
                class="hidden"
              />
            </label>
          </div>

          <Button
            type="submit"
            className="mt-4 h-10 flex justify-center items-center gap-2 rounded-sm"
            fullWidth
          >
            {isLoading && <Spinner className="w-5" color="pink" />} Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default DepositForm;
