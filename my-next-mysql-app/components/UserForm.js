"use client";

import { useState, useEffect } from "react";

export default function UserForm({ refreshUsers, editingUser, setEditingUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  const [status, setStatus] = useState("");

  // When editingUser changes, fill the form
  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        age: editingUser.age,
        city: editingUser.city,
      });
    } else {
      setFormData({ name: "", email: "", age: "", city: "" });
    }
    setStatus("");
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingUser ? "PUT" : "POST";
    const url = editingUser ? "/api/update-user" : "/api/add-user";

    const body = editingUser
      ? { id: editingUser.id, ...formData }
      : formData;

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await res.json();

    if (res.ok) {
      setStatus("✅ " + result.message);
      setFormData({ name: "", email: "", age: "", city: "" });
      refreshUsers();
      if (editingUser) setEditingUser(null); // exit edit mode
    } else {
      setStatus("❌ " + result.message);
    }
  };

  const handleCancel = () => {
    setEditingUser(null);
    setStatus("");
  };

  return (
    <div className="bg-gradient-to-r from-teal-600 to-cyan-500 shadow-2xl rounded-xl p-8 w-full max-w-md transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-md">
        {editingUser ? "Edit User" : "Add New User"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-200 text-white bg-white/20 backdrop-blur-sm transition"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-200 text-white bg-white/20 backdrop-blur-sm transition"
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-200 text-white bg-white/20 backdrop-blur-sm transition"
        />
        <input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-200 text-white bg-white/20 backdrop-blur-sm transition"
        />
        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-white text-teal-700 font-bold py-3 rounded-lg hover:bg-white/90 shadow-lg transition"
          >
            {editingUser ? "Update" : "Submit"}
          </button>
          {editingUser && (
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 shadow-lg transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
      {status && (
        <p className="mt-4 text-center text-sm font-medium text-white drop-shadow-md">
          {status}
        </p>
      )}
    </div>
  );
}
