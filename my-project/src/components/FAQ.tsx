import React from "react";

interface FAQItemProps {
  question: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question }) => (
  <div className="flex gap-5 max-lg:gap-4 max-md:gap-3 max-sm:gap-2 py-10 max-lg:py-8 max-md:py-6 max-sm:py-4 pl-10 max-lg:pl-8 max-md:pl-6 max-sm:pl-4 mt-5 max-lg:mt-4 max-md:mt-3 max-sm:mt-2 w-full rounded-3xl border border-solid bg-slate-950 border-white border-opacity-10">
    <div
      data-layername={question}
      className="flex-1 shrink gap-10 h-full min-w-[240px] max-sm:min-w-[200px] w-[1168px] text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg"
    >
      {question}
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const faqItems: FAQItemProps[] = [
    { question: "最近影响特斯拉（TSLA）股票表现的关键因素是什么？" },
    { question: "中国股市的FOMO（害怕错过）情绪能否持续下去？" },
    { question: "纳斯达克最近有哪些趋势和发展？" },
  ];

  return (
    <section
      data-layername="faq"
      className="flex flex-col items-center self-stretch mt-96 max-lg:mt-72 max-md:mt-48 max-sm:mt-24 w-full font-medium whitespace-nowrap"
    >
      <h2
        data-layername="問ai"
        className="max-w-full text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl text-center text-white w-[693px] max-lg:w-[600px] max-md:w-[500px] max-sm:w-[95%]"
      >
        問AI
      </h2>
      <div className="flex flex-col mt-24 max-lg:mt-20 max-md:mt-16 max-sm:mt-12 max-w-full text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg tracking-tighter leading-none text-white w-[1140px] max-lg:w-[900px] max-md:w-[700px] max-sm:w-[95%]">
        <div className="flex flex-col w-full rounded-3xl min-h-[115px] max-lg:min-h-[100px] max-md:min-h-[90px] max-sm:min-h-[80px]">
          <div className="flex gap-5 max-lg:gap-4 max-md:gap-3 max-sm:gap-2 items-start p-10 max-lg:p-8 max-md:p-6 max-sm:p-4 w-full rounded-3xl bg-slate-950">
            <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-sm:min-w-[200px]">
              <div
                data-layername="常見問題"
                className="flex-1 shrink gap-10 w-full text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg"
              >
                常見問題
              </div>
            </div>
          </div>
        </div>
        {faqItems.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;