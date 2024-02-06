import React from 'react'
import Image from 'next/image'

export default function Mission() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="md:w-1/2 p-4">
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            lacinia, nulla nec aliquet fermentum, nunc nulla vestibulum mauris,
            vel tincidunt eros odio ac nunc. Nulla facilisi. Sed et mauris in
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/image-holder2.webp"
            className="md:w-full w-96 md:h-64 h-56 object-cover"
            width={600}
            height={600}
            alt="Home Background Image"
            aria-label='Home Background Image'
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-4 gap-4">
  <div className="md:w-1/2 order-last md:order-first">
    <Image
      src="/image-holder2.webp"
      className="md:w-full w-96 md:h-64 h-56 object-cover"
      width={600}
      height={600}
      alt="Home Background Image"
      aria-label="Home Background Image"
    />
  </div>
  <div className="md:w-1/2 p-4">
    <h1>Our Mission</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia,
      nulla nec aliquet fermentum, nunc nulla vestibulum mauris, vel tincidunt
      eros odio ac nunc. Nulla facilisi. Sed et mauris in
    </p>
  </div>
</div>


    </div>
  )
}
