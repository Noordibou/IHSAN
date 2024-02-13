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
import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

function HomeBackgroundImage() {
  const isLargeScreen = useMediaQuery({ minWidth: 640 });

  return (
    <div className={`relative md:h-auto bg-main ${isLargeScreen ? 'md:flex' : 'md:flex-col'}`}>
      {isLargeScreen ? (
        <>
          <div className='w-screen grid place-content-center'>
            <Image
              src="/group7.svg"
              className="md:w-screen md:object-cover md:h-auto h-[550px] object-cover"
              width={1000}
              height={1000}
              quality={90}
              alt="Home Background Image"
              aria-label='Home Background Image'
            />
          </div>
          <div className='absolute w-[65%] md:w-auto top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-start  text-white px-8 text-container   rounded'>
            <h1 className='md:text-[55px] text-2xl font-semibold mb-2 font-titleFont text-[#EEEAD6]'>
              Welcome to IHA
            </h1>
            <p className='md:text-[20px] text-base mb-4 text-[#CDAD7D] font-titleFont'>
              Ihsan Healthcare Association at University of Texas at Dallas
            </p>
          </div>
        </>
      ) : (
        <>
          <div className='grid place-content-center my-8'>
            <h1 className='md:text-[55px] text-4xl font-semibold mb-2 font-titleFont text-[#EEEAD6]'>
              Welcome to IHA
            </h1>
          </div>
          <div className='w-screen grid place-content-center'>
            <Image
              src="/group6.svg"
              className="md:w-screen md:object-cover md:h-auto  object-contain"
              width={1000}
              height={1000}
              quality={90}
              alt="Home Background Image"
              aria-label='Home Background Image'
            />
          </div>
          <div className='grid place-content-center my-8 mx-5'>
            <p className='md:text-[20px] text-xl mb-4 text-[#CDAD7D] font-titleFont text-center'>
              Ihsan Healthcare Association at University of Texas at Dallas
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default HomeBackgroundImage;

