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
import PrivateRoute from './PrivateRoute';
import JobDetails from '../pages/JobDetails';
import UpdateJob from '../pages/updateJob';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      {
        path: '/addJob',
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/myPostedJob',
        element: (
          <PrivateRoute>
            <MyPostedJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/myBids',
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: '/bidRequest',
        element: (
          <PrivateRoute>
            <BidRequest />
          </PrivateRoute>
        ),
      },
      {
        path: '/jobDetails/:id',
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobDetails/${params.id}`),
      },
      {
        path: '/jobUpdate/:id',
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
    ],
  },
]);

export default router;
