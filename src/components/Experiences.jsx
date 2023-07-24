import React from "react";
import { experiences } from "../utils/experiences";
import TagCard from "./Shared/TagCard";

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
            <div className="lg:w-[30%]">
              <p className="text-[16px] font-medium flex space-x-[10px] mb-[8px]"><img src="/icons/role.svg" alt="user_icon" /><span>{el.role}</span></p>
              <p className="text-[15px] font-[400] italic flex space-x-[10px] mb-[8px]"><img src="/icons/calendar.svg" alt="calendar_icon" /><span>
                {el.year}</span>
              </p>
              <p className="text-[16px] font-medium flex items-start space-x-[10px] mb-[8px]"><img src="/icons/company.svg" alt="company_icon" /><span>{el.company}, </span><span className="text-[16px]">{el.location}</span></p>
            </div>
            <ul className="lg:w-[40%] mx-[40px] list-disc list-inside">
              {el.tasks?.map((task, i) => (
                <li className="mb-[4px]">{task}</li>
              ))}
            </ul>
            <div className="lg:w-[30%]">
              <p className="font-medium text-[16px]">Skills:</p>
              <ul className="flex flex-wrap">
                {el.skills?.map((skill, i) => (
                  <li className="mr-[8px] my-[8px]"><TagCard tag={skill} /></li>
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
