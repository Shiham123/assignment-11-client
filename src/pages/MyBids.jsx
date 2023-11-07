import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/context';
import axios from 'axios';

const MyBids = () => {
  const context = useContext(AppContext);
  const { user } = context;
  const [data, setData] = useState([]);

  const loggedInUser = user?.email;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bidJob?email=${loggedInUser}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [loggedInUser]);

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
                Status
              </th>
              <th className="font-poppins text-xl md:text-2xl lg:text-3xl py-4 tracking-wider uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                const { _id, jobTitle, jobDeadline, status, loginUserEmail } =
                  item;
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
                      {status}
                    </td>
                    <td className="p-2">
                      {status === 'confirm' ? (
                        <button className="bg-colorSix text-colorOne py-4 px-8 rounded-lg font-poppins font-semibold tracking-wider capitalize border-2 border-colorSix hover:bg-colorTwo hover:text-colorSix duration-300">
                          complete
                        </button>
                      ) : (
                        ''
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

export default MyBids;
