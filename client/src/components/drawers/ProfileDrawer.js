import React, { useContext } from "react";
import { Drawer } from "@material-tailwind/react";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpenProfileDrawer } from "../../Slices/controllerSlice";

export default function ProfileDrawer() {
  const { user, setUser, logout } = useContext(AuthContext);
  const { openProfileDrawer } = useSelector((state) => state.controllerSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("wonderboxtoken");
    dispatch(setOpenProfileDrawer(false));
    logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <Drawer
      open={openProfileDrawer}
      onClose={() => dispatch(setOpenProfileDrawer(false))}
      placement="right"
      className="p-4"
    >
      <ul className="relative flex flex-col overflow-y-auto overflow-x-hidden cursor-pointer">
        <div className="w-full flex items-center gap-2 border-b px-3 pb-2 sticky z-50 bg-white top-0 cursor-pointer">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white">
            {user?.image ? (
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={user?.image}
                alt=""
              />
            ) : (
              <span>{user?.name?.slice(0, 1)} </span>
            )}
          </div>
          <div className="flex flex-col items-start">
            <span className="text-black uppercase font-bold">{user?.name}</span>
            <Link
              to="/my-account"
              onClick={() => dispatch(setOpenProfileDrawer(false))}
              className="text-blue-600 text-xs"
            >
              View Profile
            </Link>
          </div>
        </div>
        <li>
          <Link
            to="/dashboard"
            onClick={() => dispatch(setOpenProfileDrawer(false))}
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Dashboard
            </span>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/orders"
            onClick={() => dispatch(setOpenProfileDrawer(false))}
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                className="w-5 h-5"
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              All Orders
            </span>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/deposit-wallet"
            onClick={() => dispatch(setOpenProfileDrawer(false))}
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Deposit Wallet
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/notification"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Notifications
            </span>
            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
              1.2k
            </span>
          </Link>
        </li>

        <li onClick={() => handleLogout()}>
          <span className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
          </span>
        </li>
      </ul>
    </Drawer>
  );
}
