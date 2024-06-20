import Image from "next/image";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import CircularImageprops from "./CircularImageprops";

const CircularImages = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".animate", {
      duration: 1000,
      origin: "top",
      distance: "20px",
      delay: 200,
      interval: 200,
      reset: false,
    });
  }, []);

  return (
    <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-0 lg:justify-between">
      <CircularImageprops
        src="/assets/floating_pools.svg"
        alt=""
        caption={"Floating\n Pools"}
      />
      <CircularImageprops
        src="/assets/cabins.svg"
        alt=""
        caption={"Spacious Cabins\nLike Rooms"}
      />
      <CircularImageprops
        src="/assets/pools.svg"
        alt=""
        caption={"Sea Facing\n Swimming Pools"}
      />
      <CircularImageprops
        src="/assets/gym.svg"
        alt=""
        caption={"Gymnasium & Fitness"}
      />
    </div>
  );
};

export default CircularImages;
