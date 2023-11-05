import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/context';
import Swal from 'sweetalert2';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const { createUserByEmailPassword, logOut, showingProfile } = context;
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get('username');
    const email = formData.get('email');
    const url = formData.get('url');
    const password = formData.get('password');

    let passwordTest = null;

    if (password.length < 7) {
      toast('password must be 7 characters');
      passwordTest = true;
    }

    if (!/[A-Z]/.test(password)) {
      toast('password must contain at least one capital');
      passwordTest = true;
    }

    if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+/.test(password)) {
      toast('password must contain special character');
      passwordTest = true;
    }

    if (passwordTest) {
      console.log(passwordTest);
      return;
    }

    createUserByEmailPassword(email, password)
      .then((result) => {
        console.log(result);

        navigate('/login');

        showingProfile(userName, url)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));

        logOut()
          .then((result) => {
            console.log(result);
            Swal.fire({
              icon: 'success',
              text: 'User created successfully',
              footer: 'please login',
            });
            formRef.current.reset();
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <ToastContainer />
      <h1 className="m-auto text-center mt-12 text-4xl font-bold bg-colorFour py-4 text-colorFive rounded-lg hover:bg-colorOne hover:text-colorSix duration-300">
        Register Form
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col my-[7rem]"
      >
        {/*  */}
        <div className="form-control w-1/4 py-4">
          <label className="label">
            <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
              User name
            </span>
          </label>
          <input
            type="text"
            placeholder="name here"
            name="username"
            className="p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl capitalize"
            required
          />
        </div>
        {/*  */}
        <div className="form-control w-1/4 py-4">
          <label className="label">
            <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
              Email
            </span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
            required
          />
        </div>
        {/*  */}
        <div className="form-control w-1/4 py-4">
          <label className="label">
            <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="password here"
            name="password"
            className="p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl"
            required
          />
        </div>
        {/*  */}
        <div className="form-control w-1/4 py-4">
          <label className="label">
            <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
              Photo Url
            </span>
          </label>
          <input
            type="url"
            placeholder="Url here"
            name="url"
            className="p-4 border-none outline-none rounded-lg text-colorOne font-poppins tracking-wide text-xl capitalize"
            required
          />
        </div>

        {/*  */}
        <p className="font-poppins text-xl my-4 text-colorOne">
          Already have a account{' '}
          <Link to="/login">
            <span className="font-bold text-colorFour hover:bg-colorOne hover:text-colorSix p-2 rounded-lg duration-300 cursor-pointer">
              Login
            </span>
          </Link>
        </p>
        <div className="form-control mt-6 w-1/4">
          <button className="bg-colorFour text-colorFive py-4 px-8 rounded-md text-xl font-semibold font-poppins  hover:bg-colorOne hover:text-colorSix border-2 border-colorSix duration-500">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
