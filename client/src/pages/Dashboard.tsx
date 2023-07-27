// client/src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import Chart from '../components/Chart';

const Dashboard: React.FC = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ label: 'Data Points', data: [] }],
  });

  useEffect(() => {
    // Fetch data from the server and update the chartData state
    // You can use Axios or fetch API to make a GET request to the server endpoint that fetches the data.
    // Update the 'labels' and 'data' properties in the 'chartData' state with the received data.
  }, []);

  return (
    <div>
      <h1>Live Data Updates</h1>
      <Chart data={chartData} />
    </div>
  );
};

export default Dashboard;
