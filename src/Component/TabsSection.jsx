import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsSection = () => {
  const [category, setCategory] = useState('web-development');
  const [filterByCategory, setFilterByCategory] = useState([]);

  const handleClick = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-brown.vercel.app/jobsCategory/${category}`
      )
      .then((response) => {
        // console.log(response);
        setFilterByCategory(response.data);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div className="mt-[5rem] border-t-2 border-colorOne pt-20">
      <Tabs>
        <TabList className="flex flex-col justify-center items-center md:flex-col lg:flex-row gap-8">
          <Tab
            onClick={() => handleClick('web-development')}
            className="bg-colorOne focus:bg-white py-4 px-12 rounded-lg border-none outline-none cursor-pointer"
          >
            <h3 className="font-poppins text-colorFour text-3xl font-bold capitalize">
              Web Development
            </h3>
          </Tab>
          <Tab
            onClick={() => handleClick('graphic-design')}
            className="bg-colorOne focus:bg-white py-4 px-12 rounded-lg border-none outline-none cursor-pointer"
          >
            <h3 className="font-poppins text-colorFour text-3xl font-bold capitalize">
              Graphic design
            </h3>
          </Tab>
          <Tab
            onClick={() => handleClick('digital-marketing')}
            className="bg-colorOne focus:bg-white py-4 px-12 rounded-lg border-none outline-none cursor-pointer"
          >
            <h3 className="font-poppins text-colorFour text-3xl font-bold capitalize">
              Digital marketing
            </h3>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 m-8">
            {filterByCategory.map((item, index) => {
              const {
                _id,
                jobTitle,
                jobDeadline,
                jobMaxPrice,
                jobMinPrice,
                jobDescription,
              } = item;

              return (
                <div
                  key={index}
                  className="border-2 h-full border-colorOne p-8 hover:bg-colorOne text-colorTwo hover:text-colorSix hover:scale-110 duration-300"
                >
                  <h2 className="text-3xl font-poppins font-bold capitalize tracking-wide">
                    Job Title : {jobTitle}
                  </h2>
                  <p className="text-2xl my-2 font-poppins font-semibold">
                    Deadline : {jobDeadline}
                  </p>
                  <p className="text-2xl my-2 font-poppins font-semibold">
                    ${jobMaxPrice} / {jobMinPrice}
                  </p>
                  <p className="text-sm md:text-md lg:text-xl my-2 font-poppins font-normal leading-10">
                    {jobDescription}
                  </p>
                  <Link to={`/jobDetails/${_id}`}>
                    <button className="my-8 border-2 border-colorTwo px-6 py-2 capitalize font-poppins text-xl font-bold hover:bg-colorSix hover:text-colorOne duration-300">
                      bid now
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 m-8">
            {filterByCategory.map((item, index) => {
              const {
                _id,
                jobTitle,
                jobDeadline,
                jobMaxPrice,
                jobMinPrice,
                jobDescription,
              } = item;

              return (
                <div
                  key={index}
                  className="h-full border-2 border-colorOne p-8 hover:bg-colorOne text-colorTwo hover:text-colorSix hover:scale-110 duration-300"
                >
                  <h2 className="text-3xl font-poppins font-bold capitalize tracking-wide">
                    Job Title : {jobTitle}
                  </h2>
                  <p className="text-2xl my-2 font-poppins font-semibold">
                    Deadline : {jobDeadline}
                  </p>
                  <p className="text-2xl my-2 font-poppins font-semibold">
                    ${jobMaxPrice} / {jobMinPrice}
                  </p>
                  <p className="text-sm md:text-md lg:text-xl my-2 font-poppins font-normal leading-10">
                    {jobDescription}
                  </p>
                  <Link to={`/jobDetails/${_id}`}>
                    <button className="my-8 border-2 border-colorTwo px-6 py-2 capitalize font-poppins text-xl font-bold hover:bg-colorSix hover:text-colorOne duration-300">
                      bid now
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 m-8">
            {filterByCategory.map((item, index) => {
              const {
                _id,
                jobTitle,
                jobDeadline,
                jobMaxPrice,
                jobMinPrice,
                jobDescription,
              } = item;

              return (
                <div
                  key={index}
                  className="h-full border-2 border-colorOne p-8 hover:bg-colorOne text-colorTwo hover:text-colorSix hover:scale-110 duration-300"
                >
                  <h2 className="text-3xl font-poppins font-bold capitalize tracking-wide">
                    Job Title : {jobTitle}
                  </h2>
                  <p className="text-2xl my-2 font-poppins font-semibold">
                    Deadline : {jobDeadline}
                  </p>
                  <p className="text-2xl my-2 font-poppins font-semibold">
                    ${jobMaxPrice} / {jobMinPrice}
                  </p>
                  <p className="text-sm md:text-md lg:text-xl my-2 font-poppins font-normal leading-10">
                    {jobDescription}
                  </p>
                  <Link to={`/jobDetails/${_id}`}>
                    <button className="my-8 border-2 border-colorTwo px-6 py-2 capitalize font-poppins text-xl font-bold hover:bg-colorSix hover:text-colorOne duration-300">
                      bid now
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsSection;
