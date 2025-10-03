"use client";

import React, { useEffect, useState } from "react";
import API from "../utils/api";
import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await API.get("/contacts");
        setContacts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Navbar />
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Contacts
        </h1>

        {contacts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center mt-20">
            No contacts found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {contacts.map((contact) => (
              <ContactCard key={contact._id} contact={contact} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
