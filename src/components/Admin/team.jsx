"use client";
import React, { useState, useEffect, useRef } from "react";
import { getMembers, createMember, updateMember, deleteMember } from "@/api/team";

export default function TeamEdit() {
  const [members, setMembers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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

  // Simple file validation function
  const validateImageFile = (file) => {
    if (!file) {
      return { valid: false, error: "No file selected" };
    }
    
    if (!file.type.startsWith('image/')) {
      return { valid: false, error: "Please select an image file" };
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      return { valid: false, error: "File size must be less than 5MB" };
    }
    
    return { valid: true };
  };

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
    setIsLoading(true);
    setError("");
    setSuccessMessage("");
    getMembers()
      .then((response) => {
        setMembers(response.data);
      })
      .catch((err) => {
        setError("Failed to fetch members: " + (err.response?.data?.message || err.message));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file
      const validation = validateImageFile(file);
      if (!validation.valid) {
        setError(validation.error);
        return;
      }

      setNewMember({ ...newMember, image: file });
      setError(""); // Clear any previous errors
    }
  };

  const handleFileUploadEdit = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file
      const validation = validateImageFile(file);
      if (!validation.valid) {
        setError(validation.error);
        return;
      }

      setEditedMember({ ...editedMember, image: file });
      setError(""); // Clear any previous errors
    }
  };

  const handleAddMember = () => {
    if (!newMember.name.trim()) {
      setError("Name is required");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    createMember(newMember)
      .then(() => {
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
        setSuccessMessage("Member added successfully!");
      })
      .catch((err) => {
        console.error('Error creating member:', err);
        setError("Failed to add member: " + (err.response?.data?.message || err.message));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDeleteMember = (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      setIsLoading(true);
      setError("");
      setSuccessMessage("");

      deleteMember(id)
        .then(() => {
          fetchMembers();
          setSuccessMessage("Member deleted successfully!");
        })
        .catch((err) => {
          setError("Failed to delete member: " + (err.response?.data?.message || err.message));
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
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
    if (!editedMember.name.trim()) {
      setError("Name is required");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    updateMember(editedMember.id, editedMember)
      .then(() => {
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
          number: "",
        });
        setSuccessMessage("Member updated successfully!");
      })
      .catch((err) => {
        setError("Failed to update member: " + (err.response?.data?.message || err.message));
      })
      .finally(() => {
        setIsLoading(false);
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
      number: "",
    });
    setError("");
  };

  // Helper function to get image source
  const getImageSrc = (image) => {
    if (!image) return '/student.png'; // Default placeholder
    if (typeof image === 'string' && image.startsWith('data:')) return image; // Base64 image
    if (image instanceof File) return URL.createObjectURL(image); // File object
    return '/student.png'; // Fallback
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Team Members</h2>
      
      {/* Error and Success Messages */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {successMessage}
        </div>
      )}

      {/* Add new member form */}
      <div className="mb-6 flex flex-col justify-center items-center">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-main hover:bg-third text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-main transition duration-200 mb-4 w-64"
        >
          {isFormVisible ? "Cancel" : "Add New Member"}
        </button>
        {isFormVisible && (
          <form className="flex flex-col gap-4 w-full max-w-md">
            <label>
              Name: <span className="text-red-500">*</span>
              <input
                type="text"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main w-full"
                required
              />
            </label>
            <label>
              Role:
              <input
                type="text"
                value={newMember.role}
                onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main w-full"
              />
            </label>
            <label>
              Major:
              <input
                type="text"
                value={newMember.major}
                onChange={(e) => setNewMember({ ...newMember, major: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main w-full"
              />
            </label>
            <label>
              Track:
              <input
                type="text"
                value={newMember.track}
                onChange={(e) => setNewMember({ ...newMember, track: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main w-full"
              />
            </label>
            <label>
              Graduation:
              <input
                type="text"
                value={newMember.graduation}
                onChange={(e) => setNewMember({ ...newMember, graduation: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main w-full"
              />
            </label>
            <label>
              Description:
              <textarea
                value={newMember.description}
                onChange={(e) => setNewMember({ ...newMember, description: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main w-full h-32"
              />
            </label>
            <label>
              Number:
              <input
                type="number"
                value={newMember.number}
                onChange={(e) => setNewMember({ ...newMember, number: e.target.value })}
                className="bg-stone-200 border-2 rounded border-main w-full"
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
              <p className="text-xs text-gray-500 mt-1">
                Supported formats: JPEG, PNG, GIF, WebP (max 5MB)
              </p>
            </label>
            <button
              type="button"
              onClick={handleAddMember}
              disabled={isLoading}
              className={`py-2 px-4 rounded-md focus:outline-none focus:ring-2 transition duration-200 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed text-gray-600"
                  : "bg-green-700 hover:bg-green-600 text-white focus:ring-green-400"
              }`}
            >
              {isLoading ? "Adding..." : "Add Member"}
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
                src={getImageSrc(member.image)}
                height={500}
                width={500}
                alt={`${member.name} Image`}
                className="md:h-34 md:w-64 h-64 rounded-lg object-cover"
                onError={(e) => {
                  e.target.src = '/student.png';
                }}
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
                  disabled={isLoading}
                  className={`py-1 px-3 rounded-md focus:outline-none focus:ring-2 transition duration-200 ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed text-gray-600"
                      : "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-400"
                  }`}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteMember(member._id)}
                  disabled={isLoading}
                  className={`py-1 px-3 rounded-md focus:outline-none focus:ring-2 transition duration-200 ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed text-gray-600"
                      : "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400"
                  }`}
                >
                  {isLoading ? "Deleting..." : "Delete"}
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
                Name: <span className="text-red-500">*</span>
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
              <p className="text-xs text-gray-500 mt-1">
                Supported formats: JPEG, PNG, GIF, WebP (max 5MB)
              </p>
              {editedMember.image && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600 mb-2">Preview:</p>
                  <img
                    src={getImageSrc(editedMember.image)}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded"
                  />
                </div>
              )}
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
                type="number"
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
                className="w-full bg-stone-200 px-4 py-2 mt-1 border-2 rounded-md focus:outline-none focus:ring focus:border-main h-32"
              />
            </div>

            <div className="flex space-x-2">
              <button
                type="button"
                onClick={handleSaveEdit}
                disabled={isLoading}
                className={`py-2 px-4 rounded-md focus:outline-none focus:ring-2 transition duration-200 ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed text-gray-600"
                    : "bg-green-700 hover:bg-green-600 text-white focus:ring-green-400"
                }`}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={isLoading}
                className={`py-2 px-4 rounded-md focus:outline-none focus:ring-2 transition duration-200 ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed text-gray-600"
                    : "bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400"
                }`}
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