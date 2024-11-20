// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari


import React from 'react'

const TabLabel = ({ items, activeTab, setActiveTab }) => {
    return (
        <div  className='flex'>
            {
                items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex text-primary cursor-pointer "
                            onClick={() => setActiveTab(item)}
                        >
                            {/* <span>{item}</span> */}
                            <span className={`text-[14px] px-3 py-[8px]  ${activeTab === item ? 'text-primary border-b-2 border-primary' : 'text-[#A6AABA]'} `}> {item} </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TabLabel