import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenWishlistDrawer,
  setWishlistProducts,
} from "../../Slices/controllerSlice";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import { Link } from "react-router-dom";
import { Drawer } from "@material-tailwind/react";

const WishlistDrawer = () => {
  const { user } = useContext(AuthContext);
  const { openWishlistDrawer, wishlistProducts } = useSelector(
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

  useEffect(() => {
    handleGetWishlist();
  }, [user?._id]);

  const handleWishlistRemove = (id) => {
    fetch(`http://localhost:5000/api/wishlist/${user?._id}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          handleGetWishlist();
        }
      });
  };

  const totalPrice = wishlistProducts.reduce((accumulator, product) => {
    return accumulator + parseInt(product.product.price);
  }, 0);

  return (
    <Drawer
      open={openWishlistDrawer}
      onClose={() => dispatch(setOpenWishlistDrawer(false))}
      placement="right"
      className="p-4"
    >
      <div className="pointer-events-auto w-full">
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex-1 overflow-y-auto py-6">
            <ul className="-my-6 divide-y divide-gray-200">
              {wishlistProducts &&
                wishlistProducts.map((product) => (
                  <li key={product?.id} className="flex py-6">
                    <Link
                      to={`/products/${product?.product?._id}`}
                      className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                    >
                      <img
                        src={product?.product?.images[0]}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </Link>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <Link to={`/products/${product?.product?._id}`}>
                            {product?.product?.title}
                          </Link>
                          <p className="ml-4">{product?.product?.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product?.product?.type}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty 1</p>

                        <button
                          onClick={() => handleWishlistRemove(product?._id)}
                          className="flex"
                          type="button"
                        >
                          <span className="font-medium text-indigo-600 hover:text-indigo-500">
                            Remove
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {wishlistProducts.length === 0 && (
            <div className="flex justify-center items-center w-full h-full">
              <h1 className="text-center font-bold text-2xl text-primary">
                No Wishlist Products
              </h1>
            </div>
          )}

          {wishlistProducts.length > 0 && (
            <div className="border-t border-gray-200 py-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${totalPrice}.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-darkPrimary"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default WishlistDrawer;
