'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { formatDate } from '../../utils/date';

const EventCarousel = ({ events }) => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to beginning of the day

    const threeDaysAgo = new Date(today);
    threeDaysAgo.setDate(today.getDate() - 3);

    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

    const current = sortedEvents.filter(event => new Date(event.date) >= threeDaysAgo);
    const past = sortedEvents.filter(event => new Date(event.date) < threeDaysAgo).reverse();

    setCurrentEvents(current);
    setPastEvents(past);
  }, [events]);

  const renderEventSlides = (eventList) => {
    return eventList.map((event, index) => (
      <SplideSlide key={index} className="event-slide flex flex-col items-center p-6 text-white rounded-2xl font-body md:h-auto bg-black/30">
        <img src={`https://ihsanutd-backend.vercel.app/uploads/${event.image}`} height={500} width={500} alt="Event Image" className='md:h-64 md:w-80 w-screen h-64 rounded-lg object-cover' />
        <h3 className='font-subTitle pt-2 text-xl md:text-2xl'>{event.name}</h3>
        <p className='font-body text-base font-light'>{formatDate(event.date)}</p>
      </SplideSlide>
    ));
  };

  const renderCarousel = (eventList, title) => {
    if (eventList.length === 0) {
      return (
        <p className='place-content-center grid font-cri text-xl font-semibold bg-third w-screen h-24 bg-opacity-40'>
          No {title.toLowerCase()}
        </p>
      );
    }

    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <Splide
          options={{
            type: 'slide',
            gap: '1.5rem',
            pagination: true,
            arrows: true,
            perPage: 3,
            padding: {
              right: '3rem',
              left: '2rem',
            },
            breakpoints: {
              768: {
                perPage: 1,
                padding: {
                  right: '1rem',
                  left: '1rem',
                },
              },
              1024: {
                perPage: 2,
                padding: {
                  right: '1rem',
                  left: '1rem',
                },
              },
            },
          }}
          className="mx-6 md:mx-10 pb:6 md:pb-12 md:p-8 pb-12 px-8 w-screen"
        >
          {renderEventSlides(eventList)}
        </Splide>
      </div>
    );
  };

  return (
    <div>
      {renderCarousel(currentEvents, "Current and Upcoming Events")}
    </div>
  );
};

export default EventCarousel;