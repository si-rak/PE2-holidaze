// src/pages/About.tsx
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">About Holidaze</h1>
      <p className="text-gray-700">
        Holidaze is a booking platform where users can browse, book, and manage
        stays at unique venues. This project was built as part of an assignment
        to demonstrate full-stack integration and modern front-end development.
      </p>

      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ← Back to Home
      </button>
    </div>
  );
}
