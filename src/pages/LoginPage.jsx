import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useContext, useRef } from 'react';
import { AppContext } from '../Context/context';

import Swal from 'sweetalert2';

const LoginPage = () => {
  const context = useContext(AppContext);
  const { signInGoogle, loginByEmailPassword } = context;
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    loginByEmailPassword(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : '/');

        Swal.fire({
          icon: 'success',
          text: 'Login successfully',
        });
        formRef.current.reset();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          text: 'Login failed',
        });
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : '/');
        Swal.fire({
          icon: 'success',
          text: 'google login successfully',
        });
        formRef.current.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="m-auto text-center">
      <h1 className="m-auto text-center mt-12 text-4xl font-bold bg-colorFour py-4 text-colorFive rounded-lg hover:bg-colorOne hover:text-colorSix duration-300">
        Login Form
      </h1>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="flex justify-center items-center flex-col my-[4rem]"
      >
        <div className="form-control lg:w-1/4 md:w-3/4 w-full py-4">
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
        <div className="form-control lg:w-1/4 md:w-3/4 w-full py-4">
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
        <p className="font-poppins text-xl my-4 text-colorOne">
          Don&apos;t have a account{' '}
          <Link to="/register">
            <span className="font-bold text-colorFour hover:bg-colorOne hover:text-colorSix p-2 rounded-lg duration-300 cursor-pointer">
              Register
            </span>
          </Link>
        </p>
        <div className="form-control mt-6 lg:w-1/4 md:w-3/4 w-full">
          <button className="bg-colorFour text-colorFive py-4 px-8 rounded-md text-xl font-semibold font-poppins  hover:bg-colorOne hover:text-colorSix border-2 border-colorSix duration-500">
            Login
          </button>
        </div>
      </form>
      <button
        onClick={handleGoogle}
        className="bg-colorFour text-colorFive py-4 px-8 rounded-md text-xl font-semibold font-poppins  hover:bg-colorOne hover:text-colorSix border-2 border-colorSix duration-500"
      >
        <div className="flex justify-center items-center gap-8">
          <AiOutlineGoogle size={40} /> <span>Login with Google</span>
        </div>
      </button>
    </div>
  );
};

export default LoginPage;
