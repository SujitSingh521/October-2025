"use client";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import API from "../utils/api";
import { Users, PhoneCall, ListChecks } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";

export default function Dashboard() {
  const [stats, setStats] = useState({ contacts: 0, leads: 0, tasks: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await API.get("/analytics/stats");
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStats();
  }, []);

  // Sample Data for Charts
  const barData = [
    { name: "Contacts", value: stats.contacts },
    { name: "Leads", value: stats.leads },
    { name: "Tasks", value: stats.tasks },
  ];

  const pieData = [
    { name: "Contacts", value: stats.contacts },
    { name: "Leads", value: stats.leads },
    { name: "Tasks", value: stats.tasks },
  ];

  const COLORS = ["#3B82F6", "#10B981", "#EC4899"];

  const lineData = [
    { month: "Jan", leads: 20, tasks: 30 },
    { month: "Feb", leads: 35, tasks: 40 },
    { month: "Mar", leads: 25, tasks: 20 },
    { month: "Apr", leads: 45, tasks: 50 },
    { month: "May", leads: 30, tasks: 35 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Navbar />

        <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contacts */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg rounded-2xl p-6 flex items-center gap-4 transform hover:scale-105 transition">
            <div className="bg-white p-3 rounded-full text-blue-600 shadow">
              <Users size={28} />
            </div>
            <div>
              <p className="text-sm font-medium">Contacts</p>
              <h2 className="text-2xl font-bold">{stats.contacts}</h2>
            </div>
          </div>

          {/* Leads */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg rounded-2xl p-6 flex items-center gap-4 transform hover:scale-105 transition">
            <div className="bg-white p-3 rounded-full text-green-600 shadow">
              <PhoneCall size={28} />
            </div>
            <div>
              <p className="text-sm font-medium">Leads</p>
              <h2 className="text-2xl font-bold">{stats.leads}</h2>
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg rounded-2xl p-6 flex items-center gap-4 transform hover:scale-105 transition">
            <div className="bg-white p-3 rounded-full text-pink-600 shadow">
              <ListChecks size={28} />
            </div>
            <div>
              <p className="text-sm font-medium">Tasks</p>
              <h2 className="text-2xl font-bold">{stats.tasks}</h2>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg font-bold mb-4">📊 Stats Overview (Bar Chart)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg font-bold mb-4">📌 Distribution (Pie Chart)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mt-10">
          <h2 className="text-lg font-bold mb-4">📈 Leads & Tasks Trend (Line Chart)</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="leads" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="tasks" stroke="#EC4899" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
