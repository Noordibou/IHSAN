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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            lacinia, nulla nec aliquet fermentum, nunc nulla vestibulum mauris,
            vel tincidunt eros odio ac nunc. Nulla facilisi. Sed et mauris in
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
          Ihsan for Healthcare was created to uplift students with plans to pursue healthcare post-graduation. Our primary purpose is to provide students with job, volunteering, research, and leadership opportunities meant to educate them in their field, increase their involvement, and promote their applications. Our secondary purpose is to aid the healthcare system in third-world countries by raising awareness and fundraising money to provide them with necessary supplies and aid as needed.
          </p>
        </div>
      </div>
    </div>
  );
}
