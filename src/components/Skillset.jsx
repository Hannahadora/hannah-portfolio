import React from "react";

const Skillset = () => {
  return (
    <div className="overflow-hidden relative" id="skills">
      <section className="page-wrapper border-t-2 sm:py-20 py-16 border-white">
        {/* <div className="flex items-start justify-between pb-16 pt-12">
          <h1 className=" md:text-[80px] text-[32px] leading-none">Skills</h1>
        </div> */}

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-between sm:text-left text-left space-5">
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">HTML</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">CSS</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">TailwindCss</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">BootStrap</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Javascript</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">TypeScript</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Vue</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Pinia</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Vuex</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Nuxt</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">React</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Redux</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Yup</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Formik</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Vuelidate</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Vee-validate</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">Vuetify</h1>
          </div>
          <div>
            <h1 className="mb-4 md:text-[32px] text-[24px]">GSAP</h1>
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
