// src/components/Footer.tsx
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-page border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Footer Nav */}
        <div className="flex gap-6 text-neutral-500 text-sm mb-4 md:mb-0">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>

        {/* Center: Social + Copyright */}
        <div className="flex flex-col items-center gap-2 text-neutral-500 text-sm mb-4 md:mb-0">
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 hover:text-brand-600 cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-brand-600 cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-brand-600 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-brand-600 cursor-pointer" />
          </div>
          <div>© 2025 Holidaze. All rights reserved.</div>
        </div>

        {/* Right: Logo */}
        <div className="font-bold text-lg text-brand-600">
          Holidaze
        </div>
      </div>
    </footer>
  );
}
