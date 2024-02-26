"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from 'react-modal'; 
import "@/pages/calendar.css";
import { getEvents } from "@/api/event";

Modal.setAppElement("main");
export default function Cal() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []); // Fetch events when the component mounts

  const fetchEvents = () => {
    getEvents()
      .then((response) => {
        // Convert date strings to Date objects
        const formattedEvents = response.data.map((event) => ({
          ...event,
          date: new Date(event.date),
        }));
        console.log("Formatted Events:", formattedEvents);
        setEvents(formattedEvents);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  };

  const handleClickDay = (date) => {
    const clickDayISO = date.toISOString().slice(0, 10);
    const event = events.find((e) => e.date.toISOString().slice(0, 10) === clickDayISO);
    setSelectedEvent(event);
  };

  return (
    <div className="mt-12 rounded-2xl flex flex-col items-center">
      <div className="text-3xl font-title text-main mb-4">All Upcoming Events</div>

      <Calendar
        className="react-calendar"
        tileClassName={({ date }) => {
          const isoDate = date.toISOString().slice(0, 10);
          const event = events.find((e) => e.date.toISOString().slice(0, 10) === isoDate);
          return event ? event.category : null;
        }}
        onClickDay={handleClickDay}
      />

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}

function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <Modal
      isOpen={!!event} // Set isOpen dynamically based on the presence of event
      onRequestClose={onClose}
    >
      <h2>{event.name || "No Name"}</h2>
      <p>{event.description || "No Description"}</p>

      <button onClick={onClose}>Close</button>
    </Modal>
  );
}
