import React from "react";

const Skillset = () => {
  return (
    <div className="overflow-hidden relative" id="skills">
      <section className="page-wrapper border-t-2 sm:py-20 py-16 border-white">
        <div className="flex items-start justify-between pb-16 pt-12">
          <h1 className=" md:text-[80px] text-[32px] leading-none">Skills</h1>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between sm:text-left text-left space-5">
          <div className="flex items-center">
            <img className="w-[50px] mr-[10px] h-[50px] mr-[10px]" src="/icons/html5-icon-7.jpg" alt="htmlIcon" />
            <h1 className="mb-4 md:text-[24px] text-[18px]">HTML</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">CSS</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">TailwindCss</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">BootStrap</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Javascript</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">TypeScript</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Vue</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Pinia</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Vuex</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Nuxt</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">React</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Redux</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Yup</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Formik</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Vuelidate</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Vee-validate</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Vuetify</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">GSAP</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Terraform</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">AWS</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[24px] text-[18px]">Firebase</h1>
          </div>
        </div>
      </section>
      <img
        className="absolute bottom-16 -right-64"
        src="/images/pattern-rings.svg"
        alt="decoration_item"
      />
    </div>
  );
};

export default Skillset;
