import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'High Stock Product', value: 65000, color: '#32CD32' }, // green
  { name: 'Low Stock Product', value: 35000, color: '#FFD700' }, // yellow
  { name: 'Out of Stock Product', value: 5000, color: '#FF4500' }, // red
];

const DonutChart = () => {
  return (
    <div className='w-full border border-inputField-border rounded-borderRadius p-6'>
      <div className="flex justify-between items-center mb-4">
        <div className='text-[18px] font-medium text-[#373A40]'>Stock Level</div>

      </div>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend verticalAlign="middle" align="right" layout="vertical" />
          </PieChart>
        </ResponsiveContainer>
        <div style={{ textAlign: 'center', marginTop: '-300px', fontSize: '24px', fontWeight: 'bold' }}>
          100,000
          <div style={{ fontSize: '16px', color: '#666' }}>Active Products</div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
