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

interface LineChartCompProps<T> {
  data: T[];
  dataKey: keyof T;
  xKey?: keyof T;
}

function LineChartComp<T>({ data, dataKey, xKey = "name" as keyof T } :LineChartCompProps<T>) {
  return (
    <ResponsiveContainer>
      <LineChart
        width={850}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey={xKey as string} />
        <YAxis />
        <Legend />
        <Line type="monotone" dataKey={dataKey as string} stroke="lime" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComp;
