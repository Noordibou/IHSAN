'use client'
import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { formatDate } from '../../utils/date';


const EventCarousel = ({ events }) => {

  if (!events || events.length === 0) {
    return <p className=' place-content-center grid font-cri text-xl font-semibold bg-third w-screen h-24 bg-opacity-40'>Coming soon</p>;
  }

  return (
    
    <Splide
      options={{
        type     : 'slide',
        gap      : '1.5rem',
        pagination: true,
        arrows: true,
        perPage: 3,
        padding: {
          right: '3rem',
          left : '2rem',
        },
        breakpoints: {
          768: {
            perPage: 1,
            padding: {
              right: '1rem',
              left : '1rem',
            },
          },
          1024: {
            perPage: 2,
            padding: {
              right: '1rem',
              left : '1rem',
            },
          },
        },
      }}
      className=" mx-6 md:mx-10 pb:6 md:pb-12  md:p-8 pb-12 px-8 w-screen "
    >
      
      {events.map((event, index) => (
        <SplideSlide key={index} className="event-slide flex flex-col items-center p-6 text-white rounded-2xl font-body md:h-auto bg-black/30  ">
          <Image src={event.image} height={500} width={500} alt="Event Image" className='md:h-64 md:w-80 w-screen h-64 rounded-lg object-cover ' />
          <h3 className='font-subTitle pt-2 text-xl md:text-2xl'>{event.name}</h3>
          <p className='font-body text-base font-light'>{formatDate(event.date)}</p>
        </SplideSlide>
      ))}
    </Splide>
   
  );
};

export default EventCarousel;
