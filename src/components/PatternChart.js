import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PatternChart = ({ data }) => {
  const categories = ["Links", "Quotes", "Timestamps", "Notes"];
  const frequencies = [
    data.links.length,
    data.quotes.length,
    data.timestamps.length,
    data.notes.length,
  ];

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Frequency",
        data: frequencies,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable automatic scaling
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Frequency Analysis",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "60%", height: "300px", margin: "0 auto" }}>
      <h3>Frequency Analysis</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default PatternChart;
