"use client";
import React, { useState, useEffect, useRef } from "react";
import { getMembers, createMember, updateMember, deleteMember } from "@/api/team";

export default function TeamEdit() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    major: "",
    track: "",
    graduation: "",
    description: "",
    image: "",
    number: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedMember, setEditedMember] = useState({
    id: "",
    name: "",
    role: "",
    major: "",
    track: "",
    graduation: "",
    description: "",
    image: "",
    number: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const editFormRef = useRef(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    if (isEditing && editFormRef.current) {
      editFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isEditing]);

  const fetchMembers = () => {
    getMembers().then((response) => {
      setMembers(response.data);
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewMember({ ...newMember, image: file });
  };

  const handleFileUploadEdit = (e) => {
    const file = e.target.files[0];
    setEditedMember({ ...editedMember, image: file });
  };

  const handleAddMember = () => {
    const formData = new FormData();
    Object.keys(newMember).forEach((key) => {
      formData.append(key, newMember[key]);
    });

    createMember(formData).then(() => {
      fetchMembers();
      setNewMember({
        name: "",
        role: "",
        major: "",
        track: "",
        graduation: "",
        description: "",
        image: "",
        number: "",
      });
      setIsFormVisible(false);
    });
  };

  const handleDeleteMember = (id) => {
    deleteMember(id).then(() => {
      fetchMembers();
    });
  };

  const handleEditMember = (member) => {
    setEditedMember({
      id: member._id,
      name: member.name,
      role: member.role,
      major: member.major,
      track: member.track,
      graduation: member.graduation,
      description: member.description,
      image: member.image,
      number: member.number,
    });
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    const formData = new FormData();
    Object.keys(editedMember).forEach((key) => {
      formData.append(key, editedMember[key]);
    });

    updateMember(editedMember.id, formData).then(() => {
      fetchMembers();
      setIsEditing(false);
      setEditedMember({
        id: "",
        name: "",
        role: "",
        major: "",
        track: "",
        graduation: "",
        description: "",
        image: "",
      });
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedMember({
      id: "",
      name: "",
      role: "",
      major: "",
      track: "",
      graduation: "",
      description: "",
      image: "",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Team</h2>
      <div className="mb-6 flex flex-col justify-center items-center">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-main hover:bg-third text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-main transition duration-200 mb-4 w-64"
        >
          {isFormVisible ? "Cancel" : "Add New Member"}
        </button>

        {isFormVisible && (
          <form className="flex flex-col gap-4">
            <label>
              Name:
              <input
                type="text"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
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
              Role:
              <input
                type="text"
                value={newMember.role}
                onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main"
              />
            </label>
            <label>
              Major:
              <input
                type="text"
                value={newMember.major}
                onChange={(e) => setNewMember({ ...newMember, major: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main"
              />
            </label>
            <label>
              Track:
              <input
                type="text"
                value={newMember.track}
                onChange={(e) => setNewMember({ ...newMember, track: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main"
              />
            </label>
            <label>
              Graduation:
              <input
                type="text"
                value={newMember.graduation}
                onChange={(e) => setNewMember({ ...newMember, graduation: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main"
              />
            </label>
            <label>
              Number:
              <input
                type="text"
                value={newMember.number}
                onChange={(e) => setNewMember({ ...newMember, number: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main"
              />
            </label>
            <label>
              Description:
              <textarea
                value={newMember.description}
                onChange={(e) => setNewMember({ ...newMember, description: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main w-[80%] h-52"
              />
            </label>
            <button
              type="button"
              onClick={handleAddMember}
              className="bg-green-700 hover:bg-green-600 text-white py-1 px-3 rounded-md"
            >
              Add Member
            </button>
          </form>
        )}
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        {members.map((member) => (
          <li
            key={member._id}
            className="flex flex-col justify-between items-center py-2 bg-white bg-opacity-90 rounded-lg shadow-lg p-4 mb-8"
          >
            <div className="flex flex-col">
              <img
                src={`https://ihsanutd-backend.vercel.app/uploads/${member.image}`}
                height={500}
                width={500}
                alt="Member Image"
                className="md:h-34 md:w-64 h-64 rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {member.name}
                </h2>
                <h3 className="text-gray-600 ml-2">({member.role})</h3>
              </div>
              <p className="text-gray-600">{member.major}</p>
              <p className="text-gray-600">{member.track}</p>
              <p className="text-gray-600">{member.number}</p>
              <p className="text-gray-600">{member.graduation}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
            {!isEditing && (
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => handleEditMember(member)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteMember(member._id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {isEditing && (
        <div ref={editFormRef}>
          <h2 className="text-2xl place-items-center grid pb-4">Edit Member</h2>
          <form className="grid md:grid-cols-2 gap-3 font-body">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                value={editedMember.name}
                onChange={(e) => setEditedMember({ ...editedMember, name: e.target.value })}
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
                Role:
              </label>
              <input
                type="text"
                value={editedMember.role}
                onChange={(e) => setEditedMember({ ...editedMember, role: e.target.value })}
                className="w-full bg-stone-200 px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Major:
              </label>
              <input
                type="text"
                value={editedMember.major}
                onChange={(e) => setEditedMember({ ...editedMember, major: e.target.value })}
                className="w-full bg-stone-200 px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Track:
              </label>
              <input
                type="text"
                value={editedMember.track}
                onChange={(e) => setEditedMember({ ...editedMember, track: e.target.value })}
                className="w-full bg-stone-200 px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Graduation:
              </label>
              <input
                type="text"
                value={editedMember.graduation}
                onChange={(e) => setEditedMember({ ...editedMember, graduation: e.target.value })}
                className="w-full bg-stone-200 px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Number:
              </label>
              <input
                type="text"
                value={editedMember.number}
                onChange={(e) => setEditedMember({ ...editedMember, number: e.target.value })}
                className="w-full bg-stone-200 px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description:
              </label>
              <textarea
                value={editedMember.description}
                onChange={(e) => setEditedMember({ ...editedMember, description: e.target.value })}
                className="w-full bg-stone-200 h-full px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main"
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