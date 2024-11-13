const Hero: React.FC = () => {
  return (
    <section className="flex relative flex-col self-stretch pb-2 w-full min-h-[525px] max-md:min-h-[400px] max-sm:min-h-[300px]">
      <div className="flex relative flex-col w-full min-h-[517px] max-md:min-h-[392px] max-sm:min-h-[292px]">
        {/* 光效容器 - 移到最底层 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[400px] max-md:top-[295px] max-sm:top-[210px] z-[0]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[400px] max-md:w-[375px] max-md:h-[300px] max-sm:w-[300px] max-sm:h-[240px]">
            {/* 最外层深色光晕 - Ellipse 12 */}
            <div className="absolute inset-0 opacity-30">
              <img 
                src="/Ellipse/Ellipse 12.svg" 
                className="w-full h-full" 
                style={{ 
                  filter: 'blur(40px) brightness(0.7)',
                  mixBlendMode: 'multiply'
                }}
                alt="" 
              />
            </div>

            {/* 渐变光晕层 - 从深到亮到紫 */}
            {[8, 7, 6, 5].map((num) => (
              <div 
                key={num} 
                className="absolute inset-0" 
                style={{ 
                  opacity: 0.25 - (num - 5) * 0.05,
                  transform: `scale(${0.85 - (8 - num) * 0.05})`,
                  filter: `blur(${15 + (8 - num) * 2}px)`,
                  mixBlendMode: 'soft-light'
                }}
              >
                <img src={`/Ellipse/Ellipse ${num}.svg`} className="w-full h-full" alt="" />
              </div>
            ))}

            {/* 中间明亮层 */}
            {[4, 3].map((num) => (
              <div 
                key={num} 
                className="absolute inset-0" 
                style={{ 
                  opacity: 0.4,
                  transform: `scale(${0.65 - (4 - num) * 0.05})`,
                  filter: `blur(${8}px)`,
                  mixBlendMode: 'screen'
                }}
              >
                <img src={`/Ellipse/Ellipse ${num}.svg`} className="w-full h-full" alt="" />
              </div>
            ))}

            {/* 紫色渐变层 */}
            {[2, 1].map((num) => (
              <div 
                key={num} 
                className="absolute inset-0" 
                style={{ 
                  opacity: 0.15,
                  transform: `scale(${0.55 - (2 - num) * 0.05})`,
                  filter: `blur(${12}px) hue-rotate(20deg)`,
                  mixBlendMode: 'color-dodge'
                }}
              >
                <img src={`/Ellipse/Ellipse ${num}.svg`} className="w-full h-full" alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* 深色半圆弧 */}
        <div className="absolute top-0 left-0 right-0 h-[450px] max-md:h-[350px] max-sm:h-[250px] bg-[#1E1332]/90 rounded-b-[50%] z-[1]">
          {/* 圆弧边缘发光效果 */}
          <div className="absolute -bottom-8 left-0 right-0 h-[40px] max-md:h-[30px] max-sm:h-[20px] blur-[20px] rounded-full bg-[#8B5CF6]/30" />
        </div>
        
        {/* 标题 */}
        <h1
          data-layername="headline"
          className="relative z-[2] self-center mt-[150px] max-lg:mt-[120px] max-md:mt-[100px] max-sm:mt-[80px] mb-0 w-full text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-4xl text-center max-w-[1100px] max-lg:max-w-[900px] max-md:max-w-[600px] max-sm:max-w-[90%] max-md:mb-2.5"
        >
          Empower <span className="font-semibold">AI</span>{" "}
          <span className="font-semibold">technology</span>
        </h1>

        {/* 箭头 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[420px] max-md:top-[325px] max-sm:top-[230px] z-[3]">
          <img
            loading="lazy"
            src="/arrow.svg"
            className="relative w-[60px] h-[60px] max-md:w-[35px] max-md:h-[35px] max-sm:w-[30px] max-sm:h-[30px] object-contain"
            alt="Scroll down indicator"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;