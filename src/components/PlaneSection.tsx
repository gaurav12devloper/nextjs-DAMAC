import Image from "next/image";
import React from "react";

export default function PlansSection() {
  const plans = [
    {
      imageSrc: "/assets/book_with.svg",
      title: "BOOK WITH",
      subtitle: "Only 20%",
    },
    {
      imageSrc: "/assets/payment_plan.svg",
      title: "PAYMENT PLAN",
      subtitle: "Easy 70/30",
    },
    {
      imageSrc: "/assets/handover_on.svg",
      title: "HANDOVER ON",
      subtitle: "Q2 2027",
    },
    {
      imageSrc: "/assets/area_starts.svg",
      title: "AREA STARTS FROM",
      subtitle: "700 sqmt",
    },
  ];

  return (
    <div className="w-full h-[164px] bg-lightCyan overflow-x-auto flex justify-normal md:justify-center items-center px-5 lg:px-0 gap-12 lg:gap-40">
      {plans.map((plan, index) => (
        <div key={index} className="flex items-center justify-center flex-col">
          <Image
            loading="lazy"
            width={50}
            height={48}
            src={plan.imageSrc}
            alt=""
            className="w-[45px] sm:w-[50px] h-[42px] sm:h-[48px]"
          />
          <p className="text-[16px] whitespace-nowrap font-normal leading-[16px] text-darkBlue mt-3 mb-1">
            {plan.title}
          </p>
          <p className="uppercase whitespace-nowrap font-oswald text-[30px] font-medium leading-[30px] tracking-[0.03em] text-darkBlue">
            {plan.subtitle}
          </p>
          <div className="w-[73px] h-[5px] bg-darkBlue opacity-[12%] rounded-xl mt-3"></div>
        </div>
      ))}
    </div>
  );
}
