"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "react-modal";
import "@/pages/calendar.css";
import { getEvents } from "@/api/event";
import { formatDate } from "@/utils/date";
import "@/pages/calendar.css";

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
    const eventsOnDay = events.filter(
      (e) => e.date.toISOString().slice(0, 10) === clickDayISO
    );
    setSelectedEvent(eventsOnDay);
  };

  return (
    <div className="mt-12 rounded-2xl flex flex-col items-center mb-8">
      <div className="text-3xl font-title text-main mb-4">
        All Upcoming Events
      </div>
      <ul className="list-disc flex gap-4 mb-4 font-body text-sm md:text-base">
        <li className="flex items-center">
          <span className="w-4 h-4 mr-2 bg-[#aabbeb] rounded-full"></span>
          <span className="text-black">Social Events</span>
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 mr-2 bg-[#f1a36a] rounded-full"></span>
          <span className="text-black">Volunteering</span>
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 mr-2 bg-[#fdea70] rounded-full"></span>
          <span className="text-black">Workshops</span>
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 mr-2 bg-[#f3a3b5] rounded-full"></span>
          <span className="text-black">Other</span>
        </li>
      </ul>

      <Calendar
        className="react-calendar my-4"
        tileClassName={({ date }) => {
          const isoDate = date.toISOString().slice(0, 10);
          const event = events.find(
            (e) => e.date.toISOString().slice(0, 10) === isoDate
          );
          return event ? event.category : null;
        }}
        onClickDay={handleClickDay}
      />

      <EventModal
        events={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <div className="flex flex-col gap-4">
        <p className="text-lg text-main font-body my-6">
          Select a date to view its events
        </p>
      </div>
    </div>
  );
}

function EventModal({ events, onClose }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onCloseModal = () => {
    setIsOpen(false);
    onClose();
  };

  useEffect(() => {
    if (events && events.length > 0) {
      setIsOpen(true);
    }
  }, [events]);

  if (!events || events.length === 0) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      className="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto my-auto md:h-[35%] md:w-[35%] h-[25%] w-[40%] border-third border-2 rounded-xl gap-4 z-50 overflow-y-auto custom-scrollbar"
    >
      <div className="flex flex-col justify-end items-end p-2">
        <button onClick={onCloseModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>
      </div>
      <div id="main" className="flex flex-col justify-center items-center -mt-2 mb-8 md:mx-6 mx-2">
      <h2 className="font-title md:text-xl text-lg font-semibold mb-2 ">
          Events on {formatDate(events[0].date)}
        </h2>
        <ul className="list-disc text-left mx-6">
          {events.map((event, index) => (
            <li key={index}>
              <p className="font-title font-semibold italic">{event.name || "No Name"}</p>
              <p className="font-arimo font-light">Location: {event.location || "TBA"}</p>
              <p className="font-arimo font-light">
                {event.description || "No Description"}
              </p>
              {index < events.length - 1 && <hr className="my-4" />}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
