import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const MainLayout = () => {
  return (
    <div className="max-w-screen-[1620px] mx-auto p-12 bg-colorOne">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
