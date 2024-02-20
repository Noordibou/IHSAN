'use client';
import React, { useEffect, useState } from 'react';
import { getEvents } from '@/api/event';

export default function WorkshopEvents() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    getEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

  // Filter events with category 'workshop'
  const workshopEvents = events.filter(event => event.category === 'workshop');

  return (
    <div className="flex items-center justify-center px-10 min-h-[72vh]">
      <div>
        {workshopEvents.length > 0 ? (
          // Display workshop events
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Workshop Events</h1>
            <ul>
              {workshopEvents.map((event) => (
                <li key={event._id} className="text-lg text-gray-600">
                  {event.name} - {event.description}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // Display "Coming Soon" if no workshop events
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-600">Exciting workshops are in the works. Stay tuned for more details!</p>
          </div>
        )}
      </div>
    </div>
  );
}
