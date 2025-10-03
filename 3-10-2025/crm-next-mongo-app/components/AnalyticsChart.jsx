"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import API from "../utils/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AnalyticsChart() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const { data } = await API.get("/analytics");
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: "Leads per Month",
              data: data.values,
              backgroundColor: function(context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                if (!chartArea) return null;
                const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)");
                gradient.addColorStop(1, "rgba(59, 130, 246, 0.8)");
                return gradient;
              },
              borderRadius: 8,
              barThickness: 30,
            },
          ],
        });
      } catch (err) {
        console.error("Failed to fetch analytics:", err);
      }
    };
    fetchAnalytics();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top", labels: { font: { size: 14 }, color: "#1F2937" } },
      title: { display: true, text: "Monthly Leads Overview", font: { size: 18 } },
      tooltip: { mode: "index", intersect: false },
    },
    animation: { duration: 1000, easing: "easeOutQuart" },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#374151", font: { size: 14 } },
        grid: { color: "rgba(0,0,0,0.05)" },
      },
      x: {
        ticks: { color: "#374151", font: { size: 14 } },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Analytics Dashboard
      </h2>
      <Bar data={chartData} options={options} />
    </div>
  );
}
