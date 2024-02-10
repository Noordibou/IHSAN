import React from 'react'
import EventCarousel from '@/components/opportunities/EventCarousel'
import Blob from '@/components/opportunities/Blob'
export default function Events() {
    const event = [
        {
          title: 'Event 1',
          description: 'Description for Event 1',
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
    <div className='my-8'>
      <Blob />
      <div className='z-40'>
      <h1 className="text-4xl font-semibold text-center my-8">Upcoming club events</h1>
      <EventCarousel events={event}  />
    </div>
    </div>
  )
}
