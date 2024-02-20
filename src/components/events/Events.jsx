'use client'
import React from 'react'
import EventCarousel from '@/components/events/EventCarousel'
import { getEvents } from '@/api/event'
import { useEffect, useState } from 'react'

export default function Events() {
    // const event = [
    //     {
    //       title: 'Bake Sale',
    //       date: 'to be announced',
    //       image: '/bake.png',
    //     },
    //     {
    //       title: 'GBM',
    //       date: 'to be announced',
    //       image: '/gbm1.png',
    //     },
    //     {
    //       title: 'Ramadan Social',
    //       date: 'to be announced',
    //       image: '/ramadan.png',
    //     },
    //     {
    //       title: 'Injection Workshop',
    //       date: 'to be announced',
    //       image: '/injection.png',
    //     },
    //     {
    //       title: 'GBM',
    //       date: 'to be announced',
    //       image: '/gbm1.png',
    //     },
        
    //   ];

    const [event, setEvent] = useState([]);
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await getEvents();
            setEvent(res.data);
        }
        fetchEvents();
    }, [])



  return (
    <div className='w-screen flex flex-col items-center  bg-gradient-to-r from-main to-third pb-4'>
      {/* <Blob /> */}
      <h1 className="md:text-4xl text-[26px] font-semibold text-center font-title mb-8 mt-12 text-bodyColor uppercase">Upcoming club events</h1>
      <EventCarousel events={event}  />
    </div>
  )
}
