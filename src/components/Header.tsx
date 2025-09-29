// src/components/Header.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/useAuth';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; //

export default function Header() {
  const { isAuthed, name, signOut, ready } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSignOut() {
    signOut();
    navigate('/');
    setMenuOpen(false);
  }

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          Holidaze
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Venues
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>

          {/* Auth Links */}
          {ready &&
            (!isAuthed ? (
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
            ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 py-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Venues
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          {ready &&
            (!isAuthed ? (
              <div className="space-y-2">
                <Link
                  to="/auth/sign-in"
                  className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  to="/auth/sign-up"
                  className="block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                <span className="block text-gray-700">Hello, {name}</span>
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                  Sign out
                </button>
              </div>
            ))}
        </div>
      )}
    </header>
  );
}
