import React from "react";

const Services: React.FC = () => {
  return (
    <section
      data-layername="services"
      className="flex flex-col text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-medium text-center text-white whitespace-nowrap"
    >
      <h2
        data-layername="智富匯基金"
        className="self-center pt-24 max-lg:pt-20 max-md:pt-16 max-sm:pt-12 max-w-full w-[900px] max-lg:w-[800px] max-md:w-[600px] max-sm:w-[95%]"
      >
        智富匯基金
      </h2>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5250b338bf5293051fc428179299cabe971cebbe0797b83024d9c88a52b85f61?apiKey=63de7e29674842c29a93babaf5f1d67a&"
        className="object-contain mt-24 max-lg:mt-20 max-md:mt-16 max-sm:mt-12 w-full max-w-[1200px] max-lg:max-w-[900px] max-md:max-w-[700px] max-sm:max-w-[95%] mx-auto aspect-[2.44]"
        alt="智富匯基金 services illustration"
      />
    </section>
  );
};

export default Services;