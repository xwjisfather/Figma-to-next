import React from "react";

interface NewsItemProps {
  title: string;
  content: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, content }) => (
  <div className="flex flex-col justify-center self-stretch py-10 max-lg:py-8 max-md:py-6 max-sm:py-4 px-10 max-lg:px-8 max-md:px-6 max-sm:px-4 my-auto rounded-3xl border border-solid bg-slate-900 bg-opacity-50 border-white border-opacity-0 shadow-[0px_0px_100px_rgba(20,15,42,1)] w-[700px] max-lg:w-[600px] max-md:w-full max-sm:w-full">
    <div className="flex flex-col w-full">
      <h3 
        data-layername={title} 
        className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-medium"
      >
        {title}
      </h3>
      <p 
        data-layername={content} 
        className="mt-5 max-lg:mt-4 max-md:mt-3 max-sm:mt-2 text-xl max-lg:text-lg max-md:text-base max-sm:text-sm"
      >
        {content}
      </p>
    </div>
  </div>
);

const News: React.FC = () => {
  const newsItems: NewsItemProps[] = [
    {
      title: "以太坊巨鲸在价格下跌中出售1500枚ETH",
      content:
        "根据Ai 姨的消息，钱包地址0x2ab...3727e在三小时前清仓了1500枚ETH，这些ETH最初以平均价格$2182购买。此批ETH价值371万美元，充值价格为$2480。如果全部卖出，将获利44.6万美元。过去一周，ETH价格下跌了6.39%，在今年的价格峰值时，这1500枚ETH曾有282万美元的浮盈。",
    },
    {
      title: "Vitalik Buterin 强调使用 RISC-V 的 EVM 验证路线图",
      content:
        "根据 VitalikButerin 的说法，当前的有效性证明形式验证路线图的一个重要部分是使用 RISC-V 架构创建以太坊虚拟机 (EVM) 的验证实现。他建议 AFDudley0 应该与可能参与该路线图的 Alexander L. Hicks 讨论这个话题。这一发展对于确保以太坊智能合约的可靠性和安全性至关重要，可能会影响以太坊在加密市场中的价值和可用性。",
    },
    {
      title: "本周影响比特币的关键经济数据事件",
      content:
        "根据GreeksLive，本周对比特币投资者来说至关重要，因为有重大的宏观经济事件。重点是周五的非农就业数据和失业率数据，这是选举前最后的重要经济指标。这些数据的发布可能会影响比特币的价格走势，因为它们可能影响市场情绪和货币政策预期。",
    },
  ];

  return (
    <section
      data-layername="testimonials"
      className="flex flex-col self-stretch mt-96 max-lg:mt-72 max-md:mt-48 max-sm:mt-24 w-full text-center text-white"
    >
      <h2
        data-layername="最新新闻"
        className="self-center max-w-full text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-medium whitespace-nowrap w-[693px] max-lg:w-[600px] max-md:w-[500px] max-sm:w-[95%]"
      >
        最新新闻
      </h2>
      <div className="flex gap-5 items-center mt-32 max-lg:mt-24 max-md:mt-16 max-sm:mt-12 w-full overflow-x-auto max-md:flex-col">
        {newsItems.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default News;