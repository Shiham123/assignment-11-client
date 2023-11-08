import { useContext, useEffect } from 'react';
import { AppContext } from '../Context/context';
import axios from 'axios';
import { useState } from 'react';

import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';

const BidRequest = () => {
  const context = useContext(AppContext);
  const [bidData, setBidData] = useState([]);
  const { user } = context;
  const loggedInEmployer = user?.email;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bidJob/bid?email=${loggedInEmployer}`)
      .then((response) => {
        console.log(response);
        setBidData(response.data);
      })
      .catch((error) => console.log(error));
  }, [loggedInEmployer]);

  const handleAccept = (id) => {
    const statusData = { status: 'progress' };

    const updatedStatus = bidData.map((item) => {
      if (item._id === id) {
        return { ...item, status: 'progress' };
      }
      return item;
    });

    setBidData(updatedStatus);

    axios
      .patch(`http://localhost:5000/bidJob/bid/${id}`, statusData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const handleReject = (id) => {
    const statusData = { status: 'rejected' };

    const updatedStatus = bidData.map((item) => {
      if (item._id === id) {
        return { ...item, status: 'rejected' };
      }
      return item;
    });

    setBidData(updatedStatus);
    axios
      .patch(`http://localhost:5000/bidJob/bid/${id}`, statusData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-[3rem] mx-[2rem]">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto m-auto text-center">
          <thead>
            <tr className="bg-colorTwo text-colorSix ">
              <th className="font-poppins text-xl md:text-2xl lg:text-3xl py-4 tracking-wider uppercase">
                Job Title
              </th>
              <th className="font-poppins text-xl md:text-2xl lg:text-3xl py-4 tracking-wider uppercase">
                Email
              </th>
              <th className="font-poppins text-xl md:text-2xl lg:text-3xl py-4 tracking-wider uppercase">
                Deadline
              </th>
              <th className="font-poppins text-xl md:text-2xl lg:text-3xl py-4 tracking-wider uppercase">
                Bid Price
              </th>
              <th className="font-poppins text-xl md:text-2xl lg:text-3xl py-4 tracking-wider uppercase">
                Status
              </th>
              <th className="font-poppins text-xl md:text-2xl lg:text-3xl py-4 tracking-wider uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bidData &&
              bidData.map((item) => {
                const {
                  _id,
                  jobTitle,
                  jobDeadline,
                  status,
                  loginUserEmail,
                  bidPrice,
                } = item;
                return (
                  <tr
                    className="bg-colorTwo text-colorSix border-t-2 border-colorFour"
                    key={_id}
                  >
                    <td className="text-sm md:text-xl lg:text-2xl font-poppins py-8 capitalize font-semibold">
                      {jobTitle}
                    </td>
                    <td className="text-sm md:text-xl lg:text-2xl font-poppins py-8 capitalize font-semibold">
                      {loginUserEmail}
                    </td>
                    <td className="text-sm md:text-xl lg:text-2xl font-poppins py-8 capitalize font-semibold">
                      {jobDeadline}
                    </td>
                    <td className="text-sm md:text-xl lg:text-2xl font-poppins py-8 capitalize font-semibold">
                      ${bidPrice}
                    </td>
                    <td className="text-sm md:text-xl lg:text-2xl font-poppins py-8 capitalize font-semibold">
                      {status}
                    </td>
                    <td className="p-2">
                      {status === 'progress' || status === 'rejected' ? (
                        <ProgressBar
                          percent={status === 'progress' ? 50 : 100}
                          filledBackground={
                            status === 'progress'
                              ? 'linear-gradient(to right, #fefb72, #f0bb31)'
                              : 'linear-gradient(to right, #ff0000, #ff0000)'
                          }
                        />
                      ) : status === 'completed' ? (
                        <ProgressBar
                          percent={100}
                          filledBackground="linear-gradient(to right, #00ff00, #00ff00)" // Customize the gradient for the 'complete' state
                        />
                      ) : (
                        <div className="flex flex-col gap-4">
                          <button
                            onClick={() => handleAccept(_id)}
                            className="bg-colorSix text-colorOne py-4 px-8 rounded-lg font-poppins font-semibold tracking-wider capitalize border-2 border-colorSix hover:bg-colorTwo hover:text-colorSix duration-300"
                          >
                            Accept Bid
                          </button>
                          <button
                            onClick={() => handleReject(_id)}
                            className="bg-colorSix text-colorOne py-4 px-8 rounded-lg font-poppins font-semibold tracking-wider capitalize border-2 border-colorSix hover:bg-colorTwo hover:text-colorSix duration-300"
                          >
                            Reject Bid
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequest;
