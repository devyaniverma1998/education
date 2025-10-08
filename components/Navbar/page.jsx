"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setActiveSubMenu(null);
  };

  const openSubMenu = (menu) => {
    setActiveSubMenu(menu);
  };

  const closeSubMenu = () => {
    setActiveSubMenu(null);
  };

  const renderSubMenuContent = () => {
    if (activeSubMenu === 'programs') {
      return (
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Our programs</h2>
          {/* <ul className="space-y-4">
            <li><Link href="/programs/short-term" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Short-term</Link></li>
            <li><Link href="/programs/semester" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Semester</Link></li>
            <li><Link href="/programs/faculty-led" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Faculty-led</Link></li>
            <li><Link href="/programs/europe" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Europe</Link></li>
            <li><Link href="/programs/latin-america" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Latin America</Link></li>
            <li><Link href="/programs/asia" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Asia</Link></li>
          </ul> */}
        </div>
      );
    } else if (activeSubMenu === 'about') {
      return (
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">About us</h2>
          <ul className="space-y-4">
            <li><Link href="/about/who-we-are" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Who we are</Link></li>
            <li><Link href="/about/educational-approach" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Educational approach</Link></li>
            <li><Link href="/about/our-people" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Our people</Link></li>
            <li><Link href="/about/diversity-abroad" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Diversity abroad</Link></li>
            <li><Link href="/about/responsible-travel" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Responsible travel</Link></li>
          </ul>
        </div>
      );
    } else if (activeSubMenu === 'safety') {
      return (
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Safety and support</h2>
          <ul className="space-y-4">
            <li><Link href="/support/contact" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Contact us</Link></li>
            <li><Link href="/support/health-safety" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Health and safety</Link></li>
            <li><Link href="/support/help-center" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Help center</Link></li>
            <li><Link href="/support/account-login" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Account login</Link></li>
            <li><Link href="/enroll" className="block text-sm text-gray-700 hover:text-blue-600 py-2">Enroll now</Link></li>
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-16 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">STUDY</span>
                </div>
                <span className="text-xl font-bold text-gray-900">ABROAD</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Our Programs Dropdown - Simple List on Hover (Like About) */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 text-sm font-medium">
                  Our programs
                  {/* <svg className="h-4 w-4 transition-transform group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg> */}
                </button>
                {/* <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/programs/short-term" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Short-term</Link>
                  <Link href="/programs/semester" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Semester</Link>
                  <Link href="/programs/faculty-led" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Faculty-led</Link>
                  <Link href="/programs/europe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Europe</Link>
                  <Link href="/programs/latin-america" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Latin America</Link>
                  <Link href="/programs/asia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Asia</Link>
                </div> */}
              </div>

              {/* About Us Dropdown on Hover */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 text-sm font-medium">
                  About us
                  <svg className="h-4 w-4 transition-transform group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/about/who-we-are" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Who we are</Link>
                  <Link href="/about/educational-approach" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Educational approach</Link>
                  <Link href="/about/our-people" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Our people</Link>
                  <Link href="/about/diversity-abroad" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Diversity abroad</Link>
                  <Link href="/about/responsible-travel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Responsible travel</Link>
                </div>
              </div>

              {/* Safety and Support Dropdown on Hover */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 text-sm font-medium">
                  Safety and support
                  <svg className="h-4 w-4 transition-transform group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/support/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Contact us</Link>
                  <Link href="/support/health-safety" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Health and safety</Link>
                  <Link href="/support/help-center" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Help center</Link>
                  <Link href="/support/account-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Account login</Link>
                  <Link href="/enroll" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Enroll now</Link>
                </div>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="w-24 h-10 flex items-center justify-center text-sm font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/support/contact"
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                Get started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={toggleMobileMenu}
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {(isOpen || activeSubMenu) && (
        <div className={`fixed inset-0 z-50 bg-white md:hidden ${activeSubMenu ? 'overflow-y-auto' : ''}`}>
          {/* Header with Back/Close */}
          <div className="flex items-center justify-between px-4 pt-4 pb-4 border-b border-gray-200">
            {activeSubMenu ? (
              <>
                <button
                  onClick={closeSubMenu}
                  className="text-gray-500 hover:text-gray-700 flex items-center space-x-1 text-sm"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back</span>
                </button>
                <button
                  onClick={closeSubMenu}
                  className="text-gray-500 hover:text-gray-700 rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">EF</span>
                </div>
                <span className="text-lg font-bold text-gray-900">/ STUDY ABROAD</span>
              </div>
            )}
          </div>

          {/* Content */}
          {activeSubMenu ? (
            renderSubMenuContent()
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex-1 px-4 py-6 space-y-4">
                <Link
                  href="/programs"
                  className="flex items-center justify-between text-base font-medium text-gray-900 py-2 border-b border-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    openSubMenu('programs');
                  }}
                >
                  <span>Our programs</span>
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center justify-between text-base font-medium text-gray-900 py-2 border-b border-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    openSubMenu('about');
                  }}
                >
                  <span>About us</span>
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/safety"
                  className="flex items-center justify-between text-base font-medium text-gray-900 py-2 border-b border-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    openSubMenu('safety');
                  }}
                >
                  <span>Safety and support</span>
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Bottom Buttons */}
              <div className="px-4 pb-6 space-y-3 border-t border-gray-200 pt-4">
                <Link
                  href="/get-started"
                  className="block w-full text-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get started
                </Link>
                <Link
                  href="/login"
                  className="block w-full text-center px-6 py-3 text-base font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Overlay for mobile menu (only when main menu open, not sub-menu) */}
      {isOpen && !activeSubMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}