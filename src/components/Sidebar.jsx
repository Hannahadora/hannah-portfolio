import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed h-screen top-[40px] left-[10px] w-[100px]">
      <ul className="flex flex-col">
        <a href="#skills">
        <li className="mb-[16px] p-[8px] text-white">
         1
        </li>
        </a>
        <li className="mb-[16px] p-[8px] text-white">
         2
        </li>
        <li className="mb-[16px] p-[8px] text-white">
         3
        </li>
        <li className="mb-[16px] p-[8px] text-white">
          4
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
