import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="">
      <h1 className="m-auto text-center mt-12 text-4xl font-bold bg-colorFour py-4 text-colorFive rounded-lg hover:bg-colorOne hover:text-colorSix duration-300">
        Login Form
      </h1>
      <form className="flex justify-center items-center flex-col my-[7rem]">
        <div className="form-control w-1/4 py-4">
          <label className="label">
            <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
              Email
            </span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="p-4 border-none outline-none rounded-lg text-colorSix font-poppins tracking-wide text-xl capitalize"
            required
          />
        </div>
        <div className="form-control w-1/4 py-4">
          <label className="label">
            <span className="label-text font-poppins tracking-wide text-xl text-colorOne font-semibold uppercase">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="password here"
            className="p-4 border-none outline-none rounded-lg text-colorSix font-poppins tracking-wide text-xl capitalize"
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
        <div className="form-control mt-6 w-1/4">
          <button className="bg-colorFour text-colorFive py-4 px-8 rounded-md text-xl font-semibold font-poppins  hover:bg-colorOne hover:text-colorSix border-2 border-colorSix duration-500">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
