import React from 'react';

interface BenefitIconProps {
  src: string;
}

const BenefitIcon: React.FC<BenefitIconProps> = ({ src }) => {
  return (
    <div className="flex relative flex-1 gap-2.5 justify-center items-center px-3 py-5 border border-purple-400 border-solid min-h-[76px] rounded-[112px] max-md:mr-0">
      <div className="flex gap-2.5 items-center self-stretch my-auto w-10">
        <img
          loading="lazy"
          src={src}
          alt=""
          className="object-contain self-stretch my-auto w-10 aspect-square"
        />
      </div>
    </div>
  );
};

export default BenefitIcon;