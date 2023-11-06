import { useContext, useRef } from 'react';
import { AppContext } from '../Context/context';

const AddJob = () => {
  const formRef = useRef(null);
  const context = useContext(AppContext);
  const { user } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const employerEmail = formData.get('email');
    const jobTitle = formData.get('jobTitle');
    const jobDeadline = formData.get('deadline');
    const jobDescription = formData.get('jobDescription');
    const jobCategory = formData.get('category');
    const jobMinPrice = formData.get('minPrice');
    const jobMaxPrice = formData.get('maxPrice');
    const jobInfo = {
      employerEmail,
      jobTitle,
      jobDeadline,
      jobDescription,
      jobCategory,
      jobMinPrice,
      jobMaxPrice,
    };

    fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(jobInfo),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    formRef.current.reset();
  };
  return (
    <div>
      <h1 className="m-auto text-center mt-12 text-2xl md:text-3xl lg:text-4xl font-bold bg-colorFour py-4 text-colorFive rounded-lg hover:bg-colorOne hover:text-colorSix duration-300">
        Post A Job
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action=""
        className="p-2 mt-20"
      >
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
              defaultValue={user?.email}
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
              className="w-full p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-colorSix w-full py-4 px-8 rounded-md text-xl font-semibold font-poppins text-colorOne hover:bg-colorOne hover:text-colorSix border-2 border-colorOne duration-500"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
