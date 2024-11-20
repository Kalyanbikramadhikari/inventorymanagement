import { KeyboardArrowDown } from '@mui/icons-material';
import React from 'react';

const CustomerStats = ({topfield}) => {
    const returningCustomer = 20;
    const newCustomer = 80;
    const total = returningCustomer + newCustomer;
    const returningPercentage = (returningCustomer / total) * 100;
    const newPercentage = (newCustomer / total) * 100;


    return (
        <div className="flex w-full">

            <div className={` bg-white w-full ${topfield?'':'p-4 border  rounded-borderRadius shadow-sm'}`}>
                <div className={`flex justify-between items-center ${topfield?'hidden':'block'}`}>
                    <div className='text-[18px] font-medium text-[#373A40]'>Overall Summary</div>
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

                <div className={`grid grid-cols-2 gap-6 mb-4 ${topfield?'':' mt-[27px]'}`}>
                    <div>
                        <p className="text-[13px] font-medium text-[#7D7D7D]">RETURNING CUSTOMER</p>
                        <p className="text-[26px] font-semibold">{returningCustomer}</p>
                    </div>
                    <div>
                        <p className="text-[13px] font-medium text-[#7D7D7D]">NEW CUSTOMER</p>
                        <p className="text-[26px] font-semibold">{newCustomer}</p>
                    </div>
                </div>


                <div className="relative w-full h-2 bg-gray-200 rounded-full mb-6">
                    <div
                        className="absolute top-0 left-0 h-2 bg-[#488FED] rounded-l-full"
                        style={{ width: `${returningPercentage}%` }}
                    ></div>
                    <div
                        className="absolute top-0 left-0 h-2 bg-[#48ED50] rounded-r-full"
                        style={{ width: `${newPercentage}%`, marginLeft: `${returningPercentage}%` }}
                    ></div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                        <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
                        <span className='text-[13px]'>Returning Customer</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                        <span className='text-[13px]'>New Customer</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomerStats;
