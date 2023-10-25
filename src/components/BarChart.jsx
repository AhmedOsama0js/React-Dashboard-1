import React, { useState, useEffect } from "react";
import { BsBarChartLineFill } from "react-icons/bs";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Sales",
          data: [65, 59, 80, 81, 56],
          backgroundColor: "rgba(75, 192, 192, 0.3)",
          borderColor: "rgba(32, 201, 151, 0.5)",
          borderWidth: 1,
        },
      ],
    });

    setChartOptions({
      plugins: {
        Legend: {
          positions: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <div className="Chart bg-body p-3 rounded-3">
      <div className="d-flex justify-content-between text-success">
        <h4>Chart</h4>
        <span className="fs-4">
          <BsBarChartLineFill />
        </span>
      </div>
      <div className="CONT-chart">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default BarChart;
