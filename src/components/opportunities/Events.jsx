import React from 'react'
import EventCarousel from '@/components/opportunities/EventCarousel'
import Blob from '@/components/opportunities/Blob'
export default function Events() {
    const event = [
        {
          title: 'Event 1',
          description: 'Description for Event 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          title: 'Event 2',
          description: 'Description for Event 2',
        },
        {
          title: 'Event 3',
          description: 'Description for Event 3',
        },
        {
          title: 'Event 4',
          description: 'Description for Event 4',
        },
        {
          title: 'Event 5',
          description: 'Description for Event 5',
        },
      ];
  return (
    <div className='w-screen flex flex-col items-center'>
      {/* <Blob /> */}
      <h1 className="md:text-4xl text-2xl font-semibold text-center font-titleFont mb-8 mt-12">Upcoming club events</h1>
      <EventCarousel events={event}  />
    </div>
  )
}
