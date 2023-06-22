import React, { useEffect, useRef } from "react";
import ContactUsForm from "./Forms/ContactUsForm";
import TestButton from "./TestButton";
import { easeIn, zoomOut } from "../utils/GsapAnimations";

const ContactUs = () => {
  const contactCardRef = useRef(null);

  useEffect(() => {
    easeIn(contactCardRef);
  });
  return (
    <>
      <section
        className="bg-[#242424] w-full pt-12 pb-32 relative"
        id="contact"
      >
        <img
          className="absolute bottom-0 -left-40"
          src="/images/pattern-rings.svg"
          alt="decoration_item"
        />
        <div className="page-wrapper flex lg:flex-row flex-col lg:items-start items-center justify-between">
          <div
            ref={contactCardRef}
            className="max-w-[380px] lg:text-left text-center"
          >
            <h1 className=" md:text-[80px] text-[32px] leading-none">
              Contact
            </h1>
            <p className="lg:pt-[28px] pt-[28px]">
              I would love to hear about your project and how I could be of
              help. Please fill in the form and I'll get back to you as soon as
              possible.
            </p>
            <div className="mt-[40px] lg:pb-0 pb-20 flex flex-col lg:items-start items-center">
              <p className="mb-[12px] flex">
                <img className="mr-[16px]" src="/icons/address.svg" alt="" />
                <p>Port-Harcourt, Rivers State, Nigeria</p>
              </p>
              <p className="mb-[12px] flex">
                <img className="mr-[16px]" src="/icons/phone.svg" alt="" />
                <a href="tel:+2349058018985">
                  <p>+2349058018985</p>
                </a>
              </p>
              <p className="mb-[12px] flex">
                <img className="mr-[16px]" src="/icons/whatsapp.svg" alt="" />
                <a className="mr-[16px]" href="tel:+2347015458847">
                  <p>+2347015458847</p>
                </a>
              </p>
              <p className="mb-[12px] flex">
                <img className="mr-[16px]" src="/icons/contact.svg" alt="" />
                <a href="mailto:hannahadora97@gmail.com" target={"_blank"}>
                  <p>hannahadora97@gmail.com</p>
                </a>
              </p>
            </div>
          </div>
          <ContactUsForm />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
