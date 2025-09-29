// src/pages/Privacy.tsx
import { useNavigate } from 'react-router-dom';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-gray-700">
        Your privacy is important to us. We only collect data necessary for
        booking and improving your experience. None of your details will be
        shared without consent.
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
