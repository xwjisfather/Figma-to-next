"use client"
import React from "react";

const Hero: React.FC = () => {

  return (
    <section className="flex relative flex-col self-stretch pb-2 w-full min-h-[525px] max-md:min-h-[400px] max-sm:min-h-[300px]">
      <div className="flex relative flex-col w-full min-h-[517px] max-md:min-h-[392px] max-sm:min-h-[292px]">
        {/* 深色半圆弧 */}
        <div className="absolute top-0 left-0 right-0 h-[450px] max-md:h-[350px] max-sm:h-[250px] bg-[#1E1332]/90 rounded-b-[50%]">
          {/* 圆弧边缘发光效果 */}
          <div className="absolute -bottom-8 left-0 right-0 h-[40px] max-md:h-[30px] max-sm:h-[20px] blur-[20px] rounded-full bg-[#8B5CF6]/30" />
        </div>
        
        {/* 标题 */}
        <h1
          data-layername="headline"
          className="relative z-10 self-center mt-[150px] max-lg:mt-[120px] max-md:mt-[100px] max-sm:mt-[80px] mb-0 w-full text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-4xl text-center max-w-[1100px] max-lg:max-w-[900px] max-md:max-w-[600px] max-sm:max-w-[90%] max-md:mb-2.5"
        >
          Empower <span className="font-semibold">AI</span>{" "}
          <span className="font-semibold">technology</span>
        </h1>

        {/* 箭头 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[420px] max-md:top-[325px] max-sm:top-[230px]">
          <img
            loading="lazy"
            src="/arrow.svg"
            className="relative z-[2] w-[60px] h-[60px] max-md:w-[35px] max-md:h-[35px] max-sm:w-[30px] max-sm:h-[30px] object-contain"
            alt="Scroll down indicator"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;