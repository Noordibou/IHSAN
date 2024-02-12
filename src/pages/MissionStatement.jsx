// pages/mission.js

import React from 'react';
import Image from 'next/image';

const MissionPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-center p-4">Our Mission</h1>
      <div className="flex flex-col items-center md:flex-row gap-4 p-4">
        <div className="md:w-1/2 flex  justify-center">
          <Image
            src="/student2.webp"
            alt="Mission Image"
            width={800}
            height={400}
            className="rounded-md h-96 w-96 object-cover "
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg">
            At our core, our mission is to empower individuals and businesses through innovative solutions. We believe in pushing the boundaries of technology to create meaningful and impactful experiences. Our dedicated team works collaboratively to deliver cutting-edge solutions that exceed expectations. With a commitment to excellence, integrity, and continuous improvement, we strive to make a positive difference in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
