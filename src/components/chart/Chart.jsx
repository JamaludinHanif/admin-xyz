import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thue", "minggu"],
    datasets: [
      {
        label: "Hari",
        data: [20000, 6, 9, 4, 8],
        backgroundColor: "#60a5fa",
        borderWidth: 1,
        borderColor: "black",
      },
    ],
  };

  const options = {};
  return (
    <>
      <div className="w-2/5">
        <Bar
        //   style={({ padding: "20px" }, { width: "20%" }, {height: "20%"})}
          data={data}
          options={options}
        ></Bar>
      </div>
    </>
  );
};

export default BarChart;
