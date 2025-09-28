// src/components/Header.tsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/useAuth";

export default function Header() {
  const { isAuthed, name, signOut, ready } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/"); // go back to landing
  }

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          Holidaze
        </Link>

        {/* Nav */}
        <nav className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Venues
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>

          {/* Auth Links */}
          {ready && (
            !isAuthed ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/auth/sign-in"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Sign in
                </Link>
                <Link
                  to="/auth/sign-up"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Hello, {name}</span>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                  Sign out
                </button>
              </div>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
