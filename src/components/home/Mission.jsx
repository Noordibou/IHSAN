import React from "react";
import Image from "next/image";

export default function Mission() {
  return (
    <div className="">
      <div className="flex flex-col items-center md:flex-row gap-4 p-4 mb-10 ">
        <div className="md:w-1/2 p-4 ">
          <h1 className="md:text-4xl text-3xl pb-4 font-semibold font-title">Our Mission</h1>
          <p className="font-body text-base">
          Ihsan for Healthcare was founded to support students aspiring to
            enter the healthcare setting post-graduation. The
            organization&apos;s key objective is to connect students with
            opportunities in employment, volunteer work, research, and
            leadership designed to enhance their educational background, augment
            their engagement, and strengthen their applications. Additionally,
            we aim to contribute to the healthcare systems in developing nations
            through awareness campaigns and fundraising efforts, thereby
            facilitating the provision of essential supplies and assistance as
            needed.
          </p>
        </div>
        <div className="md:w-1/2 grid justify-items-center ">
          <Image
            src="/student.png"
            className="md:w-96 w-96 md:h-64 h-56 object-fill px-6 "
            width={600}
            height={600}
            alt="Home Background Image"
            aria-label="Home Background Image"
          />
        </div>
      </div>
      {/* <div className="flex flex-col  items-center md:flex-row p-4 gap-4 bg-third">
        <div className="p-4 ">
          <h1 className="md:text-4xl text-3xl pb-4 font-title font-semibold ">Our Mission</h1>
          <p className="font-body text-base">
            Ihsan for Healthcare was founded to support students aspiring to
            enter the healthcare setting post-graduation. The
            organization&apos;s key objective is to connect students with
            opportunities in employment, volunteer work, research, and
            leadership designed to enhance their educational background, augment
            their engagement, and strengthen their applications. Additionally,
            we aim to contribute to the healthcare systems in developing nations
            through awareness campaigns and fundraising efforts, thereby
            facilitating the provision of essential supplies and assistance as
            needed.
          </p>
        </div>
      </div> */}
    </div>
  );
}
