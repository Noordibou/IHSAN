'use client'
import React from 'react'
import HomeBackgroundImage from '../components/home/BackgroundImage'
import Mission from '@/components/home/Mission'
import Events from '@/components/events/Events'
import ContactMe from '@/components/contact/Contact'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'; 

export default function HomePage() {
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
    <div className=" flex flex-col items-center bg-bodyColor ">
      <FadeInSection >
        <HomeBackgroundImage />
      </FadeInSection>

      <FadeInSection delay={0.6}>
        <Mission />
      </FadeInSection>

      <FadeInSection>
        <Events />
      </FadeInSection>

      <FadeInSection>
        <ContactMe />
      </FadeInSection>
    </div>
  );
}
