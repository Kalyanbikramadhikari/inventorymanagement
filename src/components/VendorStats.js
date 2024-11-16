// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari


import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import CircleIcon from '@mui/icons-material/Circle';

const VendorStats = () => {
    const totalVendors = 8925;
    const registeredVendors = 6500;
    const secondHandSellers = 2000;
    const phoneExchange = 425;

    const registeredPercentage = (registeredVendors / totalVendors) * 100;
    const secondHandPercentage = (secondHandSellers / totalVendors) * 100;
    const phoneExchangePercentage = (phoneExchange / totalVendors) * 100;

    return (
        <div className="flex w-full mx-[35px] justify-between">


            <div className="flex items-center m-[20px] p-[20px]  rounded-[5px] border-[1px] border-inputField-border bg-white  w-2/3 space-x-4">
                <div className="flex items-start gap-x-6">
                    <div className="flex items-start bg-gray-50 p-2 border-inputField-border border-[1px] rounded-full">
                        <PeopleIcon className="text-blue-600" fontSize="small" />

                    </div>
                    <div>
                        <p className="text-sm text-[#7A8299] font-medium">TOTAL VENDORS</p>
                        <p className="text-[41px] font-medium text-[#333333]">{totalVendors.toLocaleString()}</p>
                    </div>
                </div>

                <div className="border-l border-gray-300 h-full mx-4"></div>

                <div className="flex-1">
                    <div className="w-full flex gap-2 bg-white rounded-full h-2 mb-4">
                        <div
                            className="bg-[#0ECACA] h-2 rounded-l-full"
                            style={{ width: `${registeredPercentage}%` }}
                        ></div>
                        <div
                            className="bg-[#F19F35] h-2"
                            style={{ width: `${secondHandPercentage}%` }}
                        ></div>
                        <div
                            className="bg-[#CA0EC7] h-2 rounded-r-full"
                            style={{ width: `${phoneExchangePercentage}%` }}
                        ></div>
                    </div>

                    <div className="flex justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                            <CircleIcon className="text-[#0ECACA]" fontSize="small" />
                            <span className='text-subHeading text-[#7A8299]'>Registered Vendor: <span className='text-black'>{registeredVendors.toLocaleString()}</span></span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CircleIcon className="text-[#F19F35]" fontSize="small" />
                            <span className='text-subHeading text-[#7A8299]'>Second-hand Sellers: <span className='text-black'>{secondHandSellers.toLocaleString()}</span></span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CircleIcon className="text-[#CA0EC7]" fontSize="small" />
                            <span className='text-subHeading text-[#7A8299]'>Phone Exchange: <span className='text-black'>{phoneExchange.toLocaleString()}</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center my-[20px]  p-[20px]  rounded-[5px] border-[1px] border-inputField-border bg-white w-1/3  space-x-4">
                <div className="flex items-start gap-x-6">
                    <div className="flex items-start bg-gray-50 p-2 border-inputField-border border-[1px] rounded-full">
                        <PeopleIcon className="text-blue-600" fontSize="small" />

                    </div>
                    <div>
                        <p className="text-sm text-[#7A8299] font-medium">TOTAL VENDORS</p>
                        <p className="text-[41px] font-medium text-[#333333]">{totalVendors.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorStats;
