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
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setisExpanded } from '../store/reducerSlices/ExpandedSidebarSlice';

const Sidebar = ({ activeItem }) => {
  // const [isExpanded, setIsExpanded] = useState(true);
  const { isExpanded } = useSelector((state) => state.hamburger)
  const dispatch = useDispatch()

  const location = useLocation();
  const menuItems = [
    { icon: DashboardIcon, label: 'Dashboard', href: '/' },
    // { icon: InventoryIcon, label: 'Inventory', href: '/inventory' },
    // { icon: CalculateIcon, label: 'Accounting', href: '/accounting' },
    { icon: AssessmentIcon, label: 'Reports & Analysis', href: '/report-and-analysis' },

  ];
  const menuItemsTwo = [
    { icon: Inventory2Icon, label: 'Products', href: '/products' },

    {
      icon: NotificationsIcon, label: 'Category',
      isExpandable: true,

      subItems: [
        { label: 'Primary Category', href: '/primarycategory' },
        { label: 'Secondary Category', href: '/secondarycategory' }
      ]
    },
    { icon: SettingsIcon, label: 'Returned & Refunded', href: '/returnedandrefunded' },
  ]

  const menuItemsThree = [
    { icon: NotificationsIcon, label: 'Account', href: '/account' },
    { icon: ShoppingCartIcon, label: 'Sales & Orders', href: '/sales' },
  ]
  const menuItemsFour = [
    { icon: PeopleAltIcon, label: 'Vendors', href: '/vendors' },
    { icon: GroupIcon, label: 'Customers', href: '/customers' },
  ]

  return (
    <div className={`${isExpanded ? 'w-[400px]' : 'w-20'} fixed top-0 left-0 bottom-0 transition-all duration-200 border-r bg-[#F9FAFB] overflow-auto overflow-x-hidden `}>
      <div className=" p-4">
        <div className={`flex items-center gap-2 mb-8 ${isExpanded ? 'px-[24px]' : ''} `}>
          <img src="/assets/images/logo.png" alt="Invenzo" className={`h-10`} />
          {isExpanded && <span className="text-2xl font-bold">Invenzo</span>}
        </div>
        <div className={`absolute -right-0 top-6 ${isExpanded ? '' : ''}`}>
          <div
            onClick={() => dispatch(setisExpanded())}
            className={`flex h-12 w-12 shadow-md border-[1px] border-[#EAEBEE] rounded-full bg-white justify-center items-center ${isExpanded ? 'pl-2' : 'pr-2'} cursor-pointer`}
          >
            <ArrowBackIosIcon
              className={`transition-transform duration-300 ${!isExpanded && 'rotate-180'}`}
            />
          </div>
        </div>

        <div className="flex border border-inputField-border rounded-borderRadius py-3 px-6 gap-3 items-center mb-5">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="40" height="40" rx="20" fill="#488FED" />
            <rect x="1" y="1" width="40" height="40" rx="20" stroke="#ECEDEF" stroke-linejoin="bevel" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7778 19.2222C14.7778 17.572 15.4333 15.9893 16.6002 14.8224C17.7671 13.6556 19.3498 13 21 13C22.6502 13 24.2329 13.6556 25.3998 14.8224C26.5667 15.9893 27.2222 17.572 27.2222 19.2222C27.2222 20.8725 26.5667 22.4551 25.3998 23.622C24.2329 24.7889 22.6502 25.4444 21 25.4444C19.3498 25.4444 17.7671 24.7889 16.6002 23.622C15.4333 22.4551 14.7778 20.8725 14.7778 19.2222ZM14.7778 28.5556C12.715 28.5556 10.7367 29.375 9.27806 30.8336C7.81944 32.2922 7 34.2705 7 36.3333C7 37.571 7.49167 38.758 8.36684 39.6332C9.242 40.5083 10.429 41 11.6667 41H30.3333C31.571 41 32.758 40.5083 33.6332 39.6332C34.5083 38.758 35 37.571 35 36.3333C35 34.2705 34.1806 32.2922 32.7219 30.8336C31.2633 29.375 29.285 28.5556 27.2222 28.5556H14.7778Z" fill="white" />
          </svg>
          <div className={`flex flex-col ${!isExpanded && 'hidden'}`}>
            <span className='text-[#64748B] text-[14px]'>Welcome back  </span>
            <span className='text-[#081021] text-[16px]'>John Doe</span>
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
            )

            )}
          </div>

          <hr className='flex border-[#D9D9D9] opacity-75' />
          <div className="flex mt-5">
            <span className={`font-semibold text-[12px] text-[#99A0A5] px-6 ${isExpanded ? 'text-[12px]' : 'text-[10px] hidden'}`}>INVENTORY</span>

          </div>
          <div className="space-y-1">

            {menuItemsTwo.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={item.isExpandable
                  ? item.subItems?.some(subItem => activeItem.toLowerCase() === subItem.label.toLowerCase())
                  : false}
                activesubitem={activeItem.toLowerCase()}
                isExpanded={isExpanded}
                isExpandable={item.isExpandable}
                subItems={item.subItems}
                setOpenSubItem={true}

              />
            ))}
          </div>
          <hr className='flex border-[#D9D9D9] opacity-75' />
          <div className="flex mt-5">
            <span className={`font-semibold text-[12px] text-[#99A0A5] px-6 ${isExpanded ? 'text-[12px]' : 'text-[10px] hidden'}`}>FINANCE</span>

          </div>
          <div className="space-y-1">

            {
              menuItemsThree.map((item) => (
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



          <hr className='flex border-[#D9D9D9] opacity-75' />
          <div className="flex mt-5">
            <span className={`font-semibold text-[12px] text-[#99A0A5] px-6 ${isExpanded ? 'text-[12px]' : 'text-[10px] hidden'}`}>NETWORK</span>

          </div>
          <div className="space-y-1">

            {
              menuItemsFour.map((item) => (
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