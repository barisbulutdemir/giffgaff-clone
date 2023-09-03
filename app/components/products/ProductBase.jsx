import React from "react";
import ProductHead from "./ProductHead";
import ProductCard from "./ProductCard";
import galaxybanner from "../public/galaxybanner.png";
import Image from "next/image";
export default function ProductBase() {
  return (
    <>
      <ProductHead />
      <ProductCard />
      <div className="flex justify-center my-6">
        <button className="font-delagothic text-sm border-2 border-b-8 rounded-3xl border-black px-2 py-1 hover:bg-slate-200 ">
          See all phones
        </button>
      </div>
      <div>
        <Image src={galaxybanner} className="w-[85%] mx-auto"/> 
      </div>
    </>
  );
}
