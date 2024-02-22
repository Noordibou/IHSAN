'use client'
import React from 'react'
import EventCarousel from '@/components/events/EventCarousel'
import { getEvents } from '@/api/event'
import { useEffect, useState } from 'react'

export default function Events() {

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
      <h1 className="md:text-4xl text-[26px] font-semibold text-center font-title mb-8 mt-12 text-bodyColor uppercase">Upcoming  events</h1>
      <EventCarousel events={event}  />
    </div>
  )
}
