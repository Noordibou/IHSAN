'use client';
import React, { useEffect, useState } from 'react';
import { getEvents } from '@/api/event';

export default function SocialEvents() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    getEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

  // Filter events with category 'social'
  const socialEvents = events.filter(event => event.category === 'social');

  return (
    <div className="flex items-center justify-center px-10 min-h-[72vh]">
      <div>
        {socialEvents.length > 0 ? (
          // Display social events
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Social Events</h1>
            <ul>
              {socialEvents.map((event) => (
                <li key={event._id} className="text-lg text-gray-600">
                  {event.name} - {event.description}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // Display "Coming Soon" if no social events
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Coming Soon</h1>
            <p className="text-lg text-gray-600">Exciting social events are on the horizon. Stay tuned for updates!</p>
          </div>
        )}
      </div>
    </div>
  );
}
