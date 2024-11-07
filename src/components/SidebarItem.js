import React from 'react'
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, isActive, href }) => {
    return (
      <Link
        to={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
          ${isActive 
            ? 'bg-blue-50 text-blue-600' 
            : 'text-gray-600 hover:bg-gray-100'
          }`}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Link>
    );
  };

export default SidebarItem