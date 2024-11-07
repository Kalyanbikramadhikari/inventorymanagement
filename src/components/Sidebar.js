import React from 'react'
import SidebarItem from './SidebarItem';


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
    const menuItems = [
        { icon: DashboardIcon, label: 'Dashboard', href: '/dashboard' },
        { icon: Inventory2Icon, label: 'Products', href: '/products' },
        { icon: InventoryIcon, label: 'Inventory', href: '/inventory' },
        { icon: ShoppingCartIcon, label: 'Sales & Orders', href: '/sales' },
        { icon: PeopleAltIcon, label: 'Vendors', href: '/vendors' },
        { icon: CalculateIcon, label: 'Accounting', href: '/accounting' },
        { icon: GroupIcon, label: 'Customers', href: '/customers' },
        { icon: AssessmentIcon, label: 'Reports & Analysis', href: '/reports' },
        { icon: NotificationsIcon, label: 'Notification', href: '/notifications' },
        { icon: SettingsIcon, label: 'Settings', href: '/settings' },
      ];
  
    return (
      <div className="w-80 border-r h-screen bg-[#F9FAFB]">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <img src="/assets/images/logo.png" alt="Invenzo" className="h-10" />
            <span className="text-2xl font-bold">Invenzo</span>
          </div>
          
          <div className="space-y-1">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={activeItem === item.label.toLowerCase()}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Sidebar