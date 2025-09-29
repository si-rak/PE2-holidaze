// src/pages/Contact.tsx
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-gray-700">
        If you have any questions or issues, feel free to reach out to us.
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Email: support@holidaze.com</li>
        <li>Phone: +47 123 456 789</li>
      </ul>

      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ← Back to Home
      </button>
    </div>
  );
}
