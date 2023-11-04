import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-colorOne rounded-lg p-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-colorOne rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-colorFour px-4 font-poppins text-xl font-semibold py-4'
                    : 'text-colorSix px-4 font-poppins text-xl font-semibold py-4'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/addJob"
                className={({ isPending, isActive }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-colorFour px-4 font-poppins text-xl font-semibold py-4'
                    : 'text-colorSix px-4 font-poppins text-xl font-semibold py-4'
                }
              >
                Add Job
              </NavLink>
              <NavLink
                to="/myPostedJob"
                className={({ isPending, isActive }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-colorFour px-4 font-poppins text-xl font-semibold py-4'
                    : 'text-colorSix px-4 font-poppins text-xl font-semibold py-4'
                }
              >
                My Posted Job
              </NavLink>{' '}
              <NavLink
                to="/myBids"
                className={({ isPending, isActive }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-colorFour px-4 font-poppins text-xl font-semibold py-4'
                    : 'text-colorSix px-4 font-poppins text-xl font-semibold py-4'
                }
              >
                My Bids
              </NavLink>{' '}
              <NavLink
                to="/bidRequest"
                className={({ isPending, isActive }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-colorFour px-4 font-poppins text-xl font-semibold py-4'
                    : 'text-colorSix px-4 font-poppins text-xl font-semibold py-4'
                }
              >
                Bid Requests
              </NavLink>{' '}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="rounded-full"
              src="https://raw.githubusercontent.com/Shiham123/Assignment-11-img/master/_aecdaa03-7684-496f-a00a-ed8931d61b22.jpeg"
              alt=""
              width="50px"
            />
            <h5 className="font-poppins text-colorSix font-bold tracking-widest uppercase">
              Job portal
            </h5>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-colorFour px-4 font-poppins text-xl font-semibold'
                  : 'text-colorSix px-4 font-poppins text-xl font-semibold'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/addJob"
              className={({ isPending, isActive }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-colorFour px-4 font-poppins text-xl font-semibold'
                  : 'text-colorSix px-4 font-poppins text-xl font-semibold'
              }
            >
              Add Job
            </NavLink>
            <NavLink
              to="/myPostedJob"
              className={({ isPending, isActive }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-colorFour px-4 font-poppins text-xl font-semibold'
                  : 'text-colorSix px-4 font-poppins text-xl font-semibold'
              }
            >
              My Posted Job
            </NavLink>{' '}
            <NavLink
              to="/myBids"
              className={({ isPending, isActive }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-colorFour px-4 font-poppins text-xl font-semibold'
                  : 'text-colorSix px-4 font-poppins text-xl font-semibold'
              }
            >
              My Bids
            </NavLink>{' '}
            <NavLink
              to="/bidRequest"
              className={({ isPending, isActive }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-colorFour px-4 font-poppins text-xl font-semibold'
                  : 'text-colorSix px-4 font-poppins text-xl font-semibold'
              }
            >
              Bid Requests
            </NavLink>{' '}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
