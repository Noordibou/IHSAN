'use client';
import React, { useEffect, useState } from 'react';
import { getEvents } from '@/api/event';

export default function VolunteerEvents() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    getEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

  // Filter events with category 'volunteer'
  const volunteerEvents = events.filter(event => event.category === 'volunteer');

  return (
    <div className="flex items-center justify-center px-10 min-h-[72vh]">
      <div>
        {volunteerEvents.length > 0 ? (
          // Display volunteer events
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Volunteer Events</h1>
            <ul>
              {volunteerEvents.map((event) => (
                <li key={event._id} className="text-lg text-gray-600">
                  {event.name} - {event.description}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // Display "Coming Soon" if no volunteer events
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Coming Soon</h1>
            <p className="text-lg text-gray-600">We are working on bringing you exciting volunteer opportunities. Stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  );
}

