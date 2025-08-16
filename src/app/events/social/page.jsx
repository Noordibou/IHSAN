'use client';
import React, { useState, useEffect } from 'react';
import { getEvents } from '@/api/event';
import FadeInSection from '@/components/common/FadeInSection';

export default function SocialEventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        const socialEvents = response.data.filter(event => event.category === 'social');
        setEvents(socialEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Helper function to get image source
  const getImageSrc = (image) => {
    if (!image) return '/placeholder-image.jpg'; // Default placeholder
    if (image.startsWith('data:')) return image; // Base64 image
    return '/placeholder-image.jpg'; // Fallback
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-main mx-auto"></div>
          <p className="mt-4 text-lg">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-main to-third p-8">
      <FadeInSection>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-white">
            Social Events
          </h1>
          
          {events.length > 0 ? (
  <FadeInSection>
    <div>
      
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <li key={event._id} className="">
            <FadeInSection>
              <div className="flex flex-col bg-gradient-to-r from-gray-200 to-third m-3 rounded-xl pt-4 px-4 h-[32rem]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="flex flex-col text-main mb-2">
                    <span className="border-b border-main">Location:</span>
                    <span className="text-gray-500">
                      {event.location ? event.location : "TBA"}
                    </span>
                  </h2>
                  <h2 className="flex flex-col text-main mb-2">
                    <span className="border-b border-main">Date:</span>
                    <span className="text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </h2>
                </div>
                
                <h1 className="text-2xl text-main font-semibold font-title mb-4 w-[1/2] text-center">
                  {event.name}
                </h1>
                
                <p className="text-base text-center text-main mb-4">
                  {event.description}
                </p>
             
                <div className="flex flex-col items-center my-2 h-64">
                  <img
                    src={getImageSrc(event.image)}
                    alt={event.name}
                    width={300}
                    height={300}
                    className="bg-main bg-opacity-40 p-4 rounded-xl mx-10 h-64"
                  />
                </div>
              </div>
            </FadeInSection>
          </li>
        ))}
      </ul>
    </div>
  </FadeInSection>
) : (
  // Display "Coming Soon" if no social events
  <FadeInSection>
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Coming Soon
      </h1>
      <p className="text-lg text-gray-600">
        Exciting social events are on the horizon. Stay tuned for updates!
      </p>
    </div>
  </FadeInSection>
  )}

</div>
</FadeInSection>
</div>
  );
}
