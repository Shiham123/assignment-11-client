import { useContext, useEffect } from 'react';
import { AppContext } from '../Context/context';
import axios from 'axios';

const MyPostedJob = () => {
  const context = useContext(AppContext);
  const { user } = context;
  const contextEmail = user?.email;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobPosted?email=${contextEmail}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, [contextEmail]);

  return <div>posted job</div>;
};

export default MyPostedJob;
