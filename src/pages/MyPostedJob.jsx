import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/context';
import axios from 'axios';

const MyPostedJob = () => {
  const context = useContext(AppContext);
  const [userData, setUserData] = useState([]);
  const { user } = context;
  const contextEmail = user?.email;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobPosted?email=${contextEmail}`)
      .then((response) => {
        // console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => console.log(error));
  }, [contextEmail]);

  return (
    <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8 my-[5rem]">
      {userData.map((item) => {
        const { _id, jobTitle, jobCategory } = item;
        return (
          <div
            key={_id}
            className="border-2 border-colorOne rounded-lg hover:bg-colorOne hover:text-colorFive duration-300 hover:-translate-y-5 p-8 h-full w-full"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold tracking-wide">
              {jobTitle}
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl uppercase font-poppins py-4 font-semibold">
              {jobCategory}
            </h3>

            <div className="flex justify-center items-center gap-8 my-5">
              <button className="border-2 border-colorOne text-sm md:text-xl lg:text-2xl px-4 py-2 hover:bg-colorSix hover:text-colorTwo duration-300 font-poppins uppercase font-semibold tracking-wider rounded-lg">
                Update job
              </button>
              <button className="border-2 border-colorOne text-sm md:text-xl lg:text-2xl px-4 py-2 hover:bg-colorSix hover:text-colorTwo duration-300 font-poppins uppercase font-semibold tracking-wider rounded-lg">
                Delete job
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyPostedJob;
