'use client';
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MissionPage = () => {
  function FadeInSection({ children, delay = 0.4 }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2
    });

    useEffect(() => {
      if (inView) {
        controls.start({ y: 0, opacity: 1 });
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial={{ y: -10, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col justify-start  md:mt-36 mt-10 items-center  ">
      <FadeInSection>
        <h1 className="md:text-4xl text-3xl font-semibold text-center font-title  md:-mt-24">Our Mission</h1>
      </FadeInSection>
        <FadeInSection>
      <div className="flex flex-col  items-center md:flex-row gap-4 p-4 pb-8">
          <div className="md:w-1/2 flex  justify-center">
            <Image
              src="/doctor.png"
              alt="Mission Image"
              width={1200}
              height={800}
              className="rounded-md md:h-96 md:w-96 object-cover "
            />
          </div>
          <div className="md:w-1/2 px-4 md:px-8 border-dashed border-4 border-third rounded-xl py-4 bg-third/40">
            <p className="text-base font-body">
              The mission of Ihsan for Healthcare is to empower and support students pursuing careers in healthcare by connecting them with enriching opportunities that will enhance their skills and strengthen their applications. We aim to nurture well-rounded, compassionate future healthcare professionals while also raising awareness and providing aid to underserved health systems globally. Our ultimate vision is a world where all communities have access to quality, affordable healthcare and where providers work collaboratively across borders to exchange knowledge and improve outcomes.
            </p>
          </div>
      </div>
        </FadeInSection>
    </div>
  );
};

export default MissionPage;
