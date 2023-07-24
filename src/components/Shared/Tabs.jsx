import React, { useState } from "react";

const Tabs = ({tabs, currentTab}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const checkActive = (index) => (activeIndex === index ? "font-bold border-b-2 border-green-500 text-green-500" : "");

  const setTab = (index, tab) => {
    setActiveIndex(index);
    currentTab(tab)
  };

  return (
    <div className="flex items-center space-x-10 border-b border-gray-100 my-6">
      {tabs &&
        tabs.map((tab, i) => (
          <div
            className={`capitalize pb-3 lg:text-xl md:text-lg text-base cursor-pointer ${checkActive(i)}`}
            key={i}
            onClick={() => setTab(i, tab)}
          >
            {tab}
          </div>
        ))}
    </div>
  );
};

export default Tabs;
