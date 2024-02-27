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
//         <h1 className='text-2xl md:text-4xl font-semibold mb-2 font-title '>
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
            className="md:w-screen md:object-cover md:h-auto max-h-[550px] object-cover mix-blend-screen object-top saturate-150"
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
        <div className='absolute w-[65%] md:w-auto top-2/3 left-1/3 transform -translate-x-1/2 md:-translate-y-1/2 text-start lg:-translate-y-1/3 text-white pl-8 rounded'>
          <h1 className='md:text-[52px] lg:text-[68px] font-bold  font-title text-bodyColor uppercase leading-[1] '>
            Welcome to IHA
          </h1>
          <p className='md:text-[26px] lg:[32px] leading-[1] mb-2  text-secondary font-title pl-4 '>
            Ihsan Healthcare Association at the University of Texas at Dallas
          </p>
          <Button />
          
        </div>
      ) : (
        <div className='pb-2'>
        <div className='grid place-content-center my-8 '>
        <h1 className='text-center text-[34px] font-semibold mb-2 font-title uppercase tracking-[10px] text-secondary bg-clip-text text-transparent bg-gradient-to-r from-third to-secondary'>
          Welcome to IHA
        </h1>
      </div>
      <div className='w-screen grid place-content-center'>
        <Image
          src="/group2.svg"
          className="object-contain mix-blend-screen saturate-150 h-auto w-auto"
          width={1000}
          height={1000}
          quality={90}
          priority={true}
          alt="Home Background Image"
          aria-label='Home Background Image'
        />
      </div>
      <div className='grid place-content-center my-8 mx-5'>
        <p className='text-2xl mb-4 text-third font-title text-center bg-clip-text text-transparent bg-gradient-to-r from-third to-secondary '>
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



