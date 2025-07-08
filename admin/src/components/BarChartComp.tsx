"use client";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
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

function BarChartComp<T>({
  data,
  dataKey,
  xKey = "name" as keyof T,
}: LineChartCompProps<T>) {
  return (
    <ResponsiveContainer>
      <BarChart width={850} height={300} data={data}>
        <XAxis dataKey={xKey as string} />
        <YAxis />
        <Legend />
        <Bar dataKey={dataKey as string} fill="lime" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComp;
