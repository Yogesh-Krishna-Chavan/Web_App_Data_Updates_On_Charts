// client/src/components/Chart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';

interface ChartProps {
  data: {
    labels: string[];
    datasets: { label: string; data: number[] }[];
  };
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return <Line data={data} />;
};

export default Chart;
