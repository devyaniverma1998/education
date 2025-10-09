"use client";

import Link from "next/link";
import StudyBanner from "@/components/StudyBanner/page";
import FAQPage from "@/app/faq/page";

export default function HealthPage() {
  return (
    <>
  <FAQPage/>

      {/* ================= Categories Section ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-normal mb-10 text-center">
          Browse by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link
            href="/community-support"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-600 block"
          >
            <div className="text-center">
              <svg
                className="w-10 h-10 text-blue-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M17 20H7m0 0v-2c0-.656.126-1.283.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-3">
                Supporting the Community
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Guidelines on culture, mindful spending, local interaction, and
                personal impact.
              </p>
              <ul className="text-left text-sm text-blue-600 space-y-1">
                <li>• How to pay respect to local culture</li>
                <li>• Tipping & thoughtful spending guidelines</li>
                <li>• Making a positive local impact</li>
                <li className="font-bold pt-2">View all 12 articles →</li>
              </ul>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/environment"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-green-600 block"
          >
            <div className="text-center">
              <svg
                className="w-10 h-10 text-green-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9c1.657 0 3 4.03 3 9s-1.343 9-3 9z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-3">
                Protecting the Environment
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Information on sustainability, carbon footprint, waste
                reduction, and conservation.
              </p>
              <ul className="text-left text-sm text-green-600 space-y-1">
                <li>• Tips for going green on tour</li>
                <li>• Understanding our carbon footprint</li>
                <li>• Avoiding single-use plastics</li>
                <li className="font-bold pt-2">View all 9 articles →</li>
              </ul>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            href="/wildlife"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-yellow-600 block"
          >
            <div className="text-center">
              <svg
                className="w-10 h-10 text-yellow-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-3">Respecting Wildlife</h3>
              <p className="text-gray-500 text-sm mb-4">
                Animal welfare policies, ethical encounters, and avoiding
                exploitative practices.
              </p>
              <ul className="text-left text-sm text-yellow-600 space-y-1">
                <li>• EF's Animal Welfare Policy</li>
                <li>• Identifying ethical animal sanctuaries</li>
                <li>• What to do when you see wild animals</li>
                <li className="font-bold pt-2">View all 7 articles →</li>
              </ul>
            </div>
          </Link>
        </div>

        {/* Demo Page Button */}
        <div className="text-center mt-16">
          <Link
            href="/about/responsible-travel"
            className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
          >
            🌍 Visit Demo Responsible Travel Page
          </Link>
        </div>
      </section>
      <StudyBanner />
    </>
  );
}
