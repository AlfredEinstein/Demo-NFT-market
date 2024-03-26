import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import AvatarSlider from "./AvatarSlider";

function Bestsellers() {
  return (
    <section className="p-4 py-24 text-white">
      <div className="container max-w-6xl mx-auto overflow-hidden">
        <div className="flex flex-col items-center md:items-start space-y-5">
          <h1 className="text-2xl md:text-3xl font-medium">
            Best Creators & Sellers
          </h1>
          <div className="flex justify-center md:justify-between w-full">
            <p className="text-slate-400">Best sellers of the week's NFTs</p>
            <div className="md:flex items-center space-x-2 text-indigo-600 font-semibold hidden">
              <p>See More</p>
              <IoArrowForwardOutline size={12} />
            </div>
          </div>
        </div>
        <div>
          <AvatarSlider/>
        </div>
      </div>
    </section>
  );
}

export default Bestsellers;
