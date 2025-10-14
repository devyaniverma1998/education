"use client";

import Link from "next/link";
import StudyBanner from "@/components/StudyBanner/page";
import FAQPage from "@/components/FAQQue/page";
import Banner from "@/components/Banner/page";
import ProgramsGrid from "@/components/ProgramsGrid/page";

export default function HealthPage() {
  return (
    <>
      {/* Hero / Banner */}
      <Banner />





      {/* Safety Guidelines Section */}
      <section id="guidelines" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
         
             <div className="flex items-start justify-start mb-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
                 Our Safety Guidelines</h2>

          </div>
            <p className="text-gray-700 mb-6  leading-relaxed">
              We take health and safety seriously. From accommodations to local excursions, every aspect of your program is designed to minimize risk and maximize well-being.
            </p>
            <ul className="space-y-4 list-disc list-inside text-gray-700">
              <li>24/7 local support and emergency contacts in every destination.</li>
              <li>Verified and safe accommodations with professional staff.</li>
              <li>Health and safety training for tour leaders and guides.</li>
              <li>Strict hygiene and COVID-19 precautions where applicable.</li>
              <li>Travel insurance guidance for every participant.</li>
            </ul>
          </div>
          <div className="relative w-full h-80 md:h-96">
            <img
              src="/img/desti-1.jpg"
              alt="Health and safety"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20 bg-black px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Traveler Safety Tips</h2>

          </div>

          <p className="text-gray-100 mb-12 text-lg leading-relaxed">
            Simple practices can ensure a safer and more enjoyable experience abroad.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stay Informed",
                desc: "Keep track of local news and government advisories in your destination.",
              },
              {
                title: "Keep Documents Safe",
                desc: "Carry copies of your passport, visa, and important contacts securely.",
              },
              {
                title: "Practice Hygiene",
                desc: "Wash hands frequently and follow recommended health precautions.",
              },
              {
                title: "Emergency Contacts",
                desc: "Know local emergency numbers and your program’s support contacts.",
              },
              {
                title: "Travel Insurance",
                desc: "Ensure you have proper coverage for medical emergencies, accidents, and travel delays.",
              },
              {
                title: "Stay Connected",
                desc: "Regularly check in with your family, friends, or program coordinators.",
              },
            ].map((tip, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-700">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      {/* <FAQPage /> */}
      {/* Study Banner / CTA */}
      <StudyBanner />
    </>
  );
}
