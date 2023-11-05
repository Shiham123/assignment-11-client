import { useContext } from 'react';
import { AppContext } from '../Context/context';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const context = useContext(AppContext);
  const location = useLocation();

  const { user, isLoading } = context;
  const path = location.pathname;

  if (isLoading) return <Spinner />;
  if (user) return children;

  return <Navigate state={path} to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
