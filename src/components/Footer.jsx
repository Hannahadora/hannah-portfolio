import React from "react";
import ContactUsForm from "./Forms/ContactUsForm";

const Footer = () => {
  return (
    <section className=" bg-[#242424]">
      <footer className="page-wrapper pt-10">
        <div className="flex md:flex-row border-t-2 border-white flex-col items-center justify-center py-6 relative w-full nav-adjust">
          <div className="text-[14px] text-center md:mb-0 mb-6">© hannahejimofor {new Date().getFullYear()}</div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
