"use client"
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = ({faqs}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="container max-w-4xl md:max-w-6xl xl:max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-0 md:mb-3 lg:mb-6 xl:mb-7 text-center">
          <span className="trek-highlight text-[#f47a2a] font-bold">FAQ'S</span>
          <h2 className="text-xl sm:text-2xl xl:text-4xl font-semibold text-[#172541] mt-0 mb-2">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-[0.9rem] sm:text-[1rem] md:text-[1.2] lg:text-[1.3rem] font-semibold text-[#313137]">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaMinus className="text-[#f47a2a] text-lg" />
                ) : (
                  <FaPlus className="text-[#f47a2a] text-lg" />
                )}
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`px-4 md:px-5 overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? "max-h-96 pb-4 opacity-100" 
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137] mb-2 md:mb-4">
                  {faq.answer}
                  {faq.listItems && (
                    <ul className="mt-2 list-disc pl-5">
                      {faq.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;