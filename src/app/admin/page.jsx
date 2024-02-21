"use client";
import React, { useState, useEffect } from "react";
import { getEvents, createEvent, updateEvent, deleteEvent } from "@/api/event";
import { formatDate } from "@/utils/date";

export default function Admin() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: new Date(),
    time: "",
    location: "",
    category: "social",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState({
    id: "",
    name: "",
    date: "",
    time: "",
    location: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    getEvents().then((response) => {
      setEvents(response.data);
    });
  };

  const handleAddEvent = () => {
    createEvent(newEvent).then(() => {
      fetchEvents();
      setNewEvent({
        name: "",
        date: new Date(),
        time: "",
        location: "",
        category: "social",
        description: "",
      });
    });
  };

  const handleDeleteEvent = (id) => {
    deleteEvent(id).then(() => {
      fetchEvents();
    });
  };

  const handleEditEvent = (event) => {
    const formattedDate = new Date(event.date);

    setEditedEvent({
      id: event._id,
      name: event.name,
      date: formattedDate,
      time: event.time,
      location: event.location,
      category: event.category,
      description: event.description,
    });

    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    updateEvent(editedEvent.id, editedEvent).then(() => {
      fetchEvents();
      setIsEditing(false);
      setEditedEvent({
        id: "",
        name: "",
        date: "",
        time: "",
        location: "",
        category: "",
        description: "",
      });
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedEvent({
      id: "",
      name: "",
      date: "",
      time: "",
      location: "",
      category: "",
      description: "",
    });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      {/* Display existing events */}
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.name} - {event.description}- {formatDate(event.date)}-
            {event.category}-{event.time}{" "}
            {!isEditing && (
              <>
                <button onClick={() => handleEditEvent(event)}>Edit</button>{" "}
                <button onClick={() => handleDeleteEvent(event._id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      {/* Add new event form */}
      <h2>Add New Event</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={newEvent.name}
            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            className="bg-bodyColor border-2 rounded border-main"
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={newEvent.date.toISOString().split("T")[0]}
            onChange={(e) =>
              setNewEvent({ ...newEvent, date: new Date(e.target.value) })
            }
            className="bg-bodyColor border-2 rounded border-main"
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            className="bg-bodyColor border-2 rounded border-main"
          />
        </label>

        <label>
          Category:
          <select
            value={newEvent.category}
            onChange={(e) =>
              setNewEvent({ ...newEvent, category: e.target.value })
            }
            className="bg-bodyColor border-2 rounded border-main"
          >
            <option value="social">Social</option>
            <option value="workshop">Workshop</option>
            <option value="volunteer">Volunteer</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Description:
          <textarea
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
            className="bg-bodyColor border-2 rounded border-main"
          />
        </label>
        <button type="button" onClick={handleAddEvent}>
          Add Event
        </button>
      </form>

      {/* Edit event form */}
      {isEditing && (
        <div>
          <h2>Edit Event</h2>
          <form>
            {/* Display fields for editing */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                value={editedEvent.name}
                onChange={(e) =>
                  setEditedEvent({ ...editedEvent, name: e.target.value })
                }
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Date:
              </label>
              <input
                type="date"
                value={editedEvent.date.toISOString().split("T")[0]}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    date: new Date(e.target.value),
                  })
                }
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Category:
              </label>
              <select
                value={editedEvent.category}
                onChange={(e) =>
                  setEditedEvent({ ...editedEvent, category: e.target.value })
                }
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-main"
              >
                <option value="social">Social</option>
                <option value="workshop">Workshop</option>
                <option value="volunteer">Volunteer</option>
                <option value="other">Other</option>
                {/* Add other categories as needed */}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                value={editedEvent.description}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    description: e.target.value,
                  })
                }
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleSaveEdit}
                className="px-4 py-2 font-semibold text-white bg-main rounded-md hover:bg-third focus:outline-none focus:ring focus:border-main"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-4 py-2 font-semibold text-white bg-gray-400 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:border-main"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
