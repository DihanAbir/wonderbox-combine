import React, { Fragment, useContext, useEffect, useState } from 'react';
import {
  Card,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { AuthContext } from '../../ContextAPI/AuthProvider';
import HistoryTableRow from '../../components/tables/HistoryTableRow';


const headerItems = ["Title", "Message", "Type", "Date", "Action"]

const HistoryPage = () => {
  const { user } = useContext(AuthContext);

  const [histories, setHistories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchHistories = async (page) => {
    try {
      const response = await fetch(`http://localhost:5000/api/history/role/${user?._id}?page=${page}`);
      const data = await response.json();

      setHistories(data.data.histories);
      setCurrentPage(data.data.currentPage);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  useEffect(() => {
    fetchHistories(currentPage);
  }, [currentPage]);

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
      <Typography className="mb-4" >History</Typography>
      <Card className="h-fit w-screen md:w-full overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              {
                headerItems?.map((item, i) => (
                  <th key={i} className="bg-blue-500 p-4 text-left text-white">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal leading-none"
                    >
                      {item}
                    </Typography>
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody className="overflow-scroll px-0">
            {histories.map((history, i) => <HistoryTableRow key={i} data={history} />)}
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
              disabled={currentPage === 1}
              onClick={handlePrevPage}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

export default HistoryPage;
