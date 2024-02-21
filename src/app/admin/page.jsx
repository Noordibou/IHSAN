"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getEvents, createEvent, updateEvent, deleteEvent } from "@/api/event";
import { formatDate } from "@/utils/date";
import FileBase from "react-file-base64";

export default function Admin() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: "",
    image: "",
    date: null,
    time: "",
    location: "",
    category: "social",
    description: "",
  });

  const handleFileUpload = (e) => {
    setNewEvent({ ...newEvent, image: e.base64 });
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState({
    id: "",
    name: "",
    image: "",
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

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddEvent = () => {
    createEvent(newEvent).then(() => {
      fetchEvents();
      setNewEvent({
        name: "",
        image: "",
        date: new Date(),
        time: "",
        location: "",
        category: "social",
        description: "",
      });
      setIsFormVisible(false); // Hide the form after adding an event
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
      image: event.image,
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
        image: "",
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
      image: "",
      date: "",
      time: "",
      location: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[72vh] gap-8 mx-8">
      <h1 className="text-4xl font-bold mb-4 mt-6 font-title">Admin Page</h1>
      {/* Display existing events */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {events.map((event) => (
          <li
            key={event._id}
            className="flex flex-col justify-between items-center py-2 bg-white bg-opacity-90 rounded-lg shadow-lg p-4 mb-8"
          >
            <div className="flex flex-col">
              <Image
                src={event.image}
                height={500}
                width={500}
                alt="Event Image"
                className="md:h-34 md:w-64 h-64 rounded-lg object-cover "
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">
                {event.name}
              </h2>
              <p className="text-gray-600">
                {formatDate(event.date)} - {event.category}
              </p>
              <p className="text-gray-600">{event.description}</p>
            </div>
            {!isEditing && (
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditEvent(event)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteEvent(event._id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

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
                className="w-full bg-bodyColor px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Image:
              </label>
              <FileBase
                type="file"
                multiple={false}
                onDone={(e) => setEditedEvent({ ...editedEvent, image: e.base64 })}
                className="w-full bg-bodyColor px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
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
                className="bg-bodyColor w-full px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
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
                className="bg-bodyColor w-full px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
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
                className="bg-bodyColor w-full px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
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

      {/* Add new event form */}
      <div className="mb-4 flex flex-col justify-center items-center">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-main hover:bg-third text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-main transition duration-200 mb-4 w-64"
        >
          {isFormVisible ? "Hide Form" : "Add New Event"}
        </button>
        {isFormVisible && ( // Conditionally render the form
          <form className="flex flex-col gap-4">
            <label>
              Name:
              <input
                type="text"
                value={newEvent.name}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, name: e.target.value })
                }
                className="bg-bodyColor border-2 rounded border-main"
              />
            </label>
            <label>
              Image:
              <FileBase
                type="file"
                multiple={false}
                onDone={handleFileUpload}
                className="bg-bodyColor border-2 rounded border-main"
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                value={
                  newEvent.date ? newEvent.date.toISOString().split("T")[0] : ""
                }
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    date: e.target.value ? new Date(e.target.value) : null,
                  })
                }
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
                className="bg-bodyColor border-2 rounded border-main w-[80%] h-52"
              />
            </label>
            <button type="button" onClick={handleAddEvent} className="bg-green-700 hover:bg-green-600 text-white py-1 px-3 rounded-md ">
              Add Event
            </button>
          </form>
        )}
      </div>
     
    </div>
  );
}
