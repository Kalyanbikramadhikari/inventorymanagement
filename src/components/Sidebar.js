// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari

import React, { useState } from 'react'
import SidebarItem from './SidebarItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalculateIcon from '@mui/icons-material/Calculate';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ({ activeItem }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const menuItems = [
    { icon: DashboardIcon, label: 'Dashboard', href: '/' },
    { icon: Inventory2Icon, label: 'Products', href: '/products' },
    { icon: InventoryIcon, label: 'Inventory', href: '/inventory' },
    // { icon: ShoppingCartIcon, label: 'Sales & Orders', href: '/sales' },
    { icon: PeopleAltIcon, label: 'Vendors', href: '/' },
    { icon: CalculateIcon, label: 'Accounting', href: '/accounting' },
    { icon: GroupIcon, label: 'Customers', href: '/customers' },
    { icon: AssessmentIcon, label: 'Reports & Analysis', href: '/report-and-analysis' },

  ];
  const menuItemsTwo = [
    { icon: NotificationsIcon, label: 'Notification', href: '/notifications' },
    { icon: SettingsIcon, label: 'Settings', href: '/settings' },
  ]

  return (
    <div className={`${isExpanded ? 'w-80' : 'w-20'} transition-all duration-200 border-r h-screen bg-[#F9FAFB] relative font-roboto`}     >
      <div className=" p-4">
        <div className={`flex items-center gap-2 mb-8 ${isExpanded ? 'px-[24px]' : ''} `}>
          <img src="/assets/images/logo.png" alt="Invenzo" className={`h-10`} />
          {isExpanded && <span className="text-2xl font-bold">Invenzo</span>}
        </div>
        <div className={`absolute -right-6 top-6 ${isExpanded ? '' : ''}`}>
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex h-12 w-12 shadow-md border-[1px] border-[#EAEBEE] rounded-full bg-white justify-center items-center ${isExpanded ? 'pl-2' : 'pr-2'} cursor-pointer`}
          >
            <ArrowBackIosIcon
              className={`transition-transform duration-300 ${!isExpanded && 'rotate-180'}`}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={activeItem.toLowerCase() === item.label.toLowerCase()}
                isExpanded={isExpanded}
              />
            ))}
          </div>



          <hr className='flex border-button-border opacity-75' />
          <div className="space-y-1">

            {
              menuItemsTwo.map((item) => (
                <SidebarItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  isActive={activeItem.toLowerCase() === item.label.toLowerCase()}
                  isExpanded={isExpanded}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar