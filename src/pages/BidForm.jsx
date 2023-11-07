import PropTypes from 'prop-types'; // Im
import { AppContext } from '../Context/context';
import { useContext } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const BidForm = (props) => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const { user } = context;
  const loginUserEmail = user?.email;

  const { loader } = props;
  const { jobTitle, employerEmail, jobDeadline } = loader;

  const handleSubmit = (event) => {
    event.preventDefault();

    const bidInfo = {
      jobTitle,
      loginUserEmail,
      jobDeadline,
      status: 'pending',
    };

    axios
      .post('http://localhost:5000/bidJob', bidInfo)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          text: 'Success fully bid on this job',
        });
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="m-auto text-center mt-12 text-4xl font-bold bg-colorFour py-4 text-colorFive rounded-lg hover:bg-colorOne hover:text-colorSix duration-300">
        Place your bid
      </h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row md:flex-row gap-4 my-4">
            {/*  */}
            <div className="w-full md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                  your bidding amount
                </span>
              </label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
                required
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                  Deadline
                </span>
              </label>
              <input
                type="date"
                placeholder="Deadline"
                name="deadline"
                className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
                required
                defaultValue={jobDeadline}
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col lg:flex-row md:flex-row gap-4 my-4">
            {/*  */}
            <div className="w-full md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                  Buyer Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Buyer Email"
                name="buyer-email"
                className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
                required
                defaultValue={employerEmail}
                readOnly
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2">
              <label className="label">
                <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                  User email
                </span>
              </label>
              <input
                type="email"
                placeholder="User email"
                name="user-email"
                className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
                required
                defaultValue={loginUserEmail}
                readOnly
              />
            </div>
          </div>
          {/*  */}
          {loginUserEmail === employerEmail ? (
            <button
              disabled
              className="bg-colorSix my-8 w-full py-4 px-8 rounded-md text-xl font-semibold font-poppins text-colorOne hover:bg-colorOne hover:text-colorSix border-2 border-colorOne duration-500"
            >
              This is your posted job unable to bid
            </button>
          ) : (
            <button
              type="submit"
              className="bg-colorSix my-8 w-full py-4 px-8 rounded-md text-xl font-semibold font-poppins text-colorOne hover:bg-colorOne hover:text-colorSix border-2 border-colorOne duration-500"
            >
              Bid on the project
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

BidForm.propTypes = {
  loader: PropTypes.object,
};

export default BidForm;
