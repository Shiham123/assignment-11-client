import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../Layout/MainLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AddJob from '../pages/AddJob';
import MyPostedJob from '../pages/MyPostedJob';
import MyBids from '../pages/MyBids';
import BidRequest from '../pages/BidRequest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/addJob', element: <AddJob /> },
      { path: '/myPostedJob', element: <MyPostedJob /> },
      { path: '/myBids', element: <MyBids /> },
      { path: '/bidRequest', element: <BidRequest /> },
    ],
  },
]);

export default router;
