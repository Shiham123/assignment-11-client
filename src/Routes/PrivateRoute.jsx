import { useContext } from 'react';
import { AppContext } from '../Context/context';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const context = useContext(AppContext);
  const location = useLocation();

  const { user, isLoading } = context;
  const path = location.pathname;

  if (isLoading) return console.log('spinner');
  if (user) return children;

  return <Navigate state={path} to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
