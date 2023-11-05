import { createContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const info = { message: 'connected' };
  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
