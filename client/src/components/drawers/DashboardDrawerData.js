import React from "react";
import { routes } from "../../utils/routesData";
import { Link, useLocation } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

const DashboardDrawerData = () => {
  const { pathname } = useLocation();
  return (
    <div className="grid grid-cols-1 gap-4 w-full px-4 mt-6 mx-auto relative">
      <Link to="/" className="flex items-center justify-start px-2">
        <Typography className="font-bold text-xl text-gray-100">
          WONDERBOX
        </Typography>
      </Link>
      <div className="mt-12">
        {routes?.map((route) => (
          <Link to={`/${route?.url}`}>
            <Button
              className={`flex items-center justify-start px-2 gap-2 py-3 rounded-sm shadow-none hover:shadow-none w-full hover:bg-gray-100 hover:text-gray-800
                            ${
                              pathname.includes(route?.url)
                                ? "bg-secondary text-gray-900"
                                : "bg-transparent text-gray-50"
                            }`}
            >
              <div className="w-6">{route?.img}</div>
              <h1 className="text-xs">{route.title}</h1>
            </Button>
          </Link>
        ))}
      </div>

      <Button className="text-white bg-primary w-full flex justify-center items-center gap-2 py-2 rounded-sm">
        <svg
          width="30"
          height="24"
          viewBox="0 0 30 34"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.3156 0.964844C15.7438 0.964844 16.1544 1.13494 16.4572 1.4377C16.7599 1.74047 16.93 2.1511 16.93 2.57928V18.7236C16.93 19.1518 16.7599 19.5624 16.4572 19.8652C16.1544 20.168 15.7438 20.3381 15.3156 20.3381C14.8874 20.3381 14.4768 20.168 14.174 19.8652C13.8713 19.5624 13.7012 19.1518 13.7012 18.7236V2.57928C13.7012 2.1511 13.8713 1.74047 14.174 1.4377C14.4768 1.13494 14.8874 0.964844 15.3156 0.964844ZM10.256 6.72837C10.47 7.09917 10.5281 7.53983 10.4172 7.9534C10.3064 8.36698 10.0359 8.7196 9.66508 8.93369C7.51046 10.1774 5.82645 12.0974 4.87426 14.3958C3.92207 16.6942 3.75491 19.2425 4.3987 21.6456C5.0425 24.0487 6.46128 26.1722 8.43497 27.6867C10.4087 29.2012 12.827 30.0222 15.3148 30.0222C17.8026 30.0222 20.2209 29.2012 22.1946 27.6867C24.1683 26.1722 25.5871 24.0487 26.2309 21.6456C26.8747 19.2425 26.7075 16.6942 25.7553 14.3958C24.8031 12.0974 23.1191 10.1774 20.9645 8.93369C20.6075 8.71286 20.3506 8.36168 20.2482 7.95462C20.1458 7.54756 20.206 7.11662 20.416 6.75317C20.6259 6.38972 20.9692 6.12233 21.373 6.0077C21.7768 5.89306 22.2093 5.9402 22.5789 6.1391C25.3488 7.73851 27.5135 10.2072 28.7373 13.1622C29.9612 16.1172 30.1758 19.3935 29.3479 22.483C28.5199 25.5724 26.6958 28.3023 24.1582 30.2494C21.6207 32.1964 18.5116 33.2518 15.3132 33.2518C12.1147 33.2518 9.00565 32.1964 6.46811 30.2494C3.93058 28.3023 2.1064 25.5724 1.27848 22.483C0.450566 19.3935 0.665174 16.1172 1.88902 13.1622C3.11288 10.2072 5.27758 7.73851 8.04741 6.1391C8.23099 6.03278 8.43372 5.96369 8.64401 5.93576C8.85431 5.90784 9.06804 5.92163 9.273 5.97636C9.47796 6.03108 9.67013 6.12567 9.83851 6.2547C10.0069 6.38374 10.1482 6.5447 10.2543 6.72837H10.256Z"
            fill="currentColor8B8B8B"
          />
        </svg>
        <p>Logout</p>
      </Button>
    </div>
  );
};

export default DashboardDrawerData;
