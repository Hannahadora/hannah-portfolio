import React from "react";

const SocialMediaLinks = () => {
  const sidenavs = [
    {
      icon: "/images/icon-github.svg",
      alt_icon: "/images/icon-github.svg",
      title: "Github",
      to: "https://github.com/Hannahadora",
    },
    {
      icon: "/images/icon-behance.svg",
      alt_icon: "/images/icon-behance.svg",
      title: "Behance",
      to: "https://www.behance.net/hannahejimofor",
    },
    {
      icon: "/images/icon-linkedin.svg",
      alt_icon: "/images/icon-linkedin.svg",
      title: "LinkedIn",
      to: "https://www.linkedin.com/in/hannah-ejimofor-a8811a1b3/",
    },
    {
      icon: "/images/icon-twitter.svg",
      alt_icon: "/images/icon-twitter.svg",
      title: "Twitter",
      to: "https://twitter.com/ChiamakaHannah",
    },
    {
      icon: "/images/icon-medium.svg",
      alt_icon: "/images/icon-medium.svg",
      title: "Medium",
      to: "https://medium.com/@hannahadora97",
    },
    {
      icon: "/images/icon-devto.svg",
      alt_icon: "/images/icon-devto.svg",
      title: "Dev.to",
      to: "https://dev.to/hannahadora",
    },
  ];
  return (
    <div className="fixed h-screen top-[20px] right-[10px] z-20">
      <div className="flex flex-col bg-[#ffffff50]">
        {sidenavs?.map((nav, i) => (
          <a
            key={i}
            href={nav.to}
            target={"_blank"}
            className="group/item rounded p-2 flex items-center space-x-4 w-full mb-[16px] cursor-pointer"
          >
            <p className="p-[7px] text-white border-4 border-transparent group-hover/item:border-green-500 rounded-full">
              <img
                src={nav.alt_icon}
                alt={`${nav.title}_icon`}
                className="w-[20px]"
              />
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
