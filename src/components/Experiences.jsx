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

      <div className="w-full mb-[40px]">
        {experiences?.map((el, i) => (
          <div
            key={i}
            className="mb-[40px] lg:flex items-start justify-between w-full"
          >
            <div className="lg:w-[25%]">
              <p className="text-[18px] font-medium flex space-x-[10px] mb-[8px]"><img src="/icons/role.svg" alt="user_icon" /><span>{el.role}</span></p>
              <p className="text-[15px] font-[400] italic flex space-x-[10px] mb-[8px]"><img src="/icons/calendar.svg" alt="calendar_icon" /><span>
                {el.year}</span>
              </p>
              <p className="text-[20px] font-medium flex space-x-[10px] mb-[8px]"><img src="/icons/company.svg" alt="company_icon" /><span>{el.company}</span></p>
            </div>
            <ul className="lg:w-[50%] mx-[40px] list-disc list-inside">
              {el.tasks?.map((task, i) => (
                <li className="mb-[4px]">{task}</li>
              ))}
            </ul>
            <div className="lg:w-[25%]">
              <p className="font-medium text-[16px]">Skills:</p>
              <ul className="flex flex-wrap">
                {el.skills?.map((skill, i) => (
                  <li className="mr-[12px]">{skill} {i === el.skills.length - 1 ? '' : ','} </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
