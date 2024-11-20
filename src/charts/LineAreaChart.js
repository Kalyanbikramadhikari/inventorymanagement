import { KeyboardArrowDown } from '@mui/icons-material';
import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', value: 10000 },
  { month: 'Feb', value: 20000 },
  { month: 'Mar', value: 30000 },
  { month: 'Apr', value: 40000 },
  { month: 'May', value: 50000 },
  { month: 'Jun', value: 60000 },
  { month: 'Jul', value: 70000 },
  { month: 'Aug', value: 58000 },
  { month: 'Sep', value: 75000 },
  { month: 'Oct', value: 80000 },
  { month: 'Nov', value: 95000 },
  { month: 'Dec', value: 120000 },
];

const LineAreaChart = () => {
  return (
    <div className='w-full border border-inputField-border rounded-borderRadius p-6'>
      <div className="flex justify-between items-center mb-4">
        <div className='text-[18px] font-medium text-[#373A40]'>Cash Flow</div>
        <div className='flex items-center gap-4 p-[10px] justify-between border border-inputField-border rounded-borderRadius'>
          <div className="flex gap-3 items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 1.5V4.5" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 1.5V4.5" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.25 7.5H15.75" stroke="#868E96" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='text-subHeading text-[#495057]'>This Month </span>

          </div>

          <div className="flex items-center">
            <KeyboardArrowDown />
          </div>


        </div>
      </div>

      <ResponsiveContainer width="100%" height={400} >
        <AreaChart data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1A73E8" stopOpacity={1} />
              <stop offset="95%" stopColor="#1A73E8" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
};

export default LineAreaChart;
