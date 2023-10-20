import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { label: 'A', value: 400, color: '#0088FE' },
  { label: 'B', value: 300, color: '#00C49F' },
  { label: 'C', value: 300, color: '#FFBB28' },
  { label: 'D', value: 200, color: '#FF8042' },
];

const sizing = {
  margin: { right: 10 },
  width: 380,
  height: 300,
  legend: { hidden: false },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function PieChartWithCustomizedLabel() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 100,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
  );
}