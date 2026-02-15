'use client';

import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌍</span>
            <span className="text-xl font-bold text-ocean-blue">ExploreSen</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#tours" className="text-gray-700 hover:text-ocean-blue transition">Tours</a>
            <a href="#about" className="text-gray-700 hover:text-ocean-blue transition">À Propos</a>
            <a href="#contact" className="text-gray-700 hover:text-ocean-blue transition">Contact</a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#tours" className="block text-gray-700 hover:text-ocean-blue">Tours</a>
            <a href="#about" className="block text-gray-700 hover:text-ocean-blue">À Propos</a>
            <a href="#contact" className="block text-gray-700 hover:text-ocean-blue">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
