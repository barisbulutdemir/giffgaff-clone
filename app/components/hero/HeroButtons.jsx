import React from "react";

export default function HeroButtons() {
  return (
    <div>
      <div className=" w-full flex justify-center gap-4 mt-5">
        <button  className="font-delagothic text-lg border-2 border-b-8 rounded-3xl border-black px-4 py-2 hover:bg-yellow-300 bg-yellow-400 ">
          Order your free SIM
        </button>
        <button className="font-delagothic text-lg border-2 border-b-8 rounded-3xl border-black px-4 py-2 hover:bg-slate-200 ">
            Activate your SIM

        </button>
       
      </div>
    </div>
  );
}
