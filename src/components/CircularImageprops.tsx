import Image from "next/image";
import React, { useEffect } from "react";

interface CircularImageProps {
    src: string;
    alt: string;
    caption: string;
  }
  
  const CircularImageModule: React.FC<CircularImageProps> = ({
    src,
    alt,
    caption,
  }) => {
    return (
      <div className="w-[145px] md:w-[227px] h-[171px] md:h-[271px] relative flex justify-center animate">
        <div className="w-[129px] md:w-[206px] h-[129px] md:h-[206px] border-4 md:border-0 border-[#D9D9D98A] bg-[#D9D9D98A] flex items-center justify-center rounded-full">
          <Image
            loading="lazy"
            width={193}
            height={193}
            src={src}
            alt={alt}
            className="z-20 w-[116px] md:w-[193px] h-[116px] md:h-[193px]"
          />
        </div>
        <div className="absolute bottom-0 w-[145px] md:w-[227px] h-[102px] md:h-[157px] rounded-[20px] shadow-custom bg-customWhite text-darkBlue py-2 md:py-5 flex items-end justify-center">
          <p className="whitespace-pre-wrap text-xs md:text-sm font-bold text-center">
            {caption}
          </p>
        </div>
      </div>
    );
  };
  export default CircularImageModule;