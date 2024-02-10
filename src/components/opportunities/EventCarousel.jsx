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
        type     : 'slide',
        gap      : '1.5rem',
        pagination: true,
        arrows: true,
        perPage: 3,
        padding: {
          right: '2rem',
          left : '2rem',
        },
      }}
      className=" mx-10 pb-12 pt-8 "
    >
      {events.map((event, index) => (
        <SplideSlide key={index} className="event-slide">
          <img src="/image-holder1.png" alt="Event Image" className='md:h-64 md:w-80 w-52 h-44 ' />
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default EventCarousel;
