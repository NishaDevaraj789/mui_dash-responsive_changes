import * as React from "react";
import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";
import { ResponsiveChartContainer } from "@mui/x-charts";

const data = [
  { id: 0, value: 10, label: "A", color: "#0088FE" },
  { id: 1, value: 19, label: " B", color: "#00C49F" },
  { id: 2, value: 20, label: " C", color: "#FFBB28" },
  { id: 3, value: 15, label: " D", color: "#FF5733" },
  { id: 4, value: 25, label: " E", color: "#A569BD" },
];



export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 180,
          cx: 180,
          cy: 110,
          
          
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: "gray",
        },
      }}
      height={240}
      width={450}
    />
  );
}
