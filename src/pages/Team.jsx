'use client'
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import teamMembers from '@/api/teamData';

const members = teamMembers;

// ... (imports remain unchanged)

const TeamPage = () => {
  function FadeInSection({ children, delay = 0.4 }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2
    });

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1 });
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="md:text-4xl text-3xl font-semibold font-title text-center mt-10 uppercase">Meet Our Officers</h1>
      {members.map((member, index) => (
        <FadeInSection key={index} delay={index * 0.1}>
          <div
            className={`flex flex-col rounded-lg mx-4 my-4 md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } gap-4 items-center p-8`}
          >
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="object-center rounded-full h-64 w-64 md:h-80 md:w-80 object-cover border-dashed border-4 border-third items-center"
              />
            </div>
            <div className="md:w-1/2 md:px-6 text-center md:text-start bg-gradient-to-r from-third to-gray-200  py-2 px-2 rounded-xl">
              <h2 className="md:text-2xl text-xl font-title font-semibold">{member.name}</h2>
              <p className="text-gray-600 font-subTitle font-medium ">{member.role}</p>
              <p className="text-gray-600 font-subTitle font-medium">{member.major} ({member.track})</p>
              <p className="text-black font-body font-base">{member.description}</p>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
};

export default TeamPage;
