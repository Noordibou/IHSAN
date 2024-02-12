import React from 'react';
import Image from 'next/image';
import Button from '../navbar/Button';

function HomeBackgroundImage() {
    return (
        <div className="relative  bg-transparent">

            <Image
                src="/group.jpg"
                className="w-screen md:h-96 md:object-cover h-auto"
                width={1000}
                height={1000}
                alt="Home Background Image"
                aria-label='Home Background Image'
            />
            <div className='absolute w-[65%] md:w-auto top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-8 text-container shadow-md bg-main bg-opacity-40 rounded'>
        <h1 className='text-2xl md:text-4xl font-semibold mb-2 font-titleFont '>
            Welcome to IHA
        </h1>
        
        <p className='text-sm md:text-lg mb-4 '>
        Ihsan Healthcare Association at University of Texas at Dallas
        </p>
      </div>
        </div>
    )
}

export default HomeBackgroundImage;