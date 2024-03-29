import React from "react";

const Skillset = () => {
  const skills = [
    {
      title: "HTML",
      logo: "/icons/html5-icon-7.jpg",
    },
    {
      title: "CSS",
      logo: "/icons/css3_logo.png",
    },
    {
      title: "Tailwindcss",
      logo: "/icons/tailwindcss_logo.png",
    },
    {
      title: "Bootstrap",
      logo: "/icons/bootstrap_logo.png",
    },
    {
      title: "JavaScript",
      logo: "/icons/javascript_logo.png",
    },
    {
      title: "TypeScript",
      logo: "/icons/typescript_logo.png",
    },
    {
      title: "Vue",
      logo: "/icons/vue_logo.png",
    },
    {
      title: "Pinia",
      logo: "/icons/pinia_logo.png",
    },
    {
      title: "Vuex",
      logo: "",
    },
    {
      title: "Nuxt",
      logo: "/icons/nuxt_logo.png",
    },
    {
      title: "React",
      logo: "/icons/react_logo.png",
    },
    {
      title: "Redux",
      logo: "/icons/redux_logo.png",
    },
    {
      title: "Yup",
      logo: "",
    },
    {
      title: "Formik",
      logo: "/icons/formik_logo.png",
    },
    {
      title: "Vuelidate",
      logo: "/icons/vuelidate_logo.png",
    },
    {
      title: "VeeValidate",
      logo: "/icons/vee-validate_logo.png",
    },
    {
      title: "Vuetify",
      logo: "/icons/vuetify_logo.png",
    },
    {
      title: "GSAP",
      logo: "/icons/gsap_logo.png",
    },
    {
      title: "Terraform",
      logo: "/icons/terraform_logo.png",
    },
    {
      title: "AWS",
      logo: "/icons/aws_logo.png",
    },
    {
      title: "Firebase",
      logo: "/icons/firebase_logo.png",
    },
    {
      title: "Jest",
      logo: "",
    },
  ];
  return (
    <div className="overflow-hidden relative" id="skills">
      <section className="page-wrapper border-t-2 sm:py-20 py-16 border-white">
        <div className="flex items-start justify-between pb-16 pt-12">
          <h1 className=" md:text-[80px] text-[32px] leading-none">Skills</h1>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between sm:text-left text-left">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="px-[7px] py-[10px] bg-[#d4d4d430] rounded-xl flex items-center justify-between mr-[10px] mb-[10px]"
            >
              <div className="flex items-center">
                <div className="md:w-[25px] w-[17px] h-[25px] mr-[10px]">
                  {skill.logo ? <img
                    className="w-full"
                    src={skill.logo}
                    alt={`${skill.title}_logo`}
                  /> : '💯'}
                </div>
                <h1 className="md:text-[20px] text-[15px]">
                  {skill.title}
                </h1>
              </div>

              <div>
                ✅
              </div>
            </div>
          ))}
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
