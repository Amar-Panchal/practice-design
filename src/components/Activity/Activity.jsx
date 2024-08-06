/** @format */

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Select, MenuItem } from "@mui/material";
import Card from "@mui/material/Card";
import "./_activity.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { TbTargetArrow } from "react-icons/tb";
import { PiHamburgerDuotone } from "react-icons/pi";
import { FaConciergeBell } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const weeklyData = {
  labels: [" 1", " 2", " 3", " 4"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81],
      backgroundColor: "#7294ff",
      borderColor: "#7294ff",
      borderWidth: 1,
      borderRadius: 10,
    },
  ],
};

const monthlyData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ],
  datasets: [
    {
      label: "Sales",
      data: [
        65, 59, 20, 31, 6, 55, 40, 45, 60, 70, 75, 21, 85, 42, 95, 30, 85, 80,
        75, 70, 6, 60, 5, 50, 45, 40, 35, 30, 25,
      ],
      backgroundColor: "#7294ff",
      borderColor: "#7294ff",
      borderWidth: 1,
      borderRadius: 10,
    },
  ],
};
const BarChart = () => {
  const [filter, setFilter] = useState("week");
  const [data, setData] = useState(weeklyData);

  useEffect(() => {
    setData(filter === "week" ? weeklyData : monthlyData);
  }, [filter]);

  const options = {
    indexAxis: "x",
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      datalabels: {
        display: false,
        offset: 1,
        color: "#ffffff",
        anchor: "end",
        align: "start",
        font: {
          size: 11,
          weight: 600,
        },
        padding: {
          bottom: 20,
        },
      },
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Horizontal Bar Chart",
        font: {
          size: 14,
          weight: "700",
        },
      },
    },
    barThickness: 20,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "transparent",
          borderWidth: 1,

          borderDash: [1, 1],
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#fff",
          borderDash: [1, 1],
          borderWidth: 1,
        },
      },
    },
  };

  const activityData = [
    {
      id: 1,
      title: "Goals",
      icons: TbTargetArrow,
      backgroundColor: "rgba(89, 48, 53,0.8)",
      color: "#f36921",
    },
    {
      id: 1,
      title: "Popular Dishes",
      icons: PiHamburgerDuotone,
      color: "#5971ca",
      backgroundColor: "rgba(41, 51, 104,0.8)",
    },
    {
      id: 1,
      title: "Menus",
      icons: FaConciergeBell,
      backgroundColor: "rgba(33, 74, 96,0.8)",
      color: "#2285b3",
    },
  ];
  return (
    <div className='activity-main'>
      <Card className='activity-left-side'>
        <div className='select-container'>
          <div
            style={{
              marginBottom: "10px",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Activity
          </div>
          <FormControl sx={{ mt: 1, mr: 1, minWidth: 120 }} size='small'>
            <InputLabel id='demo-select-small-label'>Time</InputLabel>
            <Select
              labelId='filter-label'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              label='Select View'
            >
              <MenuItem value='week'>Week</MenuItem>
              <MenuItem value='month'>Month</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div style={{ margin: "10px", width: "98%", height: "250px" }}>
          <Bar data={data} options={options} />
        </div>
      </Card>
      <div className='activity-right-side'>
        <Card className='activity-right-side-card'>
          {activityData.map((item, index) => {
            const IconComponent = item.icons;
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fleWrap: "wrap",
                  margin: "40px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fleWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: item.color,
                      backgroundColor: item.backgroundColor,
                      borderRadius: "50%",
                      padding: "12px 16px 7px",
                      fontSize: "20px",
                      marginRight: " 20px",
                    }}
                  >
                    <IconComponent />
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
                <div
                  style={{
                    color: "#fffff",
                    backgroundColor: "#47484c",
                    borderRadius: "50%",
                    padding: "7px 9px 0px",
                    fontSize: "26px",
                  }}
                >
                  <MdKeyboardArrowRight />
                </div>
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
};

export default BarChart;
