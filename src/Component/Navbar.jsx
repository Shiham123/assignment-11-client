import { NavLink, Link } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { useContext } from 'react';
import { AppContext } from '../Context/context';
import Swal from 'sweetalert2';

const Navbar = () => {
  const context = useContext(AppContext);
  const { user, logOut } = context;

  const photoUrl = user?.photoURL;
  const displayName = user?.displayName;

  const logOutUser = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: 'success',
          text: 'Logout successfully',
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-colorOne rounded-lg p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FiAlignJustify color="white" size={30} />
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
                    ? 'text-colorFive px-4 font-poppins text-xl font-semibold py-4'
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
                    ? 'text-colorFive px-4 font-poppins text-xl font-semibold py-4'
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
                    ? 'text-colorFive px-4 font-poppins text-xl font-semibold py-4'
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
                    ? 'text-colorFive px-4 font-poppins text-xl font-semibold py-4'
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
                    ? 'text-colorFive px-4 font-poppins text-xl font-semibold py-4'
                    : 'text-colorSix px-4 font-poppins text-xl font-semibold py-4'
                }
              >
                Bid Requests
              </NavLink>{' '}
              <div className="lg:hidden md:block block my-4">
                {user && (
                  <div className="flex justify-center items-center gap-5 mx-4">
                    <h1 className="text-sm font-semibold font-poppins text-colorFive">
                      {displayName}
                    </h1>
                    <img
                      className="rounded-full border-2 p-1 border-colorSix object-cover"
                      src={photoUrl}
                      alt=""
                      width="70px"
                    />
                  </div>
                )}
              </div>
              <div className="block md:block lg:hidden my-4">
                <div className="flex items-center gap-4">
                  <Link to={'/'}>
                    <img
                      className="rounded-full"
                      src="https://raw.githubusercontent.com/Shiham123/Assignment-11-img/master/_aecdaa03-7684-496f-a00a-ed8931d61b22.jpeg"
                      alt=""
                      width="50px"
                    />
                  </Link>
                  <Link to="/">
                    <h5 className="font-poppins text-colorSix font-bold tracking-widest uppercase hover:text-colorFive">
                      Job portal
                    </h5>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
          <div className="hidden md:block lg:block">
            <div className="flex items-center gap-4">
              <Link to={'/'}>
                <img
                  className="rounded-full"
                  src="https://raw.githubusercontent.com/Shiham123/Assignment-11-img/master/_aecdaa03-7684-496f-a00a-ed8931d61b22.jpeg"
                  alt=""
                  width="50px"
                />
              </Link>
              <Link to="/">
                <h5 className="font-poppins text-colorSix font-bold tracking-widest uppercase hover:text-colorFive">
                  Job portal
                </h5>
              </Link>
            </div>
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
                  ? 'text-colorFive px-4 font-poppins text-xl font-semibold'
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
                  ? 'text-colorFive px-4 font-poppins text-xl font-semibold'
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
                  ? 'text-colorFive px-4 font-poppins text-xl font-semibold'
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
                  ? 'text-colorFive px-4 font-poppins text-xl font-semibold'
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
                  ? 'text-colorFive px-4 font-poppins text-xl font-semibold'
                  : 'text-colorSix px-4 font-poppins text-xl font-semibold'
              }
            >
              Bid Requests
            </NavLink>{' '}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="hidden md:hidden lg:block">
            {user && (
              <div className="flex justify-center items-center gap-5 mx-4">
                <h1 className="text-sm font-semibold font-poppins text-colorFive">
                  {displayName}
                </h1>
                <img
                  className="rounded-full border-2 p-1 border-colorSix object-cover"
                  src={photoUrl}
                  alt=""
                  width="70px"
                />
              </div>
            )}
          </div>

          {user ? (
            <button
              onClick={logOutUser}
              className="bg-colorSix py-4 px-8 rounded-md text-xl font-semibold font-poppins text-colorOne hover:bg-colorOne hover:text-colorSix border-2 border-colorSix duration-500"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-colorSix py-4 px-8 rounded-md text-xl font-semibold font-poppins text-colorOne hover:bg-colorOne hover:text-colorSix border-2 border-colorSix duration-500">
                Login/Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
