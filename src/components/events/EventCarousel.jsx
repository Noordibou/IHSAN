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

  // Helper function to get image source
  const getImageSrc = (image) => {
    if (!image) return '/placeholder-image.jpg'; // Default placeholder
    if (image.startsWith('data:')) return image; // Base64 image
    return '/placeholder-image.jpg'; // Fallback
  };

  const renderEventSlides = (eventList) => {
    return eventList.map((event, index) => (
      <SplideSlide key={index} className="event-slide flex flex-col items-center p-6 text-white rounded-2xl font-body md:h-auto bg-black/30">
        <img 
          src={getImageSrc(event.image)} 
          height={500} 
          width={500} 
          alt="Event Image" 
          className='md:h-64 md:w-80 w-screen h-64 rounded-lg object-cover' 
        />
        <h3 className='font-subTitle pt-2 text-xl md:text-2xl'>{event.name}</h3>
        <p className='font-body text-base font-light'>{formatDate(event.date)}</p>
      </SplideSlide>
    ));
  };

  const renderCarousel = (eventList, title) => {
    if (eventList.length === 0) return null;

    // Disable loop and autoplay if there are fewer events than perPage
    const shouldLoop = eventList.length > 3;
    
    return (
      <div className="mb-8">
        <h2 className="md:text-4xl text-[26px] font-semibold text-center font-title mb-8 mt-12 text-bodyColor uppercase">{title}</h2>
        <Splide
          options={{
            type: shouldLoop ? 'loop' : 'slide',
            perPage: Math.min(eventList.length, 3),
            gap: '1rem',
            autoplay: shouldLoop,
            interval: 5000,
            rewind: !shouldLoop,
            breakpoints: {
              768: {
                perPage: Math.min(eventList.length, 2),
              },
              480: {
                perPage: 1,
              },
            },
          }}
          className="event-carousel mx-6 md:mx-10 pb:6 md:pb-12 md:p-8 pb-12 px-8 w-screen"
        >
          {renderEventSlides(eventList)}
        </Splide>
      </div>
    );
  };

  return (
    <div className="event-carousel-container">
      {/* Show upcoming events if available, otherwise show past events */}
      {currentEvents.length > 0 
        ? renderCarousel(currentEvents, 'UPCOMING EVENTS')
        : renderCarousel(pastEvents, 'PAST EVENTS')
      }
    </div>
  );
};

export default EventCarousel;