import React from "react";
import { experiences } from "../utils/experiences";

const Experiences = () => {
  return (
    <div className="page-wrapper mb-12" id="professional-experiences">
      <div className="flex items-start justify-between pb-16 pt-12">
        <h1 className=" md:text-[80px] text-[32px] leading-none">
          Professional Experiences
        </h1>
      </div>

      <div className="lg:w-[60%] md:w-[80%] w-full mb-[40px]">
        {experiences?.map((el, i) => (
          <div key={i} className="mb-[40px]">
            <p className="lg:text-[32px] md:text-[28px] text-[24px] font-medium">
              {el.role} - <span className="md:text-[20px] text-[18px] font-[400] italic">{el.year}</span>
            </p>
            <p className="lg:text-[32px] md:text-[28px] text-[24px] font-medium">{el.company}</p>
            <ul className="my-[8px] list-disc list-inside">
              {el.tasks?.map((task, i) => (
                <li className="mb-[4px]">{task}</li>
              ))}
            </ul>
            <p className="font-medium text-[20px] my-[8px]">Skills:</p>
            <ul className="flex flex-wrap">
              {el.skills?.map((skill, i) => (
                <li className="mr-[12px]">{skill},</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
