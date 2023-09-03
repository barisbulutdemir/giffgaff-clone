import React from "react";
import HeroButtons from "./HeroButtons";
import Packages from "./Packages";
import Image from "next/image";
import iphonepro from "../public/14pro.png";


export default function HeroBase() {
  return (
    <div>
      <div className="h-[326px] bg-yellow-400 w-full">
        <div className="flex-1 py-10   ">
          <div className="flex items-center justify-center  -ml-40">
            <h1 className="font-delagothic text-7xl">fixed UK prices</h1>
          </div>
          <div className="flex items-center justify-center mt-5">
            <h1 className="font-delagothic text-5xl ">until the end of 2023</h1>
          </div>
          <div className="flex justify-center mt-5 ml-32 ">
            <h2 className="text-xl">Not bad.</h2>
          </div>
        </div>
      </div>
      <HeroButtons />
      <Packages />
      <div >
        <Image src={iphonepro} className="w-[80%] h-auto mx-auto mt-10 "/>
      </div>
    </div>
  );
}
