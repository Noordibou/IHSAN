// pages/mission.js

import React from 'react';
import Image from 'next/image';

const MissionPage = () => {
  return (
    <div className="flex flex-col justify-center md:mt-36 mt-10 items-center pb-8 lg:pb-28 ">
      <h1 className="md:text-4xl text-3xl font-semibold text-center font-title pb-4 md:-mt-24">Our Mission</h1>
      <div className="flex flex-col  items-center md:flex-row gap-4 p-4">
        <div className="md:w-1/2 flex  justify-center">
          <Image
            src="/doctor.png"
            alt="Mission Image"
            width={800}
            height={400}
            className="rounded-md md:h-96 md:w-96 object-cover "
          />
        </div>
        <div className="md:w-1/2 px-4 md:px-8 border-dashed border-4 border-third rounded-xl py-4 bg-third/40">
          <p className="text-base font-body">
          The mission of Ihsan for Healthcare is to empower and support students pursuing careers in healthcare by connecting them with enriching opportunities that will enhance their skills and strengthen their applications. We aim to nurture well-rounded, compassionate future healthcare professionals while also raising awareness and providing aid to underserved health systems globally. Our ultimate vision is a world where all communities have access to quality, affordable healthcare and where providers work collaboratively across borders to exchange knowledge and improve outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
