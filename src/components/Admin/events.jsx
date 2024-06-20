"use client";
import React, { useState, useEffect, useRef } from "react";
import { getEvents, createEvent, updateEvent, deleteEvent } from "@/api/event";
import { formatDate } from "@/utils/date";

export default function EventEdit() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: "",
    image: "",
    date: "",
    location: "",
    category: "social",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState({
    id: "",
    name: "",
    image: "",
    date: "",
    location: "",
    category: "",
    description: "",
  });

  const editFormRef = useRef(null);
  
  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (isEditing && editFormRef.current) {
      editFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isEditing]);
  
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
        date: "",
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
      location: "",
      category: "",
      description: "",
    });
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewEvent({ ...newEvent, image: file });
  };

  const handleFileUploadEdit = (e) => {
    const file = e.target.files[0];
    setEditedEvent({ ...editedEvent, image: file });
  }
  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      {/* Add new event form */}
      <div className="mb-6 flex flex-col justify-center items-center">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-main hover:bg-third text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-main transition duration-200 mb-4 w-64"
        >
          {isFormVisible ? "Cancel" : "Add New Event"}
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
                className="bg-stone-200 border-2 rounded border-main"
              />
            </label>
            <label>
              Image:
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
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
                className="bg-stone-200 border-2 rounded border-main"
              />
            </label>

            <label>
              Category:
              <select
                value={newEvent.category}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, category: e.target.value })
                }
                className="bg-stone-200 border-2 rounded border-main"
              >
                <option value="social">Social</option>
                <option value="workshop">Workshop</option>
                <option value="volunteer">Volunteer</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Location:
              <input
                type="text"
                value={newEvent.location}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, location: e.target.value })
                }
                className="bg-stone-200 border-2 rounded border-main"
              />
            </label>
            <label>
              Description:
              <textarea
                value={newEvent.description}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
                className="bg-stone-200 border-2 rounded border-main w-[80%] h-52"
              />
            </label>
            <button
              type="button"
              onClick={handleAddEvent}
              className="bg-green-700 hover:bg-green-600 text-white py-1 px-3 rounded-md"
            >
              Add Event
            </button>
          </form>
        )}
      </div>
      {/* Display existing events */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        {events.map((event) => (
          <li
            key={event._id}
            className="flex flex-col justify-between items-center py-2 bg-white bg-opacity-90 rounded-lg shadow-lg p-4 mb-8"
          >
            <div className="flex flex-col">
              <img
                src={`https://ihsanutd-backend.vercel.app/uploads/${event.image}`}
                height={500}
                width={500}
                alt="Event Image"
                className="md:h-34 md:w-64 h-64  rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {event.name}
                </h2>
                <h3 className="text-gray-600 ml-2">({event.category})</h3>
              </div>
              <p className="text-gray-600">{formatDate(event.date)}</p>
              <p className="text-gray-600">{event.location}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
            {!isEditing && (
              <div className="flex space-x-2 mt-2">
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
        <div ref={editFormRef}>
          <h2 className="text-2xl place-items-center grid pb-4">Edit Event</h2>
          <form className="grid md:grid-cols-2 gap-3 font-body">
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
                className="w-full bg-stone-200 px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Image:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUploadEdit}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Date:
              </label>
              <input
                type="date"
                value={
                  editedEvent.date
                    ? editedEvent.date.toISOString().split("T")[0]
                    : ""
                }
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    date: e.target.value ? new Date(e.target.value) : null,
                  })
                }
                className="bg-stone-200 w-full px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
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
                className="bg-stone-200 w-full px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
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
                className="bg-stone-200 w-full h-48 px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location:
              </label>
              <input
                type="text"
                value={editedEvent.location}
                onChange={(e) =>
                  setEditedEvent({ ...editedEvent, location: e.target.value })
                }
                className="bg-stone-200 w-full px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>
            <div className="flex space-x-4 items-center">
              <button
                type="button"
                onClick={handleSaveEdit}
                className="h-10 px-4 py-2 font-semibold text-white bg-main rounded-md hover:bg-third focus:outline-none focus:ring focus:border-main"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                className="h-10 px-4 py-2 font-semibold text-white bg-gray-400 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:border-main"
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
