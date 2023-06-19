import { Button, Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import {
  setAddCartProducts,
  setWishlistProducts,
} from "../../Slices/controllerSlice";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-hot-toast";
import { toast } from "react-toastify";

const wishlist = (
  <svg
    className="w-7"
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
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

const wishlisted = (
  <svg
    className="w-7"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-6 h-6"
  >
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

const AddCartAndWishlist = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { wishlistProducts, addCartProducts } = useSelector(
    (state) => state.controllerSlice
  );
  const dispatch = useDispatch();

  const handleGetWishlist = () => {
    fetch(`http://localhost:5000/api/wishlist/user/${user?._id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setWishlistProducts(data));
      });
  };

  const handleAddWishlist = (id) => {
    const newWishlist = {
      userId: user?._id,
      product: id,
    };
    fetch(`http://localhost:5000/api/wishlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newWishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status === "success") {
          handleGetWishlist();
        }
      });
  };

  const handleWishlistRemove = (id) => {
    fetch(`http://localhost:5000/api/wishlist/${user?._id}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          handleGetWishlist();
        }
      });
  };

  const wishlistedProduct = wishlistProducts?.find(
    (p) => p?.product?._id === product?._id
  );

  // ----------- add cart ------------
  const handleGetAddCart = () => {
    fetch(`http://localhost:5000/api/addcart/user/${user?._id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAddCartProducts(data));
      });
  };

  const addCartedProduct = addCartProducts?.find(
    (p) => p?.product?._id === product?._id
  );

  const handleAddCart = (id) => {
    if (addCartedProduct) {
      toast.error("Alreday Add Cart This Product.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      const newAddcart = {
        userId: user?._id,
        product: id,
      };
      fetch(`http://localhost:5000/api/addcart`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newAddcart),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.status === "success") {
            handleGetAddCart();
          }
        });
    }
  };

  return (
    <div className="flex justify-between items-center gap-2">
      <Button
        onClick={() => handleAddCart(product?._id)}
        className={`h-12 flex items-center justify-center gap-2 rounded-none font-bold w-full
      ${addCartedProduct ? "bg-blue-gray-300" : "bg-pink-500"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-cart-plus-fill"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"
            fill="white"
          ></path>{" "}
        </svg>
        <Typography>Add To Cart</Typography>
      </Button>

      {wishlistedProduct ? (
        <Button
          onClick={() => handleWishlistRemove(wishlistedProduct?._id)}
          className="h-12 px-4 rounded-none bg-green-500 font-bold text-pink-500"
        >
          {wishlisted}
        </Button>
      ) : (
        <Button
          onClick={() => handleAddWishlist(product?._id)}
          className="h-12 px-4 rounded-none bg-green-500 text-pink-500 font-bold"
        >
          {wishlist}
        </Button>
      )}
    </div>
  );
};

export default AddCartAndWishlist;
