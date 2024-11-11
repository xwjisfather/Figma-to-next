import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section 
      data-layername="關於我們" 
      className="flex flex-col mt-14 max-lg:mt-12 max-md:mt-10 max-sm:mt-8 w-full text-white max-w-[1140px] max-lg:max-w-[900px] max-md:max-w-[700px] max-sm:max-w-[95%] min-h-[635px] max-lg:min-h-[580px] max-md:min-h-[520px] max-sm:min-h-[450px] mx-auto"
    >
      <h2 
        data-layername="關於我們" 
        className="self-center max-w-full text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-medium text-center whitespace-nowrap w-[693px] max-lg:w-[600px] max-md:w-[500px] max-sm:w-[95%]"
      >
        關於我們
      </h2>
      
      <div 
        className="flex flex-col mt-24 max-lg:mt-20 max-md:mt-16 max-sm:mt-12 w-full min-h-[448px] max-lg:min-h-[400px] max-md:min-h-[350px] max-sm:min-h-[300px]"
      >
        <div 
          className="flex flex-col w-full rounded-3xl"
        >
          <div 
            className="flex flex-wrap gap-5 items-start p-10 max-lg:p-8 max-md:p-6 max-sm:p-4 w-full rounded-3xl bg-slate-950"
          >
            <div 
              className="flex flex-col flex-1 shrink basis-0 min-w-[240px]"
            >
              <h3 
                data-layername="關於智富匯" 
                className="flex-1 shrink gap-10 w-full text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-medium tracking-tighter leading-none whitespace-nowrap"
              >
                關於智富匯
              </h3>
              
              <p 
                data-layername="我们是一支充满热情的团队..." 
                className="mt-10 max-lg:mt-8 max-md:mt-6 max-sm:mt-4 text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg leading-10 max-lg:leading-9 max-md:leading-8 max-sm:leading-7"
              >
                我们是一支充满热情的团队，致力于通过尖端的人工智能技术提供最佳的股票交易体验。
                <br />
                <br />
                <strong className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-medium text-white">
                  我们的使命
                </strong>
                <br />
                我们的使命是通过智能工具和洞察力为交易者提供支持，以便他们在股票市场做出明智的决策。我们努力简化复杂的金融数据，并为各个层次的交易者提供易于使用的界面。
              </p>
            </div>
            
            <div 
              className="flex shrink-0 gap-2.5 h-[26px] w-[26px] max-lg:h-[22px] max-lg:w-[22px] max-md:h-[20px] max-md:w-[20px] max-sm:h-[18px] max-sm:w-[18px]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;