import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Main from "../layout/Main";
import Dashboard from "../layout/Dashboard";
import AddCard from "../pages/Profile/seller/AddCard";
import MyProducts from "../pages/Profile/seller/MyProducts";
import Login from "../pages/Login_Register/Login";
import Register from "../pages/Login_Register/Register";
import ProductDetails from "../components/ProductDetailsComponets/ProductDetails";
import MyAccount from "../pages/DashboardPages/MyAccount";
import MyOrders from "../pages/DashboardPages/MyOrders";
import RecipientRegister from "../pages/DashboardPages/RecipientRegister";
import SellerOrders from "../pages/DashboardPages/SellerOrders";
import MyShoppingAddress from "../pages/DashboardPages/MyShoppingAddress";
import BuyCard from "../pages/BuyCard/BuyCard";
import StoreProfile from "../pages/StoreProfile/StoreProfile";
import HistoryPage from "../pages/DashboardPages/HistoryPage";
import PriveteRoute from "./PriveteRoute";
import ProductList from "../pages/ProductList/ProductList";
import Stores from "../pages/Stores/Stores";
import About from "../pages/About/About";
import Invoice from "../pages/DashboardPages/Invoice";
import DepositForm from "../pages/DashboardPages/DepositForm";
import Deposits from "../pages/DashboardPages/Deposits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/about-us", element: <About></About> },
      { path: "/products", element: <Product></Product> },
      {
        path: "/product-list/:parent",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/product/cat/${params?.parent}`),
        element: <ProductList></ProductList>,
      },
      {
        path: "/product-list/:parent/:children",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/api/product/cat/${params?.parent}/${params.children}`
          ),
        element: <ProductList></ProductList>,
      },
      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/product/${params?.id}`),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/products/:cardId/buy",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/product/${params?.cardId}`),
        element: (
          <PriveteRoute>
            <BuyCard></BuyCard>
          </PriveteRoute>
        ),
      },
      {
        path: "/stores",
        element: <Stores></Stores>,
      },
      {
        path: "/stores/:username",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/store/getInfo/${params?.username}`),
        element: <StoreProfile></StoreProfile>,
      },

      // store
      { path: "/store/add-card", element: <AddCard></AddCard> },
      { path: "/store/products", element: <MyProducts></MyProducts> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PriveteRoute>
        <Dashboard></Dashboard>
      </PriveteRoute>
    ),
    children: [
      { path: "/dashboard", element: <MyAccount /> },
      { path: "/dashboard/my-account", element: <MyAccount /> },
      { path: "/dashboard/orders", element: <MyOrders /> },
      {
        path: "/dashboard/orders/:cardId",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/card/${params?.cardId}`),
        element: <Invoice />,
      },
      { path: "/dashboard/deposit-wallet", element: <DepositForm /> },
      { path: "/dashboard/deposits", element: <Deposits /> },
      { path: "/dashboard/recipient", element: <RecipientRegister /> },
      { path: "/dashboard/shopping-address", element: <MyShoppingAddress /> },
      { path: "/dashboard/seller-orders", element: <SellerOrders /> },
      { path: "/dashboard/history", element: <HistoryPage /> },
    ],
  },
]);

export default router;
