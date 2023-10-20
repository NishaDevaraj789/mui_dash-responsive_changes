import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  margin: { left:100},
  width: 750,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    bengaluru: 59,
    chennai: 57,
    delhi: 86,
    mumbai: 21,
    month: 'Jan',
  },
  {
    bengaluru: 50,
    chennai: 52,
    delhi: 78,
    mumbai: 28,
    month: 'Feb',
  },
  {
    bengaluru: 47,
    chennai: 53,
    delhi: 106,
    mumbai: 41,
    month: 'Mar',
  },
  {
    bengaluru: 54,
    chennai: 56,
    delhi: 92,
    mumbai: 73,
    month: 'Apr',
  },
  {
    bengaluru: 57,
    chennai: 69,
    delhi: 92,
    mumbai: 99,
    month: 'May',
  },
  {
    bengaluru: 60,
    chennai: 63,
    delhi: 103,
    mumbai: 144,
    month: 'June',
  },
  {
    bengaluru: 59,
    chennai: 60,
    delhi: 105,
    mumbai: 319,
    month: 'July',
  },
  {
    bengaluru: 65,
    chennai: 60,
    delhi: 106,
    mumbai: 249,
    month: 'Aug',
  },
  {
    bengaluru: 51,
    chennai: 51,
    delhi: 95,
    mumbai: 131,
    month: 'Sept',
  },
  {
    bengaluru: 60,
    chennai: 65,
    delhi: 97,
    mumbai: 55,
    month: 'Oct',
  },
  {
    bengaluru: 67,
    chennai: 64,
    delhi: 76,
    mumbai: 48,
    month: 'Nov',
  },
  {
    bengaluru: 61,
    chennai: 70,
    delhi: 103,
    mumbai: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'bengaluru', label: 'Bengaluru', valueFormatter,color: '#deecf9' },
        { dataKey: 'chennai', label: 'Chennai', valueFormatter,color: '#c7e0f4'  },
        { dataKey: 'delhi', label: 'Delhi', valueFormatter, color: '#71afe5'},
        { dataKey: 'mumbai', label: 'Mumbai', valueFormatter,color: '#2b88d8' },
      ]}
      {...chartSetting}
    />
  );
}