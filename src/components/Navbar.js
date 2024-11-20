// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari

import React from 'react';
import { Search } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = ({ PageName }) => {
    return (
        <div className="flex items-center justify-between px-[35px] py-4 border-b border-gray-200 bg-white">
            <h2 className="text-[26px] font-medium w-72 ">{PageName || 'Vendors'}</h2>
            <div className='flex  flex-1 justify-end gap-[30px]'>



                <div className="flex flex-1 items-center px-4 py-1 rounded-borderRadius border-inputField-border border-[1px] gap-3 bg-inputField-background">
                    <Search className='opacity-40'/>
                    <input type="text" className='p-2  outline-none bg-transparent ' placeholder='Search for anything here...' />
                </div>
                {/* <div className="flex gap-[30px]"></div> */}

                <div className="flex items-center gap-8">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0C8.82441 0 6.69767 0.645139 4.88873 1.85383C3.07979 3.06253 1.66989 4.78049 0.83733 6.79048C0.00476611 8.80047 -0.213071 11.0122 0.211367 13.146C0.635804 15.2798 1.68345 17.2398 3.22183 18.7782C4.76021 20.3165 6.72022 21.3642 8.85401 21.7886C10.9878 22.2131 13.1995 21.9952 15.2095 21.1627C17.2195 20.3301 18.9375 18.9202 20.1462 17.1113C21.3549 15.3023 22 13.1756 22 11C22 8.08262 20.8411 5.28472 18.7782 3.22182C16.7153 1.15892 13.9174 0 11 0ZM11 20.4286C9.13521 20.4286 7.31229 19.8756 5.76177 18.8396C4.21125 17.8035 3.00277 16.331 2.28914 14.6082C1.57551 12.8853 1.3888 10.9895 1.7526 9.16058C2.1164 7.33161 3.01439 5.6516 4.333 4.33299C5.65161 3.01438 7.33162 2.1164 9.16058 1.7526C10.9895 1.38879 12.8853 1.57551 14.6082 2.28914C16.331 3.00276 17.8035 4.21125 18.8396 5.76177C19.8756 7.31229 20.4286 9.1352 20.4286 11C20.4286 13.5006 19.4352 15.8988 17.667 17.667C15.8988 19.4352 13.5006 20.4286 11 20.4286Z" fill="#A6AABA" />
                        <path d="M10.9989 18.0714C11.6498 18.0714 12.1775 17.5437 12.1775 16.8928C12.1775 16.2419 11.6498 15.7142 10.9989 15.7142C10.348 15.7142 9.82031 16.2419 9.82031 16.8928C9.82031 17.5437 10.348 18.0714 10.9989 18.0714Z" fill="#A6AABA" />
                        <path d="M11.7846 4.71436H10.606C10.1414 4.71333 9.68119 4.80408 9.25175 4.98139C8.82231 5.15871 8.43213 5.41911 8.1036 5.74764C7.77507 6.07617 7.51467 6.46635 7.33735 6.89579C7.16003 7.32523 7.06929 7.78547 7.07032 8.25008V8.64293H8.64175V8.25008C8.64175 7.72912 8.8487 7.22949 9.21708 6.86112C9.58545 6.49274 10.0851 6.28579 10.606 6.28579H11.7846C12.3056 6.28579 12.8052 6.49274 13.1736 6.86112C13.5419 7.22949 13.7489 7.72912 13.7489 8.25008C13.7489 8.77104 13.5419 9.27066 13.1736 9.63904C12.8052 10.0074 12.3056 10.2144 11.7846 10.2144H10.2132V13.7501H11.7846V11.7858C12.7223 11.7858 13.6217 11.4133 14.2847 10.7502C14.9478 10.0871 15.3203 9.18781 15.3203 8.25008C15.3203 7.31235 14.9478 6.41303 14.2847 5.74995C13.6217 5.08688 12.7223 4.71436 11.7846 4.71436Z" fill="#A6AABA" />
                    </svg>

                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18V9C3 7.4087 3.63214 5.88258 4.75736 4.75736C5.88258 3.63214 7.4087 3 9 3C10.5913 3 12.1174 3.63214 13.2426 4.75736C14.3679 5.88258 15 7.4087 15 9V18M3 18H15M3 18H1M15 18H17M8 21H10" stroke="#A6AABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z" stroke="#A6AABA" stroke-width="1.5" />
                    </svg>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="#A6AABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#A6AABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="border-inputField-border border-r my-1 "></div>

                <div className="flex gap-4 items-center">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#488FED" />
                        <path d="M23.6 11.6H22V10.8C22 10.5878 21.9157 10.3843 21.7657 10.2343C21.6157 10.0843 21.4122 10 21.2 10C20.9878 10 20.7843 10.0843 20.6343 10.2343C20.4843 10.3843 20.4 10.5878 20.4 10.8V11.6H15.6V10.8C15.6 10.5878 15.5157 10.3843 15.3657 10.2343C15.2157 10.0843 15.0122 10 14.8 10C14.5878 10 14.3843 10.0843 14.2343 10.2343C14.0843 10.3843 14 10.5878 14 10.8V11.6H12.4C11.7635 11.6 11.153 11.8529 10.7029 12.3029C10.2529 12.753 10 13.3635 10 14V23.6C10 24.2365 10.2529 24.847 10.7029 25.2971C11.153 25.7471 11.7635 26 12.4 26H23.6C24.2365 26 24.847 25.7471 25.2971 25.2971C25.7471 24.847 26 24.2365 26 23.6V14C26 13.3635 25.7471 12.753 25.2971 12.3029C24.847 11.8529 24.2365 11.6 23.6 11.6ZM24.4 23.6C24.4 23.8122 24.3157 24.0157 24.1657 24.1657C24.0157 24.3157 23.8122 24.4 23.6 24.4H12.4C12.1878 24.4 11.9843 24.3157 11.8343 24.1657C11.6843 24.0157 11.6 23.8122 11.6 23.6V18H24.4V23.6ZM24.4 16.4H11.6V14C11.6 13.7878 11.6843 13.5843 11.8343 13.4343C11.9843 13.2843 12.1878 13.2 12.4 13.2H14V14C14 14.2122 14.0843 14.4157 14.2343 14.5657C14.3843 14.7157 14.5878 14.8 14.8 14.8C15.0122 14.8 15.2157 14.7157 15.3657 14.5657C15.5157 14.4157 15.6 14.2122 15.6 14V13.2H20.4V14C20.4 14.2122 20.4843 14.4157 20.6343 14.5657C20.7843 14.7157 20.9878 14.8 21.2 14.8C21.4122 14.8 21.6157 14.7157 21.7657 14.5657C21.9157 14.4157 22 14.2122 22 14V13.2H23.6C23.8122 13.2 24.0157 13.2843 24.1657 13.4343C24.3157 13.5843 24.4 13.7878 24.4 14V16.4Z" fill="white" />
                    </svg>
                    <span className='text-[14px] '>
                        {new Date().toLocaleDateString('en-US', {
                            weekday: 'long', // "Thursday"
                            month: 'long',   // "November"
                            day: 'numeric',  // "14"
                        })}
                    </span>



                </div>
                <div className="border-inputField-border border-r my-1 "></div>
                <div className="flex gap-3">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2722_4915)">
                            <circle cx="25" cy="25" r="25" fill="#488FED" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5556 20.4444C16.5556 18.2048 17.4452 16.057 19.0289 14.4733C20.6125 12.8897 22.7604 12 25 12C27.2396 12 29.3875 12.8897 30.9711 14.4733C32.5548 16.057 33.4444 18.2048 33.4444 20.4444C33.4444 22.6841 32.5548 24.8319 30.9711 26.4156C29.3875 27.9992 27.2396 28.8889 25 28.8889C22.7604 28.8889 20.6125 27.9992 19.0289 26.4156C17.4452 24.8319 16.5556 22.6841 16.5556 20.4444ZM16.5556 33.1111C13.756 33.1111 11.0712 34.2232 9.09165 36.2028C7.1121 38.1823 6 40.8672 6 43.6667C6 45.3464 6.66726 46.9573 7.85499 48.145C9.04272 49.3327 10.6536 50 12.3333 50H37.6667C39.3464 50 40.9573 49.3327 42.145 48.145C43.3327 46.9573 44 45.3464 44 43.6667C44 40.8672 42.8879 38.1823 40.9084 36.2028C38.9288 34.2232 36.244 33.1111 33.4444 33.1111H16.5556Z" fill="white" />
                        </g>
                        <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke="#ECEDEF" />
                        <defs>
                            <clipPath id="clip0_2722_4915">
                                <rect width="50" height="50" rx="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-[10px]">
                            <span className='text-subHeading font-bold'>John Doe</span>
                            <KeyboardArrowDownIcon />

                        </div>
                        <span className=' leading-3 text-[14px] text-button-border'>Admin</span>
                    </div>
                </div>
            </div>




            {/* <div className="flex items-center space-x-4">
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
            </div> */}
        </div>
    );
};

export default Navbar;
