"use client";

import { useState } from "react";
import Link from "next/link";
import StudyBanner from "@/components/StudyBanner/page";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the appropriate clothing for visiting religious sites?",
      answer:
        "Always cover shoulders and knees when visiting religious sites. Follow your Tour Director's guidance for respectful attire.",
    },
    {
      question: "How can I ensure my spending supports local businesses?",
      answer:
        "Prioritize local markets, craftspeople, and family-owned restaurants. Avoid large international chains to maximize your positive local impact.",
    },
    {
      question: "Should I bring a reusable water bottle, and is the water safe?",
      answer:
        "Yes, bring a reusable bottle to reduce plastic waste. Always check if tap water is safe; use filtered or bottled water where needed.",
    },
    {
      question: "What animal activities should I avoid on tour?",
      answer:
        "Avoid activities that exploit or harm animals, such as elephant rides, unethical wildlife shows, or taking selfies with captive wildlife.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ================= Hero Section ================= */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-light text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white text-sm">
            Browse common questions about responsible travel, sustainability, and wildlife protection.
          </p>
        </div>
      </section>

      {/* ================= FAQ Section ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span
                  className={`text-2xl text-blue-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  &gt;
                </span>
              </button>
              {openIndex === index && (
                <div className="p-5 text-gray-600 bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

 
    </>
  );
}
