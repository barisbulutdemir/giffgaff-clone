import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";
import  iphone14pro  from '../public/iphone14pro.webp'
import Image from "next/image";

export default function ProductCard() {
  return (
    <>
      <div className="w-[85%] flex mx-auto space-x-10 ">
        <div className="w-[30%] bg-slate-100 py-4 ">
          <h3 className=" text-start text-2xl font-bold my-4 mx-2">
            iPhone 14 Pro
          </h3>
          <div className="flex">
            <div className="w-[40%]">
                <Image className="w-[80%] mx-auto" src={iphone14pro} w- />
            </div>
            <div className="w-[60%]">
              <div className=" bg-yellow-400 p-3 text-xl font-delagothic inline-block ">
                €140 off
              </div>

              {/* colors start   */}
              <div className=" my-3 flex space-x-1">
                <div className="bg-slate-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-yellow-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-blue-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-green-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-white rounded-full w-4 h-4 border-2 border-black" />
              </div>

              <div className="h-0.5 bg-slate-400  mr-2 my-2" />

              {/* Price start  */}
              <div className=" ">
                <p>From</p>
                <div className="flex">
                  {/* vertical seperator start  */}
                  <div className="h-20 w-1 mx-1 bg-blue-500 " />

                  {/* Price  */}
                  <div className="mx-2">
                    <h2 className="text-2xl font-delagothic">€42.67/mo</h2>
                    <h4 className="text-sm">
                      <span className="font-delagothic text-sm">+ €25</span>{" "}
                      upfront
                    </h4>
                    <p className="text-slate-600 text-sm">for 24 months</p>
                  </div>
                </div>

                {/* price end */}
                <p className="text-sm">
                  or pay in full{" "}
                  <span className="font-delagothic text-md filter">€1049</span>
                </p>
              </div>
              <div className="h-0.5 bg-slate-400 mr-2 my-2" />

              <p className="flex"> <span className="h-4 w-5"><CheckIcon className="  h-5 w-5 text-green-500 " /></span>Now in stock</p>

              <div className="flex justify-end mx-6 mt-8 mb-4 ">
                <button className="px-4 py-2 bg-slate-700 text-white hover:opacity-80" >View details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] bg-slate-100 py-4 ">
          <h3 className=" text-start text-2xl font-bold my-4 mx-2">
            iPhone 14 Pro
          </h3>
          <div className="flex">
            <div className="w-[40%]">
                <Image className="w-[80%] mx-auto" src={iphone14pro} w- />
            </div>
            <div className="w-[60%]">
              <div className=" bg-yellow-400 p-3 text-xl font-delagothic inline-block ">
                €140 off
              </div>

              {/* colors start   */}
              <div className=" my-3 flex space-x-1">
                <div className="bg-slate-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-yellow-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-blue-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-green-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-white rounded-full w-4 h-4 border-2 border-black" />
              </div>

              <div className="h-0.5 bg-slate-400  mr-2 my-2" />

              {/* Price start  */}
              <div className=" ">
                <p>From</p>
                <div className="flex">
                  {/* vertical seperator start  */}
                  <div className="h-20 w-1 mx-1 bg-blue-500 " />

                  {/* Price  */}
                  <div className="mx-2">
                    <h2 className="text-2xl font-delagothic">€42.67/mo</h2>
                    <h4 className="text-sm">
                      <span className="font-delagothic text-sm">+ €25</span>{" "}
                      upfront
                    </h4>
                    <p className="text-slate-600 text-sm">for 24 months</p>
                  </div>
                </div>

                {/* price end */}
                <p className="text-sm">
                  or pay in full{" "}
                  <span className="font-delagothic text-md filter">€1049</span>
                </p>
              </div>
              <div className="h-0.5 bg-slate-400 mr-2 my-2" />

              <p className="flex"> <span className="h-4 w-5"><CheckIcon className="  h-5 w-5 text-green-500 " /></span>Now in stock</p>

              <div className="flex justify-end mx-6 mt-8 mb-4 ">
                <button className="px-4 py-2 bg-slate-700 text-white hover:opacity-80" >View details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] bg-slate-100 py-4 ">
          <h3 className=" text-start text-2xl font-bold my-4 mx-2">
            iPhone 14 Pro
          </h3>
          <div className="flex">
            <div className="w-[40%]">
                <Image className="w-[80%] mx-auto" src={iphone14pro} w- />
            </div>
            <div className="w-[60%]">
              <div className=" bg-yellow-400 p-3 text-xl font-delagothic inline-block ">
                €140 off
              </div>

              {/* colors start   */}
              <div className=" my-3 flex space-x-1">
                <div className="bg-slate-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-yellow-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-blue-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-green-700 rounded-full w-4 h-4 border-2 border-black" />
                <div className="bg-white rounded-full w-4 h-4 border-2 border-black" />
              </div>

              <div className="h-0.5 bg-slate-400  mr-2 my-2" />

              {/* Price start  */}
              <div className=" ">
                <p>From</p>
                <div className="flex">
                  {/* vertical seperator start  */}
                  <div className="h-20 w-1 mx-1 bg-blue-500 " />

                  {/* Price  */}
                  <div className="mx-2">
                    <h2 className="text-2xl font-delagothic">€42.67/mo</h2>
                    <h4 className="text-sm">
                      <span className="font-delagothic text-sm">+ €25</span>{" "}
                      upfront
                    </h4>
                    <p className="text-slate-600 text-sm">for 24 months</p>
                  </div>
                </div>

                {/* price end */}
                <p className="text-sm">
                  or pay in full{" "}
                  <span className="font-delagothic text-md filter">€1049</span>
                </p>
              </div>
              <div className="h-0.5 bg-slate-400 mr-2 my-2" />

              <p className="flex"> <span className="h-4 w-5"><CheckIcon className="  h-5 w-5 text-green-500 " /></span>Now in stock</p>

              <div className="flex justify-end mx-6 mt-8 mb-4 ">
                <button className="px-4 py-2 bg-slate-700 text-white hover:opacity-80" >View details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
