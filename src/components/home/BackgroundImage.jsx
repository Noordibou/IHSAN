import React from 'react';
import Image from 'next/image';
import Button from '../navbar/Button';

function HomeBackgroundImage() {
    return (
        <div className="relative w-screen bg-transparent">

            <Image
                src="/image-holder2.webp"
                className="w-screen h-96 object-cover"
                width={600}
                height={600}
                alt="Home Background Image"
                aria-label='Home Background Image'
            />
            <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-bodyColor px-8 text-container shadow-md bg-white bg-opacity-60 rounded'>
        <h1 className='text-2xl md:text-4xl font-semibold mb-2 font-titleFont '>
            Welcome to IHAUTD
        </h1>
        
        <p className='text-sm md:text-lg mb-4'>
        Ihsan Healthcare Association at University of Texas at Dallas
        </p>
      </div>
        </div>
    )
}

export default HomeBackgroundImage;