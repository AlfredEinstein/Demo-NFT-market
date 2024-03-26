import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import nfts from "../../../public/data/nfts";
import Card from "./Card";

function Products() {
  return (
    <section className="p-4 pb-24 text-white">
      <div className="container max-w-6xl mx-auto overflow-hidden">
        <div className="flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl md:text-3xl font-medium">
            Explore Hot Products
          </h1>
          <p className="text-slate-400 md:w-2/4 mx-auto">We are a huge marketplace dedicated to connecting greate artists of all Techwind with fans and unique token collectors!</p>
        </div>
        <div className="grid grid-cols:1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 items-center justify-between">
            {nfts.map((nft,index)=>(
                <Card key={index} item={nft}/>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
