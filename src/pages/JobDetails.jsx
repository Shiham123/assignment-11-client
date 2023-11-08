import { useLoaderData } from 'react-router-dom';
import BidForm from './BidForm';
import { Helmet } from 'react-helmet-async';

const JobDetails = () => {
  const loader = useLoaderData();
  const { jobTitle, jobDeadline, jobMinPrice, jobMaxPrice, jobDescription } =
    loader;

  return (
    <div>
      <Helmet>
        <title>Job Portal || Job details</title>
      </Helmet>
      <h1 className="m-auto text-center mt-12 text-4xl font-bold bg-colorFour py-4 text-colorFive rounded-lg hover:bg-colorOne hover:text-colorSix duration-300">
        Job Details
      </h1>
      <div className="flex flex-col justify-center items-center gap-4 mt-4 border-2 border-colorOne rounded-lg p-4 hover:bg-colorOne hover:text-colorSix duration-300 hover:scale-90">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold capitalize tracking-wider m-auto text-center">
          Job Name : {jobTitle}
        </h1>
        <p className="text-sm md:text-xl lg:text-2xl font-poppins">
          Job Deadline : {jobDeadline}
        </p>
        <p className="text-sm md:text-xl lg:text-2xl font-poppins font-semibold">
          Minimum job Price : ${jobMinPrice}
        </p>
        <p className="text-sm md:text-xl lg:text-2xl font-poppins font-semibold">
          Maximum job Price : ${jobMaxPrice}
        </p>
        <p className="font-poppins text-sm md:text-xl lg:text-2xl capitalize tracking-widest m-auto text-center">
          {jobDescription}
        </p>
      </div>

      {/*  */}
      <BidForm loader={loader} />
    </div>
  );
};

export default JobDetails;
