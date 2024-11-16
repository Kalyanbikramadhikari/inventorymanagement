// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari


import React from 'react'
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, isActive, href, isExpanded }) => {
  console.log('isExpanded', isExpanded)
  return (
    <Link
      to={href}
      className={`flex items-center gap-3 ${isExpanded?'px-6 py-4':'py-4 flex justify-center'} rounded-borderRadius transition-colors
          ${isActive
          ? 'bg-button-activebg text-primary border-r-[6px] border-primary text-subHeading font-medium'
          : 'text-button-inactivetext text-subHeading font-normal hover:bg-gray-100'
        }`}
    >
      <Icon className="h-5 w-5" />
      {isExpanded && <span>{label}</span>}
    </Link>
  );
};

export default SidebarItem