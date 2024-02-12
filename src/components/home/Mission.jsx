import React from "react";
import Image from "next/image";
import Blob from "@/components/opportunities/Blob";

export default function Mission() {
  return (
    <div className="">
      <h1 className="text-4xl font-semibold text-center p-4">Who We Are</h1>
      <div className="flex flex-col items-center md:flex-row gap-4 p-4 mb-10">
        <div className="md:w-1/2 p-4">
          <h1 className="md:text-3xl text-2xl font-semibold">About Us</h1>
          <p>
            lerum, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
            nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia
            arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
          
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
      <div className="flex flex-col  items-center md:flex-row p-4 gap-4 bg-main">
        <div className="p-8 text-white">
          <h1 className="md:text-3xl text-2xl font-semibold ">Our Mission</h1>
          <p>
          Ihsan for Healthcare was founded to support students aspiring to enter the healthcare setting post-graduation. The organization's key objective is to connect students with opportunities in employment, volunteer work, research, and leadership designed to enhance their educational background, augment their engagement, and strengthen their applications. Additionally, we aim to contribute to the healthcare systems in developing nations through awareness campaigns and fundraising efforts, thereby facilitating the provision of essential supplies and assistance as needed.
          </p>
        </div>
      </div>
    </div>
  );
}
