'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const EventCarousel = ({ events }) => {
  return (
    <Splide
      options={{
        type: 'loop',
        pagination: true,
        arrows: 'slider',
        perPage: 2, 
        perMove: 1,
        focus: 'center',
        fixedWidth: 300,
        fixedHeight: 200,
        gap: 4,
        easing: 'ease',
        breakpoints: {
          600: {
            perPage: 1,
          },
          800: {
            perPage: 2,
          },
        }
      }}
    >
      {events.map((event, index) => (
        <SplideSlide key={index} className="event-slide my-8">
          {/* Render your event content here */}
          <img src="/image-holder1.png" alt="Event Image"
          className='h-36 w-48' />
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          {/* Add more event details as needed */}
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default EventCarousel;