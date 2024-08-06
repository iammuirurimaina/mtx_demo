import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import TotalConsumption from './TotalConsumption';
import LocationConsumption from './LocationConsumption';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Overview: React.FC = () => {
  // Data for the Total Consumption bar chart
  const monthData = [
    { month: 'Jan', height: 156 },
    { month: 'Feb', height: 148 },
    { month: 'Mar', height: 90 },
    { month: 'Apr', height: 142 },
    { month: 'May', height: 70 },
    { month: 'Jun', height: 65 },
    { month: 'Jul', height: 10 },
    { month: 'Aug', height: 100 },
    { month: 'Sep', height: 80 },
    { month: 'Oct', height: 0 },
    { month: 'Nov', height: 10 },
    { month: 'Dec', height: 0 }
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard title="Current Available" value="345 kg" subtext="As of 5/13/24" />
        <StatCard title="Today's Consumption" value="15 kg" subtext="As of 12:39 PM" />
        <StatCard title="This Month Consumption" value="545 kg" subtext="15 Days" />
        <StatCard title="Monthly Average" value="245 kg" subtext="21 Months" />
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <TotalConsumption monthData={monthData} />
      </div>

      <LocationConsumption />
      
      {/* <div className="bg-white h-40px p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Location Based Consumption By</h2>
        <div className="grid grid-cols-3 gap-4">
          <DoughnutChart title="Highest" value={46} location="Upanta" />
          <DoughnutChart title="Second Highest" value={40} location="Sind Wajaki" />
          <DoughnutChart title="Lowest" value={12} location="Orbit Place" />
        </div>
      </div> */}
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: string; subtext: string }> = ({ title, value, subtext }) => (
  <div className="bg-stone-200 p-4 rounded-lg shadow w-full">
    <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
    <p className="text-xl lg:text-2xl font-bold mb-1">{value}</p>
    <p className="text-xs text-gray-400">{subtext}</p>
  </div>
);

const DoughnutChart: React.FC<{ title: string; value: number; location: string }> = ({ title, value, location }) => {
  const donutData = {
    labels: ['Used', 'Remaining'],
    datasets: [
      {
        label: 'Consumption',
        data: [value, 100 - value],
        backgroundColor: ['#065f46', '#e5e7eb'],
        hoverBackgroundColor: ['#064e3b', '#d1d5db']
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value} kg</p>
      <p className="text-xs text-gray-400">{location}</p>
      <Doughnut data={donutData} options={{ maintainAspectRatio: false, cutout: '70%' }} />
    </div>
  );
};

export default Overview;
