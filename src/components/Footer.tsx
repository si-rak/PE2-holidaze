// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side: Links */}
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/about" className="hover:text-blue-600">
            About
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
          <a href="/privacy" className="hover:text-blue-600">
            Privacy
          </a>
        </div>

        {/* Center: Social icons */}
        <div className="flex gap-4 text-gray-600">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-600"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-blue-600"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-blue-600"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Right side: Logo/brand */}
        <div className="text-blue-600 font-bold">Holidaze</div>
      </div>

      <div className="text-center text-xs text-gray-500 py-2 border-t">
        © 2025 Holidaze. All rights reserved.
      </div>
    </footer>
  );
}
