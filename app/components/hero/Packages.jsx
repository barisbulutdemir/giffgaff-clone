import React from "react";
import tenpound from "../public/tenpound.svg";

import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Packages() {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center">
        <div className="w-full flex items-center justify-center mt-10 space-x-32">
          <div>
            <ChevronLeftIcon className="h-16 w-16" />
          </div>
          <div className="">
            <Image src={tenpound} alt="sa" />
          </div>
          <div>
            <ChevronRightIcon className="h-16 w-16" />
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h3 className="text-center text-3xl">25 GB</h3>
            <p className="text-slate-600 text-center">Unlimited calls and texts</p>
          </div>
          <div >
            <h3 className="font-bold text-center mt-6">18 month contract</h3>
            <p className="text-center text-sm text-slate-600 ">This 18 month contract gives you the most data for your<br/> money and auto-renews each month. EU roaming included <br/> up to 5 GB.</p>
          </div>
          <h3 className="text-center mt-4"> 
          <Link href="/" className="text-cyan-600 underline font-semibold  ">See all plans </Link>
            <p className="text-sm w-[80%] mx-auto mt-10">
            *Based on (1) [36m] Klarna handset credit agreement, £25 upfront cost, £38.45 per month, 0% APR; and (2) 18 month airtime plan, £10 per month for 25GB. giffgaff Limited, Belmont House, Belmont Road, Uxbridge, UB8 1HE actsas credit broker, not lender, offering credit products by Klarna Bank AB (publ). 0% Klarna finance subject to status, credit checks, payment by Direct Debit. 18+ UK residents. Terms apply, see giffgaff.com/terms.
            </p>

          </h3>
        </div>
      </div>
    </>
  );
}
