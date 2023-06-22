import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-[1920px] mx-auto">
      <nav className="flex md:flex-row flex-col items-center justify-between py-6 relative w-full nav-adjust">
        <div className="text-2xl md:mb-0 mb-6">hannahadora</div>
        <div className="flex items-center space-x-10 md:mr-10 mr-0">
          <a
            className="hover:border-b hover:border-green-500 hover:font-bold"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="hover:border-b hover:border-green-500 hover:font-bold"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="hover:border-b hover:border-green-500 hover:font-bold"
            href="#professional-experiences"
          >
            Experiences
          </a>
          <a
            className="hover:border-b hover:border-green-500 hover:font-bold"
            href="#contact"
          >
            Contact Me
          </a>
          <a
            className="hover:border-b hover:border-green-500 hover:font-bold"
            href="#blog"
          >
            Articles
          </a>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
