"use client";

import { useState } from "react";

export default function UserForm({ refreshUsers }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok) {
      setStatus("✅ " + result.message);
      setFormData({ name: "", email: "", age: "", city: "" });
      refreshUsers();
    } else {
      setStatus("❌ " + result.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-600 to-cyan-500 shadow-2xl rounded-xl p-8 w-full max-w-md transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-md">
        Add New User
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
        <button
          type="submit"
          className="w-full bg-white text-teal-700 font-bold py-3 rounded-lg hover:bg-white/90 shadow-lg transition"
        >
          Submit
        </button>
      </form>
      {status && (
        <p className="mt-4 text-center text-sm font-medium text-white drop-shadow-md">
          {status}
        </p>
      )}
    </div>
  );
}
