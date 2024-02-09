'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const EventCarousel = ({ events }) => {

        if (!events || events.length === 0) {
          return <p>No upcoming events.</p>;
        }

  return (
    <Splide
      options={{
        type     : 'loop',
        height   : '15rem',
        width    : '60rem',
        gap      : '1.5rem',
        // focus    : 'center',
        autoWidth: true,
      }}
    >
      {events.map((event, index) => (
        <SplideSlide key={index} className="event-slide">
          <img src="/image-holder1.png" alt="Event Image"
          className='h-36 w-48' />
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default EventCarousel;