// import React from 'react';
// import Image from 'next/image';

// function HomeBackgroundImage() {
//     return (
//         <div className="relative">
//     <Image
//       src="/group7.svg"
//       className="w-screen md:h-96 object-cover h-auto"
//       width={1000}
//       height={1000}
//       quality={100}
//       alt="Home Background Image"
//       aria-label='Home Background Image'
//     />
//             {/* <div className='absolute w-[65%] md:w-auto top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-8 text-container shadow-md bg-main bg-opacity-40 rounded'>
//         <h1 className='text-2xl md:text-4xl font-semibold mb-2 font-titleFont '>
//             Welcome to IHA
//         </h1>
        
//         <p className='text-sm md:text-lg mb-4 '>
//         Ihsan Healthcare Association at University of Texas at Dallas
//         </p>
//       </div> */}
//         </div>
//     )
// }

// export default HomeBackgroundImage;
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../navbar/Button';
import Link from 'next/link';

function HomeBackgroundImage() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className={`relative md:h-auto bg-main  ${isLargeScreen ? 'md:flex' : 'md:flex-col'}`}>
      <div className='w-screen grid place-content-center'>
        {isLargeScreen ? (
          <Image
            src="/group2.svg"
            className="md:w-screen md:object-cover md:h-auto max-h-[550px] object-cover mix-blend-screen filter brightness-110 contrast-120 object-top"
            width={1000}
            height={1000}
            quality={90}
            priority={true}
            alt="Home Background Image"
            aria-label='Home Background Image'
          />
        ) : (
         <div/>
        )}
      </div>
      {isLargeScreen ? (
        <div className='absolute w-[65%]  md:w-auto top-2/3 left-1/3 transform -translate-x-1/2 md:-translate-y-1/2 text-start lg:-translate-y-1/3 text-white pl-8  rounded'>
          <h1 className='md:text-[55px] text-2xl font-bold   font-titleFont text-bodyColor uppercase leading-[1]  '>
            Welcome to IHA
          </h1>
          <p className='md:text-[20px] text-base mb-2  text-secondary font-titleFont pl-4 '>
            Ihsan Healthcare Association at the University of Texas at Dallas
          </p>
          <Button />
          
        </div>
      ) : (
        <div>
        <div className='grid place-content-center my-8 '>
        <h1 className='text-center md:text-[55px] text-3xl font-semibold mb-2 font-sur uppercase tracking-[8px] text-secondary '>
          Welcome to IHA
        </h1>
      </div>
      <div className='w-screen grid place-content-center'>
        <Image
          src="/group2.svg"
          className="object-contain mix-blend-screen filter brightness-110 contrast-80"
          width={1000}
          height={1000}
          quality={90}
          priority={true}
          alt="Home Background Image"
          aria-label='Home Background Image'
        />
      </div>
      <div className='grid place-content-center my-8 mx-5'>
        <p className='md:text-[20px] text-xl mb-4 text-third font-titleFont text-center'>
          Ihsan Healthcare Association at University of Texas at Dallas
        </p>
       <Button />
      </div>
      </div>
      )}
    </div>
  );
}

    
export default HomeBackgroundImage;



