import React from "react";
import apppic from "../public/apppic.webp";
import Image from "next/image";
import qrimg from "../public/qrimg.svg";

export default function AppSection() {
  return (
    <div className="bg-black">
      <div className="w-[85%] mx-auto flex">
        <div className="w-[70%] py-10">
          <h1 className="text-white text-5xl font-delagothic">
            Get the giffgaff app
          </h1>
          <p className="text-white my-5">
            Manage your giffgaff account with the tap of your phone.
            <br /> Download our app for{" "}
            <span className="font-bold">Apple,</span>{" "}
            <span className="font-bold">Android</span> and{" "}
            <span className="font-bold">Huawei</span>.
          </p>

          <div className="space-y-4">
            <p className="text-white">Scan the QR Code</p>
            <div>
              <Image src={qrimg} />
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <Image src={apppic} className="" />
        </div>
      </div>
    </div>
  );
}
