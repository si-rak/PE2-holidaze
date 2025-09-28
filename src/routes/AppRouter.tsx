// src/routes/AppRouter.tsx
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import VenueDetailPage from '@/pages/VenueDetailPage';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import MyBookings from '@/pages/MyBookings';
import Layout from '@/components/Layout';
import ForgotPassword from '@/pages/ForgotPassword';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/venue/:id', element: <VenueDetailPage /> }, // ✅ detail page
      { path: '/auth/sign-in', element: <SignIn /> },
      { path: '/auth/sign-up', element: <SignUp /> },
      { path: '/me/bookings', element: <MyBookings /> },
      { path: '/auth/forgot-password', element: <ForgotPassword /> },
    ],
  },
]);
