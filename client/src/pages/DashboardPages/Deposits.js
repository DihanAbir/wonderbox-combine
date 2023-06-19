import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Card,
  Typography,
  Button,
  CardFooter,
  CardHeader,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import DepositTableRow from "../../components/tables/DepositTableRow";

const headerItems = ["Bank", "Branch", "Amount", "Status", "Date", "Action"];

const Deposits = () => {
  const { user } = useContext(AuthContext);

  const [deposits, setDeposits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState("All");

  const fetchDeposits = async (page) => {
    const filterConditions =
      (filter === "Pending" && false) || (filter === "Approved" && true);
    const ready = `&approved=${filterConditions}`;
    try {
      const response = await fetch(
        `http://localhost:5000/api/transaction/deposits/${
          user?._id
        }?page=${page}${filter !== "All" && ready}`
      );
      const data = await response.json();

      setDeposits(data.data);
      setCurrentPage(data.page);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchDeposits(currentPage);
  }, [currentPage, filter]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-between mb-2">
        <Typography className="mb-4">History</Typography>
        <Menu>
          <MenuHandler>
            <Button className="w-32 h-10 outline-none rounded-sm">
              {filter}
            </Button>
          </MenuHandler>
          <MenuList>
            {["All", "Pending", "Approved"].map((f, i) => (
              <button
                className="block w-full h-10 text-left hover:outline-none hover:bg-gray-50"
                onClick={() => setFilter(f)}
                key={i}
              >
                {f}
              </button>
            ))}
          </MenuList>
        </Menu>
      </div>
      <Card className="h-fit w-screen md:w-full overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              {headerItems?.map((item, i) => (
                <th key={i} className="bg-blue-500 p-4 text-left text-white">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal leading-none"
                  >
                    {item}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-scroll px-0">
            {deposits.map((d, i) => (
              <DepositTableRow key={i} data={d} />
            ))}
          </tbody>
        </table>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {currentPage} of {totalPages}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

export default Deposits;
