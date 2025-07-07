"use client";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", uv: 400, pv: 240 },
  { name: "Feb", uv: 300, pv: 139 },
  { name: "Mar", uv: 500, pv: 380 },
  { name: "Apr", uv: 278, pv: 390 },
  { name: "May", uv: 189, pv: 480 },
  { name: "Jun", uv: 239, pv: 380 },
  { name: "Jul", uv: 349, pv: 430 },
  { name: "Aug", uv: 200, pv: 300 },
  { name: "Sep", uv: 300, pv: 400 },
  { name: "Oct", uv: 400, pv: 500 },
  { name: "Nov", uv: 500, pv: 600 },
  { name: "Dec", uv: 600, pv: 700 },
];

function UsersChartComp() {
  return (
    <ResponsiveContainer>
      <LineChart
        width={850}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default UsersChartComp;
