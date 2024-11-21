// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari


import { ArrowDownward } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, isActive, activesubitem, href, isExpanded, isExpandable, subItems, setOpenSubItem }) => {
  // console.log('isExpanded', isExpanded)
  const [isOpen, setIsOpen] = useState(setOpenSubItem || false);
  const isSubItemActive = activesubitem === label.toLowerCase()
  const handleParentClick = () => {
    setIsOpen(!isOpen); // Only toggle when parent is clicked
  };

  
  if (isExpandable) {
    // console.log('first', first)
    return (
      <div >
        <div
          onClick={handleParentClick}

          className={`flex items-center justify-between ${isExpanded ? 'px-6 py-4' : 'py-4 justify-center'
            } rounded-borderRadius cursor-pointer transition-colors text-button-inactivetext text-subHeading font-normal hover:bg-gray-100
          
            }`}
        >
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5" />
            {isExpanded && <span>{label}</span>}
          </div>
          {isExpanded && (
            <ArrowDownward
              className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''
                }`}
            />
          )}
        </div>

        {/* Submenu items */}
        {isExpanded && isOpen && (
          <div className="ml-12 mt-1 space-y-2 border-l border-inputField-border ">
            {subItems.map((item, index) => (
              <div className='flex items-center' key={index}  >

                {/* side straight line */}
                <div className="flex w-4  border border-inputField-border items-center">

                </div>

                {/* primary or secondary category */}
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={()=>setIsOpen(true)}
                  // Prevent parent toggle on child click
                  className={`flex items-center gap-3 ${isExpanded ? 'px-6 py-4' : 'py-4 flex justify-center'
                    } rounded-borderRadius transition-colors ${activesubitem === item.label.toLowerCase()
                      ? 'bg-button-activebg text-primary border-r-[6px] border-primary text-subHeading font-medium w-full'
                      : 'text-button-inactivetext text-subHeading font-normal border border-inputField-border w-full hover:bg-gray-100'
                    }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        )}

      </div>
    );
  }

  return (

    <Link
      to={href}
      className={`flex items-center gap-3 ${isExpanded ? 'px-6 py-4' : 'py-4 flex justify-center'} rounded-borderRadius transition-colors
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