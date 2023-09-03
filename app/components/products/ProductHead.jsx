import { CurrencyEuroIcon, LockOpenIcon, TruckIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function ProductHead() {
  return (
    <div className="mt-20 mb-10">
      <div className="flex mt-10 justify-center  ">
        <h1 className="  text-4xl font-delagothic">Looking for a phone?</h1>
      </div>
      <div className="w-full flex items-center justify-center mt-5 space-x-10">
        <p className="product-icons-div ">
            <LockOpenIcon className="product-icons"/>
            <span> All unlocked</span>
        </p>
        <p className="product-icons-div">
          <TruckIcon className="product-icons" />
          <span> Free delivery</span>
        </p>
        <p className="product-icons-div">
          <CurrencyEuroIcon className="product-icons"/>
          <span> Flexible payment</span>
        </p>
      </div>

    </div>
  );
}
