import * as React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'series A',color:'#0088FE'  },
  { id: 1, value: 19, label: 'series B',color: '#00C49F'},
  { id: 2, value: 20, label: 'series C',color: '#FFBB28' },
  { id: 3, value: 15, label: 'series D', color: '#FF5733' },
  { id: 4, value: 25, label: 'series E', color: '#A569BD' },
];


export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
         
          innerRadius: 50,
          outerRadius: 110,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -120,
          endAngle: 180,
          cx: 230,
          cy:120,
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: 'gray',
        },
      }}
      height={240}
    />
  );
}