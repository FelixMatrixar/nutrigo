// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";

// // Register the required components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const WeeklyNutritionChart = ({ data }) => {
//   const chartData = {
//     labels: data.map((entry) => entry.date),
//     datasets: [
//       {
//         label: "Calories",
//         data: data.map((entry) => entry.calories),
//         borderColor: "#FF7F2A",
//         backgroundColor: "rgba(255, 127, 42, 0.2)",
//         tension: 0.3,
//         fill: true,
//       },
//       {
//         label: "Protein",
//         data: data.map((entry) => entry.protein),
//         borderColor: "#6E0D25",
//         backgroundColor: "rgba(110, 13, 37, 0.2)",
//         tension: 0.3,
//         fill: true,
//       },
//       {
//         label: "Fat",
//         data: data.map((entry) => entry.fat),
//         borderColor: "#84A98C",
//         backgroundColor: "rgba(132, 169, 140, 0.2)",
//         tension: 0.3,
//         fill: true,
//       },
//       {
//         label: "Carbs",
//         data: data.map((entry) => entry.carbs),
//         borderColor: "#0C4767",
//         backgroundColor: "rgba(12, 71, 103, 0.2)",
//         tension: 0.3,
//         fill: true,
//       },
//       {
//         label: "Fiber",
//         data: data.map((entry) => entry.fiber),
//         borderColor: "#2bfe87",
//         backgroundColor: "rgba(43, 254, 135, 0.2)",
//         tension: 0.3,
//         fill: true,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false, // Allow flexibility for smaller screens
//     plugins: {
//       legend: {
//         position: "left",
//         labels: {
//           font: {
//             size: 10, // Adjust font size for smaller screens
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Dates",
//           font: {
//             size: 12, // Adjust font size for small screens
//           },
//         },
//         ticks: {
//           font: {
//             size: 10, // Smaller tick labels
//           },
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Grams (g)",
//           font: {
//             size: 12, // Adjust font size for small screens
//           },
//         },
//         ticks: {
//           font: {
//             size: 10, // Smaller tick labels
//           },
//         },
//       },
//     },
//   };

//   return <Line data={chartData} options={chartOptions} />;
// };

// export default WeeklyNutritionChart;

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { format, subDays } from "date-fns";
import { auth, db as firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const macronutrients = [
  { key: "calories", label: "Calories (kcal)" },
  { key: "protein", label: "Protein (g)" },
  { key: "fat", label: "Fat (g)" },
  { key: "carbs", label: "Carbohydrates (g)" },
  { key: "fiber", label: "Fiber (g)" },
];

const MacronutrientChart = ({ selectedDate }) => {
  const [selectedMacronutrient, setSelectedMacronutrient] = useState(
    macronutrients[0].key
  );
  const [weeklyData, setWeeklyData] = useState([]);

  const fetchWeeklyData = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const promises = [];
    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const date = subDays(selectedDate, i);
      dates.push(format(date, "yyyy-MM-dd"));

      const docRef = doc(
        firestore,
        `users/${user.uid}/nutritionData/${format(date, "yyyy-MM-dd")}`
      );
      promises.push(getDoc(docRef));
    }

    try {
      const results = await Promise.all(promises);
      const data = results.map((docSnap, index) => {
        if (docSnap.exists()) {
          const docData = docSnap.data();
          return {
            date: dates[index],
            value: docData[selectedMacronutrient] || 0, // Fetch selected macronutrient
          };
        } else {
          return {
            date: dates[index],
            value: 0,
          };
        }
      });

      setWeeklyData(data);
    } catch (error) {
      console.error("Error fetching weekly data:", error);
    }
  };

  useEffect(() => {
    fetchWeeklyData();
  }, [selectedMacronutrient, selectedDate]);

  const chartData = {
    labels: weeklyData.map((entry) => entry.date),
    datasets: [
      {
        label: macronutrients.find((n) => n.key === selectedMacronutrient)
          ?.label,
        data: weeklyData.map((entry) => entry.value),
        borderColor: "#6E0D25",
        backgroundColor: "rgba(255, 127, 42, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Dates",
        },
      },
      y: {
        title: {
          display: true,
          text: macronutrients.find((n) => n.key === selectedMacronutrient)
            ?.label,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-xl md:text-4xl font-bold mb-4 font-mono text-center">
        Weekly Macro-Nutrient Data
      </h2>
      <select
        value={selectedMacronutrient}
        onChange={(e) => setSelectedMacronutrient(e.target.value)}
        className="p-2 mb-4 bg-[#84A98C] text-white rounded-md cursor-pointer"
      >
        {macronutrients.map((n) => (
          <option key={n.key} value={n.key}>
            {n.label}
          </option>
        ))}
      </select>

      <div className="w-full h-64">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default MacronutrientChart;
