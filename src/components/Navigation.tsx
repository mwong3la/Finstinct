"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-semibold tracking-tight">PetTech</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-black transition-colors">
              Features
            </a>
            <a href="#specs" className="text-sm text-gray-600 hover:text-black transition-colors">
              Tech Specs
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
              Support
            </a>
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            <a href="#features" className="block text-sm text-gray-600 hover:text-black">
              Features
            </a>
            <a href="#specs" className="block text-sm text-gray-600 hover:text-black">
              Tech Specs
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-black">
              Support
            </a>
            <button className="w-full bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
