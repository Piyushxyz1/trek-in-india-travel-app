"use client"
import React, { useState } from "react";

const TickIcon = () => (
  <svg
    className="icon tick-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="green"
    viewBox="0 0 24 24"
    width="16px"
    height="16px"
  >
    <path d="M20.285 6.708l-11.4 11.4-5.572-5.572 1.414-1.414 4.158 4.158 9.986-9.986z" />
  </svg>
);

const CrossIcon = () => (
  <svg
    className="icon cross-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="red"
    viewBox="0 0 24 24"
    width="16px"
    height="16px"
  >
    <path d="M18.364 5.636l-1.414-1.414L12 9.172 7.05 4.222 5.636 5.636 10.586 10.586 5.636 15.536l1.414 1.414L12 12l4.95 4.95 1.414-1.414-4.95-4.95z" />
  </svg>
);

const Incursion = () => {
  const [activeTab, setActiveTab] = useState("inclusions");

  const tabs = [
    { name: "Inclusions", key: "inclusions" },
    { name: "Exclusions", key: "exclusions" },
    { name: "Cancellation Policy", key: "cancellation" },
  ];

  const content = {
    inclusions: [
      {
        heading: "Accommodation:",
        subItems: [
          "Guest house in Pipalkoti (Day 1 & 5)",
          "Ghangharia (Day 2, 3 & 4)",
        ],
      },
      {
        heading: "Meals (Veg + Egg):",
        subItems: [
          "All meals from Day 1 dinner to Day 5 dinner",
          "Morning & evening tea with snacks",
        ],
      },
      {
        heading: "Support:",
        subItems: [
          "Base camp manager, trek leader, chef, local guides & support staff",
        ],
      },
      {
        heading: "Equipment:",
        subItems: [
          "Sleeping bags, tents, mattresses, kitchen utensils",
          "Trekking gear: helmets, ropes, ice axe, etc.",
        ],
      },
      {
        heading: "First Aid:",
        subItems: [
          "Medical kit, stretcher, oxygen cylinder, BP monitor",
        ],
      },

    ],
    exclusions: [
      { heading: "Insurance (Mandatory)", subItems: [] },
      { heading: "Food during transit", subItems: [] },
      { heading: "Personal expenses", subItems: [] },
      { heading: "Mules/porters for personal luggage", subItems: [] },
      { heading: "Emergency evacuation, hospitalization", subItems: [] },
      { heading: "Anything not listed in inclusions", subItems: [] },
      {
        heading: "Optional (paid extra):",
        subItems: [
          "Satellite phone",
          "Gamow/PAC HAPO bag",
          "AED (Automated Defibrillator)",
        ],
      },
    ],
    cancellation: [
      { heading: "Cancellation Policy:", subItems: [] },
      { heading: "90% refund if cancelled 30+ days before trek", subItems: [] },
      { heading: "70% refund if cancelled 15-30 days before trek", subItems: [] },
      { heading: "50% refund if cancelled 7-15 days before trek", subItems: [] },
      { heading: "No refund if cancelled <7 days before trek", subItems: [] },
      { heading: "Refunds processed within 7–10 working days", subItems: [] },
    ],
  };

  const isInclusions = activeTab === "inclusions";

  return (
    <section className="incursion-exclusion-section">
    <div className="incursions-tabs-container max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8">
      <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 md:mt-1 mb-0 md:mb-2 xl:mb-4">Trek Essentials & Policies</h2>

      <div className="incursions-tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`incursions-tab-button ${
              activeTab === tab.key ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="incursions-tab-content">
        {content[activeTab].map((item, idx) => (
          <div key={idx} className="incursion-item">
            <div className="incursion-heading">
              <span>{item.heading}</span>
            </div>
            {item.subItems.length > 0 && (
              <ul className="incursion-subitems">
                {item.subItems.map((sub, i) => (
                  <li key={i} className="incursion-subitem">
                    {isInclusions ?  <span className="text-[#f47a2a] mr-2 text-xl md:text-2xl">•</span> : <CrossIcon />}
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );

};

export default Incursion;
