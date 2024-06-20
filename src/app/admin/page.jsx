"use client";
import React, { useState } from "react";
import TeamEdit from "@/components/Admin/team";
import EventEdit from "@/components/Admin/events";

const ADMIN_PASSWORD = "1234";  // Replace with your actual password

export default function Admin() {
  const [activeTab, setActiveTab] = useState("members");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[72vh] mx-8">
        <h1 className="text-4xl font-bold mb-4 mt-6 font-title">Admin Login</h1>
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-stone-200 border-2 rounded border-main"
            />
          </label>
          <button
            type="submit"
            className="bg-main hover:bg-third text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-main transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab("members")}
          className={`px-4 py-2 mx-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
            activeTab === "members"
              ? "bg-main text-white focus:ring-main"
              : "bg-stone-200 text-gray-800 focus:ring-stone-200"
          }`}
        >
          Members
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`px-4 py-2 mx-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
            activeTab === "events"
              ? "bg-main text-white focus:ring-main"
              : "bg-stone-200 text-gray-800 focus:ring-stone-200"
          }`}
        >
          Events
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {activeTab === "members" && <TeamEdit />}
        {activeTab === "events" && <EventEdit />}
      </div>
    </div>
  );
}
