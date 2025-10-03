import React, { useEffect, useState } from "react";
import API from "../utils/api";
import LeadCard from "../components/LeadCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Leads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const { data } = await API.get("/leads");
        setLeads(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Leads</h1>
        {leads.length === 0 ? (
          <p className="text-gray-500">No leads found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {leads.map((lead) => (
              <LeadCard key={lead._id} lead={lead} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
