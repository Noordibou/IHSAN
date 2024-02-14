'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


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
      className=" mx-10 pb-12 p-8 w-[80%] md:w-auto bg-third bg-opacity-40 rounded-xl shadow-md "
    >
      
      {events.map((event, index) => (
        <SplideSlide key={index} className="event-slide flex flex-col items-center  bg-main p-4 text-white rounded-2xl font-bodyFont  md:h-auto ">
          <img src="/image-holder2.webp" alt="Event Image" className='md:h-64 md:w-80 w-52 h-44 rounded-lg ' />
          <h3 className='font-titleFont pt-2'>{event.title}</h3>
          <p className='font-bodyFont text-sm'>{event.description}</p>
        </SplideSlide>
      ))}
    </Splide>
   
  );
};

export default EventCarousel;
