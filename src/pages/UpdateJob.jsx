import axios from 'axios';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const UpdateJob = () => {
  const loader = useLoaderData();
  const {
    _id,
    jobDeadline,
    employerEmail,
    jobTitle,
    jobDescription,
    jobCategory,
    jobMaxPrice,
    jobMinPrice,
  } = loader;

  const handleUpdate = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('jobTitle');
    const deadline = formData.get('deadline');
    const description = formData.get('jobDescription');
    const category = formData.get('category');
    const lowPrice = formData.get('minPrice');
    const highPrice = formData.get('maxPrice');

    const dataUpdate = {
      title,
      deadline,
      description,
      category,
      lowPrice,
      highPrice,
    };

    axios
      .put(
        `https://assignment-11-server-brown.vercel.app/jobs/${_id}`,
        dataUpdate
      )
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          text: 'Data updated',
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <title>Job Portal || Update Job</title>
      </Helmet>
      <h1 className="m-auto text-center mt-12 text-2xl md:text-3xl lg:text-4xl font-bold bg-colorFour py-4 text-colorFive rounded-lg hover:bg-colorOne hover:text-colorSix duration-300 uppercase font-poppins">
        Update job
      </h1>
      <form onSubmit={handleUpdate} className="p-2 mt-20">
        <div className="flex flex-col lg:flex-row md:flex-row gap-4">
          <div className="w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                Email employer
              </span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
              required
              defaultValue={employerEmail}
              readOnly
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                Job title
              </span>
            </label>
            <input
              type="text"
              placeholder="Job title"
              name="jobTitle"
              defaultValue={jobTitle}
              className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
              required
            />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-4 my-12">
          <div className="w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                Deadline
              </span>
            </label>
            <input
              type="date"
              placeholder="date"
              name="deadline"
              defaultValue={jobDeadline}
              className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
              required
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                Job Description
              </span>
            </label>
            <input
              type="text"
              placeholder="Job description"
              name="jobDescription"
              defaultValue={jobDescription}
              className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
              required
            />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-4 my-12">
          <div className="w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                category
              </span>
            </label>
            <select
              name="category"
              defaultValue={jobCategory}
              className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
            >
              <option value="web-development">Web Development</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="digital-marketing">Digital Marketing</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                Minimum price
              </span>
            </label>
            <input
              type="text"
              placeholder="Minimum price"
              name="minPrice"
              defaultValue={jobMinPrice}
              className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
              required
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
                Maximum price
              </span>
            </label>
            <input
              type="number"
              placeholder="Maximum price"
              name="maxPrice"
              defaultValue={jobMaxPrice}
              className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-colorSix w-full py-4 px-8 rounded-md text-xl font-semibold font-poppins text-colorOne hover:bg-colorOne hover:text-colorSix border-2 border-colorOne duration-500"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default UpdateJob;
