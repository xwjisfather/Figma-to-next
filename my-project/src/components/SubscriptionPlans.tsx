import React from "react";

interface PlanProps {
  price: string;
  duration: string;
  icon: string;
  position?: 'left' | 'right' | 'bottom';
}

const PlanCard: React.FC<PlanProps> = ({ price, duration, icon, position }) => (
  <div className={`relative flex flex-col items-center justify-center px-10 py-8 w-[280px] h-[180px] 
    max-lg:w-[240px] max-lg:h-[160px] max-md:w-[200px] max-md:h-[140px] max-sm:w-[180px] max-sm:h-[120px]
    text-center text-white rounded-[20px] ${position === 'bottom' ? 'mt-32 max-lg:mt-24 max-md:mt-20 max-sm:mt-16' : ''}`}>
    {/* 玻璃拟态效果 */}
    <div className="absolute inset-0 rounded-[20px] bg-white/10 backdrop-blur-md" />
    
    {/* 发光效果 */}
    <div className="absolute inset-0 rounded-[20px] shadow-[0_0_30px_rgba(139,92,246,0.3)]" />
    
    {/* 光晕点缀 */}
    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/30 rounded-full" />
    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/30 rounded-full" />
    
    {/* 圆形图标 */}
    <div className="absolute -top-8">
      <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 
        rounded-full bg-[#8B5CF6] flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)]">
        <img src={icon} className="w-8 h-8 max-lg:w-7 max-lg:h-7 max-md:w-6 max-md:h-6 max-sm:w-5 max-sm:h-5" alt="" />
      </div>
    </div>

    {/* 内容 */}
    <div className="relative mt-4 z-10">  {/* 移除 mt-10 */}
      <div className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-medium mb-4">{price}</div>
      <div className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-white/80">{duration}</div>
    </div>
  </div>
);

const SubscriptionPlans: React.FC = () => {
  const plans: PlanProps[] = [
    { 
      price: "1700HK$/年", 
      duration: "365日",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/88c0f19bcb03c04b67d7c80cca531dc1ee8703c87976997df44e56e3f5d7017a",
      position: 'left'
    },
    { 
      price: "155HK$/月", 
      duration: "30日",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/82d4cac4a12b78339ff4028e220b9b687b68bb2fbd5677e2cdfd92b7f0984ba9",
      position: 'bottom'
    },
    { 
      price: "400HK$/季度", 
      duration: "90日",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3cbab3e5743b2455c14aaad1d39ea026efd0e70044d0402fa842733236e915d",
      position: 'right'
    }
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto mt-32 px-4">
      <h2 className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-medium text-white mb-32">
        訂閱計畫
      </h2>

      {/* 整体连接线布局容器 */}
      <div className="relative w-full">
        {/* 中心图标和圆环 */}
        <div className="relative flex justify-center mb-24">
          <div className="relative">
            {/* 发光圆环 */}
            <div className="absolute -inset-6">
              <div className="w-32 h-32 rounded-full border-2 border-white/30
                shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
              <div className="absolute inset-[4px] rounded-full border border-white/20" />
              <div className="absolute inset-[8px] rounded-full border border-white/10" />
            </div>

            {/* 中心图标 */}
            <div className="relative w-20 h-20 rounded-full bg-[#8B5CF6] flex items-center justify-center
              shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d4cac4a12b78339ff4028e220b9b687b68bb2fbd5677e2cdfd92b7f0984ba9"
                className="w-10 h-10 object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
{/* 连接线 */}
<div className="absolute top-20 left-0 w-full h-full">
  {/* 左侧弧形连接线 */}
  <div className="absolute left-[20%] top-10 w-[30%] h-[100px]
    border-t-2 border-l-2 rounded-tl-[50px] border-white/30" />

  {/* 右侧弧形连接线 */}
  <div className="absolute right-[20%] top-10 w-[30%] h-[100px]
    border-t-2 border-r-2 rounded-tr-[50px] border-white/30" />

  {/* 中间垂直连接线 */}
  <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[2px] h-[500px]
    bg-gradient-to-b from-white via-white/50 to-white/30
    shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

  {/* 装饰性光点 */}
  <div className="absolute left-[20%] top-[108px] w-2 h-2 bg-white rounded-full 
    shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
  <div className="absolute right-[20%] top-[108px] w-2 h-2 bg-white rounded-full 
    shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-2 bg-white rounded-full 
    shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
</div>

        {/* 卡片布局 */}
        <div className="grid grid-cols-3 gap-20">
          <div className="flex justify-end">
            <PlanCard {...plans[0]} />
          </div>
          <div className="col-span-1"></div>
          <div className="flex justify-start">
            <PlanCard {...plans[2]} />
          </div>
        </div>
        
        {/* 底部卡片 */}
        <div className="flex justify-center mt-32">
          <PlanCard {...plans[1]} />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;