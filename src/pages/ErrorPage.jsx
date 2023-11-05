import Lottie from 'lottie-react';
import ErrorElement from '../assets/Animation - 1699147951880.json';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="w-2/4 max-w-screen-2xl mx-auto">
      <Lottie animationData={ErrorElement} />
      <div className="m-auto text-center my-8">
        <Link to={'/'}>
          <button className="bg-colorSix py-4 px-8 rounded-md text-xl font-semibold font-poppins text-colorOne hover:bg-colorOne hover:text-colorSix border-2 border-colorSix duration-500">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
