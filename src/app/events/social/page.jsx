"use client";
import React, { useEffect, useState } from "react";
import { getEvents } from "@/api/event";
import Image from "next/image";
import { formatDate } from "@/utils/date";

export default function SocialEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

  // Filter events with category 'social'
  const socialEvents = events.filter((event) => event.category === "social");

  return (
    <div className="flex flex-col justify-center min-h-[72vh] mb-10 mt-4 px-8 font-body">
      {socialEvents.length > 0 ? (
        // Display social events
        <div>
      <h1 className=" text-center text-2xl md:text-4xl lg:text-5xl font-semibold font-title my-4">
        Upcoming Social Events
      </h1>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialEvents.map((event) => (
              <li key={event._id} className="">
                <div className="flex flex-col bg-gradient-to-r from-gray-200 to-third m-3 rounded-xl pt-4 px-4 h-[100%]">
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
                            {formatDate(event.date)}
                          </span>
                        </h2>
                      </div>
                      
                        <h1 className="text-2xl text-main font-semibold font-title mb-4 w-[1/2] text-center">
                          {event.name}
                        </h1>
                        <p className="text-base text-center text-main mb-4">
                          {event.description}
                        </p>
                   
                    <div className=" flex flex-col items-center my-2">
                      <Image
                        src={event.image}
                        alt={event.name}
                        width={300}
                        height={300}
                        className="bg-main bg-opacity-40 p-4 rounded-xl mx-10"
                      />
                    </div>
                  </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Display "Coming Soon" if no social events
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Coming Soon
          </h1>
          <p className="text-lg text-gray-600">
            Exciting social events are on the horizon. Stay tuned for updates!
          </p>
        </div>
      )}
    </div>
  );
}
