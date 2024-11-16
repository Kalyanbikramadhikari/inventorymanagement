// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari


import React from 'react';

const StatCard = ({ title, amount }) => {
  // Determine color based on the amount value
  let textColor;
  if (amount < 0) {
    textColor = 'text-red-500'; // Red for negative values
  } else if (amount > 100000) {
    textColor = 'text-green-500'; // Green for high positive values
  } else {
    textColor = 'text-yellow-500'; // Yellow for moderate positive values
  }

  return (
    <div className="px-4 py-2 shadow-md w-52 flex flex-col gap-2 border rounded-lg text-start">
      <p className="text-dialog-grayone text-subHeading"  >{title}</p>
      <p className={`text-[26px] ${textColor}`}>{`Rs ${amount.toLocaleString()}`}</p>
    </div>
  );
};

export default StatCard;
