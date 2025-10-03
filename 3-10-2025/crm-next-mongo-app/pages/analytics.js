import React from "react";
import AnalyticsChart from "../components/AnalyticsChart";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Analytics() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        <h1 className="text-2xl font-bold mb-6">Analytics</h1>
        <AnalyticsChart />
      </div>
    </div>
  );
}
