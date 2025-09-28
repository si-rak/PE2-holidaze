// src/pages/ForgotPassword.tsx
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Forgot Password</h1>

        <p className="text-gray-600">
          Password reset is not supported in this demo project. If you forgot
          your password, please contact{' '}
          <a
            href="mailto:support@noroff.no"
            className="text-blue-600 hover:underline"
          >
            support@noroff.no
          </a>
          .
        </p>

        <p className="text-sm text-gray-500">
          Or, create a new account using the <strong>Sign up</strong> option.
        </p>

        <div className="pt-4">
          <Link
            to="/auth/sign-in"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ← Back to Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
