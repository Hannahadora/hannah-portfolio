import React from "react";

const Sidebar = () => {
  const sidenavs = [
    {
      icon: "/icons/tools.svg",
      alt_icon: "/icons/tools-dark.svg",
      title: "skills",
      to: "#skills",
    },
    {
      icon: "/icons/projects.svg",
      alt_icon: "/icons/projects-dark.svg",
      title: "projects",
      to: "#projects",
    },
    {
      icon: "/icons/toolbox.svg",
      alt_icon: "/icons/toolbox-dark.svg",
      title: "professional experiences",
      to: "#professional-experiences",
    },
    {
      icon: "/icons/contact.svg",
      alt_icon: "/icons/contact-dark.svg",
      title: "contact",
      to: "#contact",
    },
  ];
  return (
    <div className="fixed h-screen top-[80px] left-[10px] z-20">
      <div className="flex flex-col">
        {sidenavs?.map((nav, i) => (
          <a
            key={i}
            href={nav.to}
            className="group/item hover:bg-white rounded p-2 flex items-center space-x-4 w-full mb-[16px] cursor-pointer"
          >
            <p className="p-[8px] text-white group-hover/item:border-[#000000] border rounded-full">
              <img src={nav.icon} alt="" className="group-hover/item:hidden" />
              <img
                src={nav.alt_icon}
                alt=""
                className="hidden group-hover/item:block"
              />
            </p>
            <p className="hidden group-hover/item:block text-[20px] text-[#000000] font-bold capitalize">
              {nav.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
