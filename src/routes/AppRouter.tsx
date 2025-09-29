// src/routes/AppRouter.tsx
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import VenueDetailPage from '@/pages/VenueDetailPage';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import MyBookings from '@/pages/MyBookings';
import Layout from '@/components/Layout';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/venue/:id', element: <VenueDetailPage /> },
      { path: '/auth/sign-in', element: <SignIn /> },
      { path: '/auth/sign-up', element: <SignUp /> },
      { path: '/me/bookings', element: <MyBookings /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/privacy', element: <Privacy /> },
    ],
  },
]);
