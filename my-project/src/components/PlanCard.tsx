import React from 'react';

interface PlanCardProps {
  price: string;
  period: string;
  days: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ price, period, days }) => {
  return (
    <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
      <div className="max-w-full w-[604px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col items-start px-10 py-20 mx-auto w-full rounded-3xl border border-white border-solid bg-[conic-gradient(from_181deg_at_50%_50%,rgba(0,0,0,0.00_172.66420125961304deg,rgba(235,239,249,0.30)_281.25deg,rgba(82,204,252,0.12)_360deg),rgba(255,255,255,0.10))] min-h-[253px] max-md:px-5 max-md:mt-10">
              <h2 className="z-0 text-4xl leading-none text-center text-white">
                {price}/{period}
              </h2>
              <p className="z-0 mt-6 text-2xl text-center text-white">{days}</p>
              <div className="flex absolute top-8 z-0 gap-10 justify-between items-center max-w-full right-[-21px] w-[310px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/409b145c4fa06e17d38566efe5a2981561d395ed53f8caca37976581a3b44ce8?apiKey=63de7e29674842c29a93babaf5f1d67a&"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/088761758d8cf9078a57210a7ee8680793f8b990a1aed5240e1cc5f1bb9a9988?apiKey=63de7e29674842c29a93babaf5f1d67a&"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[13px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
            <button className="flex gap-2.5 justify-center items-center px-3 py-5 mt-60 w-full border-purple-400 border-solid bg-[linear-gradient(180deg,#8547F6_0%,#BC98FF_100%)] border-[0.962px] min-h-[76px] rounded-[111.991px] max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2620c0122af25e10352c5e65d72b85252de3ad03035ceb74c506bae80f58399f?apiKey=63de7e29674842c29a93babaf5f1d67a&"
                alt=""
                className="object-contain self-stretch my-auto w-10 aspect-square"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;