import React, { useEffect, useRef, useState } from "react";
import { articles } from "../utils/articles";
import CustomButton from "./Shared/CustomButton";
import Tilt from "react-parallax-tilt";
import Tabs from "./Shared/Tabs";
import { easeIn } from "../utils/GsapAnimations";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("all");
  const articleRef = useRef(null);

  useEffect(() => {
    easeIn(articleRef);
  }, [activeTab]);

  const getCurrentIndex = (tab) => {
    setActiveTab(tab);
  };

  const filteredArticles = () => {
    if (activeTab === "all") {
      return articles && articles;
    } else {
      return articles?.filter((article) => article?.type === activeTab);
    }
  };

  const articlesToRender = filteredArticles(); // Call the function to get the array

  const renderArticles = articlesToRender?.map((article, i) => (
    <div ref={articleRef} className="group/item mb-16 cursor-pointer relative" key={i}>
      <Tilt
        className="tilt"
        // tiltMaxAngleX={40}
        // tiltMaxAngleY={40}/
        // perspective={1000}
        transitionSpeed={1000}
        scale={1.0}
        gyroscope={false}
      >
        <a className="z-50" href={article.url} target={"_blank"}>
          <img
            className="w-full rounded-md"
            src={article.image}
            alt={article.title}
          />
        </a>
      </Tilt>
      <h1 className="font-bold pt-4 pb-2">{article.title}</h1>
      {/* <div className="z-2 group-hover/item:block hidden bg-[#00000080] absolute top-0 w-full h-full">
        <div className="w-full h-full flex flex-col items-center p-[20px]">
          <p className="italic text-center text-[13px]">{article.desc}</p>
        </div>
      </div> */}
    </div>
  ));

  return (
    <section id="blog">
      <div className="page-wrapper mb-12">
        <div className="flex items-start justify-between pb-16 pt-12">
          <h1 className=" md:text-[80px] text-[32px] leading-none">Articles</h1>
          <a href="mailto:hannahadora97@gmail.com" target={"_blank"}>
            <CustomButton text={"Contact Me"} />
          </a>
        </div>

        <Tabs
          tabs={["all", "frontend development", "devops"]}
          currentTab={(tab) => getCurrentIndex(tab)}
        />
        <div
          ref={articleRef}
          className="sm:grid block grid-cols-4 lg:grid-cols-3 md:grid-cols-2 auto-rows-auto gap-x-[40px]	 "
        >
          {renderArticles}
        </div>
      </div>
    </section>
  );
};

export default Blog;
