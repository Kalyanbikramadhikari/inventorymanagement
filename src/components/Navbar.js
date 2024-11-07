import React from 'react';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-[35px] py-6 border-b border-gray-200 bg-white">
            <h2 className="text-[29px] font-medium">Vendors</h2>
            <div className="flex items-center space-x-4">
                <div className="w-[50px] h-[50px] rounded-full bg-blue-500 text-white flex items-center justify-center">
                    JD
                </div>
                <div className='flex flex-col items-start'>
                    <div className="flex items-center gap-2">
                        <strong className="block text-gray-700 text-[16px] font-bold">John Doe</strong>
                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.75L6.5 6.25L12 0.75" stroke="black" stroke-width="2" />
                        </svg>

                    </div>
                    <span className="text-sm text-[#A6AABA]">Admin</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
